// ES6+ script to generate theme CSS variables from tokens.json
import { readFile, writeFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);
const __dirname = dirname(fileURLToPath(import.meta.url));
const tokensPath = join(__dirname, '../theme/tokens.json');
const cssPath = join(__dirname, '../theme/theme.css');

const tokens = JSON.parse(await readFile(tokensPath, 'utf8'));

const toCssVars = (obj, prefix = '') =>
  Object.entries(obj)
    .map(([key, value]) =>
      typeof value === 'object' && value !== null
        ? toCssVars(value, `${prefix}${key}-`)
        : `  --${prefix}${key}: ${value};`,
    )
    .join('\n');

const cssVars = toCssVars(tokens);
const cssContent = `:root {\n${cssVars}\n}`;

// Write the file first
await writeFile(cssPath, cssContent);
// Using console.error which is allowed by our ESLint rules
console.error('Theme CSS generated at', cssPath);

// Format the file with prettier
try {
  await execAsync(`npx prettier --write "${cssPath}"`);
  console.error('Theme CSS formatted with Prettier');
} catch (error) {
  console.error('Error formatting CSS with Prettier:', error);
}

// ES6+ script to generate theme CSS variables from tokens.json
import { readFile, writeFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

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

await writeFile(cssPath, cssContent);
// Using console.error which is allowed by our ESLint rules
console.error('Theme CSS generated at', cssPath);

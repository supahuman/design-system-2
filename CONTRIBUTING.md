# Contributing to the Design System

Thank you for your interest in contributing to our design system! This document provides guidelines and instructions for contributing.

## Development Workflow

### Prerequisites

- Node.js (version 18 or newer)
- pnpm (version 10 or newer)

### Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/supahuman/design-system-2.git
   cd design-system-2
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Generate theme variables:
   ```bash
   pnpm generate:theme
   ```

### Development

1. Start Storybook for component development:

   ```bash
   pnpm storybook
   ```

2. Run tests in watch mode:
   ```bash
   pnpm test:watch
   ```

### Code Style and Quality

- Run linting:

  ```bash
  pnpm lint
  ```

- Run tests:

  ```bash
  pnpm test
  ```

- Check bundle size:
  ```bash
  pnpm analyze
  ```

## Commit Guidelines

We follow [Conventional Commits](https://www.conventionalcommits.org/) for commit messages. This enables automatic versioning and changelog generation with semantic-release.

### Commit Format

Each commit message consists of a **type**, optional **scope**, and **description**:

```
<type>(<scope>): <description>
```

### Types

- **feat**: A new feature (triggers a minor version bump)
- **fix**: A bug fix (triggers a patch version bump)
- **docs**: Documentation only changes
- **style**: Changes that do not affect the meaning of the code (formatting, etc)
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **perf**: A code change that improves performance
- **test**: Adding or updating tests
- **build**: Changes to the build system or dependencies
- **ci**: Changes to CI configuration files and scripts
- **chore**: Other changes that don't modify src or test files

### Breaking Changes

For breaking changes, add `BREAKING CHANGE:` in the commit body or footer, followed by a description. This will trigger a major version bump.

### Examples

- `feat: add new Button variant`
- `fix: correct accessibility issue in Input component`
- `docs: update component usage examples`
- `test: add tests for Form component`
- `chore: update dependencies`
- `feat(button): add toggle functionality`
- `fix(input): resolve focus outline issues on Safari`

## Pull Request Process

1. Fork the repository and create your branch from `main`.
2. Add tests for any new functionality.
3. Ensure all tests pass and linting rules are followed.
4. Update documentation if needed.
5. Submit your pull request with a clear description of the changes.

## CI/CD Pipeline

Our CI/CD pipeline automatically:

1. Runs tests and linting on all pull requests (ci.yml)
2. Builds and analyzes the bundle size
3. Deploys Storybook to GitHub Pages when changes are merged to main (storybook.yml)
4. Publishes new versions to npm based on semantic-release (release.yml)
5. Ensures code quality standards are maintained (code-quality.yml)

### Workflow Details

| Workflow     | Trigger                     | Purpose                                                                |
| ------------ | --------------------------- | ---------------------------------------------------------------------- |
| CI           | Pull requests, push to main | Validates code quality, tests, and build process                       |
| Release      | Push to main                | Creates new releases with semantic versioning based on commit messages |
| Storybook    | Push to main                | Deploys updated Storybook documentation to GitHub Pages                |
| Code Quality | Pull requests, push to main | Runs linting, type checking, and formatting validation                 |

All workflows are defined in the `.github/workflows` directory.

## Accessibility Requirements

All components must:

- Be keyboard navigable
- Have appropriate ARIA attributes
- Maintain proper focus management
- Support screen readers
- Meet WCAG 2.1 AA standards

## Need Help?

If you have any questions or need assistance, please open an issue on GitHub.

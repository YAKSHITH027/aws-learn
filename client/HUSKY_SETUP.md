# Husky Setup Documentation

This document explains the Husky Git hooks setup in this project.

## Overview

Husky is a tool that helps manage Git hooks to ensure code quality and consistency. It runs automated checks at different stages of the Git workflow.

## Files and Their Purpose

### 1. `.husky/pre-commit`

**Purpose**: Runs before every commit to ensure code quality.

**What it does**:

- Runs ESLint to check for code style issues and potential bugs
- Runs TypeScript type checking to catch type errors
- If either check fails, the commit is blocked

**When it runs**: Every time you run `git commit`

### 2. `.husky/commit-msg`

**Purpose**: Validates commit messages to ensure they follow the conventional commit format.

**What it does**:

- Uses commitlint to validate the commit message format
- Ensures messages follow the pattern: `type(scope): description`
- If the message doesn't follow the format, the commit is rejected

**When it runs**: After you write a commit message but before the commit is created

### 3. `.husky/pre-push`

**Purpose**: Ensures the code builds successfully before pushing to the remote repository.

**What it does**:

- Runs `npm run build` to compile the project
- If the build fails, the push is blocked
- Prevents broken code from being pushed to the repository

**When it runs**: Before pushing code with `git push`

### 4. `commitlint.config.js`

**Purpose**: Configuration file for commitlint that defines the rules for commit message validation.

**What it contains**:

- Extends the conventional commit format
- Defines allowed commit types (feat, fix, docs, etc.)
- Sets rules for message formatting (case, length, punctuation)

### 5. `package.json` Scripts

**New scripts added**:

- `lint:fix`: Runs ESLint with auto-fix enabled
- `type-check`: Runs TypeScript type checking without emitting files
- `prepare`: Automatically runs when npm install is executed to set up Husky

## How to Use

### Making Commits

```bash
# This will trigger pre-commit and commit-msg hooks
git commit -m "feat: add new user authentication feature"
```

### Pushing Code

```bash
# This will trigger pre-push hook
git push origin main
```

### Running Checks Manually

```bash
# Run linting
npm run lint

# Run linting with auto-fix
npm run lint:fix

# Run type checking
npm run type-check

# Build the project
npm run build
```

## Troubleshooting

### Hook Not Running

If hooks aren't running, make sure:

1. Husky is properly installed: `npm install`
2. The `.husky` directory exists and contains the hook files
3. The hook files have execute permissions

### Bypassing Hooks (Emergency Only)

```bash
# Skip pre-commit hook
git commit --no-verify -m "emergency fix"

# Skip pre-push hook
git push --no-verify
```

**Note**: Only use `--no-verify` in emergencies. The hooks are there to maintain code quality.

## Commit Message Format

All commit messages must follow this format:

```
type(scope): description

[optional body]

[optional footer]
```

**Examples**:

- `feat: add user authentication`
- `fix(auth): resolve login bug`
- `docs: update API documentation`
- `style: format code with prettier`
- `refactor: simplify user component`
- `test: add unit tests for auth service`

## Benefits

1. **Code Quality**: Automatic linting and type checking
2. **Consistency**: Enforced commit message format
3. **Prevention**: Blocks broken code from being committed/pushed
4. **Team Collaboration**: Standardized workflow for all developers
5. **Automation**: No need to remember to run checks manually

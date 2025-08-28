/**
 * Commitlint Configuration
 *
 * This file configures commitlint to validate commit messages
 * It extends the conventional commit format and adds custom rules
 *
 * For more information: https://commitlint.js.org/
 */

module.exports = {
  // Extend the conventional commit configuration
  extends: ["@commitlint/config-conventional"],

  // Custom rules for commit message validation
  rules: {
    // Define allowed commit types (feat, fix, docs, etc.)
    "type-enum": [
      2, // Error level (0=disabled, 1=warning, 2=error)
      "always", // Always apply this rule
      [
        "feat", // New features
        "fix", // Bug fixes
        "docs", // Documentation changes
        "style", // Code style changes (formatting, etc.)
        "refactor", // Code refactoring
        "perf", // Performance improvements
        "test", // Adding or updating tests
        "build", // Build system changes
        "ci", // CI/CD changes
        "chore", // Maintenance tasks
        "revert", // Reverting previous commits
      ],
    ],

    // Ensure subject is in lower case
    "subject-case": [2, "always", "lower-case"],

    // Subject cannot be empty
    "subject-empty": [2, "never"],

    // Subject should not end with a period
    "subject-full-stop": [2, "never", "."],

    // Maximum length for the commit header (type + scope + subject)
    "header-max-length": [2, "always", 72],
  },
};

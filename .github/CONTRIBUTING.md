# Contributing

Thank you for wanting to contribute to `neo-toolbox` and taking your time to read this document! We're always looking for more contributors and are happy to have you.

# How to contribute

## Reporting Bugs

Well-written bug reports with consistently reproducible steps are invaluable to the development of this project. Bugs are tracked as GitHub issues. Before creating an issue, please perform a search to see if the problem has already been reported. After you've determined a bug does not already exist, create an issue and fill in the template.

## Suggesting Enhancements

Feature requests are welcome. But take a moment to find out whether your idea fits with the scope and aims of the project. It's up to you to make a strong case to convince the project's developers of the merits of this feature. Please provide as much detail and context as possible.

## Code Contribution

### Open an issue

Do open an issue so that everyone knows what is happening. This reduces the chance of double work and allows everyone, new or old, to join in the discussion and development.

### Work on a branch based of `develop`

- `master` and `develop` are protected and require a PR with approved reviews for changes
- This project adheres to [Semantic Versioning](https://semver.org/) and [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.2/).
- Don't forget to scope your commits (input, output, conversions, ...)

  We use the following types everywhere: `feat`, `chore` and `docs`. `fix`, `test`, `refactor` etc. are considered as `chore`. `BREAKING CHANGE` commits only happen if the API has almost to none backwards compatibility.

  A `BREAKING CHANGE` commit to master corresponds with a major version, `feat` with minor and `chore` with patch. Bundle your `docs` commits with any of the previously mentioned types.

- Use Conventional Commits' types for branches and camelCase the topic: `feat/ui`, `docs/login`, `chore/refactorHomePage`

### Submit your PR

- Fill in the pull request template.
- Title your PR with a conventional commit message as such:

  ```
  <type>(scope): <description>
  ```

  **Type** can be `chore`, `feat`, or `docs`.

  Describe your changes within a short sentence. If there are breaking changes, Do start with `BREAKING CHANGE`.

There is no need to squash your work as we will do that when the maintainer merges the PR.

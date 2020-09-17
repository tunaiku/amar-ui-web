# Contributing to Amar UI Web

Hi, welcome aboard! We are glad you've taken an interest in contributing to this project!

You can contribute to the project in several ways:

1. Report a bug you found.
2. Request a new feature.
3. Submit a pull request (PR)

## Reporting a bug

If you found a bug in the source code, help us contribute to the project by submitting an issue in
our repository's [issue tracker](https://github.com/tunaiku/amar-ui-web/issues).

A good bug report describes the complete detail of the issue to the point maintainers don't need to
chase you for more information. Try to be as detailed as possible when reporting the bug so we can
start working on the issue ASAP.

## Requesting a feature

You are free to request a new feature by submitting an issue in the
[issue tracker](https://github.com/tunaiku/amar-ui-web/issues).

It would help us immensely if you provide a minimal documentation or proposal to describe the reason
why you need this specific feature.

## Submitting an issue

Before submitting an issue, use the search feature in the issue tracker to find issues that may have
been posted before. There may have been a solution or workaround to your current problem.

When submitting an issue, provide a minimal reproducible scenario so we can confirm and reproduce
the issue on our end. Minimal reproduction allows for accurate problem confirmation and making sure
we are trying to fix the correct problem. It also provides us the information we need so we don't
have to go back and forth to you with more questions.

To create a minimal reproducible scenario, write the step-by-step walkthrough to reach the problem
at hand. You can also provide screenshots or videos as supporting attachments as well.

## Submitting a Pull Request (PR)

Before submitting a PR, make sure that you don't submit a duplication of an existing PR by searching
the pull requests.

Once you're sure that your PR is not a duplication, you can follow the step-by-step guide below to
submit a PR:

1. Create a new branch from the `master` branch.

   ```bash
   git checkout -b my-fix-branch master
   ```

2. Run `yarn` to install or update all dependencies in your system.
3. Make your changes in that branch.
4. Commit your changes. Follow the [commit message guideline](#writing-the-commit-message) to write
   a good and suitable commit.
5. Push your changes to the branch.
6. Open a pull request (PR) to the `master` branch. Follow the PR template to write good description
   to the PR.

## Writing the commit message

We follow the conventional commit guideline to structure our commit messages. We enforce you to
follow the same in order for your changes to be accepted and merged to the `master` branch. Why is
this important? Because your commit messages will be recorded in the version changelog list when
releasing a new version. We highly recommend you to configure `commitizen` to help you write commit
messages that follow the conventional commit guideline.

Each commit message must consist of a **type**, **scope** and **short summary**.

```
<type>(<scope>): <short summary>

<summary>
```

The `<type>`, `<short summary>`, and `<summary>` are mandatory, while the `<scope>` is optional.

### Type

When choosing a type, make sure to choose one of the following:

1. `feat`: A new feature
2. `fix`: A bug fix
3. `refactor`: A code change that neither fixes a bug or adds a feature
4. `style`: A code change that doesn't affect the meaning of the code

### Summaries

Write both `<short summary>` and `<summary>` in **imperative form** and **present tense**. Treat it
as if you're instructing the system to do the changes for you. For example, write **"fix
something"**, instead of **"fixed something"** or **"fixes something"**.

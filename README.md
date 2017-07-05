# Inverse Dot Reporter for Mocha

## Features
- **Inverts the error printout** - if a unit test failure cascades across many
tests, it's unreasonable to have to scroll several pages up to see the originating
test. Reversing the ouput allows a user to read the first failure immediately
- **Remove lib stack trace** - It's not generally useful to see the stack trace
of other libs in a unit test failure, so those lines are filtered out.
- **Remove webpack cruft** - Removes webpack's contribution to the stack trace.

![inverse-dot-demo](https://user-images.githubusercontent.com/204734/27875667-53567a34-6171-11e7-8fb4-a04cf95462ca.png)

## Installation

```
$ yarn add inverse-dot --dev
```

## Usage

Use with Mocha like any other Mocha reporter.

```
$ mocha --reporter inverse-dot test.js
```

If using Karma, it is recommended that inverse-dot be used in conjunction with
`[karma-mocha-own-reporter](https://www.npmjs.com/package/karma-mocha-own-reporter)`.
This plugin cedes control of reporting back to Mocha rather than requiring a
separate Karma-specific reporting plugin. inverse-dot is built to handle Webpack/Karma
integration if run in this context.

## Credit

Almost all of this code is ripped out of Mocha itself. The only changes made here
are for process and/or formatting.

# Inverse Dot Reporter for Mocha

## Installation

```
$ yarn add inverse-dot --dev
```

## Features

- **Inverts the error printout** - if a unit test failure cascades across many
tests, it's unreasonable to have to scroll several pages up to see the originating
test. Reversing the ouput allows a user to read the first failure immediately
- **Remove lib stack trace** - It's not generally useful to see the stack trace
of other libs in a unit test failure, so those lines are filtered out.
- **Remove webpack cruft** - Removes webpack's contribution to the stack trace.

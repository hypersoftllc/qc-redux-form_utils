# qc-redux-form_utils

[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

A set of utilities for working with `redux-form`.


## Installation

```sh
npm install --save qc-redux-form_utils
```

or

```sh
yarn add qc-redux-form_utils
```


## Example Usage

```js
import FormUtils from 'qc-dom_utils/form'
import { flattenErrors } from 'qc-redux-form_utils'
...

const FORM_NAME = 'MyForm'

class MyForm extends React.Component {
  ...
  render() {
    return (
      <form name={FORM_NAME} ...>
        ...
      </form>
    )
  }
  ...
}

const ReduxAwareForm = reduxForm({
  name: FORM_NAME,
  ...
  onSubmitFail: (errors, dispatch, submitError, props) => {
    let flattenedErrors = flattenErrors(errors)
    FormUtils.focusFirstInvalid(FORM_NAME, flattenedErrors)
  },
  ...
})(MyForm)
```


[downloads-image]: http://img.shields.io/npm/dm/qc-redux-form_utils.svg
[downloads-url]: http://npm-stat.com/charts.html?package=qc-redux-form_utils
[license-image]: http://img.shields.io/npm/l/qc-redux-form_utils.svg
[license-url]: LICENSE
[npm-badge-png]: https://nodei.co/npm/qc-redux-form_utils.png?downloads=true&stars=true
[package-url]: https://npmjs.org/package/qc-redux-form_utils

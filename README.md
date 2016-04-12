[![Build Status](https://travis-ci.org/ngerritsen/react-stateless-wrapper.svg?branch=master)](https://travis-ci.org/ngerritsen/react-stateless-wrapper)

Wraps React stateless components into regular components, for unit testing purposes.

### There are better options now, check out [Enzyme](https://github.com/airbnb/enzyme)

```bash
npm install react-stateless-wrapper --save-dev
```

Usage:
```js
import { wrap } from 'react-stateless-wrapper'
let WrappedComponent = wrap(StatelessComponent)
TestUtils.renderIntoDocument(<WrappedComponent ...props/>)
```

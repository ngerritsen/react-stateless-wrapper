### Deprecation notice: there are better options now, check out [Enzyme](https://github.com/airbnb/enzyme)

Wraps React stateless components into regular components, for unit testing purposes

    npm install react-stateless-wrapper --save-dev

Usage:
```js
import { wrap } from 'react-stateless-wrapper'
let WrappedComponent = wrap(StatelessComponent)
TestUtils.renderIntoDocument(<WrappedComponent ...props/>)
```

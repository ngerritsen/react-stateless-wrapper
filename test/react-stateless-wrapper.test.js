import React from 'react'
import TestUtils from 'react/lib/ReactTestUtils'
import { wrap } from '../react-stateless-wrapper'

define('react stateless wrapper', () => {
  let TestComponent = ({message}) => (
    <div>
      <p className="test-class">{message}</p>
    </div>
  )

  it('works', () => {
    let WrappedTestComponent = wrap(TestComponent)
    let test = TestUtils.renderIntoDocument(<WrappedTestComponent message="test"/>)
    let message = TestUtils.findRenderedDOMComponentWithClass(test, 'test-class')
    expect(message.innerHTML).toEqual('test')
  })
})

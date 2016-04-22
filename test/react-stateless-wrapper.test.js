import React from 'react'
import TestUtils from 'react-addons-test-utils'
import { wrap } from '../react-stateless-wrapper'

describe('react stateless wrapper', () => {
  const TestComponent = ({message}) => (
    <div>
      <p className="test-class">{message}</p>
    </div>
  )

  it('works', () => {
    const WrappedTestComponent = wrap(TestComponent)
    const test = TestUtils.renderIntoDocument(<WrappedTestComponent message="test"/>)
    const message = TestUtils.findRenderedDOMComponentWithClass(test, 'test-class')
    const messages = TestUtils.scryRenderedDOMComponentsWithClass(test, 'test-class')

    expect(message.innerHTML).toEqual('test')
    expect(messages.length).toEqual(1)
  })

  it('has the stateless component displayName', () => {
    const WrappedTestComponent = wrap(TestComponent)
    expect(WrappedTestComponent.displayName).toEqual('TestComponent')
  })

  it('transfers static properties', () => {
    const TestComponentWithStaticProperties = ({message}) => (
      <div>
        <p className="test-class">{message}</p>
      </div>
    )

    TestComponentWithStaticProperties.contextTypes = { a: React.PropTypes.number }
    TestComponentWithStaticProperties.propTypes = { b: React.PropTypes.number }

    const WrappedTestComponent = wrap(TestComponentWithStaticProperties)

    expect(WrappedTestComponent.contextTypes).toEqual({ a: React.PropTypes.number })
    expect(WrappedTestComponent.propTypes).toEqual({ b: React.PropTypes.number })
  })
})

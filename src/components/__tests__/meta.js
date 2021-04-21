import React from 'react'
import renderer from 'react-test-renderer'
import Meta from '../meta'
describe('Meta', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Meta title="Account" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

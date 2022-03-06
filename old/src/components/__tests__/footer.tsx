import * as React from 'react'
import * as renderer from 'react-test-renderer'

import Footer from '../footer'

describe('Footer', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Footer />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

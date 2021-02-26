import React from 'react'

class ToggleClass extends React.Component {
  constructor(props) {
    super(props)
    this.state = { flagAcceptState: true }
    this.flag = 'xryuseixCTF{flag}'
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(inputFlag) {
    this.setState((state) => ({
      flagAcceptState: inputFlag === this.flag
    }))
  }

  render() {
    return (
      <div>
        <form>
          <input type="text" id="textForm" />
        </form>
        {this.state.flagAcceptState ? 'SUCCESS' : 'FAILURE'}
        <br />
        <button onClick={() => this.handleClick(document.getElementById('textForm').value)}>Submit</button>
      </div>
    )
  }
}

export default ToggleClass

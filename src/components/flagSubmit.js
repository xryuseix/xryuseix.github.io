import React from 'react'

import './flagSubmit.css'

class ToggleClass extends React.Component {
  constructor(props) {
    super(props)
    this.state = { flagAcceptState: true }
    this.isSubmit = false
    this.flag = props.flag
    this.id = props.id
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(inputFlag) {
    console.log(inputFlag)
    this.setState((state) => ({
      flagAcceptState: inputFlag === this.flag
    }))
    this.isSubmit = true
  }

  render() {
    return (
      <div class="submitForm">
        <div class="submit-column button">
          <button onClick={() => this.handleClick(document.getElementById(this.id).value)}>Submit</button>
        </div>
        <div
          class={
            this.isSubmit
              ? this.state.flagAcceptState
                ? 'submit-column output submit-success'
                : 'submit-column output submit-failure'
              : 'submit-column output'
          }
        >
          {this.isSubmit ? (this.state.flagAcceptState ? 'SUCCESS' : 'FAILURE') : ''}
        </div>
      </div>
    )
  }
}

export default ToggleClass

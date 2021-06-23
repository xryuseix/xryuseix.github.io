import React from 'react'
import sha512 from 'js-sha512'

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
    this.setState((state) => ({
      flagAcceptState: sha512(inputFlag) === this.flag
    }))
    this.isSubmit = true
  }

  render() {
    return (
      <div className="ctf_submitForm">
        <div className="ctf_submit-column ctf_button">
          <button onClick={() => this.handleClick(document.getElementById(this.id).value)}>Submit</button>
        </div>
        <div
          className={
            this.isSubmit
              ? this.state.flagAcceptState
                ? 'ctf_submit-column ctf_output ctf_submit-success'
                : 'ctf_submit-column ctf_output ctf_submit-failure'
              : 'ctf_submit-column ctf_output'
          }
        >
          {this.isSubmit ? (this.state.flagAcceptState ? 'SUCCESS' : 'FAILURE') : ''}
        </div>
      </div>
    )
  }
}

export default ToggleClass

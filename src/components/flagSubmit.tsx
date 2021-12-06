import React from 'react'
import sha256 from 'fast-sha256'

import './flagSubmit.css'

interface FlagProps {
  flag: Uint8Array
  id: string
}

class ToggleClass extends React.Component<FlagProps, {}> {
  // TODO: 下の型名を上のFlagPropsから引用したい
  flag: Uint8Array
  id: string
  state: { flagAcceptState: boolean; isSubmit: boolean }
  constructor(props: FlagProps) {
    super(props)
    this.state = { flagAcceptState: false, isSubmit: false }
    this.flag = props.flag
    this.id = props.id
  }

  handleClick(inputFlag: string) {
    const sha256Input = sha256(new TextEncoder().encode(inputFlag))
    this.setState({
      flagAcceptState: this.arraysEqual(sha256Input, this.flag)
    })
    this.setState({
      isSubmit: true
    })
  }

  arraysEqual(a: Uint8Array, b: Uint8Array) {
    if (a === b) return true
    if (a == null || b == null) return false
    if (a.length !== b.length) return false
    for (var i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false
    }
    return true
  }

  render() {
    return (
      <div className="ctf_submitForm">
        <div className="ctf_submit-column ctf_button">
          <button
            onClick={() => {
              const id: HTMLInputElement = document.getElementById(this.id) as HTMLInputElement
              if (id) {
                this.handleClick(id.value as string)
              } else {
                this.handleClick('')
              }
            }}
          >
            Submit
          </button>
        </div>
        <div
          className={
            this.state.isSubmit
              ? this.state.flagAcceptState
                ? 'ctf_submit-column ctf_output ctf_submit-success'
                : 'ctf_submit-column ctf_output ctf_submit-failure'
              : 'ctf_submit-column ctf_output'
          }
        >
          {this.state.isSubmit ? (this.state.flagAcceptState ? 'SUCCESS' : 'FAILURE') : ''}
        </div>
      </div>
    )
  }
}

export default ToggleClass

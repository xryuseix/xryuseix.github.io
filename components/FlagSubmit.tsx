/** @format */

import React from "react";
import sha256 from "fast-sha256";
import styles from "../styles/FlagSubmit.module.css";

type FlagProps = {
  flag: Uint8Array;
  id: string;
};

class ToggleClass extends React.Component<FlagProps, {}> {
  flag: Uint8Array;
  id: string;
  state: { flagAcceptState: boolean; isSubmit: boolean };
  constructor(props: FlagProps) {
    super(props);
    this.state = { flagAcceptState: false, isSubmit: false };
    this.flag = props.flag;
    this.id = props.id;
  }

  handleClick(inputFlag: string) {
    const sha256Input = sha256(new TextEncoder().encode(inputFlag));
    this.setState({
      flagAcceptState: this.arraysEqual(sha256Input, this.flag),
      isSubmit: true,
    });
  }

  arraysEqual(a: Uint8Array, b: Uint8Array) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;
    for (var i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }

  render() {
    return (
      <div className={styles.submitForm}>
        <div className={`${styles.ctf_submitColumn} ${styles.ctfButton}`}>
          <button
            onClick={() => {
              const id: HTMLInputElement = document.getElementById(
                this.id
              ) as HTMLInputElement;
              if (id) {
                this.handleClick(id.value as string);
              } else {
                this.handleClick("");
              }
            }}
          >
            Submit
          </button>
        </div>
        <div
          className={(function (isSubmit: boolean, flagAcceptState: boolean) {
            if (isSubmit) {
              if (flagAcceptState) {
                return `${styles.submitColumn} ${styles.output} ${styles.submitSuccess}`;
              } else {
                return `${styles.submitColumn} ${styles.output} ${styles.submitFailure}`;
              }
            } else {
              return `${styles.submitColumn} ${styles.output}`;
            }
          })(this.state.isSubmit, this.state.flagAcceptState)}
        >
          {this.state.isSubmit
            ? this.state.flagAcceptState
              ? "SUCCESS"
              : "FAILURE"
            : ""}
        </div>
      </div>
    );
  }
}

export default ToggleClass;

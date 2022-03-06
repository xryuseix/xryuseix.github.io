import { NextPage } from "next";
import React from "react";
import { Layout } from "../../components/Layout";
import styles from "../../styles/apps/color.module.css";

type ColorType = {
  name: string;
  code: string;
};

type ColorsType = ColorType[];

const Colors: ColorsType = [
  { name: "黒", code: "black" },
  { name: "白", code: "white" },
  { name: "赤", code: "red" },
  { name: "黄", code: "yellow" },
];

/*
 * 背景色の切り替えを行う
 */
type StateProps = {
  full: boolean;
  display: "block" | "none";
};

type Document = {
  exitFullscreen?: () => void;
  querySelector: (selector: string) => HTMLElement | null;
};

type HTMLElement = {
  style: React.CSSProperties;
  requestFullscreen?: () => void;
  querySelector: (selector: string) => HTMLElement | null;
};

class ColorsSwitching extends React.Component<StateProps | {}, StateProps> {
  constructor(props: StateProps = { full: false, display: "block" }) {
    super(props);
    this.state = {
      full: props.full,
      display: props.display,
    };
  }

  /*
   * キーが押された時の処理
   */
  exitFullscreen(): void {
    const document: Document = window.document;
    if (this.state.full) {
      // フルスクリーンを元に戻す
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
    const elem: HTMLElement | null = document.querySelector(`.${styles.body}`);
    if (elem != null) {
      elem.style.backgroundColor = "white";
    }
    this.setState({ full: false, display: "block" });
  }
  /*
   * キーが押された時のイベントハンドラ
   */
  handleKeyDown(): void {
    this.exitFullscreen();
  }
  componentDidMount(): void {
    window.addEventListener("keydown", this.handleKeyDown.bind(this));
  }

  /*
   * 背景色を変更
   */
  changeBackGrountColor(colorCode: string): void {
    const document: Document = window.document;
    const elem: HTMLElement | null = document.querySelector(`.${styles.body}`);
    if (elem != null) {
      elem.style.backgroundColor = colorCode;
      // フルスクリーンにする
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      }
      this.setState({ full: true, display: "none" });
    }
  }

  render() {
    return (
      <div className={styles.body}>
        <div style={{ display: this.state.display }}>
          {Colors.map((colorData) => (
            <button
              style={{ backgroundColor: colorData.code }}
              onClick={() => this.changeBackGrountColor(colorData.code)}
              key={colorData.code}
            >
              {colorData.name}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

const ColorPageIndex: NextPage = () => {
  return (
    <Layout title="Colors" description="Colors">
      <ColorsSwitching />
    </Layout>
  );
};
export default ColorPageIndex;

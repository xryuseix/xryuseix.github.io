/** @format */

import React from "react";
import { PDFObject } from "../../components/data/pdfList";
import { Page } from "react-pdf";
import { GrCircleQuestion } from "react-icons/gr";
import {
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
} from "react-share";
import ReactHintFactory from "react-hint";
import styles from "../../styles/slides.module.css";
const ReactHint = ReactHintFactory(React);

/*
 * スライドの表示を行う
 */
type SlideProps = {
  Slide: PDFObject;
};

type SlideState = {
  page: number;
  maxPage: number;
  windowWidth: number;
  scale: number;
  scaleExpand: number;
  full: boolean;
};

class SlideDisplay extends React.Component<SlideProps, SlideState> {
  meta: PDFObject;
  constructor(props: SlideProps) {
    super(props);
    this.state = {
      page: 1,
      maxPage: typeof props.Slide === "undefined" ? 10 : props.Slide.page,
      windowWidth: this.getWindowWidth(),
      scale: (this.getWindowWidth() / 1000) * 0.97,
      scaleExpand: 0,
      full: false,
    };
    this.meta = props.Slide;
  }

  // キーが押された時のイベント
  handleKeyDown(key: string) {
    if (key === "ArrowRight" || key === "ArrowDown") {
      // 右, 下...スライドを進める
      this.setState({
        page: Math.min(this.state.page + 1, this.state.maxPage),
      });
    } else if (key === "ArrowLeft" || key === "ArrowUp") {
      // 左, 上...スライドを戻す
      this.setState({ page: Math.max(this.state.page - 1, 1) });
    } else if (
      Array.from({ length: 9 }, (_, i) => String(i + 1)).includes(key)
    ) {
      // 数字...特定のスライドまでジャンプ
      this.setState({ page: Math.min(+key, this.state.maxPage) });
    } else if (key === "+") {
      // +...拡大
      this.setState({ scaleExpand: this.state.scaleExpand + 0.05 });
    } else if (key === "-") {
      // -...縮小
      this.setState({ scaleExpand: this.state.scaleExpand - 0.05 });
    } else if (key === "0") {
      // 0...拡大・縮小を元に戻す
      this.setState({ scaleExpand: 0 });
    } else if (key === "f") {
      // f...フルスクリーン
      if (!this.state.full) {
        // フルスクリーンにする
        const elem: HTMLElement | null =
          document.querySelector(".slidePdfView");
        if (elem != null && elem.requestFullscreen) {
          elem.requestFullscreen();
        }
        this.setState({ full: true });
      } else {
        // 元に戻す
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
        this.setState({ full: false });
      }
    }
  }

  componentDidMount(): void {
    if (typeof window !== "undefined") {
      // キーボード検知イベントハンドラ
      window.addEventListener("keydown", (event) =>
        this.handleKeyDown(event.key)
      );
      // windowサイズの変更検知のイベントハンドラを設定
      window.addEventListener("resize", () => {
        this.changeWindowSize();
      });
    }
  }

  // ウィンドウ幅を取得
  getWindowWidth() {
    if (typeof window !== "undefined") {
      let width = window.innerWidth;
      return Math.min(width, 1000);
    } else {
      return 0;
    }
  }

  // windowのwidthの状態を変更
  changeWindowSize() {
    this.setState({ windowWidth: this.getWindowWidth() });
    this.setState({ scale: (this.state.windowWidth / 1000) * 0.97 });
  }

  // キーボードショートカットの説明
  onRenderContent = () => {
    return (
      <li
        className={styles.customHintContent}
        style={{ backgroundColor: "white" }}
      >
        <ul>→,↓ ... スライドを進める</ul>
        <ul>←,↑ ... スライドを戻す</ul>
        <ul>1~9 ... スライド1~9へ移動</ul>
        <ul>+,-,0 ... スライドのサイズを拡大,縮小,初期化</ul>
        <ul>F ... フルスクリーンモード</ul>
      </li>
    );
  };
  render() {
    return (
      <div>
        <div
          className={styles.pdfViewOp}
          style={{ width: `${(this.state.windowWidth - 40).toString()}px` }}
        >
          <div className={styles.pdfView}>
            <Page
              pageNumber={this.state.page}
              scale={this.state.scale + this.state.scaleExpand}
            />
          </div>
          <div className={styles.pdfOperate}>
            <div className={styles.turn}>
              <button
                onClick={() =>
                  this.setState({ page: Math.max(this.state.page - 1, 1) })
                }
              >
                (←) 前のスライド
              </button>{" "}
              <button
                onClick={() =>
                  this.setState({
                    page: Math.min(this.state.page + 1, this.state.maxPage),
                  })
                }
              >
                次のスライド (→)
              </button>
            </div>
            <div className={styles.help}>
              <ReactHint
                persist
                attribute="data-custom"
                className={styles.customHint}
                events={{ hover: true, click: true, focus: true }} // TODO: 後半は適当
                onRenderContent={this.onRenderContent}
              />
              <GrCircleQuestion data-custom size={25} />
            </div>
          </div>
        </div>
        <div className={styles.meta}>
          <p className={styles.title}>{this.meta?.title}</p>
          <div className={styles.date}>更新日: {this.meta?.update}</div>
          <p className={styles.desc}>{this.meta?.description}</p>
          <span>
            <div className={styles.keywordList}>Keywords :</div>
            {this.meta?.keyword.map((keyword) => (
              <div
                className={`${styles.keywordList} ${styles.keyword}`}
                key={keyword}
              >
                {keyword}
              </div>
            ))}
          </span>
        </div>
        <div className={styles.share}>
          <p>
            Shere :{" "}
            <TwitterShareButton
              url={`https://xryuseix.github.io/slides/?slide=${encodeURI(
                this.meta?.title
              )}`}
              title={`「${this.meta?.title}」`}
              via="ryusei_ishika"
            >
              <TwitterIcon size={25} round />
            </TwitterShareButton>{" "}
            <FacebookShareButton
              url={`https://xryuseix.github.io/slides/?slide=${encodeURI(
                this.meta?.title
              )}`}
            >
              <FacebookIcon size={25} round />
            </FacebookShareButton>
          </p>
        </div>
      </div>
    );
  }
}

export default SlideDisplay;

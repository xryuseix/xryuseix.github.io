/** @format */

import React from "react";
import { NextPage } from "next";
import { pdfjs, Document, Page } from "react-pdf";
import { MdClose, MdExpandMore } from "react-icons/md";
import { GrCircleQuestion } from "react-icons/gr";
import ReactHintFactory from "react-hint";
import Slider, { Settings } from "react-slick";
import {
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
} from "react-share";

import { Layout } from "../../components/Layout";
import slidesList, { PDFObject } from "../../components/data/pdfList";
import styles from "../../styles/slides.module.css";
import "react-hint/css/index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
const ReactHint = ReactHintFactory(React);

/*
 * スライドの表示・ページ切り替えを行う
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

class SlideDisplay extends React.Component<SlideProps | {}, SlideState> {
  meta: PDFObject;
  constructor(props: SlideProps) {
    super(props);
    this.state = {
      page: 1,
      maxPage: props.Slide.page,
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
    // キーボード検知イベントハンドラ
    window.addEventListener("keydown", (event) =>
      this.handleKeyDown(event.key)
    );
    // windowサイズの変更検知のイベントハンドラを設定
    window.addEventListener("resize", () => {
      this.changeWindowSize();
    });
  }

  // ウィンドウ幅を取得
  getWindowWidth() {
    let width = window.innerWidth;
    return Math.min(width, 1000);
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
          <p className={styles.title}>{this.meta.title}</p>
          <div className={styles.date}>更新日: {this.meta.update}</div>
          <p className={styles.desc}>{this.meta.description}</p>
          <span>
            <div className={styles.keywordList}>Keywords :</div>
            {this.meta.keyword.map((keyword) => (
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
                this.meta.title
              )}`}
              title={`「${this.meta.title}」`}
              via="ryusei_ishika"
            >
              <TwitterIcon size={25} round />
            </TwitterShareButton>{" "}
            <FacebookShareButton
              url={`https://xryuseix.github.io/slides/?slide=${encodeURI(
                this.meta.title
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

/*
 * スライドの切り替えを行う
 */
type SwitchProps = {
  default: string | null; // スライドタイトル
  slides: PDFObject[];
  titles: string[];
};
type SwitchState = {
  switchButton: boolean;
  data: any;
};

class SlidesSwitching extends React.Component<SwitchProps | {}, SwitchState> {
  default: string | null;
  slides: PDFObject[];
  titles: string[];
  constructor(props: SwitchProps) {
    super(props);
    this.default = props.default;
    this.state = {
      switchButton: true,
      data: props.default
        ? this.findSlide(props.slides, props.default)
        : props.slides[0],
    };
    this.slides = props.slides;
    this.titles = props.titles;
  }

  /**
   * 文字列を省略する
   * @param text 省略する文字列
   * @param len 半角文字数で指定
   */
  substr(text: string, len: number) {
    const text_array = text.split("");
    let count = 0;
    let str = "";
    for (let i = 0; i < text_array.length; i++) {
      const n = encodeURIComponent(text_array[i]);
      if (n.length < 4) count++;
      else count += 2;
      if (count > len) {
        return str + "...";
      }
      str += text.charAt(i);
    }
    return text;
  }

  /**
   * スライド一覧から特定のタイトルのスライドを探す
   * @param slides スライド一覧
   * @param targetSlide 探すスライド
   */
  findSlide(slides: PDFObject[], targetSlide: string) {
    return slides.find((content) => {
      return content.title === targetSlide;
    });
  }

  render() {
    return (
      <div className={styles.detail}>
        <details
          className={styles.switch}
          style={{ display: this.state.switchButton ? "block" : "none" }}
        >
          <summary className={styles.switchSummary}>
            <div className={styles.switchText}>
              <MdExpandMore />
              スライド一覧
            </div>
            <div className={styles.deleteSwitch}>
              <a
                href={"#/"}
                role="button"
                tabIndex={0}
                onClick={() => this.setState({ switchButton: false })}
              >
                <MdClose />
              </a>
            </div>
          </summary>
          <ul className={styles.detailContent}>
            {this.titles.map((title) => (
              <li key={title}>
                <a
                  href={"#/"}
                  role="button"
                  tabIndex={0}
                  className={styles.switchButton}
                  onClick={() =>
                    this.setState({ data: this.findSlide(this.slides, title) })
                  }
                >
                  {this.substr(title, 20)}
                </a>
              </li>
            ))}
          </ul>
        </details>
        <Document file={`/pdf/${this.state.data.id}.pdf`}>
          <SlideDisplay Slide={this.state.data} />
        </Document>
      </div>
    );
  }
}

const SlidePageIndex: NextPage = () => {
  const Slides: PDFObject[] = slidesList();
  const titles = Slides.map((slide) => slide.title);
  const settings: Settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    pauseOnHover: true,
    speed: 500,
    slidesToShow: Math.min(titles.length, 5),
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    lazyLoad: "ondemand",
  };
  return (
    <Layout title="My slides" description="スライド一覧">
      <h1>🚧現在他のスライドを閲覧することはできません🚧</h1>
      {/* TODO: Window幅を狭めると画像が上下中央になっていないことがわかる */}
      <SlidesSwitching
        slides={Slides}
        titles={titles}
        default={null} // ここにスライドタイトルを指定して，そのスライドを表示する
      />
      <ul className={styles.slider}>
        <Slider {...settings}>
          {Slides.map((slide) => (
            <div className={styles.sliderContent} key={slide.id}>
              <a href={`/slides/?slide=${encodeURI(slide.title)}`}>
                <img
                  src={`/pdf/${slide.id}.png`}
                  alt={slide.title}
                  className={styles.sliderImage}
                />
              </a>
            </div>
          ))}
        </Slider>
      </ul>
    </Layout>
  );
};
export default SlidePageIndex;

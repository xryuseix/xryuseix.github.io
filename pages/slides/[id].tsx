/** @format */

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { NextPage } from "next";
import { pdfjs, Document } from "react-pdf";
import { MdClose, MdExpandMore } from "react-icons/md";
import Slider, { Settings } from "react-slick";
import { Layout } from "../../components/Layout";
import SlideDisplay from "../../components/Slide";
import SlidesList, { PDFObject } from "../../components/data/pdfList";
import styles from "../../styles/slides.module.css";
import "react-hint/css/index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

/*
 * スライドの切り替えを行う
 */
type SwitchProps = {
  slides: PDFObject[];
  titles: string[];
  default: string;
};
type SwitchState = {
  switchButton: boolean;
  data: PDFObject;
};

class SlidesSwitching extends React.Component<SwitchProps | {}, SwitchState> {
  slides: PDFObject[];
  titles: string[];
  default: string;
  constructor(props: SwitchProps) {
    super(props);
    this.default = props.default;
    this.state = {
      switchButton: true,
      data: this.findSlide(props.slides, props.default) || props.slides[0],
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
    let byte = 0;
    let str = "";
    for (let i = 0; i < text_array.length; i++) {
      const n = encodeURIComponent(text_array[i]);
      byte += n.length < 4 ? 1 : 2;
      if (byte > len) {
        return `${str}...`;
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
                    this.setState({
                      data:
                        this.findSlide(this.slides, title) || this.slides[0],
                    })
                  }
                >
                  {this.substr(title, 20)}
                </a>
              </li>
            ))}
          </ul>
        </details>
        <Document file={`/pdf/${this.state.data?.id}.pdf`}>
          <SlideDisplay Slide={this.state.data} />
        </Document>
      </div>
    );
  }
}

const SlidePageIndex: NextPage = () => {
  const Slides: PDFObject[] = SlidesList();
  const titles = Slides.map((slide) => slide.title);
  const [title, setTitle] = useState<string>("");
  const router = useRouter();
  useEffect(() => {
    if (router.asPath === router.route) {
      return;
    }
    const title = ((title: string | string[] | undefined): string => {
      if (typeof title === "string") {
        return title;
      } else if (typeof title === "undefined") {
        return "";
      } else if (Object.prototype.toString.call(title) === "[object Array]") {
        return title[0];
      } else {
        return "";
      }
    })(router.query.id);
    console.log("TITLE", title);
    setTitle(title);
  }, [router]);
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
      {/* TODO: Window幅を狭めると画像が上下中央になっていないことがわかる */}
      {title != "" ? (
        <SlidesSwitching slides={Slides} titles={titles} default={title} />
      ) : (
        <></>
      )}
      <ul className={styles.slider}>
        <Slider {...settings}>
          {Slides.map((slide) => (
            <div className={styles.sliderContent} key={slide.id}>
              <a href={`/slides/${slide.title}`}>
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

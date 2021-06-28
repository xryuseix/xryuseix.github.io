import React from 'react'
import { pdfjs, Document, Page } from 'react-pdf'
import { MdClose, MdExpandMore } from 'react-icons/md'
import { GrCircleQuestion } from 'react-icons/gr'
import ReactHintFactory from 'react-hint'
import 'react-hint/css/index.css'
import { TwitterShareButton, TwitterIcon, FacebookShareButton, FacebookIcon } from 'react-share'

import Layout from '../../components/layout'
import Meta from '../../components/meta'
import Seo from '../../components/seo'
import Slides from '../../utils/pdfList.js'
import './slides.css'

/*
 * スライドの表示・ページ切り替えを行う
 */
class SlideDisplay extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 1,
      maxpage: props.Slide.page,
      windowWidth: this.getWindowWidth(),
      scale: (this.getWindowWidth() / 1000) * 0.97,
      scale_expand: 0,
      full: false
    }
    this.meta = props.Slide
  }

  // キーが押された時のイベント
  handleKeyDown(e) {
    if (e.keyCode === 39 || e.keyCode === 40) {
      // 右, 下...スライドを進める
      this.setState({ page: Math.min(this.state.page + 1, this.state.maxpage) })
    } else if (e.keyCode === 37 || e.keyCode === 38) {
      // 左, 上...スライドを戻す
      this.setState({ page: Math.max(this.state.page - 1, 1) })
    } else if (49 <= e.keyCode && e.keyCode <= 57) {
      // 数字...特定のスライドまでジャンプ
      this.setState({ page: Math.min(e.keyCode - 48, this.state.maxpage) })
    } else if (e.keyCode === 187) {
      // +...拡大
      this.setState({ scale_expand: this.state.scale_expand + 0.05 })
    } else if (e.keyCode === 189) {
      // -...縮小
      this.setState({ scale_expand: this.state.scale_expand - 0.05 })
    } else if (e.keyCode === 48) {
      // 0...拡大・縮小を元に戻す
      this.setState({ scale_expand: 0 })
    } else if (e.keyCode === 70) {
      // f...フルスクリーン
      if (!this.state.full) {
        // フルスクリーンにする
        const elem = document.querySelector('.slide_pdf_view')
        if (elem.webkitRequestFullscreen) {
          elem.webkitRequestFullscreen() //Chrome15+, Safari5.1+, Opera15+
        } else if (elem.mozRequestFullScreen) {
          elem.mozRequestFullScreen() //FF10+
        } else if (elem.msRequestFullscreen) {
          elem.msRequestFullscreen() //IE11+
        } else if (elem.requestFullscreen) {
          elem.requestFullscreen() // HTML5 Fullscreen API仕様
        }
        this.setState({ full: true })
      } else {
        // 元に戻す
        if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen() //Chrome15+, Safari5.1+, Opera15+
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen() //FF10+
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen() //IE11+
        } else if (document.cancelFullScreen) {
          document.cancelFullScreen() //Gecko:FullScreenAPI仕様
        } else if (document.exitFullscreen) {
          document.exitFullscreen() // HTML5 Fullscreen API仕様
        }
        this.setState({ full: false })
      }
    }
  }

  // キーボード検知イベントハンドラ
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown.bind(this))
  }

  // ウィンドウ幅を取得
  getWindowWidth() {
    let width = window.innerWidth
    return Math.min(width, 1000)
  }

  // windowのwidthの状態を変更
  changeWindowSize() {
    this.setState({ windowWidth: this.getWindowWidth() })
    this.setState({ scale: (this.state.windowWidth / 1000) * 0.97 })
  }

  // windowサイズの変更検知のイベントハンドラを設定
  componentWillMount() {
    window.addEventListener('resize', () => {
      this.changeWindowSize()
    })
  }

  // キーボードショートカットの説明
  onRenderContent = (target, content) => {
    return (
      <li className="custom-hint__content" style={{ 'background-color': 'white' }}>
        <ul>→,↓ ... スライドを進める</ul>
        <ul>←,↑ ... スライドを戻す</ul>
        <ul>1~9 ... スライド1~9へ移動</ul>
        <ul>+,-,0 ... スライドのサイズを拡大,縮小,初期化</ul>
        <ul>F ... フルスクリーンモード</ul>
      </li>
    )
  }
  render() {
    return (
      <div>
        <div className="slide_pdf_view_op" style={{ width: `${(this.state.windowWidth - 40).toString()}px` }}>
          <div className="slide_pdf_view">
            <Page pageNumber={this.state.page} scale={this.state.scale + this.state.scale_expand} />
          </div>
          <div className="slide_pdf_operate">
            <div className="slide_turn">
              <button onClick={() => this.setState({ page: Math.max(this.state.page - 1, 1) })}>
                (←) 前のスライド
              </button>{' '}
              <button onClick={() => this.setState({ page: Math.min(this.state.page + 1, this.state.maxpage) })}>
                次のスライド (→)
              </button>
            </div>
            <div className="slide_help">
              <ReactHint
                persist
                attribute="data-custom"
                className="custom-hint"
                events={{ hover: true }}
                onRenderContent={this.onRenderContent}
                ref={(ref) => (this.instance = ref)}
              />
              <GrCircleQuestion data-custom size={25} />
            </div>
          </div>
        </div>
        <div className="slide_meta">
          <p className="slide_title">{this.meta.title}</p>
          <div className="slide_date">更新日: {this.meta.update}</div>
          <p className="slide_desc">{this.meta.description}</p>
          <p>
            <div className="slide_keyword_list">Keywords :</div>
            {this.meta.keyword.map((keyword) => (
              <div className="slide_keyword_list slide_keyword">{keyword}</div>
            ))}
          </p>
        </div>
        <div className="slide_share">
          <p>
            Shere :{' '}
            <TwitterShareButton
              url={`https://xryuseix.github.io/slides/?slide=${encodeURI(this.meta.title)}`}
              title={`「${this.meta.title}」`}
              via="ryusei_ishika"
            >
              <TwitterIcon size={25} round />
            </TwitterShareButton>{' '}
            <FacebookShareButton url={`https://xryuseix.github.io/slides/?slide=${encodeURI(this.meta.title)}`}>
              <FacebookIcon size={25} round />
            </FacebookShareButton>
          </p>
        </div>
      </div>
    )
  }
}

/*
 * スライドの切り替えを行う
 */
class SlidesSwitching extends React.Component {
  constructor(props) {
    super(props)
    this.default = props.default
    this.state = {
      display: props.default ? props.default : props.Slides[0].title,
      render: false,
      switchButton: true
    }
    this.Slides = props.Slides
    this.titles = props.titles
  }

  /**
   * 文字列を省略する
   * @param text 省略する文字列
   * @param len 半角文字数で指定
   */
  substr(text, len) {
    var text_array = text.split('')
    var count = 0
    var str = ''
    for (let i = 0; i < text_array.length; i++) {
      var n = escape(text_array[i])
      if (n.length < 4) count++
      else count += 2
      if (count > len) {
        return str + '...'
      }
      str += text.charAt(i)
    }
    return text
  }

  /**
   * レンダリングを少し遅らせる
   * TODO: スライド数が増えれば遅延時間が増えるかもしれないので直す
   */
  componentDidMount() {
    setTimeout(
      function () {
        this.setState({ render: true })
      }.bind(this),
      500
    )
  }

  render() {
    if (!this.state.render) {
      return <h2>PDF loading ...</h2>
    } else {
      return (
        <div className="slide_detail">
          <details className="slides_switch" style={{ display: this.state.switchButton ? 'block' : 'none' }}>
            <summary className="slides_switch_summary">
              <div className="slides_switch_text">
                <MdExpandMore />
                スライド一覧
              </div>
              <div className="slides_delete_switch">
                <a href={'#/'} role="button" tabIndex={0} onClick={() => this.setState({ switchButton: false })}>
                  <MdClose />
                </a>
              </div>
            </summary>
            <ul className="slide_detail-content">
              {this.titles.map((title) => (
                <li>
                  <a
                    href={'#/'}
                    role="button"
                    tabIndex={0}
                    className="slides_switch_button"
                    onClick={() => this.setState({ display: title })}
                  >
                    {this.substr(title, 20)}
                  </a>
                </li>
              ))}
            </ul>
          </details>
          {this.Slides.map((data) => (
            <div style={{ display: this.state.display === data.title ? 'block' : 'none' }}>
              <Document file={data.content}>
                <SlideDisplay Slide={data} titles={this.titles} />
              </Document>
            </div>
          ))}
        </div>
      )
    }
  }
}

const ReactHint = ReactHintFactory(React)
const SlideSiteIndex = ({ location }) => {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

  const titles = Slides.map((slide) => slide['title'])
  const params = new URLSearchParams(location.search)
  const defaultSlide = params.get('slide')
  return (
    <Layout location={location}>
      <Seo title="My slides" description="スライド一覧" />
      <Meta title="Slides" />
      <SlidesSwitching Slides={Slides} titles={titles} default={defaultSlide} />
    </Layout>
  )
}
export default SlideSiteIndex

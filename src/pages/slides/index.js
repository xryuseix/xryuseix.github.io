import React from 'react'
import { pdfjs, Document, Page } from 'react-pdf'

import Layout from '../../components/layout'
import Meta from '../../components/meta'
import Seo from '../../components/seo'
import Slides from './pdfList.js'
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
      scale: (this.getWindowWidth() / 1000) * 0.97
    }
    this.meta = props.Slide
  }

  // キーが押された時のイベント
  handleKeyDown(e) {
    if (e.keyCode === 39 || e.keyCode === 40) {
      // 右, 下
      this.setState({ page: Math.min(this.state.page + 1, this.state.maxpage) })
    } else if (e.keyCode === 37 || e.keyCode === 38) {
      // 左, 上
      this.setState({ page: Math.max(this.state.page - 1, 1) })
    } else if (49 <= e.keyCode && e.keyCode <= 57) {
      // 数字
      this.setState({ page: Math.min(e.keyCode - 48, this.state.maxpage) })
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

  render() {
    return (
      <div>
        <div className="slide_pdf_view_op" style={{ width: `${(this.state.windowWidth - 40).toString()}px` }}>
          <div className="slide_pdf_view">
            <Page pageNumber={this.state.page} scale={this.state.scale} />
          </div>
          <div className="slide_pdf_operate">
            <button onClick={() => this.setState({ page: Math.max(this.state.page - 1, 1) })}>前のスライド</button>{' '}
            <button onClick={() => this.setState({ page: Math.min(this.state.page + 1, this.state.maxpage) })}>
              次のスライド
            </button>
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
    this.state = { display: props.default ? props.default : props.Slides[0].title }
    this.Slides = props.Slides
    this.titles = props.titles
  }

  /**
  文字列を省略する
  @param text 省略する文字列
  @param len 半角文字数で指定
  */
  substr(text, len, truncation) {
    if (truncation === undefined) {
      truncation = ''
    }
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

  render() {
    return (
      <div className="slide_detail">
        {/* <div className="slide_pdf_view_warn">ページ幅が狭すぎます．横幅1000px以上のPCから閲覧してください．</div> */}
        <details className="slides_switch">
          <summary>スライド一覧</summary>
          <ul className="slide_detail-content">
            {this.titles.map((title) => (
              <li>
                <a
                  href="#/"
                  role="button"
                  tabIndex={0}
                  className="slides_switch_button"
                  onClick={() => this.setState({ display: title })}
                  onKeyDown={() => this.setState({ display: title })}
                >
                  {this.substr(title, 20)}
                </a>
              </li>
            ))}
          </ul>
        </details>
        {this.Slides.map((data) => (
          <div style={{ display: this.state.display === data.title ? 'inline' : 'none' }}>
            <Document file={data.content}>
              <SlideDisplay Slide={data} titles={this.titles} />
            </Document>
          </div>
        ))}
      </div>
    )
  }
}

const SlideSiteIndex = ({ location }) => {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

  // TODO: ここそのうちどうにかする
  let titles = []
  for (const slide of Slides) {
    for (const [key, value] of Object.entries(slide)) {
      if (key === 'title') {
        titles.push(value)
      }
    }
  }
  const params = new URLSearchParams(location.search)
  const defaultSlide = params.get('default')
  return (
    <Layout location={location}>
      <Seo title="My slides" description="スライド一覧" />
      <Meta title="Slides" />
      <SlidesSwitching Slides={Slides} titles={titles} default={defaultSlide} />
    </Layout>
  )
}
export default SlideSiteIndex

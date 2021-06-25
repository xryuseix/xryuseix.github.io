import React from 'react'
import { pdfjs, Document, Page } from 'react-pdf'

import Layout from '../../components/layout'
import Meta from '../../components/meta'
import Seo from '../../components/seo'
import './slides.css'

/* slide PDF */
import pythonInput from './pdf/python_input.pdf'
import PDFCrack from './pdf/PDFCrack.pdf'
import ReDoS from './pdf/ReDoS.pdf'

const Slides = [
  {
    title: 'Python2.x の input 関数にRCE 脆弱性がある話',
    description: (
      <>
        Python2.x の input 関数にRCE 脆弱性がある話
        <br />
        RiST(立命館セキュリティチーム) 5/17 輪講の資料です
      </>
    ),
    content: pythonInput,
    page: 16,
    keyword: ['Security', 'Python'],
    id: 'default'
  },
  {
    title: 'PDFのやつ',
    description: <>PDFの説明</>,
    content: PDFCrack,
    page: 26,
    keyword: ['Security', 'PDF'],
    id: 'サンプルスライド2'
  },
  {
    title: 'ReDoS',
    description: <>ReDoS</>,
    content: ReDoS,
    page: 24,
    keyword: ['Security', 'Python'],
    id: 'サンプルスライド3'
  }
]

/*
 * スライドの表示・ページ切り替えを行う
 */
class SlideDisplay extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 1,
      maxpage: props.Slide.page
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
    } else if (49 <= e.keyCode || e.keyCode <= 57) {
      // 数字
      this.setState({ page: Math.min(e.keyCode - 48, this.state.maxpage) })
    }
    this.setState({ lastkey: e.keyCode })
  }

  // イベントハンドラ
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown.bind(this))
  }

  render() {
    return (
      <div>
        <Page pageNumber={this.state.page} />
        <button onClick={() => this.setState({ page: Math.max(this.state.page - 1, 1) })}>前のスライド</button>{' '}
        <button onClick={() => this.setState({ page: Math.min(this.state.page + 1, this.state.maxpage) })}>
          次のスライド
        </button>
        <div>
          <p className="slide_title">{this.meta.title}</p>
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

class SlidesSwitching extends React.Component {
  constructor(props) {
    super(props)
    this.state = { display: 'default' }
    this.Slides = props.Slides
    this.ids = props.ids
  }
  render() {
    return (
      <div>
        {this.ids.map((id) => (
          <button onClick={() => this.setState({ display: id })}>{id}へ切り替え</button>
        ))}
        <hr />
        {this.Slides.map((data) => (
          <div style={{ display: this.state.display === data.id ? 'inline' : 'none' }}>
            <Document file={data.content}>
              <SlideDisplay Slide={data} ids={this.ids} className={`slide ${data.id}`} />
            </Document>
          </div>
        ))}
      </div>
    )
  }
}

const SlideSiteIndex = ({ location }) => {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

  // ここそのうちどうにかする
  let ids = []
  for (const slide of Slides) {
    for (const [key, value] of Object.entries(slide)) {
      if (key === 'id') {
        ids.push(value)
      }
    }
  }

  return (
    <Layout location={location}>
      <Seo title="My slides" description="スライド一覧" />
      <Meta title="Slides" />
      <SlidesSwitching Slides={Slides} ids={ids} />
    </Layout>
  )
}
export default SlideSiteIndex

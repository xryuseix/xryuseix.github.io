import React from 'react'
import { pdfjs, Document, Page } from 'react-pdf'

import Layout from '../../components/layout'
import Meta from '../../components/meta'
import Seo from '../../components/seo'

import pythonInput from './pdf/python_input.pdf'
import PDFCrack from './pdf/PDFCrack.pdf'

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
    keyword: ['security', 'python'],
    id: 'aAAA'
  },
  {
    title: 'PDFのやつ',
    description: <>PDFの説明</>,
    content: PDFCrack,
    page: 26,
    keyword: ['security', 'PDF'],
    id: 'bBBBB'
  }
]

class SlideDisplay extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 1,
      maxpage: props.Slide.maxpage,
      id: props.Slide.id,
      display: 'aAAA'
    }
    this.ids = props.ids
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
        {this.ids.map((id) => (
          <button onClick={() => this.setState({ display: id })}>切り替え{id}</button>
        ))}
        <b>
          テスト: {this.state.display} / {this.state.id}
        </b>
        <div style={{ display: this.state.display === this.state.id ? 'inline' : 'none' }}>
          <Page pageNumber={this.state.page} />
          <div style={{ 'text-align': 'right' }}>スライド{this.state.page}</div>
        </div>
        <div>
          <button onClick={() => this.setState({ page: Math.max(this.state.page - 1, 1) })}>前のスライド</button>{' '}
          <button onClick={() => this.setState({ page: Math.min(this.state.page + 1, this.state.maxpage) })}>
            次のスライド
          </button>
        </div>
      </div>
    )
  }
}

class SlidesSwitching extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.Slides = props.Slides
    this.ids = props.ids
  }
  render() {
    return (
      <div>
        {this.Slides.map((data) => (
          <Document file={data.content}>
            <SlideDisplay Slide={data} ids={this.ids} className={`slide ${data.id}`} />
          </Document>
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

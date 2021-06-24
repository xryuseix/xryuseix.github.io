import React from 'react'
import { pdfjs, Document, Page } from 'react-pdf'

import Layout from '../components/layout'
import Meta from '../components/meta'
import Seo from '../components/seo'

import samplePDF from './sample.pdf'

const Slides = [
  {
    title: 'Python2.xのinput関数にRCE脆弱性がある話',
    description: 'これはサンプルの説明です',
    content: samplePDF,
    page: 16,
    keyword: 'security'
  }
]

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 1,
      maxpage: props.maxpage,
      lastkey: -1
    }
  }

  handleKeyDown(e) {
    if (e.keyCode === 39 || e.keyCode === 40) {
      // 右, 下
      this.setState({ page: Math.min(this.state.page + 1, this.state.maxpage) })
    } else if (e.keyCode === 37 || e.keyCode === 38) {
      // 左, 上
      this.setState({ page: Math.max(this.state.page - 1, 1) })
    } else if (e.keyCode >= 49 || e.keyCode <= 57) {
      // 数字
      this.setState({ page: Math.min(e.keyCode - 48, this.state.maxpage) })
    }
    this.setState({ lastkey: e.keyCode })
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown.bind(this))
  }

  render() {
    return (
      <div>
        <Page pageNumber={this.state.page} />
        <div style={{ 'text-align': 'right' }}>スライド{this.state.maxpage}</div>
        <div>
          <button onClick={() => this.setState({ page: Math.max(this.state.page - 1, 1) })}>前のスライド</button>
          <button onClick={() => this.setState({ page: Math.min(this.state.page + 1, this.state.maxpage) })}>
            次のスライド
          </button>
        </div>
      </div>
    )
  }
}

const SlideSiteIndex = ({ location }) => {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

  return (
    <Layout location={location}>
      <Seo title="My slides" description="スライド一覧" />
      <Meta title="Slides" />
      {Slides.map((data) => (
        <Document file={data.content}>
          <Counter maxpage={data.page} />
        </Document>
      ))}
    </Layout>
  )
}
export default SlideSiteIndex

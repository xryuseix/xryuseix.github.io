import React from 'react'
import { pdfjs, Document, Page } from 'react-pdf'

import Layout from '../components/layout'
import Meta from '../components/meta'
import SEO from '../components/seo'

import samplePDF from './sample.pdf'

const Slides = [
  {
    title: 'Python2.xのinput関数にRCE脆弱性がある話',
    description: 'これはサンプルの説明です',
    content: samplePDF,
    page: 15,
    keyword: 'security'
  }
]

class Counter extends React.Component {
  constructor(props, page) {
    super(props)
    this.state = {
      page: 1,
      maxpage: 16
    }
  }

  render() {
    return (
      <div>
        <Page pageNumber={this.state.page} />
        <button onClick={() => this.setState({ page: Math.max(this.state.page - 1, 1) })}>前のスライド</button>
        <button onClick={() => this.setState({ page: Math.min(this.state.page + 1, this.state.maxpage) })}>
          次のスライド
        </button>
        <div style={{ 'text-align': 'center' }}>スライド{this.state.page}</div>
      </div>
    )
  }
}

const SlideSiteIndex = ({ location }) => {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`
  return (
    <Layout location={location}>
      <SEO title="My slides" description="スライド一覧" />
      <Meta title="Slides" />
      {Slides.map((data) => (
        <Document file={data.content}>
          <Counter page={data.page} />
        </Document>
      ))}
    </Layout>
  )
}
export default SlideSiteIndex

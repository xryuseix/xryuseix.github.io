import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Meta from "../../components/meta"

const SiteIndex = ({ location }) => {
  const siteTitle = "xryuseix judge"
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <h1>xryuseix judge</h1>
      <Meta title="xryuseix judge" />
      <div class="spreadsheets">
        <h1>RiPProコンテストサイト</h1>
        <h2>注 : 更新は5分おきです．chrome以外は動かないかもしれません．</h2>
        (googleが5分おきに更新すると言ってますが，5分以上待たされることは普通にあります)
        <br />
        <iframe
          src="https://docs.google.com/spreadsheets/d/e/2PACX-1vS2YeEfXDZ-ANvSbNufYhQFFmzMEV6m9T97RMXMuVQ1qUae4FQoxyvvYlkyy938UVyfC8Ygx2pR9iBw/pubhtml?gid=1333289856&amp;single=true&amp;chrome=false&amp;headers=false&range=I1:I2"
          width="147"
          height="57"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          title="time"
        >
          読み込んでいます…
        </iframe>
        <div class="Submissions">
          <h2>Submissions</h2>
          <iframe
            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vS2YeEfXDZ-ANvSbNufYhQFFmzMEV6m9T97RMXMuVQ1qUae4FQoxyvvYlkyy938UVyfC8Ygx2pR9iBw/pubhtml?gid=1877264206&amp;single=true&amp;chrome=false&amp;headers=false&range=A1:E10000"
            width="450"
            height="360"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            title="submissions"
          >
            読み込んでいます…
          </iframe>
        </div>
        <div class="Ranking">
          <h2>Ranking</h2>
          <iframe
            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vS2YeEfXDZ-ANvSbNufYhQFFmzMEV6m9T97RMXMuVQ1qUae4FQoxyvvYlkyy938UVyfC8Ygx2pR9iBw/pubhtml?gid=1333289856&amp;single=true&amp;chrome=false&amp;headers=false&range=A1:G10000"
            width="470"
            height="360"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            title="ranking"
          >
            読み込んでいます…
          </iframe>
          <iframe
            width="470"
            height="300"
            seamless
            frameborder="1"
            scrolling="no"
            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vS2YeEfXDZ-ANvSbNufYhQFFmzMEV6m9T97RMXMuVQ1qUae4FQoxyvvYlkyy938UVyfC8Ygx2pR9iBw/pubchart?oid=1265597912&amp;format=interactive"
            title="ranking2"
          >
            読み込んでいます…
          </iframe>
        </div>
        <br />
        <div class="form">
          <h2>提出フォーム</h2>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScbaoSJi2QG5K67bGJrBz4S51MQV8Yxcp3fgKFQ6y00n44rXQ/viewform?embedded=true"
            width="640"
            height="904"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            title="submit"
          >
            読み込んでいます…
          </iframe>
        </div>
      </div>
    </Layout>
  )
}

export default SiteIndex

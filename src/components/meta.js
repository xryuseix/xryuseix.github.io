import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = (props) => {
  const title = `${props.title}`
  const description =
    'xryuseixのWebページです．ここからはTwitterのbioから引用 -> Rits Security Network(入学: &#39;19) / SecHack365&#39;20(研究駆動) / seccamp&#39;19 / RiPPro(&#39;20団体長) / RiST(&#39;20副団体長) / AtCoder(cyan) / CodeForces(blue) / paiza, Inc. 学習事業部アルバイト / 競技プログラミングやセキュリティの分野を勉強しています．'
  return (
    <Helmet>
      <html lang="ja" />
      <title>{title}</title>
      <meta name="Description" content={description} />
      <meta charset="UTF-8" />
      <meta
        name="thumbnail"
        content="https://raw.githubusercontent.com/xryuseix/xryuseix.github.io/master/images/toppage.png"
      />
    </Helmet>
  )
}

export default Meta

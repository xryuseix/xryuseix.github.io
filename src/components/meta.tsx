import React from 'react'
import { Helmet } from 'react-helmet'

type MetaProps = {
  title: string
  className?: string
  description?: string | undefined
}

const Meta: React.VFC<MetaProps> = (props: MetaProps) => {
  const title: string = `${props.title}`
  const description: string = props.description
    ? props.description
    : 'xryuseixのWebページです．ここからはTwitterのbioから引用 -> Rits Security Network(入学: &#39;19) / SecHack365&#39;20(研究駆動) / seccamp&#39;19 / RiPPro(&#39;20団体長) / RiST(&#39;20副団体長) / AtCoder(cyan) / CodeForces(blue) / paiza, Inc. 学習事業部アルバイト / 競技プログラミングやセキュリティの分野を勉強しています．'
  return (
    <Helmet>
      <html lang="ja" />
      <title>{title}</title>
      <meta name="Description" content={description} />
      <meta charSet="UTF-8" />
      <meta
        name="thumbnail"
        content="https://raw.githubusercontent.com/xryuseix/xryuseix.github.io/master/images/toppage.png"
      />
      <meta name="google-site-verification" content="x-E8UhtCu2MqZL7QbcHKp-bij9CVrvOq5J4IeIK9NyY" />
    </Helmet>
  )
}

export default Meta

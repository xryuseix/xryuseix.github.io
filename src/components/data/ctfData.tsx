import React from 'react'
import miscTestPDF from '../../pages/ctf/content/problem.pdf'

export interface ProblemsProps {
  title: string
  statement: string | JSX.Element
  flag: string
  answer: string | JSX.Element
}

export const ProblemsData: ProblemsProps[] = [
  {
    title: '[Welcome](100) Welcome Problem',
    statement: (
      <>
        This Problems Answer is <code>xryuseixCTF&#123;flag&#125;</code>
      </>
    ),
    flag: 'xryuseixCTF{flag}',
    answer: 'xryuseixCTF{flag}'
  },
  {
    title: '[misc](200) Time measurement',
    statement: (
      <>
        実行時間を計測するサイトがあります．試してみてください！
        <br />
        <a href="https://redos-server.herokuapp.com/" target="_blank" rel="noopener noreferrer">
          https://redos-server.herokuapp.com/
        </a>
      </>
    ),
    flag: 'xryuseixCTF{Thi5_i5_ReD05_4tt4ck}',
    answer: (
      <>
        ReDoS攻撃が成立します．
        <br />
        <a href="https://redos-server.herokuapp.com/aaaaaaaaaaaaaaaaaaaaaaaaa">
          https://redos-server.herokuapp.com/aaaaaaaaaaaaaaaaaaaaaaaaa
        </a>
      </>
    )
  },
  {
    title: '[misc](200) Test',
    statement: (
      <>
        オンラインテストに向けてテスト用紙が配られました．あなたは試験開始前に問題を閲覧し，解きたいと思っています．頑張って解いてみてください！
        <br />
        <a href={miscTestPDF} download>
          [PDFファイル]
        </a>
      </>
    ),
    flag: 'xryuseixCTF{onaka_suita}',
    answer: (
      <>
        <code>qpdf --decrypt --password="password" problem.pdf out2.pdf</code> の後にWordで開く，または
        <code>qpdf --decrypt --password="risec" problem.pdf out2.pdf</code> の後に該当部分をコピーする．
      </>
    )
  }
]

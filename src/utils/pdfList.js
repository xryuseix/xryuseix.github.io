/* slide PDF */
import pythonInput from '../pages/slides/pdf/python_input.pdf'
import PDFCrack from '../pages/slides/pdf/PDFCrack.pdf'
import ReDoS from '../pages/slides/pdf/ReDoS.pdf'
import linuxCommand from '../pages/slides/pdf/linuxcommand.pdf'
import cpTools from '../pages/slides/pdf/cptools.pdf'
import modinv from '../pages/slides/pdf/modinv.pdf'
import ripproIntro from '../pages/slides/pdf/rippro.pdf'
import linuxInstall from '../pages/slides/pdf/linux_install.pdf'

const Slides = [
  {
    title: 'Python2.x の input 関数にRCE 脆弱性がある話',
    description: 'RiST(立命館セキュリティチーム) 5/17 輪講の資料です',
    content: pythonInput,
    page: 16,
    keyword: ['Security', 'Python'],
    update: '2021/4/26'
  },
  {
    title: 'PDFパスワードクラック',
    description: 'RiST 6/28の資料です．',
    content: PDFCrack,
    page: 26,
    keyword: ['Security', 'PDF'],
    update: '2021/6/28'
  },
  {
    title: '正規表現の脆弱性 ReDoS を簡単に説明する回',
    description: 'Ritsumeikan Security Teamで使用します',
    content: ReDoS,
    page: 24,
    keyword: ['Security', 'Python'],
    update: '2021/5/27'
  },
  {
    title: 'Linuxコマンド入門',
    description: 'CTFで使うLinuxコマンド入門資料です．RiST 5/21の活動で使用予定です．',
    content: linuxCommand,
    page: 27,
    keyword: ['linux'],
    update: '2020/5/15'
  },
  {
    title: '競技プログラミングで便利な外部ツールを大量紹介',
    description: 'RiPPro 2021/6/18の資料です．',
    content: cpTools,
    page: 20,
    keyword: ['competitive-programming', 'tool'],
    update: '2021/6/10'
  },
  {
    title: 'Modinv - 逆元の計算 -',
    description: 'RiPProで使用するスライドです．逆元を計算します．',
    content: modinv,
    page: 15,
    keyword: ['competitive-programming', 'math'],
    update: '2020/6/17'
  },
  {
    title: 'RiPPro団体紹介スライド',
    description:
      '立命館大学競技プログラミングサークルRiPProの情報理工学部向け団体紹介で使用するはずだったスライドです．本スライドはmanaba+Rでも掲載される予定です．',
    content: ripproIntro,
    page: 19,
    keyword: ['competitive-programming', 'college'],
    update: '2020/4/12'
  },
  {
    title: 'Linux(Ubuntu20.04)インストール',
    description: 'RiST活動第一回で使用予定のスライドです．',
    content: linuxInstall,
    page: 23,
    keyword: ['linux'],
    update: '2020/5/7'
  },
  {
    title: 'フィッシングサイト判定システム Heavy-Tire',
    description: 'セキュアシステム開発実験で作ったやつです',
    content: heavy_tire,
    page: 10,
    keyword: ['phising'],
    update: '2021/7/14'
  }
].sort((a, b) => (new Date(a.update) > new Date(b.update) ? -1 : 1))

export default Slides

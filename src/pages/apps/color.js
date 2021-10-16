import React from 'react'

import Layout from '../../components/layout'
import Meta from '../../components/meta'
import Seo from '../../components/seo'

import './color.css'

const Colors = [
    { name: '黒', code: 'black' },
    { name: '白', code: 'white' },
    { name: '赤', code: 'red' },
    { name: '黄', code: 'yellow' }
]

/*
 * 背景色の切り替えを行う
 */
class ColorsSwitching extends React.Component {
  constructor(props) {
    super(props)
    this.default = props.default
    this.state = {
      full: false,
      display: 'block'
    }
  }

  /*
   * キーが押された時の処理
   */
  exitFullscreen() {
    if (this.state.full) {
      // フルスクリーン元に戻す
      if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen() // Chrome15+, Safari5.1+, Opera15+
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen() // FF10+
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen() // IE11+
      } else if (document.cancelFullScreen) {
        document.cancelFullScreen() // Gecko:FullScreenAPI仕様
      } else if (document.exitFullscreen) {
        document.exitFullscreen() // HTML5 Fullscreen API仕様
      }
      this.setState({ full: false, display: 'block' })
      if (document.querySelector('.color_body') != null) {
        document.querySelector('.color_body').style.backgroundColor = 'white'
      }
    }
  }
  /*
   * キーが押された時のイベントハンドラ
   */
  handleKeyDown() {
    this.exitFullscreen()
  }
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown.bind(this))
  }

  /*
   * 背景色を変更
   */
  changeBackGrountColor(colorCode) {
    if (document.querySelector('.color_body') != null) {
      document.querySelector('.color_body').style.backgroundColor = colorCode
    }
    // フルスクリーンにする
    const elem = document.querySelector('.color_body')
    if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen() // Chrome15+, Safari5.1+, Opera15+
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen() // FF10+
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen() // IE11+
    } else if (elem.requestFullscreen) {
      elem.requestFullscreen() // HTML5 Fullscreen API仕様
    }
    this.setState({ full: true, display: 'none' })
  }

  render() {
    return (
      <div className="color_body">
        <div style={{ display: this.state.display }}>
          {Colors.map((colorData) => (
            <button
              style={{ backgroundColor: colorData.code }}
              onClick={() => this.changeBackGrountColor(colorData.code)}
            >
              {colorData.name}
            </button>
          ))}
        </div>
      </div>
    )
  }
}

const ColorSiteIndex = ({ location }) => {
  return (
    <Layout location={location}>
      <Seo title="Colors" description="Colors" />
      <Meta title="Colors" />
      <ColorsSwitching />
    </Layout>
  )
}
export default ColorSiteIndex

/**
 * コンテンツを一括importして動的に呼び出せるようにする
 * @param reqContent require.contextの返り値
 */
const importAll = (reqContent) => {
  let items = {}
  reqContent.keys().map((item) => (items[item.replace('./', '')] = reqContent(item)))
  return items
}

export default importAll
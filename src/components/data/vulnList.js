import React from 'react'
import volnList from './vulnList.json'

const IPAVulnList = (props) => {
  if (props.type === 'list') {
    return <>{volnList['list'].join(', ')}</>
  } else if (props.type === 'num') {
    return <>{volnList['num']}</>
  } else {
    return <>ERROR</>
  }
}
export default IPAVulnList

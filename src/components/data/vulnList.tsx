import React from 'react'
import vulnList from '../../../static/json/vulnList.json'

interface VulnProps {
  type: 'list' | 'num'
}

const IPAVulnList: React.VFC<VulnProps> = (props: VulnProps): JSX.Element => {
  if (props.type === 'list') {
    return <>{vulnList['list'].join(', ')}</>
  } else if (props.type === 'num') {
    return <>{vulnList['num']}</>
  } else {
    return <>ERROR</>
  }
}
export default IPAVulnList

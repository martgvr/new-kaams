import './market.css'
import React, { useEffect, useState } from 'react'
import { getData } from "../../services/firebase.service"

import MarketWelcome from '../MarketWelcome/MarketWelcome'

function Market() {
  const [data, setData] = useState([])

  useEffect(() => {
		getData("market").then((res) => {
      setData(res)
    })
  }, [])

  return (
    <div className='market__container flex-column'>
      <MarketWelcome data={data} />
    </div>
  )
}

export default Market
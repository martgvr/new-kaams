import './market.css'
import React, { useEffect, useState } from 'react'
import { getData } from "../../services/firebase.service"

import MarketNavbar from '../MarketNavbar/MarketNavbar'
import MarketWelcome from '../MarketWelcome/MarketWelcome'
import MarketProducts from '../MarketProducts/MarketProducts'

function Market() {
  const [data, setData] = useState([])

  useEffect(() => {
		getData("market").then((res) => {
      setData(res)
    })
  }, [])

  return (
    <div className='market__container flex-column'>
      <MarketWelcome  data={data} />
      {/* <MarketProducts /> */}
    </div>
  )
}

export default Market
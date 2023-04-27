import './marketitemdetail.css'
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'

import MarketNavbar from "../MarketNavbar/MarketNavbar"
import Button from '../Button/Button'

function MarketItemDetail() {
    const [productShown, setProductShown] = useState({})

    const location = useLocation()
    const data = location.state.data
    const { gender, itemid } = useParams()

    useEffect(() => {
      const productFound = data.find(item => item.uid == itemid)
      setProductShown(productFound)
      console.log(productFound)
    }, [])
    
    return (
        <div className='itemdetail__container flex-column'>
            <MarketNavbar breadcrumb={[gender, 'detalle']} />
            <div className='itemdetail__card flex-row'>
                <div className='itemdetail__card--image' style={{ backgroundImage: `url(${productShown.image})` }}></div>
                <div className='itemdetail__card--description flex-column'>
                    <div className='description__top flex-column'>
                        <h1>{productShown.name}</h1>
                        <h2>{productShown.description}</h2>
                        <h3>$ {productShown.price}</h3>
                        <div className='description__divider'></div>

                        <div className='clothsize__selector flex-row'>
                            <div className='clothsize__selector--box'>XS</div>
                            <div className='clothsize__selector--box'>S</div>
                            <div className='clothsize__selector--box'>M</div>
                            <div className='clothsize__selector--box'>L</div>
                            <div className='clothsize__selector--box'>XL</div>
                            <div className='clothsize__selector--box'>XXL</div>
                        </div>
                        
                        <div className='description__divider'></div>

                        <div className='quantity__selector flex-row'>
                            <div className='quantity__selector--left'><p>-</p></div>
                            <div className='quantity__selector--middle'><p>1</p></div>
                            <div className='quantity__selector--right'><p>+</p></div>
                        </div>

                        <Button text={'Agregar al carrito'} primary={'white'} secondary={'#222'} borderColor={'#222'} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MarketItemDetail
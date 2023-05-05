import './marketitemdetail.css'
import { useLocation, useParams } from 'react-router-dom'
import { cartContext } from '../../context/cart.context.jsx'
import React, { useEffect, useState, useContext } from 'react'

import Button from '../Button/Button'
import MarketNavbar from "../MarketNavbar/MarketNavbar"

function MarketItemDetail() {
    const [size, setSize] = useState()
    const [count, setCount] = useState(1)
    const [sizeError, setSizeError] = useState(false)
    const [productShown, setProductShown] = useState({})
    
    const location = useLocation()
    const data = location.state.data
    const { gender, itemid } = useParams()
    const { addToCart } = useContext(cartContext)
    
    useEffect(() => {
        const productFound = data.find(item => item.uid == itemid)
        setProductShown(productFound)
    }, [])
    
    const handleSize = (size) => setSize(size)
    const handleAdd = () => (count < 10) && setCount(count + 1);
    const handleRemove = () => (count > 1) && setCount(count - 1);
    const selectedSize = { backgroundColor: 'rgb(50, 50, 50)', color: 'white' }
    
    const handleCartAdd = () => {
        const { uid, description, image, name, price } = productShown
        const itemToCart = { uid, description, image, name, price, size }
        
        if (size !== undefined) {
            addToCart(itemToCart, count);
            setSizeError(false)
            setCount(1)
            setSize()
        } else {
            setSizeError(true)
            console.log('Seleccione un talle');
        }
    }

    if (sizeError) {
        const sizeContainer = document.getElementById('sizeContainer')
        sizeContainer.classList.add('clothsize__error')
        
        setTimeout(() => {
            sizeContainer.classList.remove('clothsize__error')
            setSizeError(false)
        }, 500);
    }

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

                        <div className='clothsize__selector flex-row' id='sizeContainer'>
                            <div className='clothsize__selector--box' onClick={() => handleSize('XS')} style={size == 'XS' ? selectedSize : {}}>XS</div>
                            <div className='clothsize__selector--box' onClick={() => handleSize('S')} style={size == 'S' ? selectedSize : {}}>S</div>
                            <div className='clothsize__selector--box' onClick={() => handleSize('M')} style={size == 'M' ? selectedSize : {}}>M</div>
                            <div className='clothsize__selector--box' onClick={() => handleSize('L')} style={size == 'L' ? selectedSize : {}}>L</div>
                            <div className='clothsize__selector--box' onClick={() => handleSize('XL')} style={size == 'XL' ? selectedSize : {}}>XL</div>
                            <div className='clothsize__selector--box' onClick={() => handleSize('XXL')} style={size == 'XXL' ? selectedSize : {}}>XXL</div>
                        </div>
                        
                        <div className='description__divider'></div>

                        <div className='quantity__selector flex-row'>
                            <div className='quantity__selector--left' onClick={() => handleRemove()}><p>-</p></div>
                            <div className='quantity__selector--middle'><p>{count}</p></div>
                            <div className='quantity__selector--right' onClick={() => handleAdd()}><p>+</p></div>
                        </div>

                        <div className='itemdetail__button flex-row'>
                            <Button text={'Agregar al carrito'} primary={'white'} secondary={'#222'} borderColor={'#222'} handleCartAdd={handleCartAdd} />
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default MarketItemDetail
import './slider.css'
import SliderCard from '../SliderCard/SliderCard'
import React, { useEffect, useState } from 'react'
import { getData } from "../../services/firebase.service"

import SliderText from '../SliderText/SliderText'
import SliderRightSide from '../SliderRightSide/SliderRightSide'
import Loading from '../Loading/Loading'

function Slider() {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [selectedProduct, setSelectedProduct] = useState({})

  useEffect(() => {
		getData("home").then((res) => {
      setData(res[0])
      setSelectedProduct(res[0].seasonProducts[0])
      setIsLoading(false)
    })
	}, [])

  const cardClickHandler = (position) => setSelectedProduct(data.seasonProducts[position])


  return (
    <>
      {
        isLoading ? 
          <Loading text={'Conectando a la base de datos'} />

          :
          
          <div className='slider__container'>
            <div className='slider__leftside flex-column'>
              <div className='slider__leftside--text flex-column'>
                <SliderText seasonName={data.seasonName} seasonYear={data.seasonYear} productDescription={selectedProduct.productDescription} />
              </div>
              <div className='slider__leftside--cards flex-row'>
                {
                  data.seasonProducts.map(item => <SliderCard position={data.seasonProducts.indexOf(item)} image={item.productImage} selectedProduct={selectedProduct} cardClickHandler={cardClickHandler} />)
                }
              </div>
            </div>
            <SliderRightSide image={selectedProduct.productImage} productName={selectedProduct.productName} />
          </div>
      }
    </>
  )
}

export default Slider
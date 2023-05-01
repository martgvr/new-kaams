import './slider.css'
import SliderCard from '../SliderCard/SliderCard'
import React, { useEffect, useState } from 'react'
import { getData } from "../../services/firebase.service"

import Loading from '../Loading/Loading'
import SliderText from '../SliderText/SliderText'
import SliderRightSide from '../SliderRightSide/SliderRightSide'

function Slider() {
  const [seasonData, setSeasonData] = useState(null)
  const [seasonProducts, setSeasonProducts] = useState(null)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
		getData("season").then((res) => {
      let products = []

      Object.keys(res[1]).forEach((key) => {
         key !== 'uid' && products.push(res[1][key])
      })

      setIsLoading(false)
      setSeasonData(res[0])
      setSeasonProducts(products)
      setSelectedProduct(products[0])
    })
	}, [])

  const cardClickHandler = (position) => setSelectedProduct(seasonProducts[position])

  return (
    <>
      {
        isLoading ? 
          <Loading/>
          :
          <div className='slider__container'>
            <div className='slider__leftside flex-column'>
              <div className='slider__leftside--text flex-column'>
                <SliderText seasonName={seasonData.seasonName} seasonYear={seasonData.seasonYear} productDescription={selectedProduct.productDescription} />
              </div>
              <div className='slider__leftside--cards flex-row'>
                {
                  seasonProducts.map(item => <SliderCard position={seasonProducts.indexOf(item)} image={item.productImage} selectedProduct={selectedProduct} cardClickHandler={cardClickHandler} />)
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
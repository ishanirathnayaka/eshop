import React from 'react'
import"./Home.css";
import Product from"./Product"
import "./Product.css";


export default function Home() {
  return (
    <div>
        <div className='home'>
            <div className="home_container">
                <img src="https://okcredit-blog-images-prod.storage.googleapis.com/2021/04/ecommerce3-1.jpg" alt="" className="home_image" />

                <div className="home_row">
                    <Product/>
                    <Product/>
                </div>

                <div className="home_row">
                    <Product/>
                    <Product/>
                    <Product/>
                </div>

                <div className="home_row">
                    <Product/>
                    <Product/>
                    

                </div>


            </div>

        </div>
    </div>
  )
}

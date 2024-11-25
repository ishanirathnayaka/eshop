import React from 'react';
import "./Home.css";
import Product from "./Product";
import "./Product.css";

export default function Home() {
  return (
    <div>
      <div className='home'>
        <div className="home_container">
          <img 
            src="https://okcredit-blog-images-prod.storage.googleapis.com/2021/04/ecommerce3-1.jpg" 
            alt="E-commerce promotional banner" 
            className="home_image" 
          />

          <div className="home_row">
            <Product
              key="12321341"
              id="12321341"
              title="Bennett mystic 15.6 inch laptop shoulder messenger sling office bag, Water repellent fabric for men and women (Blue)"
              price={11.96}
              rating={5}
              image="https://lifemobile.lk/wp-content/uploads/2023/06/01-89.jpg"
            />
            <Product
              key="23445930"
              id="23445930"
              title="Amazon echo (3rd generation) | Smart speaker with Alexa, charcoal fabric"
              price={98.99}
              rating={5}
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqpaNqVzY1f09Lvo7qBRvLcRsK6tGJ5j-AGw&s"
            />
          </div>

          <div className="home_row">
            <Product
              key="325435432"
              id="325435432"
              title="New Apple iPad Pro (12.9 inch, Wi-Fi, 128GB) - Silver (4th Generation)"
              price={598.99}
              rating={4}
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh1yVDeZlr8457Vz2C0pFCXdZtUMQ_ucod5Q&s"
            />
            <Product
              key="4953803"
              id="4953803"
              title="IFB 30 L convection microwave oven (30BRC2, black, with starter kit)"
              price={239.0}
              rating={3}
              image="https://www.jungle.lk/wp-content/uploads/2020/11/Black-Decker-20L-Microwave-Oven-MZ2010P-B5.jpg"
            />
            <Product
              key="4908765"
              id="4908765"
              title="Shop for the best online at Daraz.lk. Wide variety of Bluetooth headsets."
              price={199.99}
              rating={2}
              image="https://img.drz.lazcdn.com/static/lk/p/cb962a79555065da0b06649069d2e9a7.jpg_720x720q80.jpg"
            />
          </div>

          <div className="home_row">
            <Product
              key="4903850"
              id="4903850"
              title="Fashion Men's Watches Luxury Stainless Steel Quartz Wristwatch Calendar Luminous Clock Men Business Casual Watch"
              price={345.75}
              rating={1}
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzl7t6lrTxFik0ScBF07-ciCtZwwxXct1EHw&s"
            />
            <Product
              key="567894"
              id="567894"
              title="Men's Slip-Ons, Loafers, Sneakers, Flip Flops, and Formal Shoes"
              price={58.53}
              rating={1}
              image="https://s.alicdn.com/@sc04/kf/Hc5828d328aca474fa695324226bb269cV.jpg_720x720q50.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react'
import "./Home.css";
import Product from './Product';

function Home() {
  return (
    <div className='home'>
        <div className='homeContainer'>
            
            <img className='home_image' src="https://assets.aboutamazon.com/dims4/default/5ce70b6/2147483647/strip/true/crop/1279x720+1+0/resize/1320x743!/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2F77%2F09%2Fcd428ca04437b8ecf6e172e2233f%2Fweb-banner.jpg" 
            alt=''/>
          

        <div className='home_row'>
            <Product id="23566"
            title="RORSOU R10 On-Ear Headphones with Microphone, Lightweight Folding Stereo Bass Headphones " 
            price={26.89} 
            image="https://m.media-amazon.com/images/I/71whcuzPVDL._AC_UL480_FMwebp_QL65_.jpg"
            rating={5}
             />

            <Product id="2357656"
             title="wet n wild Silk Finish Lip Stick, Just Garnet" 
                price={26.89} 
                image="https://m.media-amazon.com/images/I/71SPbTPCaEL._AC_UL480_FMwebp_QL65_.jpg"
                rating={3}
            />
       


        </div>

        <div className='home_row'>
        <Product id="12366"
        title="K-Swiss Men's Tubes 200 Training Shoe" 
            price={26.89} 
            image="https://m.media-amazon.com/images/I/71BMEL-TL2L._AC_UL480_FMwebp_QL65_.jpg"
            rating={4}
         />

        <Product id="790554"
         title="Women's Retro Summer Midi Dresses Polka Dot Printed V Neck Short Sleeve Beach Party Dress High Waist" 
            price={26.89} 
            image="https://m.media-amazon.com/images/I/61VXEMj7JRL._MCnd_AC_UL480_FMwebp_QL65_.jpg"
            rating={4}
         />
         <Product id="89036"
         title="Amazon Basics Vinyl Hexagon Workout Dumbbell Hand Weight" 
            price={26.89} 
            image="https://m.media-amazon.com/images/I/71z6QejsryL._AC_UL480_FMwebp_QL65_.jpg"
            rating={3}
         />





        </div>

        <div className='home_row'>
            {/*Product*/}

            <Product id="24245"
             title="ASUS G614JV-AS73 ROG Strix G16 (2023) Gaming Laptop, 16â€ 16:10 FHD 165Hz, GeForce RTX 4060" 
                price={26.89} 
                image="https://m.media-amazon.com/images/I/71jTFnk7XiL._AC_UL480_FMwebp_QL65_.jpg"
                rating={5}
            />


        


        </div>





        </div>

        
    </div>
  )
}

export default Home
import React from 'react'
import { Boarding, Sales, SellingPoint, ProductStories, Footer, Navbar, CartComp } from './';

const SellingPage = () => {
    return (
        <>
          <Navbar/>
          <CartComp />
          <main className='flex flex-col gap-14'>
            <Boarding Boardingapi={Boardingapi}/>
            <Sales endpoint={popularsales} ifExists />
            <SellingPoint endpoint={highlight} ifExists />
            <Sales endpoint={toprateslaes} />
            <ProductStories story={story} />
          </main>
          <Footer footerAPI={footerAPI} />
        </>
      )
}

export default SellingPage
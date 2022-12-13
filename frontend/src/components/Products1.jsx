import React, { useState, useEffect } from 'react'
import {  Footer, Navbar, CartComp } from './';
import {useNavigate} from 'react-router-dom';

const Products1 = () => {

  const [products, setProducts] = useState(toprateslaes);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchUsers = async () => {
    const apiUrl = 'http://localhost:8080/product';
    var res;
    let items = []
    await fetch(apiUrl)
      .then((response) => res = response.json())
      .then((data) => res=data);
    console.log(res)
    let title="Products";
    Object.keys(res).forEach(function(key){
      let item = 
        {
          id: res[key].productID,
          title: res[key].productName,
          owner: res[key].ownerName,
          rating: "5+",
          btn: "Buy Now",
          img: res[key].imagePath,
          price: res[key].price,
          color: "from-sky-600 to-indigo-600",
          shadow: "shadow-lg shadow-blue-500",
        }
      items.push(item)
    })
    let products = {
      "title":title,
      "items":items,
    }
    console.log(products)
    setProducts(products)
  };

  const onChange = (e) => {
    setSearchTerm(e.currentTarget.value);
    if(e.currentTarget.value.length >= 3){
      let titl = products.title;
      let res = products.items.filter((item) => item['title'].toLowerCase().includes(e.currentTarget.value))
      // products.title = res;
      // setProducts(products);
      let filteredProducts = {
        "title":titl,
        "items":res,
      }
      console.log(filteredProducts);
      setProducts(filteredProducts);
    }else{
      setProducts(toprateslaes);
    }
      
  };
  const navigate = useNavigate();
  
  useEffect(() => {
    console.log("Hello");
    fetchUsers();
    //console.log(products)
  }, [products])
  

  const navigateToAdd = (()=>{
    navigate("/add");
  });

  return (
    <>
    <Navbar/>
    <CartComp />
    <main>
    
      <div className='relative h-auto w-auto flex flex-col mb-20'>
            <div className='bg-theme clip-path h-[85vh] lg:h-[75vh] md:h-[65vh] sm:h-[55vh] w-auto absolute top-0 left-0 right-0 opacity-100 z-10'></div>
            <div className='relative opacity-100 z-20 grid items-center justify-items-center nike-container'>
                <div className='grid items-center justify-items-center mt-28 md:mt-24'></div>
                <div class="w-10/12 nike-container mt-10 mb-10">
      <label class="font-bold text-slate-900 filter
         drop-shadow-lg text  mb-2" for="username">
        Search
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" onChange={onChange} placeholder="iPhone 14..."/>
    </div>
    <button type='button' onClick={navigateToAdd} className='button-theme bg-slate-200 shadow-slate-200rounded-xl my-5'>Add Product</button>

                <Sales1 endpoint={products} />

              </div>
              </div>
    </main>
    <Footer footerAPI={footerAPI} />

      </>
    )
}

export default Products1
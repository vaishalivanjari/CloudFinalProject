import React, { useState, useEffect } from 'react'
import { Hero, Sales, FlexContent, Stories, Footer, Navbar, Cart } from './';
import axios from 'axios';
import toast from "react-hot-toast";

async function postImage(formdata1, formdata2) {
        var res;
        var requestOptions = {
            method: 'POST',
            body: formdata2,
            redirect: 'follow'
          };
          await fetch("http://localhost:8090/api/v1/files", requestOptions)
          .then(response => response.text())
          .then(result => 
                res = result
          )
          .catch(error => console.log('error', error));
          var url = JSON.parse(res)[0].fileUrl;
          formdata1.imagePath = url;
          console.log("heheheh",formdata1);
          var id = addProduct(formdata1);
          console.log(id !== "")
          if(id !== ""){
            toast.success("Item added successfully");
            window.location.href ='/add'
          }else{
            toast.error("Error, Please try again");
          }
          return id;
}
async function addProduct(formdata){
    var res;
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
        "productName": formdata.productName,
        "imagePath": formdata.imagePath,
        "productCategory": formdata.productCategory,
        "productAvailability": 1,
        "price": formdata.price,
        "ownerName": localStorage.getItem('userID'),
        "rating":''
      });
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
          };
          await fetch("http://localhost:8080/product", requestOptions)
          .then(response => response.text())
          .then(result => 
                res = result
          )
          .catch(error => console.log('error', error));
          
          return res;
}


const AddProduct =  () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');

     useEffect(() => {
        console.log("hello")
      if(localStorage.getItem("userID") === null){
        window.location.href = '/login';
      }else{
        console.log("not null user", localStorage.getItem("userID"))
      }
    })
    

    const handleSubmit= ((e) => { 
        e.preventDefault();
        console.log(image);
        const formdata2 = new FormData();
        formdata2.append("files", image[0], image[0].name);
        
        var formdata1 = {
            "productName": name,
            "imagePath": "",
            "productCategory": category,
            "productAvailability": "true",
            "price": price,
            "ownerName":"Bhupesh",
            "rating":""
        }
        console.log(formdata1)
        var id = postImage(formdata1, formdata2);
        console.log(typeof id == 'number')
        //console.log(addProduct(formdata1));
    });

  return (
    <>
        <Navbar/>
        <Cart/>
        <main>
        <div className='relative h-auto w-full flex flex-col'>
            <div className='bg-theme clip-path h-[85vh] lg:h-[75vh] md:h-[65vh] sm:h-[55vh]  absolute top-0 left-0 right-0 opacity-100 z-10'></div>
            <div className='relative opacity-100 z-20 grid items-center justify-items-center nike-container w-full'>
                <div className='grid grid-cols-1 mt-28 md:mt-24'>


<form>
    <div class="nike-container mb-4">
        <div className="mb-1">
            <label for="first_name" class="block mb-2 text-base text-gray-900 dark:text-white">Product Name</label>
            <input type="text" onChange={(e)=>setName(e.target.value)} id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nike Air Max" required/>
        </div>
        <div className="mb-1">
            <label for="last_name" class="block mb-2 text-base text-gray-900 dark:text-white">Description</label>
            <input type="text" onChange={(e)=>setDescription(e.target.value)} id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Low cut sneakers" required/>
        </div>
        <div className="mb-1">
            <label for="company" class="block mb-2 text-base text-gray-900 dark:text-white">Image</label>
            <input type="file" onChange={(e)=>setImage(e.target.files)} id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required/>
        </div>  
        <div className="mb-1">
            <label for="company" class="block mb-2 text-base text-gray-900 dark:text-white">Category</label>
            <input type="text" onChange={(e)=>setCategory(e.target.value)} id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required/>
        </div>
        <div className="mb-1">
            <label for="phone" class="block mb-2 text-base text-gray-900 dark:text-white">Price</label>
            <input type="number" onChange={(e)=>setPrice(e.target.value)} id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="50" required/>
        </div>
    </div>
    <button type="submit" onClick={handleSubmit} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>


                </div>
            </div>
        </div>
        
        </main>
        
    </>
  )
}

export default AddProduct
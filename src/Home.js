import React from 'react';
import { useState,useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
// import Toastify from "toastify";

// import p1 from './images/p1.jpg';
import b1 from './images/b1.jpg';
import g1 from './images/g1.jpg'
import g2 from './images/g2.jpg'
import g3 from './images/g3.jpg'
import g4 from './images/g4.jpg'
import g5 from './images/g5.jpeg'
import g6 from './images/g6.jpg'
import g7 from './images/g7.jpeg'
import g8 from './images/g8.jpg'
import g9 from './images/g9.jpg'
import g10 from './images/g10.jpeg'
import g11 from './images/g11.jpeg'
import g12 from './images/g12.jpeg'
import men1 from './images/men1.jpg'
import men2 from './images/men2.jpeg'
import men3 from './images/men3.jpg'
import men4 from './images/men4.jpg'
import men5 from './images/men5.jpg'
import men6 from './images/men6.jpeg'
import w1 from './images/w1.jpg'
import w2 from './images/w2.jpeg'
import w3 from './images/w3.jpeg'
import w4 from './images/w4.jpeg'
import w5 from './images/w5.jpg'
import w6 from './images/w6.jpg'

import './Home.css';
// import { formToJSON } from 'axios';
function Home() {

//     function showimage(){
//         document.getElementById("image").style.display="block"
//     }
  
// function hideimage(){
//     document.getElementById("image").style.display="none"
// }

 // State to control the content and visibility of the button
 const [isClicked, setIsClicked] = useState(false);
 const [showButton, setShowButton] = useState(false);

 // Function to handle button click
 const handleClick = () => {
   setIsClicked(true);
   // Set a timeout to show the button again after 3 minutes (180,000ms)
   setTimeout(() => {
     setIsClicked(false);
     setShowButton(true);  // Show the button again after 3 minutes
   }, 10000); // 3 minutes
 };

 // Use an effect to show the button after 3 minutes from the start
 useEffect(() => {
   if (!isClicked) {
     setShowButton(true);  // Initially, the button will be shown
   }
 }, [isClicked])


function addtocart(){
  alert("YOUR ITEM ADD TO CART")
}

const ordernow = () =>{
if(window.confirm("Are you sure you want to order this item."))
{
  toast.success("order Placed. Thank You. Come again",{
    theme:"colored",
    position:"top-left"
  
  })
}
else{
  toast.error("order cancel",{
    theme:"colored",
    position:"top-right"
  })
}
}

//coupen form
const[text, settext]= useState("");
const[text1, settext1]= useState("");

const [storedvalues,setstoredvalues]=useState([]);

const handleStore = () => {
  // Check if either text or text1 is empty
  if (text.trim() === "" || text1.trim() === "") {
    // Display an alert if either input is empty
    toast.error ("Both fields are required. Please fill in all the details.",{
     position:"top-center",
      theme:"colored"
    });
  }
   else {
    // If both fields are filled, store the values
    setstoredvalues([...storedvalues, { text, text1 }]);
    settext("");
    settext1("");
    // Show confirmation window
    window.confirm("Your details have been added to the coupon list.");
  }
}

//delete
const handleDelete = (index) => {
  const isconfirmed = window.confirm("Are you sure want to delete this item?")
  // Remove the item at the specified index from the storedValues array
  if (isconfirmed){
    const newStoredvalues = storedvalues.filter((_, i) => i !== index);
    setstoredvalues(newStoredvalues);
    toast.success("deleted succesfully!",{autoClose:2000,theme:"colored"})
  }


};


return (
        <div>
    <img src={b1} alt='' id='perfume'/>


{/*storedvalues*/}


<div className='item'>
    <h1 className='mt-5' id='topic'>welcome to Sk Perfume store</h1>
  </div>


        <div className='img-item'>
        <img src={g1} alt='' id='image' />
        <img src={g2} alt='' id='image'/>
        </div>


<p id='item-brand'>Shop By Brand</p>
<div className='center-item mt-5 pt-5'>
<h2 id='head-item'>Top most 10 Brands</h2>
       <div id='img1'>
        <img src={g3} alt=''/>
        <h4>Dior</h4>
        </div>
        
        <div id='img1'>
        <img src={g4} alt=''/>
        <h4>Chanel</h4>
        </div>
        
        <div id='img1'>
        <img src={g5} alt=''/>
        <h4>Tom Ford</h4>
        </div>
        
        <div id='img1'>
        <img src={g6} alt=''/>
        <h4>Fogg</h4>
        </div>
        
        <div id='img1'>
        <img src={g7} alt=''/>
        <h4>Axe</h4>
        </div>
        
        <div id='img1'>
        <img src={g8} alt=''/>
        <h4>Wild Stone</h4>  </div>

        <div id='img1'>
        <img src={g9} alt=''/>
        <h4>Skinn by Titan</h4>  </div>

        <div id='img1'>
        <img src={g12} alt=''/>
        <h4>Gucci</h4>  </div>

        <div id='img1'>
        <img src={g10} alt=''/>
        <h4>Burberry</h4>  </div>

        <div id='img1'>
        <img src={g11} alt=''/>
        <h4>Engge</h4>  
        </div>    
</div>


<p id='item-categories'>Shop By categories</p>

<h3 id='men' className='mt-5'>Mens Collections</h3>
<div className='product'>
<div className='card1'>
        <img src={men1} alt='' />
        <p>Mens Perfume different colour.with more flavour </p>   
      <p id='paisa'>₹250   <span id='colour'>  ₹125</span>  (50%) 
             <i class="fa-regular fa-star-half-stroke"/>
      <spam style={{color:"green"}}>4.6 ratings</spam>
      </p> 
        <p style={{ color:"black", fontSize:"larger"}}> ₹125</p>
        <button type='number' id='gram'>50ml</button> 
        <button type='number' id='gram'>100ml</button> 
        <button type='number' id='gram'>150ml</button> 
        <button type='number' id='gram'>200ml</button>
     
         
<button className='order mt-5' onClick={addtocart}>Add to Cart</button>
<button className='order mt-5' onClick={ordernow}>order now</button>
</div>

<div className='card1'>
        <img src={men2} alt='' />
        <p>Mens Perfume different colour.with more flavour</p>   
      <p id='paisa'>₹400   <span id='colour'>  ₹120</span>  (30%)
             <i class="fa-regular fa-star-half-stroke"/>
      <spam style={{color:"green"}}>4.8 ratings</spam>
      </p>  
      <p style={{ color:"black", fontSize:"larger"}}> ₹280</p>
        <button type='number' id='gram'>50ml</button> 
        <button type='number' id='gram'>100ml</button> 
        <button type='number' id='gram'>150ml</button> 
        <button type='number' id='gram'>200ml</button>   
<button className='order mt-5' onClick={addtocart}>Add to Cart</button>
<button className='order mt-5' onClick={ordernow}>order now</button>
</div>


<div className='card1'>
        <img src={men3} alt='' />
        <p>Mens Perfume different colour.with more flavour</p>   
      <p id='paisa'>₹150   <span id='colour'>  ₹15</span>  (10%) 
             <i class="fa-regular fa-star-half-stroke"/>
      <spam style={{color:"green"}}>4.8 ratings</spam>
      </p>  
     <p style={{ color:"black", fontSize:"larger"}}> ₹125</p>
        <button type='number' id='gram'>50ml</button> 
        <button type='number' id='gram'>100ml</button> 
        <button type='number' id='gram'>150ml</button> 
        <button type='number' id='gram'>200ml</button>   
<button className='order mt-5' onClick={addtocart}>Add to Cart</button>
<button className='order mt-5' onClick={ordernow}>order now</button>
</div>

</div>


<div className='product'>


<div className='card1'>
        <img src={men4} alt='' />
        <p>Mens Perfume different colour.with more flavour</p>   
      <p id='paisa'>₹200   <span id='colour'>  ₹100</span>  (50%) 
             <i class="fa-regular fa-star-half-stroke"/>
      <spam style={{color:"green"}}>4.8 ratings</spam>
      </p>  
      <p style={{ color:"black", fontSize:"larger"}}> ₹100</p>
        <button type='number' id='gram'>50ml</button> 
        <button type='number' id='gram'>100ml</button> 
        <button type='number' id='gram'>150ml</button> 
        <button type='number' id='gram'>200ml</button>   
<button className='order mt-5' onClick={addtocart}>Add to Cart</button>
<button className='order mt-5' onClick={ordernow}>order now</button>
</div>

<div className='card1'>
        <img src={men5} alt='' />
        <p>Mens Perfume different colour.with more flavour</p>   
      <p id='paisa'>₹100   <span id='colour'>  ₹5</span>  (5%) 
             <i class="fa-regular fa-star-half-stroke"/>
      <spam style={{color:"green"}}>4.8 ratings</spam>
      </p>  
      <p style={{ color:"black", fontSize:"larger"}}> ₹95</p>
        <button type='number' id='gram'>50ml</button> 
        <button type='number' id='gram'>100ml</button> 
        <button type='number' id='gram'>150ml</button> 
        <button type='number' id='gram'>200ml</button>   
<button className='order mt-5' onClick={addtocart}>Add to Cart</button>
<button className='order mt-5' onClick={ordernow}>order now</button>
</div>


<div className='card1'>
        <img src={men6} alt='' />
        <p>Mens Perfume different colour.with more flavour</p>   
      <p id='paisa'>₹1000   <span id='colour'>  ₹750</span>  (75%) 
             <i class="fa-regular fa-star-half-stroke"/>
      <spam style={{color:"green"}}>4.8 ratings</spam>
      </p>  
      <p style={{ color:"black", fontSize:"larger"}}> ₹250</p>
        <button type='number' id='gram'>50ml</button> 
        <button type='number' id='gram'>100ml</button> 
        <button type='number' id='gram'>150ml</button> 
        <button type='number' id='gram'>200ml</button>   
<button className='order mt-5' onClick={addtocart}>Add to Cart</button>
<button className='order mt-5' onClick={ordernow}>order now</button>
</div>

</div>


<h3 id='men' className='mt-5'>Womens Collections</h3>
<div className='product'>


<div className='card1'>
        <img src={w1} alt='' />
        <p>Womens Perfume different colour.with more flavour</p>   
      <p id='paisa'>₹5000   <span id='colour'>  ₹4250</span>  (85%) 
             <i class="fa-regular fa-star-half-stroke"/>
      <spam style={{color:"green"}}>4.8 ratings</spam>
      </p>  
      <p style={{ color:"black", fontSize:"larger"}}> ₹750</p>
        <button type='number' id='gram'>50ml</button> 
        <button type='number' id='gram'>100ml</button> 
        <button type='number' id='gram'>150ml</button> 
        <button type='number' id='gram'>200ml</button>   
<button className='order mt-5' onClick={addtocart}>Add to Cart</button>
<button className='order mt-5' onClick={ordernow}>order now</button>
</div>

<div className='card1'>
        <img src={w2} alt='' />
        <p>Womens Perfume different colour.with more flavour</p>   
      <p id='paisa'>₹2000   <span id='colour'>  ₹1400</span>  (70%) 
             <i class="fa-regular fa-star-half-stroke"/>
      <spam style={{color:"green"}}>4.8 ratings</spam>
      </p>  
      <p style={{ color:"black", fontSize:"larger"}}> ₹600</p>
        <button type='number' id='gram'>50ml</button> 
        <button type='number' id='gram'>100ml</button> 
        <button type='number' id='gram'>150ml</button> 
        <button type='number' id='gram'>200ml</button>   
<button className='order mt-5' onClick={addtocart}>Add to Cart</button>
<button className='order mt-5' onClick={ordernow}>order now</button>
</div>


<div className='card1'>
        <img src={w3} alt='' />
        <p>Womens Perfume different colour.with more flavour</p>   
      <p id='paisa'>₹1200   <span id='colour'>  ₹540</span>  (45%) 
             <i class="fa-regular fa-star-half-stroke"/>
      <spam style={{color:"green"}}>4.8 ratings</spam>
      </p>  
      <p style={{ color:"black", fontSize:"larger"}}> ₹660</p>
        <button type='number' id='gram'>50ml</button> 
        <button type='number' id='gram'>100ml</button> 
        <button type='number' id='gram'>150ml</button> 
        <button type='number' id='gram'>200ml</button>   
<button className='order mt-5' onClick={addtocart}>Add to Cart</button>
<button className='order mt-5' onClick={ordernow}>order now</button>
</div>

</div>


<div className='product'>


<div className='card1'>
        <img src={w4} alt='' />
        <p>Womens Perfume different colour.with more flavour</p>   
      <p id='paisa'>₹800   <span id='colour'>  ₹520</span>  (65%) 
             <i class="fa-regular fa-star-half-stroke"/>
      <spam style={{color:"green"}}>4.8 ratings</spam>
      </p>  
      <p style={{ color:"black", fontSize:"larger"}}> ₹280</p>
        <button type='number' id='gram'>50ml</button> 
        <button type='number' id='gram'>100ml</button> 
        <button type='number' id='gram'>150ml</button> 
        <button type='number' id='gram'>200ml</button>   
<button className='order mt-5' onClick={addtocart}>Add to Cart</button>
<button className='order mt-5' onClick={ordernow}>order now</button>
</div>

<div className='card1'>
        <img src={w5} alt='' />
        <p>Womens Perfume different colour.with more flavour</p>   
      <p id='paisa'>₹450   <span id='colour'>  ₹225</span>  (50%) 
             <i class="fa-regular fa-star-half-stroke"/>
      <spam style={{color:"green"}}>4.8 ratings</spam>
      </p>  
      <p style={{ color:"black", fontSize:"larger"}}> ₹225</p>
        <button type='number' id='gram'>50ml</button> 
        <button type='number' id='gram'>100ml</button> 
        <button type='number' id='gram'>150ml</button> 
        <button type='number' id='gram'>200ml</button>   
<button className='order mt-5' onClick={addtocart}>Add to Cart</button>
<button className='order mt-5' onClick={ordernow}>order now</button>
</div>


<div className='card1'>
        <img src={w6} alt='' />
        <p>Womens Perfume different colour.with more flavour</p>   
      <p id='paisa'>₹200   <span id='colour'>  ₹100</span>  (50%) 
             <i class="fa-regular fa-star-half-stroke"/>
      <spam style={{color:"green"}}>4.8 ratings</spam>
      </p>  
      <p style={{ color:"black", fontSize:"larger"}}> ₹100</p>
        <button type='number' id='gram'>50ml</button> 
        <button type='number' id='gram'>100ml</button> 
        <button type='number' id='gram'>150ml</button> 
        <button type='number' id='gram'>200ml</button>   
<button className='order mt-5' onClick={addtocart}>Add to Cart</button>
<button className='order mt-5' onClick={ordernow}>order now</button>
</div>

</div>


<div className='box'>
<div className="box1">
      {isClicked ? (
        <div className='mb-5' style={{border:"1px", display:"flex"}}><strong>Coupen Price List=</strong>
        <ul id='value'>
          {storedvalues.map((value,index)=>
          (<li key={index}>{value.text}  -   {value.text1}    <button onClick={() => handleDelete(index)}  style={{border:"none"}}><i class="fa-solid fa-trash" style={{width:"100%", height:"100%"}}></i></button></li>)
          )}
        
        </ul>
       
        </div>
      ) : showButton ? (
        <button id="p1" onClick={handleClick}>Coupen List!</button>
      ) : null}
    </div>




{/* coupen form */ }
<div className='box2'>
  <h3>Coupen Form</h3>
   <p >our Sk company give gift for every to select from one.so fill this coupen and get your gift.have a nice day.</p>
<div className='coupen'>
  <h4>Name</h4>
  <input type='text' value={text} onChange={(e)=> settext(e.target.value)} placeholder='Your name' required/>
  <h4>Mobile Number</h4>
  <input type='text' value={text1} onChange={(e)=> settext1(e.target.value)} placeholder='Mobile Number' required/>

</div>
<button onClick={handleStore} className='mt-5' id='gift-item'>Submit</button><ToastContainer/>
</div>

</div>






{/* footer */}
<footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Perfume Shop</h3>
          <p>Your favorite fragrances, delivered to your door.</p>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/contact-us">Contact Us</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/shop">Shop</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Follow Us</h4>
          <ul className="social-links">
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Contact</h4>
          <address>
            <p>Perfume Shop</p>
            <p>123 Fragrance St., Aroma City</p>
            <p>Email: contact@perfumeshop.com</p>
            <p>Phone: +123 456 789</p>
          </address>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Perfume Shop. All rights reserved.</p>
      </div>
    </footer>


</div>
 );
}

export default Home;



             /* <h1>Welcome to the Food CRUD App</h1>
            <p>Use this app to manage the food database</p>  */
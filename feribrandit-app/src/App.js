import logo from './logo.svg';
import './App.css';

function App() {
  return (
   
        <div class="nav-bar">
            <img src="/assets/feribrandit.jpg" alt="logo" class="logo">

           <ul>
               <li><a href="react element">Home</a></li>
               <li><a href="react elemen">Super deals</a></li>
               <li><a href="react element">Special offers</a></li>
               <li><a href="react element">About Us</a></li>
               <li><a href="react element">Contact us</a></li>
             

           </ul>
           <div class="rightnav">
               <!-- <img src="assets/search_icon.png"> -->
               <input type="text" name="search" placeholder="Search Product" class="search">
               <button class="btn btn-sm">search</button>
               <a href="login.html" id="loginlink" class="loginlink">Login</a>
           </div>
        </div>

   
        <!--home section starts-->
        <section class="background home" id="home">
            <div class="box-main">
                <div class="firsthalf">
                    <h1 class="text big"> An Ultimate platform for Rebranding </h1>
                    <p>  Rebranding your used clothes through our renowned fashion designers to provide you a fresh new look at a very affordable price</p>
                    <a href="reactelement"><button>discover more</a>
                </div>
                <div class="secondhalf">
                    <img src="/logo.png" alt="laptop image">
                </div>
            </div>
        </section>
        <div id="items">
            <div class="item-box">
                <a href="clothes.html"><h3>Jeans Pant</h3></a>
                <img src="assets/Jeans-pic.jpg "  alt="Jeans Pant">
            </div>
            
            <div class="item-box">
                <a href="clothes.html"><h3>One piece</h3></a>
                <img src="assets/One-piece.jpg" alt="One Piece">
            </div>

            <div class="item-box">
                <h3>Shirt</h3>
                <img src="assets/Shirt.jfif" alt="Shirt">
            </div>

            <div class="item-box">
                <h3>Sari</h3>
                <img src="assets/sari.jfif" alt="Sari">
            </div>

            
        </div>

   
  );
}

export default App;

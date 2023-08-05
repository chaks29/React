import logo from './logo.svg';
import './App.css';
import React from 'react;'


function App() {
  return (
<div>
  <body>
    <h1 id="hello" style="color: yellow;"></h1>
    <div style="color: yellow;"><h1 >Bruce Wayne</h1></div>
    <p class="fam">Bruce Wayne ,a billionaire who owns Wayne industries</p>
    <div><h2>Vigilant Life</h2></div>
    <p class="fam"><b>THE BATMAN!!</b></p>
    <div><h3>THE KNIGHT</h3></div>
    <div class="layout">
        <div class="one">
        <div class="items"> <img src="C:\Users\Aswath Chakravarthi\Desktop\hustle\licensed-image.jpeg" alt="pic" class="image" width="250px" height="150px" ></div>
        <button>BECOME BATMAN </button>
        </div>
        <div class="items"><img src="C:\Users\Aswath Chakravarthi\Desktop\hustle\artworks-xQMZlzJ75BaU40Oq-M41mlA-t500x500.jpg" alt="pic" class="image" width="250px" height="250px"></div>
           
    </div>
    
    <div class="num">
        <ul>
            <li>10</li>
            <li>20</li>
            <li>30</li>
        </ul>
        <ol type ="1" start="7">
            <li>10</li>
            <li>20</li>
            <li>30</li>
        </ol>
        <ol type="A" start="4">
            <li>10</li>
            <li>20</li>
            <li>30</li>
        </ol>
        <ol type="I" start="5">
            <li>10</li>
            <li>20</li>
            <li>30</li>
        </ol>
        <ol type="i" start="5">
            <li>10</li>
            <li>20</li>
            <li>30</li>
        </ol>

    
    </div>
    
    <div class="num1">
    <button onclick="first()"> In First Year</button>
    <button onclick="second()"> In Second Year</button>
    <button onclick="third()"> In Third Year</button>
    <button onclick="fourth()"> In Fourth Year</button>
    </div>
    
    
  </body>
</div>
  );
}



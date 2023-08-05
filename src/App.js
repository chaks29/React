import './App.css';
import zyzz from './zyzz.jpg'
import bat from './batman.jpeg'


function App() {
  return (
<div>
  <body>
    <div><h1 >Bruce Wayne</h1></div>
    <p class="fam">Bruce Wayne ,a billionaire who owns Wayne industries</p>
    <div><h2>Vigilant Life</h2></div>
    <p class="fam"><b>THE BATMAN!!</b></p>
    <div><h3>THE KNIGHT</h3></div>
    <div class="layout">
        <div class="one">
        <div><img src={bat} alt="pic" class="items" ></img></div>
        <button>BECOME BATMAN </button>
        </div>
        <div><img src={zyzz} alt="pic" class="item"></img></div>
           
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
export default App



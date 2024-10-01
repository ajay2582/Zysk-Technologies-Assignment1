import "./App.css";
import  "./index.css";
import First from "./components/First";
import Second from "./components/Second";
import img1  from "./images/7.jpg";
import img2 from "./images/7.jpg";
import Third from "./components/Third";
import Fourth from "./components/Fourth";
import Fifth from "./components/Fifth";
import Fifth2 from "./components/Fifth2";
import Sixth from "./components/Sixth";
import Seventh from "./components/Seventh";
import Eight from "./components/Eight";
import Ninth from "./components/Ninth";



function App() {
  return (
    // <main class="flex justify-center gap-4 flex-col min-h-screen">
    //   <h1 class="text-3xl text-center font-bold underline">React & Tailwind CSS Starter Pack</h1>
    //   <p class="text-center text-xl">This is a starter pack for React & Tailwind CSS projects.</p>
    //   <img src="https://bit.ly/3wsmzTy" alt="meme" class="mx-auto" />
    // </main>
    <div>
        
        <First />
        <Second/>
        <Third></Third>
        <Fourth></Fourth>
        <Fifth></Fifth>
        <Fifth2></Fifth2>
        <Sixth></Sixth>
        <Seventh></Seventh>
        <Eight></Eight>
        <Ninth></Ninth>
        
          {/* <img src ={img1} alt="nothing"/> */}
      


            
      </div>
  );
}

export default App;

import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  return (
    <>
  <Navbar title = "textutils" abouttext ="About Us"/>
  <div className="container my-3">
  <Textform heading ="Enter your text here for Analyize"/>
  </div>
  <div className="container">
  <About/>
  </div>

  {/* <Navbar /> */}
  {/* this is how one can sent the props  */}
  {/* here i created navbar componets so that the app.js remains clean and i can use that components next time too . Here i am just retuning the navbar components like above*/}
    </> // this is called fregmentation
  );
}

export default App;

    // <div classNameNameName="blank">
    //   Lovely
    // </div>
    // <div classNameNameName="nav">
    //   <nav>
    //     <ul>
    //       <li>Home</li>
    //       <li>About</li>
    //       <li>Contact</li>
    //     </ul>
    //   </nav>
    //   <h1>Hello {name}</h1> 
    //   {/* here you can see that javascript is used and in  curly braces nothing like colon or "" or ''used */}
    // </div>
    // <div classNameNameName="para">
    //   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur excepturi quasi aspernatur porro itaque laudantium ad accusantium debitis quisquam repudiandae quod inventore temporibus, aliquid minima maxime quaerat exercitationem doloribus eaque?
    // </div>


// we create components into src folder
// function based components using nowadays 

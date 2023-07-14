
import './App.css';
import Header from './components/Header';
import Comp1 from './components/Comp1';
// import { BrowserRouter,Route, Routes } from 'react-router-dom';
// import About from './components/About';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
// import Tasks from './components/Tasks';
// function Newcom(props)
// {
//   return (
    
//     <div className={props.cn}>
//       Hello I am {props.name} . My income is {props.income}.
//       <hr></hr>
//     </div>
//   );
// }
function App() {
  return (
    // <BrowserRouter>
    <div>
 <Header/>
 <Comp1></Comp1>
    </div>
     
     
      // <Routes>
      //   <Route path="/" element={<Comp1/>}/>
      //   <Route path="/about" element={<About/>}/> 
      //   <Route path="/contact" element={<Contact/>}/>
      // </Routes>
      // <Footer/>    
      
    
    // </BrowserRouter>
    );
//     <div>
//        <Header></Header>
//        <Header1></Header1>  
//        <Comp1></Comp1> 
//        <div>
//     Hello Guys
//    </div>
//    <Newcom name ="Adii" cn="cl1" income="50000"></Newcom>
//    <Newcom name="Piyush" cn="cl2" income="70000"></Newcom>
//    <Newcom name="Kavya" cn="cl3" income="990000"></Newcom>
//     </div>
  
  
  
}

export default App;

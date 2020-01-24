import React, {useState, useEffect} from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Photo from "./components/Photo/Photo";
import Footer from "./components/Footer/Footer";
import Axios from "axios";


function App() {
  const [ data, setData ] = useState({});


  useEffect(()=> {
      Axios.get('https://api.nasa.gov/planetary/apod?api_key=WWJ1iIfjvI5i50fOGes8QxGbl5wu3VKDG8HorRDU')
          .then(res => {
              setData(res.data);
          })
          .catch(err => console.log(err))

  }, [])
  
  return (
    <div className="App">
      <Header data={data}/>
      <Photo  data={data}/>
      <Footer data={data}/>
    </div>
  );
}

export default App;

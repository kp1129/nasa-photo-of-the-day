import React, {useState, useEffect} from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Photo from "./components/Photo/Photo";
import Footer from "./components/Footer/Footer";
import Axios from "axios";

function App() {
  const [apodImg, setApodImg] = useState(null);
  const [title, setTitle] = useState(null);
  const [explanation, setExplanation] = useState(null);
  const [copyright, setCopyright] = useState(null);
  const [date, setDate] = useState(null);

  useEffect(()=> {
      Axios.get('https://api.nasa.gov/planetary/apod?api_key=WWJ1iIfjvI5i50fOGes8QxGbl5wu3VKDG8HorRDU')
          .then(res => {
              console.log(res.data);
              setApodImg(res.data.hdurl);
              setTitle(res.data.title);
              setExplanation(res.data.explanation);
              setCopyright(res.data.copyright);
              setDate(res.data.date);
          })
          .catch(err => console.log(err))

  }, [])
  
  return (
    <div className="App">
      <Header title={title} date={date}/>
      <Photo  apodImg={apodImg}/>
      <Footer desc={explanation} copyright={copyright}/>
    </div>
  );
}

export default App;

import './App.css';
import {useState} from "react";
function App() {

  const [search,setSearch] = useState("");
  const [w,setWeather] = useState([]);
  const api={
    key:"ceaf4b33ea2794bd0c8490be55729dfa",
    base:"https://api.openweathermap.org/data/2.5/weather"
  }
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  function handleClick(){
    fetch(`${api.base}?q=${search}&appid=${api.key}&{{key}}={{value}}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result)
        setWeather(result)
      })
      .catch(error => console.log('error', error));
  }

  function handleChange(event){
    setSearch(event.target.value);
  }

  return (
    <div className="App">
      <h1>Weather Calculator</h1>
      <input className="input" onChange={handleChange} type='text' placeholder='Enter a city/town'/>
      <button className="submit" onClick={handleClick}>Submit</button>
      <div className='div'>
        <h3>Name of the City: </h3><h3 className='name'>{w.name}</h3>
      </div>
      <div className='div'>
        <h3>Tempature is Celsius: </h3><h3 className='temp'>{(w.main.temp - 273.15).toFixed(2)}<sup>o</sup>C</h3>
      </div>
      <div className='div'>
        <h3>Description of the Day: </h3>
        <h3 className='desc'>{w.weather[0].description}</h3>
      </div>
    </div>
  );
}

export default App;

// import './App.css';
import {useState,useEffect} from 'react'
import axios from 'axios'
import ReactGA from 'react-ga4';
ReactGA.initialize('G-MTGGPQLE4C', { debug: true });
ReactGA.send({ hitType: "pageview", page: "/location" });

// Look ma', no client js
// no permission needed.
function App() {
  //creating IP state
  const [ip, setIP] = useState('');
  const [loc, setLoc] = useState('');
  const [data, setData] = useState('');
  const apiKey = "d802faa0-10bd-11ec-b2fe-47a0872c6708"

  //creating function to load ip address from the API
  const getData = async () => {
    const res = await axios.get('https://geolocation-db.com/json/'+apiKey)
    console.log(res.data);
    setIP(res.data.IPv4)
    setLoc(res.data.city)
    setData({
        city: res.data.city,
        country: res.data.country_name,
        latitude: res.data.latitude,
        longitude: res.data.longitude,
    })
  }
  
  useEffect( () => {
    getData()
  }, [])

  return (
    <div>
      <h2>Welcome, from</h2>
      {/* <h4>{ip}</h4> */}
      <h4>{data.city}, {data.country}</h4>
      <h4>Longitude: {data.longitude}, Latitude: {data.latitude}</h4>
    </div>
  );
}

export default App;
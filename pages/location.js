// import './App.css';
import {useState,useEffect} from 'react'
import axios from 'axios'

// Look ma', no client js
// no permission needed.
function Location() {
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
      <h2>Welcome to {data.city}, {data.country}</h2>
      <h4>Longitude: {data.longitude}, Latitude: {data.latitude}</h4>
    </div>
  );
}

export default Location;
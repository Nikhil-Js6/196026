import { useState, useEffect } from 'react';
import TrainStack from '../components/TrainStack/TrainStack';
import axios from "axios";
import './home.css';

const Home = () => {
    
    const company_Info = {
      "companyName": "Train Central",
      "clientID": "d15314c8-a8fe-4bb4-894a-fd2b14d1b8ed",
      "clientSecret": "IiVhrvWrbOIVVyxD",
      "ownerName": "Nikhil kumar",
      "ownerEmail": "nikhilpahal2001@gmail.com",
      "rollNo": "196026"
    } 

    const [token, setToken] = useState("");
    const [trains, setTrains] = useState({});
    const [invalid, setInvalid] = useState(true);
    
    useEffect(() => {
      invalid && tokenApi();
      setInvalid(false);
    }, [invalid]);
    

    useEffect(() => {
        trainsApi();
    }, [token]);

    const tokenApi = async () => {
      const { data } = await axios.post('http://20.244.56.144/train/auth', company_Info);
      setToken(data.access_token);
    }
    
    const trainsApi = async () => {
      const { data } = await axios.get('http://20.244.56.144/train/trains',{ 
          headers: { 
            Authorization: `bearer ${token}` 
          }
      });

        if (data) {
          setTrains(data);
        } 
        if (data.message) {
          setInvalid(true);
        }
    }

  return (
    <div className='home'>
        {trains.length && <TrainStack trains={trains}/> }
    </div>
  )
}

export default Home

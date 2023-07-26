import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import './singleTrain.css';

const SingleTrain = () => {
    
    let { trainId } = useParams();

    const company_Info = {
        "companyName": "Train Central",
        "clientID": "d15314c8-a8fe-4bb4-894a-fd2b14d1b8ed",
        "clientSecret": "IiVhrvWrbOIVVyxD",
        "ownerName": "Nikhil kumar",
        "ownerEmail": "nikhilpahal2001@gmail.com",
        "rollNo": "196026"
      } 
  
    const [token, setToken] = useState("");
    const [train, setTrain] = useState({});
    const [invalid, setInvalid] = useState(true);
    
    useEffect(() => {
    invalid && tokenApi();
    setInvalid(false);
    }, [invalid]);
    

    useEffect(() => {
        trainApi();
    }, [token]);

    const tokenApi = async () => {
        const { data } = await axios.post('http://20.244.56.144/train/auth', company_Info);
        setToken(data.access_token);
    }

    const trainApi = async () => {
        const { data } = await axios.get(`http://20.244.56.144/train/trains/${trainId}`, { 
            headers: { 
                Authorization: `bearer ${token}` 
            }
        });
        if (data) {
            setTrain(data);
        }
        if (data.message) {
            setInvalid(true);
        }
    }
  return (
    <div className='singleTrain'>
    <div className='card-head'>
        <span className='card-train-name'>
            {train && train.trainNumber} - {train && train.trainName && train.trainName.toUpperCase()}
        </span>
        <p className='card-timing'>{`Departure: ${train && train.departueTime && train.departueTime.Hours}:${train && train.departueTime && train.departueTime.Minutes}:${train && train.departueTime && train.departueTime.Seconds}0`}</p>
    </div>
    <div className='card-body'>
        <div className='card'>
            <span className='card-head'>
                <span className='card-seats'>SL </span>
                <span className='card-price'>₹{train && train.price.sleeper}</span>
            </span>
            <div className='card-avl'>
                Available: {train && train.seatsAvailable.sleeper}
            </div>
        </div>
        <div className='card'>
            <span className='card-head'>
                <span className='seats'>AC</span>
                <span className='price'>₹{train && train.price.AC}</span>
            </span>
            <div className='avl'>
                Available: {train && train.seatsAvailable.AC}
            </div>
        </div>
    </div>
    <div className='card-delay'>
        Delay: {train && train.delayedBy}min
    </div>
</div>
  )
}

export default SingleTrain

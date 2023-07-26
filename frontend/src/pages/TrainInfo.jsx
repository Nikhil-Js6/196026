import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import SingleTrain from "../components/SingleTrain/SingleTrain";
import './trainInfo.css';

const TrainInfo = () => {

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
        <div className='trainInfo'>
            <SingleTrain train={train} />
        </div>
    )
}

export default TrainInfo

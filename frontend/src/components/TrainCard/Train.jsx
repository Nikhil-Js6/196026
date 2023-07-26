import { useNavigate } from "react-router-dom";
import './train.css';

const Train = ({ train: { 
    trainName, trainNumber, 
    departureTime: { Hours, Minutes, Seconds }, 
    price, seatsAvailable, delayedBy } 
}) => {

    const navigate = useNavigate();

  return (
    <div className='train' onClick={() => {navigate(`/trains/${trainNumber}`)}} >
        <div className='head'>
            <span className='train-name'>
                {trainNumber} - {trainName.toUpperCase()}
            </span>
            <p className='timing'>{`Departure: ${Hours}:${Minutes}:${Seconds}0`}</p>
        </div>
        <div className='body'>
            <div className='card'>
                <span className='card-head'>
                    <span className='seats'>SL </span>
                    <span className='price'>₹{price.sleeper}</span>
                </span>
                <div className='avl'>
                    Available: {seatsAvailable.sleeper}
                </div>
            </div>
            <div className='card'>
                <span className='card-head'>
                    <span className='seats'>AC</span>
                    <span className='price'>₹{price.AC}</span>
                </span>
                <div className='avl'>
                    Available: {seatsAvailable.AC}
                </div>
            </div>
        </div>
        <div className='delay'>
            Delay: {delayedBy}min
        </div>
    </div>
  )
}

export default Train

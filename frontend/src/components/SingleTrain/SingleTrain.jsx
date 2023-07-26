import './singleTrain.css';

const SingleTrain = ({ train }) => {

  return (
    <div className='singleTrain'>
    <div className='card-head'>
        <span className='card-train-name'>
            {train && train.trainNumber} - {train && train.trainName && train.trainName.toUpperCase()}
        </span>
        <p className='card-timing'>{`Departure: ${train && train.departureTime && train.departureTime.Hours}:${train && train.departureTime && train.departureTime.Minutes}:${train && train.departureTime && train.departureTime.Seconds}0`}</p>
    </div>
    <div className='card-body'>
        <div className='card'>
            <span className='card-head'>
                <span className='card-seats'>SL </span>
                <span className='card-price'>₹{train && train.price && train.price.sleeper}</span>
            </span>
            <div className='card-avl'>
                Available: {train && train.seatsAvailable && train.seatsAvailable.sleeper}
            </div>
        </div>
        <div className='card'>
            <span className='card-head'>
                <span className='seats'>AC</span>
                <span className='price'>₹{train && train.price && train.price.AC}</span>
            </span>
            <div className='avl'>
                Available: {train && train.seatsAvailable && train.seatsAvailable.AC}
            </div>
        </div>
    </div>
    <div className='card-delay'>
        Delayed By : {train && train.delayedBy} min
    </div>
</div>
  )
}

export default SingleTrain

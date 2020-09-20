import React from 'react';
import {connect} from 'react-redux'
import CarShowPage from './CarShowPage'
// import {fetchCars} from '../actions/carsActions'


  function CarShowPageContainer (props){
// let dispatch = useDispatch()

// useEffect(() => {
//   dispatch(fetchCars())

// }, [dispatch])
const carsdata = localStorage.getItem("cars")
console.log(carsdata)
const cars = JSON.parse(carsdata)
console.log(cars)

  // let cars = useSelector(state => state.cars.cars) 
  // console.log(cars)

   return (
   <div>
     <h1>Car Show Page</h1>
     <div>
     {cars.map(car =>  (
            <CarShowPage car={car}  />                 
                ))}
     </div>
   </div>
 );
}

export default connect()(CarShowPageContainer)

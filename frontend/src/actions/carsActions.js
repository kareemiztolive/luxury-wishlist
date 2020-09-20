export const GET_CARS = 'GET_CARS'
export const GET_CARS_SUCCESS = 'GET_CARS_SUCCESS'
export const GET_CARS_FAILURE = 'GET_CARS_FAILURE'

export const getCars = () => ({
    type: GET_CARS
})

export const getCarsSuccess = (cars) => ({
    type: GET_CARS_SUCCESS,
    payload: cars
})

export const getCarsFailure = () => ({
    type: GET_CARS_FAILURE
})

export function fetchCars() {
    return async (dispatch) => {
      dispatch(getCars())
  
      try {
        const response = await fetch("http://localhost:3001/cars")
        const data = await response.json()
        dispatch(getCarsSuccess(data))
        const localdata = localStorage.setItem("cars", JSON.stringify(data))
        console.log(localdata)
      } catch (error) {
        dispatch(getCarsFailure())
      }
    }
  }


  


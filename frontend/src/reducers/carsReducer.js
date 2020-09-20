import * as actions from '../actions/carsActions'


export const initialState = {
    cars: [],
    loading: false,
    hasErrors: false
}

export default function carsReducer (state = initialState,action) {
    switch (action.type) {
        case actions.GET_CARS:
          return { ...state, loading: true }
        case actions.GET_CARS_SUCCESS:
          return { cars: action.payload, loading: false, hasErrors: false }
        case actions.GET_CARS_FAILURE:
          return { ...state, loading: false, hasErrors: true }
        default:
          return state
      }
}
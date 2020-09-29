import{
  GET_ONEDAYWEATHERSUCCESS,
  GET_FIVEDAYBYTHREEHOURWEATHERSUCCESS
} from '../actions/types';

const initialState ={
  oneDayWeather: {},
  fiveDayByThreeHourWeather: {}
}

export default function(state = initialState, action){
  const { type, payload } = action;

  switch(type){
    case GET_ONEDAYWEATHERSUCCESS:
      //console.log(payload);
      return{
        ...state,
        oneDayWeather: payload
      }
    case GET_FIVEDAYBYTHREEHOURWEATHERSUCCESS:
      //console.log(payload);
      return{
        ...state,
        fiveDayByThreeHourWeather: payload
      }
    default:
      return state;


  }
}

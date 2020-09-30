import{
  GET_ONEDAYWEATHERSUCCESS,
  GET_FIVEDAYBYTHREEHOURWEATHERSUCCESS,
  GET_REQUESTSSUCCESS,
  GET_ANALYSISSUCCESS
} from '../actions/types';

const initialState ={
  oneDayWeather: {},
  fiveDayByThreeHourWeather: {},
  requests: [],
  analysis: {}
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
    case GET_REQUESTSSUCCESS:
      return{
        ...state,
        requests: payload
      }
    case GET_ANALYSISSUCCESS:
      return{
        ...state,
        analysis: payload
      }
    default:
      return state;


  }
}

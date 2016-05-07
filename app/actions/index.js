import request from 'axios';
import * as types from '../constants/index';

// export function saveMap(map) {
//   return {
//     type: types.SAVE_MAP,
//     map
//   }
// }
//
// export function addMarker(id, marker) {
//   return {
//     type: types.ADD_MARKER,
//     id,
//     marker
//   }
// }

export function getDraftKings() {
  return (dispatch) => {
    request.post('https://probasketballapi.com/draftkings/players?api_key=FtqsTRheLV8djm4S3Nlr1KvHE0c9Diwg&first_name=Kevin&last_name=Durant')
    .then(data => data.data)
    .then(data => dispatch(saveData(data)))
  }
}

export function getPlayers() {
  return (dispatch) => {
    request.post('https://probasketballapi.com/players?api_key=FtqsTRheLV8djm4S3Nlr1KvHE0c9Diwg&first_name=Stephen&last_name=Curry')
    .then(data => data.data)
    .then(data => dispatch(saveData(data)))
  }
}


export function saveData(data) {
  console.log(data)
  return {
    type: types.SAVE_DATA,
    data
  }
}

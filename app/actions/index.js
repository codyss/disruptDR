import request from 'axios';
import * as types from '../constants/index';
import jsonp from 'jsonp';

let url = 'http://stats.nba.com/stats/leaguedashplayerstats?College=&Conference=&Country=&DateFrom=&DateTo=&Division=&DraftPick=&DraftYear=&GameScope=&GameSegment=&Height=&LastNGames=0&LeagueID=00&Location=&MeasureType=Base&Month=0&OpponentTeamID=0&Outcome=&PORound=0&PaceAdjust=N&PerMode=PerGame&Period=0&PlayerExperience=&PlayerPosition=&PlusMinus=N&Rank=N&Season=2015-16&SeasonSegment=&SeasonType=Playoffs&ShotClockRange=&StarterBench=&TeamID=0&VsConference=&VsDivision=&Weight=';

export function nbaApi() {
  return (dispatch) => {
    jsonp(url,null,(err,res) => console.log(res))
  }
}


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

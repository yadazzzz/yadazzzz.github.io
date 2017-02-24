import * as LOGIN from './types';
import axios from 'axios';
import { browserHistory } from 'react-router';


const ROOT_URL = 'http://52.78.110.20:8080'
export const getAccount = (param) => (dispatch) => {
    axios.post(`${ROOT_URL}/gamseongAccounts/users/login`, param)
      .then(response => {
        const result = JSON.parse(response.request.response).result
        console.log(result)
        if(result === 'fail'){
          dispatch({type: LOGIN.USER_LOG_IN_ERR})
          browserHistory.push('login')
          alert('아이디 혹은 비밀번호를 다시 확인하세요.')
        }
        if(result === 'success'){
          dispatch({type: LOGIN.USER_LOG_IN})
          browserHistory.push('mypage')
        }
      })
};

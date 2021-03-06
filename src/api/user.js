import axios from 'axios';


//object형태로 옴
export function login(params){
    return axios({
        url: '/api/user/login',
        //url: '/login',
        method : 'post',
        data : params,
        //contentType: 'application/json'
        contentType: 'application/x-www-form-urlencoded'
    });
}

export function logout(token){
    return axios({
        url : 'http://localhost:8888/api/user/logout',
        method : 'post',
        headers : {"Authorization" : "Bearer " + token},
        data : token
    })
}

//회원가입 03.30
export function userReg(params){
    return axios({
        url : 'http://localhost:8888/api/user/join',
        method : 'post',
        data : params
    })
}




/**
 * 아이디 비밀번호 찾기
 */
export function searchId(params){

    return axios({
        url : "http://localhost:8888/api/user/searchId",
        method : 'post',
        data : params
    })
}

export function searchPw(params){

    return axios({
        url : "http://localhost:8888/api/user/searchPw",
        method : 'post',
        data : params
    })
}

import axios from 'axios';

/* @&A 조회 */
export function devInquryList(params) {
    return axios({
      url: '/api/support/devInquryList',
      method: 'get',
      //data: params,
      params: params
    });
  }

/* Q&A 상세 조회 */
export function devInquryView(params) {
  return axios({
    url: '/api/support/devInqury/'+params,
    method: 'get'
    //data: params
  });
}

/* Q&A 등록 */
export function devInquryRegist(params) {
  return axios({
    url: '/api/support/devInqury',
    method: 'post',
    data: params
  });
}

/* Q&A 수정 */
export function devInquryUpdate(inqrySn,params) {
  return axios({
    url: '/api/support/devInqury/'+inqrySn,
    method: 'put',
    data: params
  });
}

/* Q&A 삭제 */
export function devInquryDelete(params) {
  return axios({
    url: '/api/support/devInqury/'+params,
    method: 'delete'
   // data: params
  });
}
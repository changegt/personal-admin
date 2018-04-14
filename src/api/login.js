import Vue from 'vue'
import fetch from '@/utils/fetch'
import jsonp from 'vue-jsonp'
Vue.use(jsonp)

/*登录*/
export function login(username, password) {
  return Vue.jsonp('http://localhost:3000/login?username='+username+'&password='+password);
}

/*获取用户信息*/
export function getInfo(token) {
  return fetch({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

/*登出*/
export function logout() {
  return fetch({
    url: '/user/logout',
    method: 'post'
  })
}

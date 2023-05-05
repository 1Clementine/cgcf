const getters = {//json对象
  token: state => state.user.token,   // 获取到user.js中state里的token
  user: state => state.user.user,     // 获取到user.js中state里的用户对象
}
export default getters
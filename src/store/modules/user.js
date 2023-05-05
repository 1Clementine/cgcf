import { getUserInfo, login, logout } from "@/api/auth/auth";
import { getToken, setToken, removeToken } from "@/utils/auth";

const state = {
  token: getToken(), // token
  user: "", // 用户对象
};//state状态的改变只能通过mutations执行

const mutations = {
  SET_TOKEN_STATE: (state, token) => {
    state.token = token;
  },
  SET_USER_STATE: (state, user) => {
    state.user = user;
  },
};

const actions = {//发送异步请求，向服务器请求数据
  // 用户登录
  login({ commit }, userInfo) {//commit向mutations提交设置请求
    console.log(userInfo);
    const { name, pass, rememberMe } = userInfo;
    return new Promise((resolve, reject) => {
      login({ username: name.trim(), password: pass, rememberMe: rememberMe })
        .then((response) => {
          const { data } = response;
          commit("SET_TOKEN_STATE", data.token);
          setToken(data.token);
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  // 获取用户信息
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getUserInfo()//调用auth.js中的getUserInfo函数
        .then((response) => {
          const { data } = response;
          if (!data) {
            commit("SET_TOKEN_STATE", "");
            commit("SET_USER_STATE", "");
            removeToken();
            resolve();
            reject("Verification failed, please Login again.");
          }
          commit("SET_USER_STATE", data);
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  // 注销
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      logout(state.token)//调用api/auth/auth.js中的logout接口
        .then((response) => {
          console.log(response);
          commit("SET_TOKEN_STATE", "");//清空store中token状态
          commit("SET_USER_STATE", "");//清空store中state状态
          removeToken();//调用utils/auth.js中方法
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};

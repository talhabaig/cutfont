import JwtService from "../jwt";
const axios = require("axios");

export default {
  state: {
    users: [], 
  },
  getters: {
    getuserList(state) {
      return state.users;
    }, 
  },
  actions: {
    async getUserList({ commit }) { 
      return await axios
        .get(`${process.env.VUE_APP_API_URL}api/v1/users`, {
          headers: { Authorization: `Bearer ${JwtService.getToken()}` },
        })
        .then(function (response) { 
          console.log(response);
          if (response.status) {
            commit("setUserList", response.data.allUser);
          }
        })
        .catch(function (error) { 
          commit("setUserList", null);
          console.log(error);
        });
    }, 
  },
  mutations: {
    setUsers(state, payload) {
      state.user.unshift(payload);
    }, 
  },
};

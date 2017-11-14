import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: {},
        userList: [],
        loadingUserList: false
    },

    mutations: {
        setAccount(state, newAccount) {
            state.account = newAccount;
        },
        setEnName(state, newEnName) {
            state.enName = newEnName;
        },
        setAdmin(state, newIsAdmin) {
            state.isAdmin = newIsAdmin;
        },
        setModel(state, newModel) {
            state.model = newModel;
        }
    }
})
  
import { createStore } from 'vuex';

export default createStore({
    state: {
        user: null
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
        }
    },
    actions: {
        updateUser({ commit }, user) {
            commit('setUser', user);
        }
    },
    getters: {
        user: (state) => state.user
    }
});
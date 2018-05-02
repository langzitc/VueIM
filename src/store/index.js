import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
export default new Vuex.Store({
	state: {
        user: {},
        isLogin: true
	},
	mutations: {
		updateUser (state,user) {
            if(user&&user.id){
                Object.assign(state.user,user);
                state.isLogin = true;
            }else{
                state.isLogin = false;
            }
        },
	},
	actions: {
		login ({commit},param) {

        }
	}
})
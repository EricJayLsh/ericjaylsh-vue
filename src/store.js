import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	// 定义一状态变量
	state: {
		count: 0

	},
	// 定义修改状态的方法
	mutations: {
		// 定义方法
		increase() {
			this.state.count++
		}

	},
	actions: {

	}
})

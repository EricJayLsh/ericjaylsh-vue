<template>
	<div>
		hello info vue
		<button type="button" @click="add()">添加</button>
	</div>
</template>

<script>
	// @ 在配置文件中指的是 src 目录 .js可以省略
	import store from '@/store'
	export default {
		name: 'info',
		store,
		// mounted 实例化vue组件之后会加载的方法
		mounted() {
			// 将当前对象绑定到全局对象window.Vue
			window.Vue = this
		},
		methods: {
			add: function() {
				/* console.log("add!!")
				console.error()
				alert()
				debugger */
				// 调用store.js文件中定义的方法increase() 调用状态管理的中的方法
				store.commit('increase');
			},
			output:function(){
				console.log("shuchu ")
			}
		}

	}
</script>
<style>
</style>

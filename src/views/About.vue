<template>
	<div class="about">
		<h1>This is an about page</h1>
		<h1>{{msg}}</h1>
	</div>
</template>

<script>
	// @ 在配置文件中指的是 src 目录 .js可以省略
	import store from '@/store'
	export default {
		name: 'about',
		store,
		data() {
			return {
				msg: store.state.count
			}
		}

	}
</script>

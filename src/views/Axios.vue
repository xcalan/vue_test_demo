<template>
	<div class>
		<h1 class="axios">Axios</h1>
	</div>
</template>

<script>
	// import axios from 'axios'

	// axios.defaults.baseURL = 'http://192.168.0.1:8000' // 配置全局URL地址
	// axios.defaults.timeout = 5000 // 配置请求超时时间

	import { request } from '../network/request.js';

	export default {
		name: '',
		data() {
			return {};
		},
		components: {},
		created() {
			// 1. axios基本使用
			// axios({
			//   url:'/home/data',
			//   method: 'GET',
			//   // 专门针对get请求的参数拼接
			//   params:{
			//     name: 'kobe',
			//     age: 40
			//   }
			// }).then(res => {
			//   console.log(res)
			// })

			// 2. axios发送并发请求,两个请求同时相应之后才有结果
			// axios.all([axios({
			//   url:'/home/data1'
			// }), axios({
			//   url:'/home/data2'
			// })]).then(results=>{

			// })
			// axios.all([
			// 		axios({
			// 			url: '/home/data1'
			// 		}),
			// 		axios({
			// 			url: '/home/data2'
			// 		})
			// 	])
			// 	.then(
			// 		axios.spread( (res1, res2) => {
			// 			console.log(res1); // res1
			// 			console.log(res2); // res2
			// 		})
			// 	);

			// 3. 创建axios实例
			// const instance1 = axios.create({
			//   baseURL: 'http://192.168.0.1:8000',
			//   timeout:5000
			// })
			// const instance2 = axios.create({
			//   baseURL: 'http://192.168.0.2:8000',
			//   timeout:8000
			// })

			// instance1({
			//   url:'/home/data1'
			// }).then(res=>{
			//   console.log(res)
			// })

			// 4. 封装request模块
			request({
				url: '/home/data'
			}).then(res => {
                // 成功时执行
                console.log(res); // 输出res.data
			}).catch(err => {
                // 异常时执行
                console.log(err);
            });
		},
		mounted() {},
		methods: {}
	};
</script>
<style scoped>
</style>

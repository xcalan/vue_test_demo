import axios from 'axios'

export function request(config) {
    // 1.创建axios实例
    const instance = axios.create({
        baseURL: 'http://192.168.0.1',
        timeout: 5000
    })

    // 2. axios的拦截器
    // 2.1 请求拦截器
    instance.interceptors.request.use(config => {
        // console.log(config); // 拦截请求信息，这块处理请求前的操作
        return config // 拦截之后必须得return出去，不然后台接收不到请求
    }, err => {
        console.log(err);
    })
    // 2.2 响应拦截器
    instance.interceptors.response.use(res=>{
        // 这块处理响应前的操作
        return res.data
    },err=>{
        console.log(err);
    })

    // 3.返回promise对象，在组件中执行then、catch等
    return instance(config)
}

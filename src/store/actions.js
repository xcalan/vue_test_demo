export default {
    // 异步操作
    // context:上下文
    // aUpdateInfo(context,payload){
    //     setTimeout(()=>{
    //         context.commit('updateInfo')
    //         console.log(payload.message)
    //         payload.success()
    //     },2000)
    // }

    aUpdateInfo(context, payload) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                context.commit('updateInfo')
                console.log(payload) // 我是携带的信息
                resolve('1111111')
            }, 2000)
        })
    }
}

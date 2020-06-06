// Vuex配置文件
import Vue from 'vue'
import Vuex from 'vuex'

import { INCREMENT } from './mutations-types.js'

// 1.安装插件
Vue.use(Vuex)

// 1~2 之间，建立module对象
const moduleA = {
    state:{
        name: 'zhangsan'
    },
    mutations:{
        // 模块中的名字和store中的名字不可以重复
        updateName(state, payload){
            state.name = payload
        }
    },
    actions:{
        aUpdateName(context){
            setTimeout(()=>{
                context.commit('updateName','wangwu')
            }, 1000)
        }
    },
    getters:{
        fullname(state){
            return state.name + '1111'
        },
        fullname2(state,getters){
            return getters.fullname + '2222'
        },
        fullname3(state,getters,rootState){
            return getters.fullname2 + rootState.counter
        }
    }
}
// 2.创建对象
const store = new Vuex.Store({
    state: {
        // 属性
        counter: 1000,
        students: [
            { id: 110, name: 'why', age: 18 },
            { id: 111, name: 'kobe', age: 24 },
            { id: 112, name: 'james', age: 30 },
            { id: 113, name: 'curry', age: 10 }
        ],
        info: {
            name: 'kobe',
            age: 40,
            height: 1.98
        }
    },
    mutations: {
        // 方法
        [INCREMENT](state) {
            state.counter++
        },
        decrement(state) {
            state.counter--
        },
        // incrementCount(state, count){
        //     state.counter += count
        // },
        incrementCount(state, payload) {
            console.log(payload) // {type: "incrementCount", count: 5}
        },
        addStu(state, stu) {
            state.students.push(stu)
        },
        updateInfo(state) {
            // 添加属性
            // Vue.set(state.info,'address','洛杉矶')
            // 删除属性
            //Vue.delete(state.info,'age')
            state.info.name = 'codewhy'
        }
    },
    actions: {
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
    },
    getters: {
        // counter平方
        powerCounter(state) {
            return state.counter * state.counter
        },
        // 输出年龄大于20的学生
        more20stu(state) {
            return state.students.filter(s => s.age > 20)
        },
        // 输出年龄大于20的学生的数量
        more20stuLength(state, getters) {
            return getters.more20stu.length
        },
        // 输出年龄大于指定数字的学生
        moreAgeStu(state) {
            // return function(age){
            //     return state.students.filter(s => s.age>age)
            // }
            return age => state.students.filter(s => s.age > age)
        }

    },
    modules: {
        // a 默认在state里面
        a: moduleA
    }
})

// 3. 导出
export default store
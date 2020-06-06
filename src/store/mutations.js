import { INCREMENT } from './mutations-types.js'

export default {
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
}
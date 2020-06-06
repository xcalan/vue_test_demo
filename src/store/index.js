// Vuex配置文件
import Vue from 'vue'
import Vuex from 'vuex'

// import { INCREMENT } from './mutations-types.js'
import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'
import moduleA from './modules/moduleA'

// 1.安装插件
Vue.use(Vuex)

const state = {
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
}

// 2.创建对象
const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules: {
        // a 默认在state里面
        a: moduleA
    }
})

// 3. 导出
export default store
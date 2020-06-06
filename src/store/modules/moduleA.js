export default {
    state: {
        name: 'zhangsan'
    },
    mutations: {
        // 模块中的名字和store中的名字不可以重复
        updateName(state, payload) {
            state.name = payload
        }
    },
    actions: {
        aUpdateName(context) {
            setTimeout(() => {
                context.commit('updateName', 'wangwu')
            }, 1000)
        }
    },
    getters: {
        fullname(state) {
            return state.name + '1111'
        },
        fullname2(state, getters) {
            return getters.fullname + '2222'
        },
        fullname3(state, getters, rootState) {
            return getters.fullname2 + rootState.counter
        }
    }
}
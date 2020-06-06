export default {
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

}
<template>
  <div class>
    {{ $store.state.counter }}
    <!-- state中变量使用 -->
    <p>
      <input type="button" value="+" @click="add()">
      <!-- 加一 -->
    </p>
    <p>
      <input type="button" value="-" @click="substract()">
      <!-- 减一 -->
    </p>
    <p>
      <input type="button" value="+5" @click="addCount(5)">
      <!-- 加5 -->
    </p>
    <p>
      <input type="button" value="+10" @click="addCount(10)">
      <!-- 加10 -->
    </p>
    <p>
      <input type="button" value="add student" @click="addStudent()">
      <!-- 添加学生对象 -->
    </p>
    <p>
      <input type="button" value="修改信息" @click="updateInfo()">
      <!-- 添加学生对象属性 -->
    </p>

    <hr>
    <!-- counter平方 -->
    {{ $store.getters.powerCounter }}
    <!-- 输出年龄大于20的学生 -->
    {{ $store.getters.more20stu }}
    <!-- 输出年龄大于20的学生的数量 -->
    {{ $store.getters.more20stuLength }}
    <!-- 输出年龄大于指定数字的学生 -->

    {{ $store.getters.moreAgeStu(12) }}
    <hr>
    {{ $store.state.info }}
    
    <hr>
    <h1>module使用</h1>
    {{ $store.state.a.name }}
    <button @click="updateName()">修改名字</button>
    fullname:{{ $store.getters.fullname }}
    fullname2:{{ $store.getters.fullname2 }}
    fullname3:{{ $store.getters.fullname3 }}
    <button @click="asyncUpdateName()">异步修改名字</button>
    
  </div>
</template>

<script>
import { INCREMENT } from "../store/mutations-types.js";

export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
    add() {
      //   this.$store.commit('increment') // 调用mutations中的方法
      this.$store.commit(INCREMENT); // 调用mutations中的方法
    },
    substract() {
      this.$store.commit("decrement"); // 调用mutations中的方法
    },
    addCount(count) {
      // payload：载荷
      // 1. 普通提交
      // this.$store.commit('incrementCount', count)

      // 2. type属性
      this.$store.commit({
        type: "incrementCount",
        count: count
      });
    },
    addStudent() {
      const stu = { id: 114, name: "alan", age: 35 };
      this.$store.commit("addStu", stu);
    },
    updateInfo() {
      //   this.$store.commit('updateInfo')
      // this.$store.dispatch('aUpdateInfo') // 不传参
      // this.$store.dispatch('aUpdateInfo',{
      //     message:'我是携带的信息',
      //     success:() => {
      //         console.log('里面已经完成了');
      //     }
      // }) // 传参

      this.$store.dispatch("aUpdateInfo", "我是携带的信息").then(res => {
        console.log("里面完成了提交");
        console.log(res); // 1111111
      });
    },
    updateName(){
      this.$store.commit('updateName','lisi')
    },
    asyncUpdateName(){
      this.$store.dispatch('aUpdateName')
    }
  }
};
</script>
<style scoped>
</style>

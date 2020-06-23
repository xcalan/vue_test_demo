<template>
    <div class="hello">
        <!-- 父传子 -->
        {{msg}}
        -----------------
        <!-- 子传父 -->
        <button v-for="item in categories" @click="btnClick(item)" :key="item.id">{{ item.name }}</button>

    </div>
</template>

<script>
export default {
    name: "HelloWorld",
    data() {
        return {
            categories: [
                { id: "aaa", name: "热门推荐" },
                { id: "bbb", name: "手机数码" },
                { id: "ccc", name: "家用家电" },
                { id: "ddd", name: "电脑办公" }
            ]
        };
    },
    props: {
        msg: String
    },
    methods: {
        btnClick(item) {
            // console.log(item)
            this.$emit('item-click', item) // 发射事件，自定义事件名字
        }
    }
};
</script>

<style scoped>
</style>

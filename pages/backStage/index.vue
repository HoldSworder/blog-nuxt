<template>
    <div>
        <h2>后台管理</h2>
        <li>
            <nuxt-link :to="{name: 'index'}">回到首页</nuxt-link>
        </li>

        <div>
            <span>主题</span><input v-model='title' type="text">
            <span>内容</span>
            <textarea v-model="content" cols="30" rows="10"></textarea>
        </div>

        <button @click="submitContent">提交</button>

        <div>
            <button @click="getContent">获取数据</button>
            <ul>
                <li v-for="(item, index) in html" :key='index'>{{item}}
                    <button @click="getthis(item._id)">获取这条数据</button>
                    <button @click="delthis(item._id)">删除</button>
                    <input type="text" ref=""><button @click="putthis(item._id)">更新</button>
                </li>
            </ul>

            <p>{{thisVal}}</p>
        </div>

    </div>
</template>

<script>
    import axios from "~/service/index";

    export default {
        data() {
            return {
                title: "",
                content: "",
                html: "",
                thisVal: "",
            };
        },
        methods: {
            submitContent() {
                axios
                    .post("/api/content", {
                        title: this.title,
                        content: this.content
                    })
                    .then(res => {
                        console.log(res);
                    })
                    .catch(err => {
                        console.log(err);
                    });
            },
            getContent() {
                axios
                    .get("/api/content")
                    .then(res => {
                        console.log(res);
                        this.html = res;
                    })
                    .catch(err => {
                        console.log(err);
                    });
            },
            getthis(item) {
                axios
                    .get(`/api/content/${item}`)
                    .then(res => {
                        this.thisVal = res
                    })
            },
            delthis(item) {
                axios
                    .delete(`/api/content/${item}`)
                    .then(res => {
                        this.thisVal = res
                    })
            },

        }
    };
</script>

<style>
</style>


<template>
    <div>
        <h2>News Index page</h2>
        <ul>
            <li>
                <a href="/">Home</a>
                <button @click="test">测试</button>
            </li>
        </ul>
    </div>
</template>

<script>
    import { axios } from "axios";
    export default {
        methods: {
            test() {
                axios
                    .delete(`/api/content/5b1dcb35e1a3541ec80107bd`)
                    .then(res => {
                        console.log(res)
                    })
            }
        }
    }
</script>
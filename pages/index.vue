<template>
    <div>
        <ul>
            <li>
                <nuxt-link :to="{name:'index'}">HOME</nuxt-link>
            </li>
            <li>
                <nuxt-link :to="{name: 'about'}">ABOUT</nuxt-link>
            </li>
            <li>
                <nuxt-link :to="{name: 'news'}">NEWS</nuxt-link>
            </li>
            <li>
                <nuxt-link :to="{name: 'backStage'}">后台管理</nuxt-link>
            </li>
        </ul>
    </div>
</template>
 
<script>

export default {
  components: {
   
  }
}
</script>
 
<style>
</style>
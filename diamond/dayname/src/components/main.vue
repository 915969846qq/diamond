<template>
    <div>
    <router-link to="/to_abstain">对戒</router-link>
    <router-link to="/Birds_nest">订单</router-link>
    <router-link :to="{path:'/Diamond'}" tag="li" class="mytitle">
        <a href="#" class="myfrom mycolor">Diamond</a>
    </router-link>
    </div>
</template>

<script>
    export default {
        name: '',
        data: function () {
            return {}
        },
    }
</script>

<style scoped>

</style>

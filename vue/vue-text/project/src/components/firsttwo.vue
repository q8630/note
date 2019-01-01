<template>
    <div>
        
        <h2>二级路由two</h2>
        firsttwo
        <div>
            <div>{{$route.query}}</div>
            <div>{{$route.query.username}}</div>
            <div>{{$route.query.age}}</div>            
        </div>
    <router-view>

    </router-view>
    </div>
   
</template>
<script>
export default {
    
}
</script>
<style>
    
</style>
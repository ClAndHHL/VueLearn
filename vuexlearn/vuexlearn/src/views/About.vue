<template>
    <div>
        this is about page
        <div>{{num}}</div>
        <button @click="addNum">Add Num</button>
    </div>
</template>

<script>

import {mapState,mapActions} from 'vuex'

export default {
    data(){
        return{

        }
    },
    computed:{
        ...mapState(['num']),
    },
    methods:{
        ...mapActions(['addNum']),
    }
}
</script>


<style lang="scss">
    
</style>

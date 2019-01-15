<template>
<div>
    <el-row>
        <div>
            {{count}}//{{this.$store.state.count}}////{{countAtlias}}
        </div>
        <div>
            ///{{doneTodosCount}}
        </div>
        <br/>
        <div>
            <el-button type = "primary" @click="increment">increment</el-button>
        </div>
    </el-row>
</div>
</template>

<script>

import { mapState } from 'vuex'

export default {
    data(){
        return{

        }
    },
    computed: {
        count () {
            return this.$store.state.count
        },
        doneTodosCount () {
            return this.$store.getters.doneTodos 
        },
        ...mapState({
            countAtlias:"count"
        }),
    },
    methods:{
        increment(){
            this.$store.commit("increment");
        }
    }
}
</script>

<style scoped>

</style>



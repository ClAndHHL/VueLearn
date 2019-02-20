<template>
    <div>
        <el-row>
        {{ title }}\ <el-button size="small" v-on:click="$emit('remove')">Remove</el-button ><br/>
        </el-row>
    </div>
</template>

<script>
export default {
    props:{
        title:"",
    },
    data(){
        return{

        }
    },
}
</script>

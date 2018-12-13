<template>
    <el-row>
        <el-time-select
            v-model="value1"
            :picker-options="{
            start: '08:30',
            step: '00:30',
            end: '18:30'
            }"
            placeholder="选择时间">
        </el-time-select>
    </el-row>
</template>

<script>
export default {
    data(){
        return{
            value1:"",
        }
    }
}
</script>

<style scoped>

</style>


<template>
    <div>
        <el-switch
            v-model="valueSwitch"
            active-color="#13ce66"
            inactive-color="#ff4949">
        </el-switch>
        <el-row>
            <div class="block">
                <span class="demonstration">默认</span>
                <el-slider v-model="value1"></el-slider>
            </div>
            <div class="block">
                <span class="demonstration">自定义初始值</span>
                <el-slider v-model="value2"></el-slider>
            </div>
            <div class="block">
                <span class="demonstration">隐藏 Tooltip</span>
                <el-slider v-model="value3" :show-tooltip="false"></el-slider>
            </div>
            <div class="block">
                <span class="demonstration">格式化 Tooltip</span>
                <el-slider v-model="value4" :format-tooltip="formatTooltip"></el-slider>
            </div>
            <div class="block">
                <span class="demonstration">禁用</span>
                <el-slider v-model="value5" disabled></el-slider>
            </div>
        </el-row>
        <el-row>
            <div class="block">
                <span class="demonstration">不显示间断点</span>
                <el-slider
                v-model="value6"
                :step="10">
                </el-slider>
            </div>
            <div class="block">
                <span class="demonstration">显示间断点</span>
                <el-slider
                v-model="value7"
                :step="10"
                show-stops>
                </el-slider>
            </div>
        </el-row>
    </div>
    
</template>

<script>
export default {
    data(){
        return{
            valueSwitch:false,
            value1: 0,
            value2: 50,
            value3: 36,
            value4: 48,
            value5: 42,
            value6:0,
            value7:0
        }
    },
    methods:{
        formatTooltip(val){
            return val / 100;
        }
    }
}
</script>

<style scoped>

</style>



<template>
<div>
    <el-row>
        <el-radio v-model="radio" label="1" >备选项</el-radio>
        <el-radio v-model="radio" label="2">备选项</el-radio>
    </el-row>
    <el-row>
    <el-radio-group v-model="radio2" @change="changeRadio2()">
        <el-radio :label="3" border>备选项1</el-radio>
        <el-radio :label="6">备选项2</el-radio>
        <el-radio :label="9" >备选项3</el-radio>
    </el-radio-group>
    </el-row>
    <div>
        <el-radio-group v-model="radio3">
        <el-radio-button label="上海"></el-radio-button>
        <el-radio-button label="北京"></el-radio-button>
        <el-radio-button label="广州"></el-radio-button>
        <el-radio-button label="深圳"></el-radio-button>
        </el-radio-group>
    </div>
    <div style="margin-top: 20px">
        <el-radio-group v-model="radio4" size="medium">
        <el-radio-button label="上海" ></el-radio-button>
        <el-radio-button label="北京"></el-radio-button>
        <el-radio-button label="广州"></el-radio-button>
        <el-radio-button label="深圳"></el-radio-button>
        </el-radio-group>
    </div>
    <div style="margin-top: 20px">
        <el-radio-group v-model="radio5" size="small">
            <el-radio-button label="上海" border></el-radio-button>
            <el-radio-button label="北京" disabled ></el-radio-button>
            <el-radio-button label="广州"></el-radio-button>
            <el-radio-button label="深圳"></el-radio-button>
        </el-radio-group>
    </div>
    <div style="margin-top: 20px">
        <el-radio-group v-model="radio6" disabled size="mini">
        <el-radio-button label="上海"></el-radio-button>
        <el-radio-button label="北京"></el-radio-button>
        <el-radio-button label="广州"></el-radio-button>
        <el-radio-button label="深圳"></el-radio-button>
        </el-radio-group>
    </div>
    <el-row>
        <el-checkbox v-model="checked">备选项</el-checkbox>
    </el-row>
    <el-row>
        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
        <div style="margin: 15px 0;"></div>
        <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
            <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
        </el-checkbox-group>
    </el-row>
</div>
</template>

<script>
const cityOptions = ['上海', '北京', '广州', '深圳'];

export default {
    data(){
        return{
            radio:"1",
            radio2:3,
            radio3:"",
            radio4:"",
            radio5:"",
            radio6:"",
            checked:true,
            checkAll:false,
            checkedCities:[],
            isIndeterminate:false,
            cities:["北京","深圳","上海","广州"],
        }
    },
    methods:{
        changeRadio2(){
            console.log(this.radio2);
        },
        handleCheckAllChange(val) {
        this.checkedCities = val ? cityOptions : [];
        this.isIndeterminate = false;
        },
        handleCheckedCitiesChange(value) {
            let checkedCount = value.length;
            this.checkAll = checkedCount === this.cities.length;
            this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
        }

    }
}
</script>

<style scoped>

</style>



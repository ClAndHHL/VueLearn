<template>
    <div>
        <button v-for="tab in tabs" 
            v-bind:key="tab"
            @click="currentTab = tab"
            v-bind:class="{active:currentTab == tab}"
            >{{tab}}</button>
        <component :is="currentTab" class="tab"></component>
    </div>
</template>

<script>
import Home from "@/view/IsHome";
import Posts from "@/view/IsPosts";
import Archieve from "@/view/IsArchieve";

export default {
    data(){
        return{
            tabs:["Home","Posts","Archieve"],
            currentTab:"Home",
        }
    },    
    components:{Home,Posts,Archieve},
}
</script>

<style scoped>
    button.active{
        background: #834848;
    }
    .tab{
        border: yellow solid 1px;
        /* padding: 10px; */
    }
</style>



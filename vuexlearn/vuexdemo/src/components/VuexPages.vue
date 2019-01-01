<template>
<div>
    <el-row>
        {{count}}//{{this.$store.state.count}}////{{countAtlias}}
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
        ...mapState({
            countAtlias:"count"
        }),
  }
}
</script>

<style scoped>

</style>



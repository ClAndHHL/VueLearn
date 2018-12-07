<template>
<div id="blog-posts-events-demo">
  <div :style="{ fontSize: postFontSize + 'em' }">
    <div>1111</div>
    <custome-input v-model="searchText"></custome-input>
    <blog-post
      v-for="post in posts"
      v-bind:key="post.id"
      v-bind:post="post"
      v-on:enlarge-text="postFontSize += 0.1"
    ></blog-post>
  </div>
</div>
</template>

<script>
import BlogPost from "./BlogPost"
import CustomeInput from "./CustomeInput"


export default {
    name: 'ChildEmitDemo',
    data(){
        return {
            postFontSize:2,
            searchText:"aaa",
            posts:[
                {id:0,content:"0000"},
                {id:1,content:"00001"}
                ]
        }
    },
    components:{BlogPost,CustomeInput},
}
</script>

<style scoped>

</style>


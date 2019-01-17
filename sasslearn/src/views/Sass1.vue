<template>
    <div>
        <h3>this is header
            <p>this is p in header</p>
        </h3>    
        <P>this is p under header</P>
        <P>this is p under header2</P>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    h3 + p { 
        font-size: 2em;
        color:green;
    }
    // p {
    //     color: red;
    // }
</style>


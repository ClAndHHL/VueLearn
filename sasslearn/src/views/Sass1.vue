<template>
    <div>
        <h3>this is header
            <p>this is p in header</p>
        </h3>    
        <P>this is p under header</P>
        <P>this is p under header2</P>
        <div id = "div2">
            this is div
        </div>
        <P>this is p under header3</P>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    // 你可以用同层相邻组合选择器+选择h3元素后紧跟的p元素
    h3 + p { 
        font-size: 2em;
        color:green;
    }
    //你也可以用同层全体组合选择器~，选择所有跟在article后的同层article元素，不管它们之间隔了多少其他元素
    p ~ p {
        color: red;
    }

    // article {
    //     ~ article { border-top: 1px dashed #ccc }
    //     > section { background: #eee }
    //     dl > {
    //         dt { color: #333 }
    //         dd { color: #555 }
    //     }
    //     nav + & { margin-top: 0 }
    // }
    //////decode 
    // article ~ article { border-top: 1px dashed #ccc }
    // article > footer { background: #eee }
    // article dl > dt { color: #333 }
    // article dl > dd { color: #555 }
    // nav + article { margin-top: 0 }


    #div2{
        border: 1px solid #ccc {
            left: 10px;
            right: 10px;
        }
    }

</style>


<template>
    <div>
        <p><strong>我是粗体字，不是斜体字，因为我不在列表当中，所以这个规则对我不起作用</strong></p>
        <strong id = "ssss">我是粗体字，不是斜体字，因为我不在列表当中，所以这个规则对我不起作用</strong>
        <ul>
            <li>
                <strong>我是斜体字。这是因为 strong 元素位于 li 元素内。</strong>
                <br/>
                <span ><strong>span strong</strong></span>
                <strong>我是斜体字。这是因为 strong 元素位于 li 元素内。2</strong>
            </li>
            <li>我是正常的字体。</li>
        </ul>
        <center>
        <table>
            <thead>
                <th>
                    h1
                </th>
                <th>
                    h2
                </th>
                <th>
                    h3
                </th>
            </thead>
            <tbody>
                <tr>
                    <td>b1</td>
                    <td>b2</td>
                    <td>b3</td>
                </tr>
            </tbody>
        </table>
        </center>
        
    </div>
</template>


<script>
export default {
    
}
</script>


<style scoped>
li strong {
    font-style: italic;
    font-weight: normal;
}
div p{
    text-indent: -5em;
}
strong#ssss{
    color: red;
}
ul {list-style-type : square}

table{
    width:100%;
    text-align: center;
    border-collapse:collapse;
}
table, th, td
{
    border: 1px solid black;
}
th
{
    height:50px;
    background-color:yellowgreen;
    color:white;
}
</style>


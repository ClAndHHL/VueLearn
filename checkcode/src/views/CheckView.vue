<template>
    <div>
        <div>*为数字 #为字母</div>
        <input type="text" v-model="preCode" v-on:keyup.enter="submit"/> 
        <input type="checkbox" v-model="isLetter">包含字母</input>
        <div v-for="item in checkedCode" :key="item" >
            {{item}}
        </div>
    </div>
</template>

<script>

var codeChar0 =["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var codeChar1 =["0","1","2","3","4","5","6","7","8","9"];
export default {
    name:'CheckCode',
    data(){
        return{
            preCode:"",
            checkedCode:[],
            isLetter:false,
        }
    },

    methods:{
        submit(){
            console.log(this.preCode);
            console.log(this.isLetter);
            let splitStr = this.preCode.split('*'); 
            if(splitStr.length == 1){

                let tempCode = splitStr[0];
                //setTimeout(()=>{
                    this.checkTheCode(tempCode);
                //},2500* (m++) + m * 10);
  
            }
            else if(splitStr.length == 2){
                let codeChar = this.isLetter ? codeChar0 : codeChar1;
                let m = 0;
                for(let i = 0 ; i < codeChar.length ;++i){
                    let tempCode = splitStr[0] + codeChar[i] + splitStr[1];
                    //this.checkTheCode(tempCode);
                    //this.$sleep(2100 * (i)).then(()=>this.checkTheCode(tempCode));
                    //setTimeout(()=>{
                        this.checkTheCode(tempCode);
                    //},2500* (m++) + m * 10);
                    // let splitStrLetter = tempCode.split("#");
                    // if(splitStrLetter.length == 1){
                    //     setTimeout(()=>{
                    //             this.checkTheCode(tempCode);
                    //     },2500* (m++) + m * 10);
                    // }
                    // else if(splitStrLetter.length == 2)
                    // {
                    //     for(let e = 0;e<25;++e){
                    //         let tempCode = splitStrLetter[0] + String.fromCharCode((65+e)) + splitStrLetter[1];
                    //         setTimeout(()=>{
                    //             this.checkTheCode(tempCode);
                    //         },2500* (m++) + m * 10);
                    //     }    
                    // }
                    
                }
            }else if(splitStr.length == 3){
                let codeChar = this.isLetter ? codeChar0 : codeChar1;
                let m = 0;
                for(let i = 0 ; i < codeChar.length;++i){
                    for(let j = 0 ; j < codeChar.length ;++j){
                        let tempCode = splitStr[0] + codeChar[i] + splitStr[1] + codeChar[j] + splitStr[2];
                        //this.checkTheCode(tempCode);
                        //this.$sleep(2100 * (i + j)).then(()=>this.checkTheCode(tempCode));
                        //setTimeout(()=>{
                            this.checkTheCode(tempCode);
                        //},2500* (m++) + m * 10);
                        
                    }
                }
            }
            else if(splitStr.length == 4){
                let codeChar = this.isLetter ? codeChar0 : codeChar1;
                let m = 0;
                for(let i = 0 ; i < codeChar.length;++i){
                    for(let j = 0 ; j < codeChar.length ;++j){
                        for(let k = 0 ; k < codeChar.length ;k++){
                            let tempCode = splitStr[0] + codeChar[i] + splitStr[1] + codeChar[j] + splitStr[2] + codeChar[k] + splitStr[3];
                            //this.$sleep(2100 * (i + j + k)).then(this.checkTheCode(tempCode));
                            //this.$sleep(2100 * (i + j + k)).then(()=>this.checkTheCode(tempCode));
                            //setTimeout(()=>{
                                this.checkTheCode(tempCode);
                            //},2500* (m++) + m * 10);
                        }
                    }
                }
            }
        },
        checkTheCode(tempCode){
            console.log("check the code:"+tempCode);
            this.$axios.post('/api/register.php',{
                reginvcode:tempCode,
                action:"reginvcodeck"
            }).then((response)=>{
                console.log(response.data);
                if(response.data.indexOf("'0'")>0){
                    this.checkedCode.push(tempCode + ":OK ---------->congratulations! ");
                }else{
                    this.checkedCode.push(tempCode + ":false");
                }
            })
        },
    },
}
</script>

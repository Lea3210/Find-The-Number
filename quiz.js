const arr =["*","+","-"]

    let typesign=Math.floor(Math.random()*arr.length)
    let randnum1=Math.floor(Math.random()*10)
    let randnum2=Math.floor(Math.random()*10)

    if (typesign==="*") {
         let res=randnum1*randnum2
    }
   else if (typesign==="+") {
         let res=randnum1+randnum2
    }
    else if (typesign==="-") {
         let res=randnum1-randnum2
    }
    for (let index = 0; arr1[3]!=null; index++) {
        let arr1=[]
            let notnum=Math.floor(Math.random()*100) 
            if(notnum!==res){
                arr1[index]=notnum
            }
    }
    arr1[4]=res

    




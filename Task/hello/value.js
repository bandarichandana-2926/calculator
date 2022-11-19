
function speed(sd,boolean){
    if(boolean){
        sd=sd-5;
    }
    if(sd>=61&&sd<=81){
        return 1
    }
    else if(sd<=60){
       return 0
    }
    else{
        return 2
    }
    
}
console.log(speed(60,false))
console.log(speed(65,false))
console.log(speed(65,true))

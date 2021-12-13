function convert (value,unit){
   if(unit == "kb"){
       let res = value*1024;
       
       return res
    }else if((unit == "mb")){
       let res = value/1024;
    return res;
   }
}

module.exports = convert;
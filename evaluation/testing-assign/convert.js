function convert (value,unit){
   if(unit == "kb"){
       let res = value*1024;
       
       return res
    }else if((unit == "mb")){
       let res = value/1024;
    return res;
   }else if(unit == "gb"){
       let res = value/1048576;
       return res
   }
}

module.exports = convert;
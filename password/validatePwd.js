function pwdValidator(pwd){
    let size = pwd.length;
  
    if(size>6){

        let checkCap = checkForCap(pwd,size);
        let checkSmall = checkForSmall(pwd,size);
        let checkNum = checkNumber(pwd,size);
        let checkSpecial = checkSpec(pwd,size);

        if(!checkCap) return "Capital character is missing";
        else if(!checkSmall) return "small character is missing";
        else if(!checkNum)  return "Number is missing";
        else if(!checkSpecial) return "special character is missing";
        else return "strong password";
    }
    else{
        return "password should contain at-least 6 character"
    }
}

function checkForSmall(pwd,size){
    let small = "abcdefghijklmnopqrstuvwxyz";

    for(let i =0; i<small.length;i++){

        for(let j = 0; j<size; j++){
            if(pwd[j] == small[i]) {
               return true
            }
        }

    }
    return  false
}
function checkForCap(pwd,size){
    let cap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    for(let i =0; i<cap.length;i++){

        for(let j = 0; j<size; j++){
            if(pwd[j] == cap[i]) {
               return true
            }
        }

    }
    return  false
}
function checkNumber(pwd,size){
    let num = "0123456789"
    for(let i = 0; i<num.length;i++){

        for(let j = 0; j<size; j++){
            if(pwd[j] == num[i]) {
               return true
            }
        }

    }
    return  false
}

function checkSpec(pwd,size){
    let spec = ["!","@","#","$","%","^","&","*","(",")",",",".","<",">","/",",","'",";",":",'"',"]","[","{","}",'\\',"|","?"];
    for(let i = 0; i<spec.length;i++){

        for(let j = 0; j<size; j++){
            if(pwd[j] == spec[i]) {
               return true
            }
        }

    }
    return  false
}
module.exports = pwdValidator;
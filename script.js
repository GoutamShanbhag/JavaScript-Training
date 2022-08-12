
//Function to check the validity of a password
const isValidFunction = (passWord, userName)=>{
    if(passWord.length<8){
        return false;
    }

    if(passWord.includes(" ")){
        return false;
    }

    if(passWord.indexOf(userName) !==-1){
        return false;
    }

    return true;
}


console.log(isValidFunction("llllPassword","Hey"));
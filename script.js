
//Function to check the validity of a password
const isValidPassword = (passWord, userName)=>{
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

//Function to get the average of numbers
const isAverage = (nums)=>{
    let sum =0;
    for(let i of nums){
        sum+=i;
    }
    let average = sum / nums.length;
    return average;
}

//Function to check pangram
const isPangram = (str)=>{
    const allLettes = "abcdefghijklmnopqrstuvwxyz";
    str = str.toLowerCase();

    for(let i of str){
        if(!allLettes.includes(i)){
            return false;
        }

        
    }
    return true;
    
}


const getCard = ()=>{
    const values = [
        '2','3','4','5','6','7','8','9','A','J','K','Q'
    ]
    const suit = [
        'Heart','spade','clubs','diamonds',
    ]


    let val = Math.floor(Math.random() * values.length);
    let suitVal = Math.floor(Math.random()*suit.length);


    const result = {
        value : values[val],
        suit : suit[suitVal],
    }

    return result;
}



console.log(isValidFunction("llllPassword","Hey"));
console.log(avg([1,2,3,44,5]));
console.log(pangram("oxing wizards jump quickly"));
console.log(getCard())

function checkPalinDrome(str){
    let rev = str.split("").reverse().join("");

    if(rev == str){
        return false;
    }

    return true;
}

let ans = checkPalinDrome("iasai");
console.log(ans);
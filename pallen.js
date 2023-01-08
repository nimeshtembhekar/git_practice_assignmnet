function checkPalinDrome(str){
    let rev = str.split("").reverse().join("");

    if(rev == str){
        return true;
    }

    return false;
}

let ans = checkPalinDrome("masai");
console.log(ans);
function checkPrime(n){
    if(n<2){
        return false;
    }

    for(let i = 2;i<= Math.sqrt(n);i++){
        if(n%i==0){
            return false;
        }
    
    }

    return true;
}

let ans = checkPrime(6);
console.log(ans);
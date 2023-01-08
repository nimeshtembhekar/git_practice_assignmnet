function checkPrime(n){
    if(n<2){
        return true;
    }

    for(let i = 2;i<= Math.sqrt(n);i++){
        if(n%i==0){
            return true;
        }
    
    }

    return false;
}

let ans = checkPrime(23);
console.log(ans);
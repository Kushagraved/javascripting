const isPrime=(n)=>{
    for(let i=2;i<n;i++){
        if(n%i===0){
            return false;
        }
    }
    return true;
}

const isArmstrong=(n)=>{
    let temp=n;
    let sum=0;
    while(n>0){
        let rem=n%10;
        sum+=rem*rem*rem;
        n=parseInt(n/10);
    }
    return sum===temp;
}

console.log(isArmstrong(45));
console.log(isPrime(16));
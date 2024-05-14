const fibo = (n) => {
    if (n == 1 || n == 2) return 1;
    return fibo(n - 1) + fibo(n - 2);
}
console.log('result', fibo(7));

let memo = [0];
const fiboTopDown = (n) => {
    if (n == 1 || n == 2) {
        memo[n] = 1;
    }
    if (!memo[n]) {
        memo[n] = fiboTopDown(n - 1) + fiboTopDown(n - 2);
    }
    return memo[n];
}
console.log('result', fiboTopDown(7));

const d = new Array(100);
const fiboBottomUp = (n) => { 
    d[1] = 1;
    d[2] = 1;

    for (let i = 3; i <= n; i++) { 
        d[i] = d[i - 1] + d[i - 2];
    }

    return d[n];
}
console.log('result',fiboBottomUp(7))
function fibonacci(n) {
    if (n <= 0) return;
    
    console.log(0);
    if (n >= 2) {
        console.log(1);
    }
    
    let prev = 0, curr = 1;
    for (let i = 2; i < n; i++) {
        let next = prev + curr;
        console.log(next);
        prev = curr;
        curr = next;
    }
}

const number = parseInt(window.prompt("enter a positive number"))

fibonacci(number)

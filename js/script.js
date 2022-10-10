
//check numbers 1 to 100 and find those can be divided by 3, 5 or both
for (let i = 1; i <= 100; i++) {
    let result = ""
   
    if (i % 3 === 0 && i % 5 === 0) {
        result = `Fizzbuzz`
        console.log(result);
    } else if (i % 3 === 0) {
        result = `Fizz`
        console.log(result);
    } else if (i % 5 === 0){
        result = `Buzz`
        console.log(result);
    } else {
        console.log(i);
    }
}
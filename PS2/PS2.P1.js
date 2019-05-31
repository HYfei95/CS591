function* fibs () {
    let [val1, val2, result] = [0, 1, 0];
    while (true) {
        yield result;
        result = val1+val2;
        val1 = val2;
        val2 = result;
    }
}


function* evenFib(num){
    let myFib = fibs();
    while(true){
         num = myFib.next().value;
        if(num === 0 || num%2 === 0){
            yield num;
        }
    }
}

let result = evenFib();
const print = count => {
    while (count-- > 0) {
        console.log(result.next().value)
    }
};
print(15);
function* fibs (x) {
    let [val1, val2, result] = [x,x-1,0];
    if (!x) {val2 = 1; yield 0;}
    //    let [val1, val2, result] = [0, 1, 0]
    while (true) {
        result = val1+val2;
        val1 = val2;
        val2 = result;
        if (result > Number.MAX_SAFE_INTEGER) throw new Error();
        yield result
    }
}


function* evenFib(){
    let myFib = fibs(0);
    while(true){
        let num = myFib.next().value;
        if(num === 0 || num%2 === 0){
            yield num;
        }
    }
}

let result = evenFib();
const print = count => {
    while (count --> 0) {
        console.log(result.next().value)
    }
};
print(5);
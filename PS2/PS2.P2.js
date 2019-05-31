function* wordParser(str) {
    yield*  str.split(' ');
}

const str = `All I know is something like a bird within her sang`;
let word = wordParser(str);
let result = word.next();

while(!result.done){
    console.log(result.value);
    result = word.next();
}
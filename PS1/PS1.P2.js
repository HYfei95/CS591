const operator = oper => {
    switch (oper) {
        case '+':
            return (left, right) => left + right;
            break;
    };
    switch (oper) {
        case '-':
            return (left, right) => left - right;
            break;
    };
    switch (oper) {
        case '*':
            return (left, right) => left * right;
            break;
    };
    switch (oper) {
        case '/':
            return (left, right) => left / right;
            break;
    };
};


const expression = '5*7';
let array = expression.split('');
const oper = array[1];
const left = parseInt(array[0]);
const right = parseInt(array[2]);
let calc = operator(oper);
console.log(`${expression} = ${calc(left, right)}`);


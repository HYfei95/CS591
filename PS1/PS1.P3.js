const func = (str, function1) => {
    return function1(str);
};

console.log(func(`supercalifragilisticexpialidocious`, str => str.split(/(?=c)/g)));


console.log(func(`supercalifragilisticexpialidocious`, str=> {
    var result = {
        originalString: str,
        modifiedString: str.replace(/a/g, 'A'),
        numberReplaced: (str.match(/a/g)||[]).length,
        length: str.length
    };
    return result;
}));
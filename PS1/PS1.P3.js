const func = (string, function1) => {
    return function1(string);
};

console.log(func(`supercalifragilisticexpialidocious`, string => string.split(/(?=c)/g)));


console.log(func(`supercalifragilisticexpialidocious`, string=> {
    return {
        originalString: string,
        modifiedString: string.replace(/a/g, 'A'),
        numberReplaced: (string.match(/a/g) || []).length,
        length: string.length,
    };
}));
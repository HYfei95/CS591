
const sorter = word =>{
    return word.split('').sort().join('');
};
console.log(`String is ${sorter('supercalifragilisticexpialidocious')}`);

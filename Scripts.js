
function SeculoAno(ano) {
    
    if (ano == 1) return 1;

    if (ano > 2101 || ano < 1){
        // alert("Ano inexistente")
        return null; 
    } 

    return Math.trunc((ano - 2) / 100) + 1;
}

console.log(SeculoAno(-1));
console.log(SeculoAno(0));
console.log(SeculoAno(1));
console.log(SeculoAno(10));
console.log(SeculoAno(100));
console.log(SeculoAno(101));
console.log(SeculoAno(102));
console.log(SeculoAno(1999));
console.log(SeculoAno(2021));
console.log(SeculoAno(2100));
console.log(SeculoAno(2102));
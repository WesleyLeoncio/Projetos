let salario = 2000;
let totalVenda = 300000;

function bonus(salario, totalVenda) {
    if (totalVenda > 450000) {
        return salario + 1000;
    }
    return salario;
}

salario = bonus(salario, totalVenda);

console.log(salario);
import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"


// Cliente
const cliente1 = new Cliente("Valeria", 1112223309);
console.log(cliente1);
console.log(cliente1.cpf);

const cliente2 = new Cliente("Ana", 8882223309);
console.log(cliente2);


// Conta Corrente
const ContaCorrente1 = new ContaCorrente(cliente1, 1001);
console.log(ContaCorrente1);

const ContaCorrente2 = new ContaCorrente(cliente2, 1001);
console.log(ContaCorrente2);
console.log(ContaCorrente2.cliente);
console.log(ContaCorrente2.saldo);

console.log("O numero de contas é: " + ContaCorrente.numeroDeContas);


// Depósitos e Saques
const valorDepositado = ContaCorrente1.depositar(500);
console.log("Depósito de: R$" + valorDepositado);
const valorSacado = ContaCorrente1.sacar(300);
console.log("Saque de: R$" + valorSacado);
console.log("Saldo de: R$" + ContaCorrente1._saldo);


// Transferência 
const valorTranferido = ContaCorrente1.transferir(100, ContaCorrente2);
console.log(ContaCorrente2);



import { CompanyAccount } from './class/CompanyAccount';
import { PeopleAccount } from './class/PeopleAccount';
import { VipAccount } from './class/VipAccount';

// Criar uma instância de PeopleAccount
const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10);

// Imprimir informações iniciais
console.log('Conta Pessoal:', peopleAccount);
peopleAccount.deposit(50);  // Chamar o método deposit com um valor
peopleAccount.withdraw(20); // Chamar o método withdraw com um valor
peopleAccount.getBalance(); // Chamar o método getBalance

// Criar uma instância de CompanyAccount
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20);

// Imprimir informações iniciais
console.log('Conta Empresarial:', companyAccount);
companyAccount.deposit(100); // Chamar o método deposit com um valor
companyAccount.getLoan(50);  // Chamar o método getLoan com um valor
companyAccount.getBalance();  // Chamar o método getBalance


const vipAccount: VipAccount = new VipAccount('DIO', 20);

vipAccount.deposit(100)

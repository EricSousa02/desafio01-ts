import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (valor: number): void => {
 
    if (this.validateStatus()) {
      this.balance += valor;
      console.log(`você pegou emprestimo de $${valor}`);
      return; 
    }

  }

  
}

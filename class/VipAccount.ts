import { DioAccount } from "./DioAccount"

export class VipAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  deposit = (valor: number): void => {
    if (this.validateStatus()) {
      this.balance += valor + 10;
      console.log(`você depositou $${valor} e ganhou um bonus de $10`);
      return; 
    }    
  };


}
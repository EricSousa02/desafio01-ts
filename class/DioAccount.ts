export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  // setName = (name: string): void => {
  //   this.name = name
  //   console.log('Nome alterado com sucesso!')
  // }

  getName = (): string => {
    return this.name
  }

  deposit = (valor: number): void => {
    if (this.validateStatus()) {
      this.balance += valor;
      console.log(`você depositou $${valor}`);
      return; 
    }    
  };
  

  withdraw = (valor: number): void => {
    if (this.validateStatus() && this.balance >= valor) {
      this.balance -= valor;
      console.log(`você sacou $${valor}`);
      return; 
    }

    console.log(`o status da sua conta não é valido ou você não possui saldo para sacar o valor de $${valor}`);
    return;

  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}

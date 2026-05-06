class BankAccount{
    #balance =0; //#-> private variable

    deposit(amount){
        if(amount > 0){
            this.#balance += amount;
        
        console.log(`Deposited : ${amount}. Current Balance : ${this.#balance}`);
        } else{
            console.log("Deposit amount must be positive.")
        }
    }

    withdraw(amount){
        if(amount > 0 && amount <= this.#balance){
            this.#balance -= amount;

            console.log(`Withdraw : ${amount} . Current Balance: ${this.#balance}`);
        }else{
            console.log("withdrawal amount must be positive and less than or equal to the current balance");
        }
    }

    getBalance(){
        return this.#balance;
    }
}

    const Pratiksha = new BankAccount();
    Pratiksha.deposit(1000);
    Pratiksha.withdraw(500);
    console.log(Pratiksha.getBalance());
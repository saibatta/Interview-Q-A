function BankBalance(amount) {
    let balance = amount;

    return {
        deposit: function (depositAmount) {
            return balance = balance + depositAmount;
        },
        withDraw: function (withDrawAmount) {
            if (withDrawAmount > balance) {
                return "Insuffiecinet funds!!"
            }
            return balance = balance - withDrawAmount;
        },
        getBalance: function () {
            return balance;

        }
    }
}

let bankBalance = BankBalance(100);
console.log(bankBalance.deposit(20));
console.log(bankBalance.withDraw(10));
console.log(bankBalance.getBalance());
console.log(bankBalance.deposit(200));
console.log(bankBalance.getBalance());

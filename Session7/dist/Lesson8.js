"use strict";
class Account {
    constructor(accountNumber, initialBalance = 0) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
        this.history = [];
        this.status = "active";
    }
    deposit(amount) {
        if (this.status !== "active") {
            console.log(" Tài khoản đang bị khóa, không thể nạp tiền.");
            return;
        }
        if (amount <= 0) {
            console.log(" Số tiền nạp phải lớn hơn 0.");
            return;
        }
        this.balance += amount;
        this.history.push(`Nạp: +${amount} | Số dư: ${this.balance}`);
        console.log(` Nạp ${amount} thành công. Số dư hiện tại: ${this.balance}`);
    }
    withdraw(amount) {
        if (this.status !== "active") {
            console.log(" Tài khoản đang bị khóa, không thể rút tiền.");
            return;
        }
        if (amount <= 0) {
            console.log(" Số tiền rút phải lớn hơn 0.");
            return;
        }
        if (amount > this.balance) {
            console.log(" Không đủ số dư để rút.");
            return;
        }
        this.balance -= amount;
        this.history.push(`Rút: -${amount} | Số dư: ${this.balance}`);
        console.log(` Rút ${amount} thành công. Số dư hiện tại: ${this.balance}`);
    }
    showHistory() {
        console.log(` Lịch sử giao dịch của tài khoản ${this.accountNumber}:`);
        this.history.forEach(item => console.log(item));
    }
}
class CheckingAccount extends Account {
    constructor(accountNumber, initialBalance, overdraftLimit) {
        super(accountNumber, initialBalance);
        this.overdraftLimit = overdraftLimit;
    }
    withdraw(amount) {
        if (this.status !== "active") {
            console.log(" Tài khoản đang bị khóa, không thể rút tiền.");
            return;
        }
        if (amount <= 0) {
            console.log(" Số tiền rút phải lớn hơn 0.");
            return;
        }
        if (this.balance - amount < -this.overdraftLimit) {
            console.log(` Không thể rút quá hạn mức thấu chi: ${this.overdraftLimit}`);
            return;
        }
        this.balance -= amount;
        this.history.push(`Rút (Checking): -${amount} | Số dư: ${this.balance}`);
        console.log(` Rút ${amount} thành công (Checking). Số dư hiện tại: ${this.balance}`);
    }
}
const checkAcc = new CheckingAccount("987654321", 2000, 1000);
checkAcc.deposit(500);
checkAcc.withdraw(2200);
checkAcc.withdraw(500);
checkAcc.deposit(1000);
checkAcc.showHistory();

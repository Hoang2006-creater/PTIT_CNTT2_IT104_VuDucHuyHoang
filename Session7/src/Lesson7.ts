class Accountt {
    public accountNumber:string
    protected balance:number
    protected history:string[]
    protected status:"active"|"locked"
    constructor(accountNumber:string,initialBalance:number=0){
        this.accountNumber=accountNumber
        this.balance=initialBalance
        this.history=[]
        this.status="active"
    }
    deposit(amount:number):void{
        if(this.status!=="active"){
            console.log("Tai khoan bi khoa,khong the nap tien");
            return
        }
        if(amount<0){
            console.log("So tien nap phai lon hon 0");
            return
        }
        this.balance+=amount
        this.history.push(`Nap thanh cong,So du ${this.balance}`)
        console.log(`Nap thanh cong`);
    }
        withdraw(amount:number):void{
        if(this.status!=="active"){
            console.log("Tai khoan bi khoa,khong the rut tien");
            return
        }
        if(amount<0){
            console.log("So tien rut phai lon hon 0");
            return
        }
         if(amount>this.balance){
            console.log("So tien rut phai nho hon tong so tien");
            return
        }
        this.balance-=amount
        this.history.push(`Rut thanh cong,So du ${this.balance}`)
        console.log(`Rut thanh cong`);
    }
    showHistory():void{
        console.log(`Lich su giao dich cua tai khoan ${this.accountNumber} `);
        this.history.forEach((item) => {
            console.log(item); 
        });
    }
}
class SavingAccount extends Accountt {
    public interestRate: number;

    constructor(accountNumber: string, initialBalance: number, interestRate: number) {
        super(accountNumber, initialBalance);
        this.interestRate = interestRate;
    }

    withdraw(amount: number): void {
        if (this.status !== "active") {
            console.log("Tài khoản đang bị khóa, không thể rút tiền.");
            return;
        }
        if (amount <= 0) {
            console.log("Số tiền rút phải lớn hơn 0.");
            return;
        }
        if (amount > this.balance) {
            console.log("Không thể rút quá số dư hiện tại.");
            return;
        }
        this.balance -= amount;
        this.history.push(`Rút (Saving): -${amount} | Số dư: ${this.balance}`);
        console.log(`Rút ${amount} thành công (Saving). Số dư hiện tại: ${this.balance}`);
    }
}

// --- Test ---
const savingAcc = new SavingAccount("123456789", 5000, 3.5);

savingAcc.deposit(2000);
savingAcc.withdraw(1000);
savingAcc.withdraw(6000); 
savingAcc.withdraw(6000); 
savingAcc.withdraw(5000); 

savingAcc.showHistory();
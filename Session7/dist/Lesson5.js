"use strict";
class Account {
    constructor(id, userName, password, role) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.isLogin = false;
        this.role = role;
    }
    login() {
        console.log("Phuong thuc login() cua lop Account");
    }
    logout() {
        if (this.isLogin) {
            console.log("Dang xuat thanh cong");
            this.isLogin = false;
        }
        else {
            console.log("Ban chua dang nhap");
        }
    }
}
class userAcc extends Account {
    constructor(id, userName, password, role, status) {
        super(id, userName, password, role);
        this.status = status;
    }
    login() {
        if (this.status === "active") {
            this.isLogin = true;
            console.log(`Dang nhap thanh cong.Xin chao ${this.userName}`);
        }
        else if (this.status === "banned") {
            console.log("Tai khoan da bi khoa");
        }
    }
}
const user1 = new userAcc("1", "Nguyễn  A", "123456", "user", "active");
const user2 = new userAcc("2", "Trần  B", "abcdef", "user", "banned");
console.log("User1");
user1.login();
user1.logout();
console.log("User2");
user2.login();
user2.logout();

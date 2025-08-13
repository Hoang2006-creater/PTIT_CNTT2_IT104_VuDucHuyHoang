class Accounts {
    public id: string;
    public userName: string;
    private password: string;
    public isLogin: boolean;
    public role: string;

    constructor(id: string, userName: string, password: string, role: string) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.isLogin = false; 
        this.role = role;
    }

    login(): void {
        console.log("Phương thức login() của lớp Account");
    }

    logout(): void {
        if (this.isLogin) {
            console.log("Đăng xuất thành công");
            this.isLogin = false;
        } else {
            console.log("Bạn chưa đăng nhập");
        }
    }
}

class userAccs extends Accounts {
    public status: "active" | "banned";

    constructor(
        id: string,
        userName: string,
        password: string,
        role: string,
        status: "active" | "banned"
    ) {
        super(id, userName, password, role);
        this.status = status;
    }

    login(): void {
        if (this.status === "active") {
            this.isLogin = true;
            console.log(`Đăng nhập thành công. Xin chào ${this.userName}`);
        } else {
            console.log("Tài khoản đã bị khóa");
        }
    }
}

class adminAcc extends Accounts {
    constructor(id: string, userName: string, password: string) {
        super(id, userName, password, "admin");
    }

    banUser(user: userAccs): void {
        user.status = "banned";
        console.log(`Người dùng ${user.userName} đã bị cấm.`);
    }
}

// --- Test ---
const user3 = new userAccs("U001", "Nguyễn Văn A", "123456", "user", "active");
const admin = new adminAcc("A001", "Admin", "admin123");

console.log(" Trước khi ban ");
user3.login(); 

console.log(" Admin ban user ");
admin.banUser(user3);

console.log(" Sau khi ban ");
user3.login(); 

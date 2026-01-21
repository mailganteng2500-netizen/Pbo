class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
}

class LoginApp {
    constructor() {
        this.initData();
    }

    initData() {
        if (!localStorage.getItem("user")) {
            const user = new User("muhammadismail123", "ismail123");
            localStorage.setItem("user", JSON.stringify(user));
        }
    }

    login() {
        const inputUser = document.getElementById("username").value;
        const inputPass = document.getElementById("password").value;

        const data = JSON.parse(localStorage.getItem("user"));
        const status = document.getElementById("status");

        if (inputUser === data.username && inputPass === data.password) {
            localStorage.setItem("login", "true");
            status.innerHTML = "✅ Login berhasil";
            status.style.color = "green";
        } else {
            status.innerHTML = "❌ Username atau password salah";
            status.style.color = "red";
        }
    }

    logout() {
        localStorage.removeItem("login");
        document.getElementById("status").innerHTML = "🚪 Anda telah logout";
        document.getElementById("status").style.color = "orange";
    }

    lupaPassword() {
        const data = JSON.parse(localStorage.getItem("user"));
        alert("Password anda adalah: " + data.password);
    }
}

const app = new LoginApp();

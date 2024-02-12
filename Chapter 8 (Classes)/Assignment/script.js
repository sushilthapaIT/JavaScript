// 1 

let data = "secret information";

class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    viewData(){
        console.log("You are viewing website data", data);
    }
}


let p1 = new User("Sushil Thapa", "tha123@googlemail.com");
let p2 = new User("Thapa", "shrad3@googlemail.com");


class Admin extends User{
    constructor(name, email){
        super(name, email);
    }

    editData(){
        data = "new data";
    }
}

let a1 = new Admin("Admin", "admin.google.com")
let DATA = "secret information"
class user{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
    viewData(){
        console.log(`name: ${this.name}`)
        console.log(`email: ${this.email}`)
    }
}

class admin extends user{
    constructor(name,email){
        super(name,email);
    }
    editData(){
        DATA = "some new data"
    }
}

let name = new user("shreya Akole","shreya@gmail.com")
let admin1 = new admin("admin","admin@gmail.com");
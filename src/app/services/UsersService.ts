import Bcrypt from "../libs/Bcrypt";
import { User } from "../types/User";
import { UserLogin } from "../types/UserLogin";
import HttpClient from "./utils/HttpClient";

class UserService{

    HttpClient: HttpClient;

    constructor(){
        this.HttpClient = new HttpClient("http://localhost:4000");
    }


    addNewUser(user: User){
        user.role = 'USER'
    
        return this.HttpClient.post('/user', user);
    }

    validateLogin(loginData: UserLogin){;
        
        return this.HttpClient.post('/login', loginData)
    }




}

export default new UserService();
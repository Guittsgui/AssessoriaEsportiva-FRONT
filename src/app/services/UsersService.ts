import { IChangePasswordData } from "../types/IChangePasswordData";
import { IUser } from "../types/IUser";
import { IUserLoginInfos } from "../types/IUserLoginInfos";
import HttpClient from "./utils/HttpClient";

class UserService{

    HttpClient: HttpClient;

    constructor(){
        this.HttpClient = new HttpClient("http://localhost:4000");
    }


    addNewUser(user: IUser){
        user.role = 'USER'
    
        return this.HttpClient.post('/user', user);
    }

    validateLogin(loginData: IUserLoginInfos){;
        
        return this.HttpClient.post('/login', loginData)
    }

    changePassword(data: IChangePasswordData){
        return this.HttpClient.post('/', data)
    }




}

export default new UserService();
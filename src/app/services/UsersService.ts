import Bcrypt from "../libs/Bcrypt";
import { User } from "../types/User";
import HttpClient from "./utils/HttpClient";

class UserService{

    HttpClient: HttpClient;

    constructor(){
        this.HttpClient = new HttpClient("http://localhost:4000");
    }


    addNewUser(user: User){
        // user.role = 'USER'
        // const hashedPassword = Bcrypt.encryptPassword(user.password)
        // const hashedConfirmPassword = Bcrypt.encryptPassword(user.confirmPassword)
        
        // const manipulatedUser = {
        //     name: user.name,
        //     email: user.email,
        //     password: hashedPassword,
        //     confirmPassword: hashedConfirmPassword,
        //     role: user.role,
        // }
        // return this.HttpClient.post('/user', manipulatedUser);
    }

    validateLogin(email: string, password: string){
        // const hashedPassword = Bcrypt.encryptPassword(password);
        // const loginData = {
        //     email, hashedPassword
        // }
        // return this.HttpClient.post('/login', loginData)
    }




}

export default new UserService();
import { User } from "../types/User";
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




}

export default new UserService();
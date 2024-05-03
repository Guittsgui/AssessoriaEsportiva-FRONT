import { IEmailContact } from "../types/IEmailContact";
import HttpClient from "./utils/HttpClient";
class ContactEmailService{

    HttpClient: HttpClient;

    constructor(){
        this.HttpClient = new HttpClient("http://localhost:4000");
    }

    addNewContactEmail(data: IEmailContact){
        return this.HttpClient.post('/emailcontact', data);
    }

    

}

export default new ContactEmailService();
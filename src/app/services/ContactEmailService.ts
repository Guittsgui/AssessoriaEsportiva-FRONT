import { EmailContact } from "../types/EmailContact";
import HttpClient from "./utils/HttpClient";
class ContactEmailService{

    HttpClient: HttpClient;

    constructor(){
        this.HttpClient = new HttpClient("http://localhost:4000");
    }

    addNewContactEmail(data: EmailContact){
        return this.HttpClient.post('/emailcontact', data);
    }

    

}

export default new ContactEmailService();
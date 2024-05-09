import { IEmailContact } from "../types/IEmailContact";
import HttpClient from "./utils/HttpClient";
class CepService{

    HttpClient: HttpClient;

    constructor(){
        this.HttpClient = new HttpClient("https://www.cepcerto.com/ws/json");
    }

    getCep(cep: string){
        return this.HttpClient.get(`/${cep}`);
    }

    

}

export default new CepService();
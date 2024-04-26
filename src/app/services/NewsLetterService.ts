import HttpClient from "./utils/HttpClient";
class NewsLetterService {

    HttpClient: HttpClient;
    
    constructor(){
        this.HttpClient = new HttpClient("vodka");
    }

    addNewsLetter(){

    }

    

}

export default new NewsLetterService();
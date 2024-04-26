import HttpClient from "./utils/HttpClient";
class NewsLetterService {

    HttpClient: HttpClient;

    constructor(){
        this.HttpClient = new HttpClient("vodka");
    }

    addNewsLetter(){
        return this.HttpClient.get('/');
    }

    

}

export default new NewsLetterService();
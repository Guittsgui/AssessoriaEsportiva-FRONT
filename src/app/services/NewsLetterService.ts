import HttpClient from "./utils/HttpClient";
class NewsLetterService {

    HttpClient: HttpClient;

    constructor(){
        this.HttpClient = new HttpClient("http://localhost:4000");
    }

    addNewsLetter(email: string){
        return this.HttpClient.post('/newsletter', {email});
    }

    

}

export default new NewsLetterService();
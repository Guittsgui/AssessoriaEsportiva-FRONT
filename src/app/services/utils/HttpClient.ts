
class HttpClient {

    baseURL: string;

    constructor(baseURL: string){
        this.baseURL = baseURL;
    }

    get(path: string){

    }

    async post(path: string, data: any){
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }

        try{
            const response = await fetch(this.baseURL+path, requestOptions)
            const data = await response.json();
            return {status: response.status, data}
        }catch{
            const data = {
                msg: "Algo deu Errado"
            }
            return {status: 400, data }
        }

    }

    put(){

    }

    delete(){

    }

}

export default HttpClient;
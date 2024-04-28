
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
            const responseData = await response.json();
            
            const frontResponse = {
                status: response.status,
                msg: responseData
            }
            return frontResponse
        }catch{
            const frontResponse = {
                status: 400,
                msg: "Algo deu Errado"
            }
            return frontResponse
        }

    }

    put(){

    }

    delete(){

    }

}

export default HttpClient;
import HttpClient from "./utils/HttpClient";


class DiscountCoupon{
    HttpClient: HttpClient;

    constructor(){
        this.HttpClient = new HttpClient("http://localhost:4000");
    }

    validateCoupon(name: string){
        const data = {
            name
        }
        // return this.HttpClient.post('/validateCoupon', data)
        return this.HttpClient.post('/checkCoupon', data)
    }

}

export default new DiscountCoupon();
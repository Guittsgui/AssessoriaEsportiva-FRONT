import DiscountCouponService from "@/app/services/DiscountCouponService";
import { IProduct } from "@/app/types/IProduct";
import { IShoppingCartItem } from "@/app/types/IShoppingCartItem";
import { createContext, useState } from "react";

type ShoppingCartContext = {
    shoppingCartList: IShoppingCartItem[] | null;
    total: number;
    discountValue: number;
    handleAddProductToTheCart: (produc: IProduct) => void,
    handleRemoveProductToTheCart: (productID: number) => void,
    handleCalculateTotal: () => number;
    handleDecreaseAmount: (productID: number | undefined ) => void;
    handleIncreaseAmount: (producID: number | undefined) => void;
    calculateTotalOfItemsInTheCart: () => number;
    applyDiscount: (coupom: string) => any;
    removeDiscount: () => void;

}

export const ShoppingCartContext = createContext<ShoppingCartContext>(null!);


export const ShoppingCardProvider = ({children} : {children: JSX.Element}) => {

    const [shoppingCartList, setShoppingCartList] = useState<IShoppingCartItem[]>([])
    const [total, setTotal] = useState(0);
    const [discountValue, setDiscountValue] = useState(0)

    function handleAddProductToTheCart(product:IProduct ){

        const hasProduct = shoppingCartList.find(item => item.productID === product.id);
        if(!hasProduct){
            const newItem: IShoppingCartItem = {
                productID: product.id,
                productPriece: product.priece,
                amount: 1
            }
            setShoppingCartList([...shoppingCartList, newItem])
            return
        }
        const updatedItems = shoppingCartList.map((item) => {
            if ( item.productID === product.id){
                return {...item, amount: item.amount + 1}
            }
            return item;
        })
        setShoppingCartList(updatedItems)
    }

    function handleRemoveProductToTheCart(productID: number){
        setShoppingCartList(shoppingCartList.filter(item => item.productID !== productID))
    }

    function handleCalculateTotal(){
        let amountTotal = 0;
        for (let line of shoppingCartList){
            amountTotal += (line.amount * line.productPriece);
        }
        setTotal(amountTotal);
        return total;
    }

    function calculateTotalOfItemsInTheCart(){
        let amountItems = 0;
        shoppingCartList.map((item) => {
            amountItems += item.amount
        })
        return amountItems;
    }
    
    function handleIncreaseAmount(productID: number | undefined){
        const updatedItems = shoppingCartList.map((item) => {
            if( item.productID === productID){
                return { ...item, amount: item.amount + 1}
            }
            return item
        })
        setShoppingCartList(updatedItems)
    }

    function handleDecreaseAmount(productID: number | undefined){

        const updatedItems = shoppingCartList.map((item) => {
            if( item.productID === productID){
                if(item.amount > 1){
                    return { ...item, amount: item.amount - 1} 
                }
            }
            return item
       
        })

        setShoppingCartList(updatedItems)
    }

    async function applyDiscount(coupom: string){
        const response = await DiscountCouponService.validateCoupon(coupom)
        let couponDiscount;
        if(response.status === 200){
            couponDiscount = await response.data.coupon.discountPercentage;
            const discount = (couponDiscount * total) / 100
            setTotal(total - discount);
            setDiscountValue(discount)
        }
        return response;
    }

    function removeDiscount(){
        setTotal(total + discountValue)
        setDiscountValue(0);
    }

    return(
        <ShoppingCartContext.Provider 
            value={{shoppingCartList, 
                    total,
                    discountValue,
                    handleAddProductToTheCart, 
                    handleRemoveProductToTheCart,
                    handleCalculateTotal,
                    handleIncreaseAmount,
                    handleDecreaseAmount,
                    calculateTotalOfItemsInTheCart,
                    applyDiscount,
                    removeDiscount} }>
            {children}
        </ShoppingCartContext.Provider>
    )
}


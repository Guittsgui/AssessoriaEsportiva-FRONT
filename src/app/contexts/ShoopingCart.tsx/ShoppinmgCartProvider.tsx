import { IProduct } from "@/app/types/IProduct";
import { IShoppingCartItem } from "@/app/types/IShoppingCartItem";
import { createContext, useState } from "react";

type ShoppingCartContext = {
    shoppingCartList: IShoppingCartItem[] | null;
    handleAddProductToTheCart: (productID: number) => void
    handleRemoveProductToTheCart: (productID: number) => void
}

export const ShoppingCartContext = createContext<ShoppingCartContext>(null!);





export const ShoppingCardProvider = ({children} : {children: JSX.Element}) => {

    const [shoppingCartList, setShoppingCartList] = useState<IShoppingCartItem[]>([])

    function handleAddProductToTheCart(product:number ){
        const newItem: IShoppingCartItem = {
            productID: product,
            amount: 1
        }
        ///Se Já existir o ID & o TAMANHO, => alterar o Amount .
        
        // Se não existir, adicionar novo item.
        setShoppingCartList([...shoppingCartList, newItem])
    }

    function handleRemoveProductToTheCart(productID: number){
        setShoppingCartList(shoppingCartList.filter(item => item.productID !== productID))
    }

    return(
        <ShoppingCartContext.Provider value={{shoppingCartList, handleAddProductToTheCart, handleRemoveProductToTheCart} }>
            {children}
        </ShoppingCartContext.Provider>
    )
}


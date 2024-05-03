import { IProduct } from "@/app/types/IProduct";
import { createContext, useState } from "react";

type ShoppingCartContext = {
    products: IProduct[] | null;
    handleAddProductToTheCart: (product: IProduct) => void
}

export const ShoppingCartContext = createContext<ShoppingCartContext>(null!);





export const ShoppingCardProvider = ({children} : {children: JSX.Element}) => {

    const [products, setProducts] = useState<IProduct[]>([])

    function handleAddProductToTheCart(product:IProduct){
        setProducts([...products, product])
    }

    return(
        <ShoppingCartContext.Provider value={{products, handleAddProductToTheCart} }>
            {children}
        </ShoppingCartContext.Provider>
    )
}
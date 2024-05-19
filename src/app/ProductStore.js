import { useSelector, useDispatch } from 'react-redux'
import { addProduct, removeProduct } from '../feature/product/productSlice'
import ProductStoreContext from './ProductStoreContext'

import {useState, useEffect, createContext} from 'react'
import ProductList from '../component/ProductList'
import TopBar from '../component/TopBar'




const ProductStore = () => {

    const products = useSelector((state) => state.products)

    const [filteredProducts, setFilteredProducts] = useState(products)
    const [selectedCategory, setSelectedCategory] = useState('all')

    const filterByCategory = category => {

        setSelectedCategory(category);

        if(selectedCategory==='all') {
            setFilteredProducts(products);
        } else {
            setFilteredProducts(
                 products.filter(product => product.category === selectedCategory)
            )
        }
      }

    const dispatch = useDispatch()

    console.log(products)

    useEffect(() => {
        filterByCategory(selectedCategory); 
    },[selectedCategory, products])

    const deleteProductClick = (name) => {
        console.log("Prem: name==" + name)
        dispatch(removeProduct(name))  
        setFilteredProducts(products); 
    }

    const addProductInToStore = (product) => {

        console.log("Prem in Store")
        dispatch(addProduct(product))
        setFilteredProducts(products); 

    }
    

    return (
    <>
        <ProductStoreContext.Provider value={{addProductInToStore}}>
            <TopBar products={products} filterByCategory={filterByCategory}/>
            <ProductList products={filteredProducts} deleteProductClick = {deleteProductClick}/>
        </ProductStoreContext.Provider>
    
    </>)

} 
export default ProductStore
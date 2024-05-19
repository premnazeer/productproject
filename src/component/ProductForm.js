import {useState, useContext, useEffect} from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from 'date-fns';
import ProductStoreContext from '../app/ProductStoreContext'


const ProductForm = ({setShowModal, selectedProduct}) => {

    const {addProductInToStore} = useContext(ProductStoreContext);

    const [name, setName] = useState('')
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")
    const [expiry, setExpiry] = useState(false)
    const [expiryDate, setExpiryDate] = useState(new Date());
    const [price, setPrice] = useState("£")
    const [special, setSpecial] = useState(false) 
    const [productAdded, setProductAdded] = useState(false) 
    const [updateMode, setUpdateMode] = useState(true) 
    const [statusMessage, setStatusMessage] = useState("")
    const [errorMesssage, setErrorMessage] = useState("")


    useEffect(()=> {

    if (selectedProduct === undefined || selectedProduct === null) {
        setUpdateMode(false)
    } else {
        console.log(":111" + selectedProduct.productName);
        setName(selectedProduct.productName)
        setCategory(selectedProduct.category)
        setDescription(selectedProduct.description)
        setExpiry(selectedProduct.canExpire)
        setExpiryDate(selectedProduct.expiryDate)
        setPrice(selectedProduct.price)
        setSpecial(selectedProduct.special)
        setUpdateMode(true)
    }
}, [selectedProduct]);



    const updatePrice = (e) => {

        let priceValue = e.target.value
       if(!priceValue.includes("£", 0)) {
        priceValue = `£${priceValue}`
       }
        setPrice(priceValue)
    }

  const addProductClicked = () => {

    let validation = true
    if(name.length === 0) {
        setErrorMessage("Name can't be empty")
        validation = false
        return
    }

    if(description.length === 0) {
        setErrorMessage("Description can't be empty")
        validation = false
        return
    }

    if(price.length <=  1) {
        setErrorMessage("price can't be empty")
        validation = false
        return
    }

    if(category.length === 0) {
        setErrorMessage("Category can't be empty")
        validation = false
        return
    }

    

    if (validation) {
        const expiryDateString = expiry ? (expiryDate ? format(expiryDate, "yyyy-MM-dd"): '') : '';
        const newProduct =  { id: name, productName: name, description: description, canExpire: expiry, expiryDate: expiryDateString, category: category, price: price, special: special}
    
        addProductInToStore(newProduct)
        setProductAdded(true)  
        setErrorMessage("")
        setStatusMessage(`Product has been successfully ${updateMode ? 'updated' : 'added'}`)
    }
  }

  const expiryDateRow = <tr><td>Expiry Date</td><td><DatePicker selected={expiryDate} onChange={(date) => setExpiryDate(date)} /></td></tr>
   

    return (
        <div> 
            
            <h1>{updateMode ? 'Edit' : 'Add'} Product</h1>
            <p className="modelMessage"> {statusMessage} </p>
            <p className="modelMessage"> {errorMesssage} </p>
            
            <div className="formInput">
                <table className="productForm">
                <tbody>
                <tr><td>Name</td><td><input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}/></td></tr>
                <tr><td>Description</td><td><input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)}/></td></tr>
                <tr><td>Category</td><td><input type="text" name="category" value={category} onChange={(e) => setCategory(e.target.value)}/></td></tr>
                <tr><td>Expiry</td><td>
                    <button className={`toggleButton ${expiry ? 'on': 'off'}`} onClick={()=>setExpiry(!expiry)}><div className="togglebar"></div></button>                        
                </td></tr>

                {expiry ? expiryDateRow : ''}

                <tr><td>Price</td><td><input type="Text" placeholder="£" onChange={(e)=> updatePrice(e)} value={price}/></td></tr>
                <tr><td>Is Special Product ?</td><td>
                    <button className={`toggleButton ${special ? 'on': 'off'}`} onClick={()=>setSpecial(!special)}><div className="togglebar"></div></button>
                </td></tr>              

                </tbody>
                </table>
                <div className="rowSpace"></div>
                <button className="addButton" onClick={()=> addProductClicked()}>{updateMode ? 'Update' : 'Add'}</button> 
                <button className="cancelButton" onClick={()=>setShowModal(false)}>Cancel</button>
                
            </div>
        </div>
    )
}
export default ProductForm
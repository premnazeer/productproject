import {useState} from 'react'
import { addProduct, removeProduct } from '../feature/product/productSlice'
import EditProduct from './EditProduct';
const TopBar = ({products, filterByCategory}) => {


    const [checked, setChecked] = useState(true);
    //const [categories, setCategories] = useState(getCategory());
    //const dispatch = useDispatch()


    const categories = Array.from(
        new Set(products.map(product => product .category))
      )

    const handleChange = (e) => {
        console.log(e.target.value);
        setChecked(!checked);
      }

    const addProductClicked = () => {
        //dispatch(addProduct( { id: '9', productName: 'Mens T Shirt' })) 
        setShowModal(true);  
  }

  const [showModal, setShowModal] = useState(false);

    const openModal = (productId) => {
        setShowModal(true);
      };


    return(
        <header>
            <form >
            <div className="topbar">
             <p className="topbar_text">Category:
            <select onChange={(e)=>filterByCategory(e.target.value)} className="topbar_select" >
            <option value="all">All Category</option>
            {categories.map(category => <option value={category} key={category}>{category}</option>)}
         </select>
         </p>
         <p>
         <button type="button" onClick={addProductClicked} className="topbar_button" >Add Product</button>
         {showModal ? <EditProduct setShowModal={setShowModal} /> : null}
         </p>
         </div>
         
         </form>
         </header>
    )
}
export default TopBar
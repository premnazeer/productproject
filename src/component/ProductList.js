import Product from './Product'
import EditProduct from './EditProduct'
import {useState, useEffect} from 'react'

const ProductList = ({products, deleteProductClick}) => {

  const productCount = products?.length || 0

  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [editComponent, setEditComponent] = useState(<></>);

  

  const openModal = (productName) => {

    setEditComponent(<EditProduct setShowModal={setShowModal} selectedProduct={productName}/>)
      setShowModal(true);
      setSelectedProduct(productName)
      console.log("PPPPPPPPPP")
      console.log(productName)
    };

    useEffect( ()=> {
      //setShowModal(false);
    }, [showModal, selectedProduct])
       
  return(
      <main>
            <div className="messagebar" key="product_found"> <b>{productCount} </b> products found... </div>
            <div className="grid">
                {
                    products.map((product, index) => (
                                           
                      <div className="item" key={index}>
                        <Product key={index} product={product}/>
                        <center><button onClick={() => openModal(product) } className="podButton" value={product}>Edit</button>
                        <button onClick={()=>deleteProductClick(product.productName)} className="podButton">Delete</button></center>                       
                      </div>
                  
                    ))
                }
                {showModal ? editComponent  : null}

                {products.length === 0 && (
                  <div>No product matching the filter</div>
                )}
          </div>
        </main>
      
    )
}
export default ProductList
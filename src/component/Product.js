
import imageUrl from '../images/no_image.png';

const Product = (props) => {

    const product = props.product
    const {id, productName,description, canExpire,expiryDate, category, price, special} = product;




    return(

        <div className={special?"specialproductpod":"productpod"}>
            <center><b>{special? "SPECIAL PRODUCT":""}</b></center>
            <p align="center"><img className="productimage" src= {imageUrl}  alt={id} />               
            
            </p>
              <p>Name: <strong>{productName}</strong></p>
              <p>Description: {description}</p>
              <p>Expiry: {expiryDate || 'No Expiry'}</p>
              <p>Category: {category}</p>
              <p>Price: {price}</p> 
    
                            
          </div>
    )
}
export default Product
import React, { useRef } from "react";
import ReactDom from "react-dom";
import { useState, useEffect } from 'react'
import ProductForm from "./ProductForm" 

const EditProduct = ({ setShowModal, selectedProduct}) => {

    

  const [productData, setProductData] = useState([])


  console.log("QQQQQQQQQQQ" + JSON.stringify(selectedProduct));

  const modalRef = useRef();
 

  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  };  


        
  return ReactDom.createPortal(
    <div className="container" ref={modalRef} onClick={closeModal}>
      <div className="modal">
      <button onClick={() => setShowModal(false)} className="closeButton">X</button>
      <ProductForm setShowModal = {setShowModal} selectedProduct={selectedProduct}/>
      </div>
    </div>,
    document.getElementById("portal")
  );
} 
export default EditProduct
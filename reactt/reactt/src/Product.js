import React from "react";

function Product({productName,price}) {
    // console.log(props)
    // const {productName,price}=props;
  return (
    <div>
      <div>ürün bilgileri</div>
      <div>
        <div>isim:{productName}</div>
        <div>fiyat:{price} tl</div>
      </div>
   
    </div>
  );
}

export default Product;

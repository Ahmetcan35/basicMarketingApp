import React, { useState } from 'react';
import { useParams } from 'react-router-dom'
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { setSelectedProduct } from '../redux/slices/productSlice';
import '../css/ProductDetails.css'
import { addToBasket, calculateBasket } from '../redux/slices/basketSlice';

function ProductDetails() {
    const { id } = useParams();
    const { products, selectedProduct } = useSelector((store) => store.product)
    const { price, image, title, description } = selectedProduct;
    const dispatch = useDispatch();
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        if (count > 0) {
            setCount(count - 1)

        }
    }
    const addBasket = () => {
        const payload = {
            id,
            price,
            image,
            title,
            description,
            count
        }

        dispatch(addToBasket(payload));
        dispatch(calculateBasket());
    }




    useEffect(() => {
        getProductById();
    }, [])
    const getProductById = () => {
        products && products.map((product) => {
            if (product.id == id) {
                dispatch(setSelectedProduct(product));
            }
        })
    }
    return (

        <div className='flex-row' style={{ marginTop: "50px" }}>

            <img className="images" src={image} alt="Card image cap" />

            <div style={{ marginLeft: "40px" }}>
                <h1 style={{ fontFamily: 'arial' }}>{title}</h1>
                <p style={{ fontFamily: 'arial', fontSize: '20px' }}>{description}</p>
                <h1 style={{ fontSize: '50px', fontFamily: 'arial', fontWeight: 'bold', color: 'rgb(185, 76, 76)' }}>{price}₺</h1>

                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <CiCirclePlus onClick={increment} style={{ fontSize: '40px', marginRight: '15px' }} />
                    <span style={{ fontSize: '35px' }}>{count}</span>
                    <CiCircleMinus onClick={decrement} style={{ fontSize: '40px', marginLeft: '15px' }} />
                </div>
                <div>
                    <button onClick={addBasket} className='button-basket' >Sepete Ekle</button>
                </div>
            </div>

        </div>
    )
}

export default ProductDetails
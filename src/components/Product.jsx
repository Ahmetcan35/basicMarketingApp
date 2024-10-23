import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Product.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Product({ product }) {
    const { id, price, image, title, description } = product;
    const navigate = useNavigate();

    return (
        <div className='card' >
            <div className='img-div'><img className="card-image" src={image} alt="Card image cap" /></div>

            <div className="card-body">
                <h5 className="card-title" title={title}>{title}</h5>
                <p className="card-text">{price} ₺</p>
                <button onClick={() => navigate("/product-details/" + id)} className="btn btn-primary">Detaya Git</button>

            </div>
        </div >
    )
}

export default Product
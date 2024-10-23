import React from 'react'
import '../css/Header.css'
import { useNavigate } from "react-router-dom"
import { FaBasketShopping } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import Badge from '@mui/material/Badge';
import { setDrawer } from '../redux/slices/basketSlice';
function Header() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { products } = useSelector((store) => store.basket);
    return (
        <div style={{
            display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between"
        }}>
            <div className='flex-row' onClick={() => navigate("/")}>
                <img className='logo' src="./src/images/logo.png" alt="" />
                <p className='headerTitle'>YORUKICHI</p>
            </div>
            <div className='flex-row'>
                <input className='search-input' type="text" name="" id="" placeholder='Ara' />
                <div>
                    <Badge onClick={() => dispatch(setDrawer())} badgeContent={products.length} color="primary">
                        <FaBasketShopping className='icons' />
                    </Badge>
                </div>
            </div>
        </div>

    )
}

export default Header
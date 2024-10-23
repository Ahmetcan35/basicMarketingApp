import { useState, useEffect } from 'react'
import Header from './components/Header'
import PageContainer from './container/PageContainer'
import ProductList from './components/ProductList'
import Loading from './components/Loading'
import ProductDetails from './components/ProductDetails'
import RouterConfig from './config/RouterConfig'
import { useDispatch, useSelector } from 'react-redux'
import { calculateBasket, setDrawer, dropToBasket } from './redux/slices/basketSlice'
import Drawer from '@mui/material/Drawer';
import './App.css'



function App() {
  const { products, drawer, totalAmount } = useSelector((store) => store.basket);
  const dispatch = useDispatch();
  const { id, price, image, title, description, count } = products;
  useEffect(() => {
    dispatch(calculateBasket());
  }, [])
  const deleteBasket = () => {
    const payload = {
      id,
      price,
      image,
      title,
      description,
      count
    }

    dispatch(dropToBasket(payload));
    dispatch(calculateBasket());
  }
  return (
    <div className="header">
      <PageContainer PageContainer >
        <Header />
        <RouterConfig />
        <Drawer className='drawer' sx={{ padding: '20px' }} onClose={() => dispatch(setDrawer())} anchor='right' open={drawer} >
          {
            products && products.map((product) => {
              return (
                <div key={product.id}>
                  <div className='flex-row' style={{ padding: '20px' }}>
                    <img style={{ marginRight: '5px' }} src={product.image} width={50} height={50} />
                    <p style={{ width: '320px', marginRight: '5px' }}>{product.title}({product.count})</p>
                    <p style={{ fontWeight: 'bold', marginRight: '10px', width: '60px' }}>{product.price}TL</p>
                    <button style={{ padding: '5px', borderRadius: '5px', backgroundColor: 'rgb(185, 76, 76)', border: 'none', color: '#fff', width: '50px' }} >sil</button>
                  </div>


                </div>
              )
            })
          }
          <div>
            <p style={{ textAlign: 'center' }}> toplam tutar : {totalAmount}</p>
          </div>
        </Drawer>
        <Loading />
      </PageContainer>
    </div >
  )
}

export default App

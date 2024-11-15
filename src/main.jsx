import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './app.css'
import { ApiProvider } from './components/layout/Context/ProductContext.jsx'
import { FilterContextProvider } from './components/layout/Context/FilterContext.jsx'
import { CartProvider } from './components/layout/Context/CartContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ApiProvider>
     <FilterContextProvider>
      <CartProvider>
        <App />
      </CartProvider>
      
    </FilterContextProvider>
    </ApiProvider>
   
  </StrictMode>,
)

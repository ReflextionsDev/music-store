import { useState } from 'react';
import CustomThemeProvider from './components/CustomThemeProvider';
import CartPage from './components/pages/CartPage';
import HomePage from './components/pages/HomePage';

function App() {

  const [page, setPage] = useState('homePage')

  return (
    <CustomThemeProvider>
      <button onClick={() => setPage('homePage')}>Home Page</button>
      <button onClick={() => setPage('cartPage')}>Cart Page</button>
      {page === 'homePage' ? <HomePage/> : <CartPage/>}
    </CustomThemeProvider>
  );
}

export default App;

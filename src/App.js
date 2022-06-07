import CustomThemeProvider from './components/CustomThemeProvider';
import CartPage from './components/pages/CartPage';
import HomePage from './components/pages/HomePage';

function App() {
  return (
    <CustomThemeProvider>
      {/* <HomePage /> */}
      <CartPage/>
    </CustomThemeProvider>
  );
}

export default App;

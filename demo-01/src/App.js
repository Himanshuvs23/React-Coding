import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FakestoreHome } from './react-router/fakestore-home';
import { FakestoreDetails } from './react-router/fakestore-details';
import { FakestoreProducts } from './react-router/fakestore-products';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <header className='text-center p-2 border border-2 mt-4'>
      <h3>Fakestore</h3>
      </header>
       <section className='mt-4'>
          <Routes>
           <Route path="/" element={<FakestoreHome />} />
           <Route path='products/:category' element={<FakestoreProducts />} />
           <Route path='/details/:id' element={<FakestoreDetails />} />

          </Routes>
       </section>
      </BrowserRouter>
    </div>
  );
}

export default App;

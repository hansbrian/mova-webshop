import './App.css';

import { NavBar, CollectionList, CategoryList, ItemList, ItemDetail, Cart } from './components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <CategoryList />
                <CollectionList />
              </>
            }
          ></Route>
          <Route exact path="/collection/:collectionId" element={<ItemList />}></Route>
          <Route exact path="/category/:categoryId" element={<ItemList />}></Route>
          <Route exact path="/item/:itemId" element={<ItemDetail />}></Route>
          <Route exact path="/cart" element={<Cart />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

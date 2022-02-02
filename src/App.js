import './App.css';
//Importing Components
import CategoryList from './components/CategoryList';
import CollectionList from './components/CollectionList';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <CategoryList />
      <CollectionList />
    </div>
  );
}

export default App;

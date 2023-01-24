import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BookList from './components/book/BookList';
import BookDetail from './components/book/BookDetail';
import './App.css';


function App() {
  // TODO: Add routes to books & views
  return (
    <main className="container">
      <h1>Library Catalog</h1>
      <BookList />
    </main>
  );
}

export default App;

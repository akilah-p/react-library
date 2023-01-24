import BookList from './components/book/BookList';
import BookDetail from './components/book/BookDetail';
import { Route, Switch } from 'react-router-dom';
import './App.css';


function App() {
  // TODO: Add routes to books & views
  return (
    <main className="container">
      <h1>Library Catalog</h1>
      <Switch>
        <Route exact path ="/" component={BookList} />
        <Route exact path="/books" component={BookList} />
        <Route exact path ="/books/:id" component={BookDetail} />
      </Switch>
    </main>
  );
}

export default App;

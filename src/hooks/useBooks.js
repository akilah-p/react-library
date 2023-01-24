import { useEffect, useState } from 'react';
import { getBooks } from '../services/books';
import { Link } from 'react-router-dom';
import Book from '../components/book/Book';


export function useBooks() {
  const [error, setError] = useState('');
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    getBooks()
      .then(({ data }) => setBooks(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);
  if (loading) return <h1>Loading...</h1>;

  return (
    <section className="books">
      <Link to="/">&laquo; Back to Homepage</Link>
      <ul className="use-books" aria-label="book list">
        {books.map((book) => (
          <li key ={book.book_id}>
            <Link to={`/books/${book.book_id}`}></Link>
            <Book book={book} />
          </li>
        ))}
      </ul>
    </section>
  );
}
export default useBooks;

import { useEffect, useState } from 'react';
import { getBookById } from '../services/books';
import { useParams } from 'react-router-dom';
import Book from '../components/book/Book';

export function useBookDetail() {
  const [book, setBook] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    getBookById(id).then(({ data }) => setBook(data));
  }, [id]);

  try {
    setLoading(false);
  } catch (e) {
    setError(e.message);
  }
  
  if (loading) return <h3>Loading...</h3>;
  
  return <Book book={book} error={error} showDetail />;
}

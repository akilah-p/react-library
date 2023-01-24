import Author from '../author/Author';
import './Book.css';
import { Link } from 'react-router-dom';

function Book({
  book: { title, total_pages: totalPages, rating, isbn, published_date: publishedDate, authors },
  showDetail = false,
}) {
  return (
    <article className="book">
      {showDetail && (
        <>
          <Link to="/books">&laquo; Back to the Catalog</Link>
          <hr />
        </>
      )}
      <h3>{title}</h3>
      <address>
        {authors.map((author) => (
          <Author key={author.author_id} author={author} />
        ))}
      </address>
      {showDetail && (
        <>
          <p>Rating: {rating}</p>
          <p>ISBN: {isbn}</p>
          <p>Published {publishedDate}</p>
          <p>{totalPages} pages</p>
        </>
      )}
    </article>
  );
}

export default Book;

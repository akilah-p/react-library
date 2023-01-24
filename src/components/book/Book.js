import { Link } from 'react-router-dom';
import Author from '../author/Author';
import './Book.css';


function Book({
  book : { title, total_pages: totalPages, rating, isbn, published_date: publishedDate, authors },
  showDetail = false
}) {
  return (
    <Link to ={`/books/${showDetail.id}`} className ="book-link">
      <article className="book">
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
    </Link>
  );
}

export default Book;

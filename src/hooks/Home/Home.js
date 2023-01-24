import { Link } from 'react-router-dom';
import './Home.css';


export function Home() {
  return (
    <section>
      <h2>Welcome to the Library React App!</h2>
      <p className="home">
                Check out the amazing selection of books in our {''}
        <Link to="/books" aria-label="link to book list">
                    catalog
        </Link>
                .
      </p>
    </section>
  );
}
export default Home;
import { useState } from "react";
import "./index.css";
import BookForm from "./components/booksForm";
import BookTable from "./components/booksTable";

function App() {
	const [books, setBooks] = useState([]);
	const handleAddBook = (newBook) => {
		setBooks((prevBooks) => [...prevBooks, newBook]);
	};

	return (
		<div>
			<header className="app-header">📚 Book Keeper</header>
			<main >
				<BookForm onAddBook={handleAddBook} />
				<BookTable books={books} /> 
			</main>
		</div>
	);
}

export default App;
function BookTable({ books }) {

	if (books.length === 0) {
		return (
			<div >
				<p>No hay libros registrados todavía. Añade el primero usando el formulario.</p>
			</div>
		);
	}

	return (
		<div className="table-wrapper">
			<h2>Listado de libros ({books.length})</h2>
			<table className="book-table">
				<thead>
					<tr>
						<th>#</th>
						<th>Título</th>
						<th>Autor</th>
						<th>Año</th>
						<th>Género</th>
					</tr>
				</thead>
				<tbody>
					{books.map((book, index) => (
						<tr key={index}>
							<td>{index + 1}</td>
							<td>{book.titulo}</td>
							<td>{book.autor}</td>
							<td>{book.anio || "—"}</td>
							<td>{book.genero || "—"}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default BookTable;
import { useState } from "react";
function BookForm({ onAddBook }) {
	const defaultBook = {
		titulo: "",
		autor: "",
		anio: "",
		genero: ""
	}
	const [formData, setFormData] = useState(defaultBook);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev, [name]: value
		}
		));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!formData.titulo || !formData.autor) return;
		onAddBook(formData);
		setFormData(defaultBook);
	};
	return (
		<form className="book-form" onSubmit={handleSubmit}>
			<h2>Añadir libro</h2>
			<div className="form-group">
				<label>Título</label>
				<input name="titulo" value={formData.titulo} onChange={handleChange} placeholder="Título del libro" required />
			</div>
			<div className="form-group">
				<label>Autor</label>
				<input name="autor" value={formData.autor} onChange={handleChange} placeholder="Autor" required />
			</div>
			<div className="form-group">
				<label>Año</label>
				<input name="anio" type="number" value={formData.anio} onChange={handleChange} placeholder="Año de publicación" />
			</div>
			<div className="form-group">
				<label>Género</label>
				<input name="genero" value={formData.genero} onChange={handleChange} placeholder="Género literario" />
			</div>
			<button type="submit" className="btn-submit">Añadir a la tabla</button>
		</form>
	);
}
export default BookForm;
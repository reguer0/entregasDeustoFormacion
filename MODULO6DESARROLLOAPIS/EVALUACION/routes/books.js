

const books = [
    {
        id: "1",
        titulo: "Cien años de soledad",
        autor: "Gabriel García Márquez",
        editorial: "Sudamericana"
    },
    {
        id: "2",
        titulo: "Don Quijote de la Mancha",
        autor: "Miguel de Cervantes",
        editorial: "Francisco de Robles"
    },
    {
        id: "3",
        titulo: "La sombra del viento",
        autor: "Carlos Ruiz Zafón",
        editorial: "Planeta"
    },
    {
        id: "4",
        titulo: "El nombre de la rosa",
        autor: "Umberto Eco",
        editorial: "Lumen"
    }
];
const router = require("express").Router();

const validateBookData = (book) => {
    const { id, titulo, autor, editorial } = book;
    const arrayBookData = [id, titulo, autor, editorial];

     if (arrayBookData.some(data => !data || data.trim() === "")) {
        return "todos los campos deben estar rellenos";
    }
 return null;
}

const mensajeError = (req, res)=>{
    const error = validateBookData(req.body);
    if (error) {
        return res.status(400).json({ error });
    }
    return false;
}
/**
 * @swagger
 * /api/books:
 *   get:
 *     summary: Obtiene todos los libros
 *     responses:
 *       200:
 *         description: Lista de libros
 */
router.get('/',(req,res)=>{
    res.json(books)
});
/**
 * @swagger
 * /api/books/{id}:
 *   put:
 *     summary: Actualiza un libro por su ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Libro encontrado
 *       404:
 *         description: Libro no encontrado
 */
router.put('/:id',(req,res)=>{   
    if (mensajeError(req, res)) return;
    const bookIndex = books.findIndex(book => book.id === req.params.id);    
    books[bookIndex] = req.body;
    res.status(200).json(req.body);
});
/**
 * @swagger
 * /api/books:
 *   post:
 *     summary: Crea un nuevo libro
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *               titulo:
 *                 type: string
 *               autor:
 *                 type: string
 *               editorial:
 *                 type: string
 *     responses:
 *       201:
 *         description: Libro creado exitosamente
 */

router.post('/',(req,res)=>{
    if (mensajeError(req, res)) return;
    books.push(req.body);
    res.status(201).json(req.body);
});
/**
 * @swagger
 * /api/books/{id}:
 *   delete:
 *     summary: Elimina un libro por su ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Libro eliminado exitosamente
 */
router.delete('/:id',(req,res)=>{
    const bookIndex = books.findIndex(book=> book.id === req.params.id);  
    books.splice(bookIndex, 1);
    res.status(204).end();
});

module.exports = router;



        
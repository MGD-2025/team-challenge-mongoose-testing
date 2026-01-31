const express = require ('express')
const router = express.Router()
const Post = require ('../models/Post')
const postController = require('../controllers/PostControllers')


//- POST /create: Endpoint para crear una publicación.
router.post('/create', postController.createPost)

//- GET /: Endpoint para traer todas las publicaciones.
router.get('/', postController.getAllPost)

//- GET /id/:_id: Endpoint para buscar publicación por id.
router.get('/id/:_id', postController.getPostById)


//- GET /title/:title: Endpoint para buscar una publicación por su titulo.
router.get('/title/:title', postController.getPostByTitle)

//- PUT /id/:_id: Endpoint para actualizar una publicación.
router.put ('/id/:_id',postController.updatePost)

//- DELETE /id/:_id: Endpoint para eliminar una publicación.
router.delete ('/id/:_id', postController.deletePost)


module.exports = router
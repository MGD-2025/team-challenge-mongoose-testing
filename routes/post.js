const express = require ('express')
const router = express.Router()
const Post = require ('../models/Post')


router.get ('/', (req, res)=>{
    res.send('post')
})
//- POST /create: Endpoint para crear una publicación.
router.post('/create', async (req, res) => {
    try {
    const post = await Post.create(req.body);
    res.status(201).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

function addPost (title, body){
    const newPost = {
        id: id++, 
        title, 
        body
    }

    if (title === undefined || body === undefined){
        throw new Error (' Title and body are required')
    }
};


//- GET /: Endpoint para traer todas las publicaciones.
router.get('/', async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
});

function getPost (){
    return posts
};
//- GET /id/:_id: Endpoint para buscar publicación por id.
router.get('/id/:_id', async (req, res)=>{
    const id =await Post.findById(id);
    res.json (id);
});

function getPostId (postId) {
    const posts = Post.find ((post) => post.id === postId);
    return posts
};


//- GET /title/:title: Endpoint para buscar una publicación por su titulo.
router.get('/title/:title', async (req, res)=>{
    const post = await Post.findOne({title: req.params.title});
    res.json (post);

});

function getPostTitle (postTitle) {
    const posts = Post.find ((post) => post.title === postTitle);
    return posts
};


//- PUT /id/:_id: Endpoint para actualizar una publicación.
router.put ('/id/:_id', async (req, res)=>{
    const id = await Post.findByIdAndUpdate(req.params._id, req.body, {new: true});
    res.json (id);
});

//- DELETE /id/:_id: Endpoint para eliminar una publicación.
router.delete ('/id/:_id', async (req, res)=>{
    const post = await Post.findByIdAndDelete(req.params._id);
    res.json ({message:'Post deleted'});
})

module.exports ={addPost,getPost, getPostId, getPostTitle }
module.exports = router
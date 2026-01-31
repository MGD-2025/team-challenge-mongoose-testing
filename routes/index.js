const express = require ('express');
const router = express.Router()

const postRouter = require ('./post')

router.use ('/', postRouter)

module.exports= router
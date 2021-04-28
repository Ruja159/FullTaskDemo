const express = require('express')
const router = express.Router();

const auth = require('../jwtVerify')

const {
    getArticles,
    getArticleById,
    addNewArticle,
    updateArticle,
    deleteArticle } = require('../controllers/articlesController')



router.route('/').get(auth,getArticles).post(auth,addNewArticle)
router.route('/:id').get(auth,getArticleById).put(auth,updateArticle).delete(auth,deleteArticle)

module.exports = router
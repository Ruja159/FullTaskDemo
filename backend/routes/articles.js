const express = require('express')
const router = express.Router();

const auth = require('../jwtVerify')

const {
    getArticles,
    getArticleById,
    addNewArticle,
    updateArticle,
    deleteArticle,
    getArticleByType 
} = require('../controllers/articlesController')



router.route('/').get(auth,getArticles).post(auth,addNewArticle)
router.route('/:id').get(auth,getArticleById,getArticleByType).put(auth,updateArticle).delete(auth,deleteArticle)
router.route('/type/:type').get(auth,getArticleByType)

module.exports = router
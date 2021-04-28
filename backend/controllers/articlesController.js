const data = require('../data/data')

const getArticles = (req, res) => {
    res.send(data.sellingArticles)
}

const getArticleById = (req, res) => {
    const newArticle = data.sellingArticles.find(a => a.id === parseInt(req.params.id));
    res.json(newArticle)
}

const addNewArticle = (req, res) => {

    const title = req.body.title
    const existingArticle = data.sellingArticles.find(article => article.title === title)
    if (existingArticle) {
        res.status(200).json({ success: false, msg: 'This article already existing!!' })
    } else {
        const newArticle = {
            id: data.sellingArticles.length + 1,
            title: req.body.title,
            summary: req.body.summary,
            price: req.body.price,
            photo: req.body.photo
        }
        data.sellingArticles.push(newArticle);
        res.json(newArticle);
    }
}

const updateArticle = (req, res) => {
    const existingArticle = data.sellingArticles.find(article => article.id === parseInt(req.params.id))
    if (!existingArticle) {
        res.status(404).json({ msg: 'The article with given ID was not found' })
    }

    existingArticle.title = req.body.title;
    existingArticle.summary = req.body.summary;
    existingArticle.price = req.body.price;
    existingArticle.photo = req.body.photo;

    res.json(existingArticle)
}

const deleteArticle = (req, res) => {
    const id = req.params.id
    const deletedArticle = data.sellingArticles.findIndex(a => a.id == id);
    if (deletedArticle > -1) {
        data.sellingArticles.splice(deletedArticle, 1);
        res.json(data.sellingArticles)
    } else {
        res.json({ msg: "the article doesnt exist" })
    }

}

module.exports = {
    getArticles,
    getArticleById,
    addNewArticle,
    updateArticle,
    deleteArticle
}
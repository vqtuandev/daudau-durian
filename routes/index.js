var express = require('express');
var router = express.Router();

const mainControllers = require("../controllers/mainControllers");

/* GET home page. */
router.get('/', mainControllers.renderHomePage);
router.get('/category', mainControllers.renderCategoryPage);
router.get('/product/:id', mainControllers.renderProductPage);
router.get('/blog', mainControllers.renderBlogPage);
router.get('/blog/:id', mainControllers.renderArticlePage);

module.exports = router;

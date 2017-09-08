const Router = require("koa-router");
const articlesController = require("../controllers/articlesController");

const router = new Router();
const BASE_URL = `/api/v1/articles`;

router.get(`${BASE_URL}`, articlesController.index);
router.get(`${BASE_URL}/:id`, articlesController.show);
router.post(`${BASE_URL}`, articlesController.create);

module.exports = router;

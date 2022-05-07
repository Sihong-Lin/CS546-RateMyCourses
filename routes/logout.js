const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    req.session.destroy();
    res.status(200).json({ signout: true });
});

module.exports = router;

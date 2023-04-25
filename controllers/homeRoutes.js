const router = require('express').Router();
const { Post, User } = require('../models');
const Auth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [
                { 
                    model: User,
                    attributes: ['username'],
                },
            ],
        });

        const posts = postData.map((post) => post.get ({ plain: true }));
        res.render('homepage', {
             posts,
             logged_in: req.session.logged_in
        
         });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/dashboard', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [
                { 
                    model: User,
                    attributes: ['username'],
                },
            ],
        });

        const posts = postData.map((post) => post.get ({ plain: true }));
        res.render('dashboard', {
             posts,
             logged_in: req.session.logged_in
        
         });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/homepage', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [
                { 
                    model: User,
                    attributes: ['username'],
                },
            ],
        });

        res.render('homepage', {
            games,
          });
        } catch (err) {
          console.log(err);
          res.status(500).json(err);
        }
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect ('/profile');
        return;
    }

    res.render('login');
});

module.exports = router;


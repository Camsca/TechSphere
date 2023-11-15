const router = require('express').Router();
const {BlogPost,User,comments } = require('../../models');

// GET all blog posts

router.get('/', async (req, res) => {
    try{
        const dbBlogPost= await BlogPost.findAll();
        include [
            { model: User, attributes: ['username'] },
        ]
    }
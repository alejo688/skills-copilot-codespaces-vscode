// Create web server
// Create a new express server
const express = require('express');
const app = express();
// Create a new JSON body parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
// Create a new comment array
const comments = [];
// Create a new comment counter
let commentCounter = 0;
// Create a new comment route
app.post('/comments', (req, res) => {
    // Create a new comment object
    const comment = {
        id: commentCounter++,
        body: req.body.body
    };
    // Add the comment to the comments array
    comments.push(comment);
    // Send the comment as JSON response
    res.json(comment);
});
// Create a new comment route
app.get('/comments', (req, res) => {
    // Send the comments as JSON response
    res.json(comments);
});
// Create a new comment route
app.get('/comments/:id', (req, res) => {
    // Find the comment by id
    const comment = comments.find(comment => comment.id === parseInt(req.params.id));
    // If no comment is found, send an error message
    if (!comment) {
        return res.status(404).send('The comment with the given ID was not found');
    }
    // Send the comment as JSON response
    res.json(comment);
});
// Create a new comment route
app.put('/comments/:id', (req, res) => {
    // Find the comment by id
    const comment = comments.find(comment => comment.id === parseInt(req.params.id));
    // If no comment is found, send an error message
    if (!comment) {
        return res.status(404).send('The comment with the given ID was not found');
    }
    // Update the comment body
    comment.body = req.body.body;
    // Send the comment as JSON response
    res.json(comment);
});
// Create a new comment route
app.delete('/comments/:id', (req, res) => {
    // Find the comment by id
    const comment = comments.find(comment => comment.id === parseInt(req.params.id));
    // If no comment is found, send an error message
    if (!comment) {
        return res.status(404).send('The comment with the given ID was not found');
    }
    // Find the index of the comment
    const index = comments.indexOf(comment);
    // Delete the
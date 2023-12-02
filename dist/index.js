"use strict";
const authorOne = { name: 'mario', avatar: '/avatar.png' };
const newPost = {
    title: 'test',
    body: 'test',
    tags: ['test'],
    create_at: new Date(),
    author: authorOne
};
// as function argument types
function createPost(post) {
    console.log(`Created post ${post.title} by ${post.author.name}`);
}
createPost(newPost);
// with arrays
let posts = [];
posts.push(newPost);

const tweeterModel = Tweeter()
const viewModel = tweeterView()


// $('#post').on('click', function () {
//     tweeterModel.addPost($("#input").val());
//     viewModel.renderPosts(tweeterModel.getPosts());
//     viewModel.clearInput()
// })

const post = function () {
    tweeterModel.addPost($("#input").val());
    viewModel.renderPosts(tweeterModel.getPosts());
    viewModel.clearInput()
    addEventListeners()
}

const deletePost = function(element) {
    let id = $(this).closest(".post")[0].id;
    id = id.replace("post-","")
    tweeterModel.removePost(id);
    viewModel.clearPost(id);
    addEventListeners()
}

const deleteComment = function(element) {
    let postId = $(this).closest(".post")[0].id.replace("post-","")
    let commentId = $(this).closest(".comment-text")[0].id.replace("comment-","")
    //ids = id.replace("comment-delete-","").split("-")
    tweeterModel.removeComment(postId,commentId);
    viewModel.renderPosts(tweeterModel.getPosts())
    addEventListeners()
}

const addComment = function(element) {
    let postId = $(this).closest(".post")[0].id.replace("post-","")
    let commentText = $(this).closest(".new-comment").find(".new-comment-text").val()
    //ids = id.replace("comment-delete-","").split("-")
    tweeterModel.addComment(commentText, postId);
    viewModel.renderPosts(tweeterModel.getPosts())
    addEventListeners()
}

const addEventListeners = function(){
    $(".delete-post").on("click", deletePost); 
    $(".delete-comment").on("click", deleteComment); 
    $(".add-comment").on("click", addComment);     
}

tweeterModel.addPost("This is my own post!")
tweeterModel.addComment("Damn straight it is!", "p3")
tweeterModel.addComment("Second the best!", "p2")

viewModel.renderPosts(tweeterModel.getPosts());
addEventListeners()
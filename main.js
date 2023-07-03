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
    $(".delete-post").on("click", deletePost); 
}

const deletePost = function(element) {
    id = element.currentTarget.id;
    id = id.replace("post-delete-","")
    tweeterModel.removePost(id);
    viewModel.clearPost(id);
    $(".delete-post").on("click", deletePost); 
}

const deleteComment = function(element) {
    let postId = $(this).closest(".post")[0].id.replace("post-","")
    let commentId = $(this).closest(".comment-text")[0].id.replace("comment-","")
    //ids = id.replace("comment-delete-","").split("-")
    tweeterModel.removeComment(postId,commentId);
    viewModel.renderPosts(tweeterModel.getPosts())
    $(".delete-post").on("click", deletePost); 
    $(".delete-comment").on("click", deleteComment); 
}

tweeterModel.addPost("This is my own post!")
tweeterModel.addComment("Damn straight it is!", "p3")
tweeterModel.addComment("Second the best!", "p2")

viewModel.renderPosts(tweeterModel.getPosts());
$(".delete-post").on("click", deletePost); 
$(".delete-comment").on("click", deleteComment); 
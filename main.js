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




viewModel.renderPosts(tweeterModel.getPosts());
$(".delete-post").on("click", deletePost); 
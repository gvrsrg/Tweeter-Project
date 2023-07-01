const tweeterView = function () {
    postsDiv = $("#posts")
    textInput = $("#input")

    const renderPosts = function (posts) {
        postsDiv.empty()

        for (let post of posts) {
            postsDiv.append(`<div class="post" id=post-${post.id}></div>`)
            postDiv = $(`#post-${post.id}`)
            postDiv.append(`<div class="post-text" id=post-text-${post.id}>${post.text}</div>`)
            postDiv.append(`<div class="delete-post" id=post-delete-${post.id}>DELETE POST</div>`)

            renderComments(post)
        }

    }

    const clearPost = function (id) {
        postDiv = $(`#post-${id}`)
        postDiv.remove()
    }
    
    const renderComments = function (post) {
        postDiv = $(`#post-${post.id}`)

        for (let comment of post.comments) {
            postDiv.append(`<div class="comments" id=comment-${comment.id}>${comment.text}</div>`)
            postDiv.append(`<div class="delete-comment" id=comment-delete-${post.id}-${comment.id}>X</div>`)        }

    }

    const clearComment = function (postId, commentId) {
        commentDiv = $(`#comment-${commentId}`)
        commentDiv.remove()
    }

    const clearInput = function () {

        textInput.val("")
        textInput.focus()

    }

    return {
        renderPosts,
        clearInput,
        clearPost,
        clearComment

    }

}
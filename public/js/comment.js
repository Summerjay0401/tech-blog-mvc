const commentInput = document.querySelector("#comment-input");
const commentButtonContainer = document.querySelector("#comment-button-container");
const buttonCancel = commentButtonContainer.querySelector("#comment-button-cancel");
const buttonComment = commentButtonContainer.querySelector("#comment-button-comment");
const formComment = document.getElementById("form-comment");

const hideButtons = () => {
    commentButtonContainer.classList.add("hide")
}

const showButtons = () => {
    commentButtonContainer.classList.remove("hide")
}

commentInput.addEventListener('focus', showButtons);

commentInput.addEventListener('blur', hideButtons);

buttonCancel.addEventListener('mousedown', () => {
    commentInput.value = '';
});

const postComment = async () => {

    const postId = document.getElementById("post-id").value;
    const comment = document.getElementById("comment-input").value;

    const obj = {
        postId,
        comment
    }

    const response = await fetch('/api/comment', {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: { 'Content-Type': 'application/json' },
    });
    
    if (response.ok)
        window.location.reload();

}

buttonComment.addEventListener('mousedown', postComment);

commentInput.addEventListener("keyup", async (event) => {
    event.preventDefault();
    console.log(event.keyCode )
    if (event.keyCode === 13) {
        postComment();
    }
});

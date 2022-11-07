const commentInput = document.querySelector("#comment-input");
const commentButtonContainer = document.querySelector("#comment-button-container");
const buttonCancel = commentButtonContainer.querySelector("#comment-button-cancel");
const buttonComment = commentButtonContainer.querySelector("#comment-button-comment");

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

buttonComment.addEventListener('mousedown', () => {
    console.log("comment!")
});

const newPostButton = document.getElementById("new-post");

if(newPostButton)
    newPostButton.addEventListener('click', () => {
        document.location.replace("/posts/create");
    });

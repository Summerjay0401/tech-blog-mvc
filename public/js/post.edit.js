const deleteButton = document.getElementById("button-post-delete");
const form = document.getElementById("form-edit-post");

form.addEventListener("submit", async (e) => {

    e.preventDefault();
    
    const data = new FormData(e.target);

    const obj = Object.fromEntries(data);

    const response = await fetch(`/api/posts/edit/${obj.id}`, {
        method: 'PUT',
        body: JSON.stringify(obj),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok)
        window.location.replace("/dashboard");

});

deleteButton.addEventListener("click", async () => {

    const data = new FormData(form);

    const obj = Object.fromEntries(data);

    const response = await fetch(`/api/posts/delete/${obj.id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    });
    
    if (response.status === 404)
        window.location.replace("/dashboard");
});

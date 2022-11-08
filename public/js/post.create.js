const form = document.getElementById("form-create-post");

form.addEventListener("submit", async (e) => {

    e.preventDefault();
    
    const data = new FormData(e.target);

    const obj = Object.fromEntries(data);

    const response = await fetch('/api/posts/create', {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok)
        window.location.replace("/dashboard");

});

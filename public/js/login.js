const formLogin = document.getElementById("form-login");

formLogin.addEventListener("submit", (e) => {

    e.preventDefault();
    
    const data = new FormData(e.target);

    const obj = Object.fromEntries(data);

    fetch("/api/login",
    {
        method: "POST",
        body: obj
    })
    .then(function(res){ return res.json(); })
    .then(function(data){ alert( JSON.stringify( data ) ) })

});

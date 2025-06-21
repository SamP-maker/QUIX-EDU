

let submitForm = () =>{
    let form = document.getElementById("form").addEventListener("submit", (e) =>{
        e.preventDefault();

        const formData = new FormData(this);
        const user = {
            username: formData.get("username"),
            email: formData.get("email")
        }


        document.getElementById("text").innerText = 
    `Hello, ${user.username}. Your email is ${user.email}`


    })


    
}
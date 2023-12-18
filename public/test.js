let div1 = document.getElementById("div1");
let div2 = document.getElementById("div2");

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let registerBtn = document.getElementById("submitRegister")

btn1.addEventListener('click', () => {
    div1.classList.remove("flex");
    div1.classList.add("hidden");
    div2.classList.remove("hidden");
    div2.classList.add("flex");
    btn1.classList.add("hidden");
    btn2.classList.remove("hidden");
});

btn2.addEventListener('click', () => {
    div2.classList.remove("flex");
    div2.classList.add("hidden");
    div1.classList.remove("hidden");
    div1.classList.add("flex");
    btn2.classList.add("hidden");
    btn1.classList.remove("hidden");
});



registerBtn.addEventListener('click',()=>{


    const email = document.getElementById('Remail').value;
    const name = document.getElementById('Rname').value;
    const password = document.getElementById('Rpassword').value;

    fetch('http://localhost:30000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, name, password }),
            }).then(response=>{
                if (!response.ok) {
                    return response.json().then(errorData => {
                        throw new Error(errorData.error || 'Registration failed');
                    });
                }
                return response.json();
            }).then(data=>{
                console.log(data)
                alert(data.message);
            }).catch(error => {
                console.error(error);
                alert('An error occurred during registration');
            });


})



// Additional event listener for btn1 (if needead)
// btn1.addEventListener('click', () => {
//     console.log("test");
// });

// Additional event listener for btn2 (if needed)
// btn2.addEventListener('click', () => {
//     console.log("test");
// });

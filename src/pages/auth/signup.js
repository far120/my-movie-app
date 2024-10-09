import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
export default function Forms() {
    const navigate = useNavigate();
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [cpassword, setcpassword] = useState("");
    const [accept, setaccept] = useState(false);
    
    function handleNameChange(e) {
        setname(e.target.value);
    }
    function handleEmailChange(e) {
        setemail(e.target.value);
    }
    function handlePasswordChange(e) {
        setpassword(e.target.value);
    }
    function handleCpasswordChange(e) {
        setcpassword(e.target.value);
    }

    function handleSubmit(e) {
        var flag = true;
        e.preventDefault();
        setaccept(true);
        if(name === "" || password.length < 8 || password !== cpassword){
            flag = false;
        }
        else{
           flag = true;
        }

        if(flag){
            
            // back-end  php api \\
//  let res =   axios.post(props.apiend,{
//         name: name,
//         email: email,
//         password: password,
//         password_confirmation: cpassword
//     })
//     .then(t => {
//         console.log(t);
//         if(t.status === 200){
//             console.log(t)
//             const token = t.data.data.token;
//             const userdata = t.data.data.user;
//             console.log(userdata)
//             usernow.setauth({token , userdata});
//             alert("Registered Successfully");
//             navigate(props.navigate);

//         }else{
//             alert("Error in registering");
//         }
//     })
//     .catch(err => {
//         console.log(err);
//         alert("Error in registering");
//     });
    

navigate("/login");
console.log(flag);
}
    }

    return (
        <div className="back-image">
        <div className="pa">
            <form className="forms" onSubmit={handleSubmit}>
                <h2>SignUp</h2>
                <label>Name:</label>
                <input type="text" value={name} id="name" onChange={handleNameChange} /><br />
                {accept && name === "" && <p>Name must be at least 1 character</p>}

                <label>Email:</label>
                <input type="email" value={email} id="email" onChange={handleEmailChange} /><br />

                <label>Password:</label>
                <input type="password" id="pass" onChange={handlePasswordChange} /><br />
                {accept && password.length < 8 && <p>Password must be greater than 8 characters</p>}

                <label>Confirm Password:</label>
                <input type="password" id="confirmPass" onChange={handleCpasswordChange} /><br />
                {accept && cpassword !== password && <p>Passwords do not match</p>}

                <input type="submit" value="register" />
            </form>
        </div>
        </div>
    );
}

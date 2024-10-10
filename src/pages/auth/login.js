import {useContext, useEffect , useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

export default function SignUp() {  // Changed the function name to be consistent.
    const navigate = useNavigate();
    var [email, setemail] = useState("");
    var [show, setshow] = useState(true);
    var [password, setpassword] = useState("");
    const [accept, setaccept] = useState(false);

    function he(e) {
        setemail(e.target.value);
    }
    // useEffect(() => {
    //     fetch("")
    //         .then(response => response.json())
    //         .then((data) => {
    //             let found = false;
    //             data.forEach(element => {
    //                 if (element.email === email) {
    //                     found = true;
    //                 }
    //             });
    //             setshow(found);
    //         })
    //         .catch((error) => console.error('Fetch error:', error));
    // }, [email]);
     function handleSubmit(e) {
        var flag = true;
        e.preventDefault();
        setaccept(true);
        if (password.length < 8 || !show || email != "admin@admin.com" || password!="123456789") {
            flag = false;
        } else {
            flag = true;
        }
        console.log(flag);

        if (flag) {
            window.localStorage.setItem("sign", true);
            navigate('/');
        } else {
            alert("Failed to log in. Please check your email or password.");
        }
            
        
    }

    return (
        <div className="back-image">
            <div className="pa">
                <form className="forms" onSubmit={handleSubmit}>
                    <h2 className='ff'>Login</h2>
                    <label className='ff'>Email:</label>
                    <input type="email" className='ff' id="email" onChange={he} /><br />
                    <label className='ff'>Password:</label>
                    <input type="password" className='ff' id="pass" onChange={(e) => setpassword(e.target.value)} /><br />
                    {password.length < 8 && accept && (
                        <p>Password must be greater than 8 characters</p>
                    )}
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
}

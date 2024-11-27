import {useContext, useEffect , useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

export default function SignUp() {  // Changed the function name to be consistent.
    const navigate = useNavigate();
    var [email, setemail] = useState("");
    var [show, setshow] = useState(true);
    var [password, setpassword] = useState("");
    const [accept, setaccept] = useState(false);

    function handelemail(e) {
        setemail(e.target.value);
    }
 
     function handleSubmit(e) {
        var flag = true;
        e.preventDefault();
        setaccept(true);
        if (password.length < 8 || !show || email != "user@user.com" || password!="123456789") {
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
                <h2 className="ff">Login</h2>
                <label className="ff" htmlFor="email">Email:</label>
                <input
                    type="email"
                    className="ff input-field"
                    id="email"
                    onChange={handelemail}
                />
                <label className="ff" htmlFor="pass">Password:</label>
                <input
                    type="password"
                    className="ff input-field"
                    id="pass"
                    onChange={(e) => setpassword(e.target.value)}
                />
                {password.length < 8 && accept && (
                    <p className="error-message">Password must be greater than 8 characters</p>
                )}
                <input type="submit" value="Submit" className="submit-button" />
            </form>
        </div>
    </div>
    
    );
}

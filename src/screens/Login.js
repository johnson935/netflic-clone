import React, {useState} from 'react'
import './Login.css'
import SignUpScreen from './SignUpScreen';
function Login() {
    const [signIn, setSignIn] = useState(false);
    return (
        <div className="login">
            <div className="login__background">
                <img className="login__logo"
                src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" />
            </div>
            <button className="login__button"
            onClick={() => setSignIn(true)}>
                Sign in
            </button>
            <div className="login__gradient">

            </div>

            <div className="login__body">
                {signIn ? (
                    <SignUpScreen />
                ) : (
                    <>
                    <h1>Unlimited films, TV programmes and more.</h1>
                <div className="login__input">
                <form>
                    <input type="email" placeholder="Email Address">
                    </input>
                    <button 
                    onClick={() => setSignIn(true)}
                    className="login__getStarted">
                        Get Started
                    </button>
                </form>
            </div>
            </>
                )}
            </div>
        </div>
    )
}

export default Login

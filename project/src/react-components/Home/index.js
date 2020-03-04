import React from "react";
import {} from "react-bootstrap";
import {Link, Redirect, withRouter} from "react-router-dom";
import Button from "@material-ui/core/Button";
import HomePage from "../HomePage"
import SignIn from "../SignIn"

import "./styles.css";

/* Component for the Home page */
class Home extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {};
        this.handleOnClick.bind(this);
    }

    
    handleOnClick(e) {
        this.props.history.push({
            pathname: "/signin",
            state: {role: e.target.innerText}
        })
    }

    signInBox() {
        return (
            <div className="center" id='prompt'>
                Please select your user type to login:
                <ul>
                    <li><Button id="student" className="login__button center" onClick={(e) => {
                        this.handleOnClick(e)
                    }}>STUDENT</Button></li>
                    <li><Button className="login__button center" onClick={(e) => {
                        this.handleOnClick(e)
                    }}>RESEARCHER</Button></li>
                    <li><Button className="login__button center" onClick={(e) => {
                        this.handleOnClick(e)
                    }}>ADMINISTRATOR</Button></li>
                </ul>
            </div>);
    }

    postSignIn(userType) {
        return <HomePage userType={userType}/>
    }

    render() {
        const userTypes = ["Student", "Researcher", "Administrator"]
        const hasSignIn = userTypes.includes(localStorage.getItem("userType"))
            || userTypes.includes(sessionStorage.getItem("userType"));

        if (hasSignIn) {
            let userType;
            if (userTypes.includes(localStorage.getItem("userType"))) {
                userType = localStorage.getItem("userType");
            } else {
                userType = sessionStorage.getItem("userType");
            }
            return this.postSignIn(userType);
        } else {
            return this.signInBox();
        }  
    }
}

export default withRouter(Home);
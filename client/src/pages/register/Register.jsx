import "./Register.scss";
import {Frame, Input, Button, TitleBar } from "@react95/core";
import { CurvesAndColors100, Drvspace7 } from "@react95/icons";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="register">
            <Frame w={300} h={300}>
                <TitleBar icon={<CurvesAndColors100 variant="16x16_4"/>} title="Login.exe"/>
            <h1>Register</h1>
                <Drvspace7 variant="32x32_4" />
                <br/>
            <form>
                <Input type="text" placeholder="Username..."></Input>
                <Input type="password" placeholder="Password..."></Input>
                <Button>Register</Button>
            </form>
            </Frame>
            <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
    );
}

export default Register;
import React, { useState } from "react";
import { Redirect, Link } from "react-router-dom";
import { Container, Row, Col } from "../../components/Grid/index";
import { Input, FormBtn } from "../../components/Form/index";
import AUTH from "../../utils/AUTH";


function SignupForm() {
    const [userObject, setUserObject] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        redirectTo: null
    });
    const [redirectTo, setRedirectTo] = useState(null);
    const handleChange = (event) => {
        setUserObject({
            ...userObject,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        AUTH.signup({
            username: userObject.username,
            email: userObject.email,
            password: userObject.password,
        }).then(response => {
            if (!response.data.errmsg) {
                setRedirectTo('/login');
            } else {
            }
        });
    };

    if (redirectTo) {
        return <Redirect to={{ pathname: redirectTo }} />
    }

    return (
        <>
            <main>
                <Container>
                    <Row>
                        <Col size="md-3"></Col>
                        <Col size="md-6">
                            <div style = {{color: "whitesmoke"}} className="hello">
                                Register here!
              </div>
                            <form style={{ marginTop: 10 }}>
                                {/* <label htmlFor="username">Username: </label> */}
                                <Input
                                    type="text"
                                    name="username"
                                    value={userObject.username}
                                    onChange={handleChange}
                                    placeholder="username"
                                    class="form__field"
                                />
                                {/* <label htmlFor="email">Email: </label> */}
                                <Input
                                    type="text"
                                    name="email"
                                    value={userObject.email}
                                    onChange={handleChange}
                                    placeholder="email"
                                    class="form__field"
                                />
                                {/* <label htmlFor="password">Password: </label> */}
                                <Input
                                    type="password"
                                    name="password"
                                    value={userObject.password}
                                    onChange={handleChange}
                                    placeholder="password"
                                    class="form__field"
                                />
                                {/* <label htmlFor="confirmPassword">Confirm Password: </label> */}
                                <Input
                                    type="password"
                                    name="confirmPassword"
                                    value={userObject.confirmPassword}
                                    onChange={handleChange}
                                    placeholder="confirm password"
                                    class="form__field"
                                />
                                <Link to="/login">Login</Link>
                                <FormBtn onClick={handleSubmit}>Register</FormBtn>
                            </form>
                        </Col>
                        <Col size="md-3"></Col>
                    </Row>
                </Container>
            </main>
        </>
    );
}

export default SignupForm;
import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {Alert, Button, Form} from "react-bootstrap";
import "react-phone-number-input/style.css";
import {useUserAuth} from "../context/UserAuthContext";

const PhoneSignUp = () => {
    const [error, setError] = useState("");
    const [number, setNumber] = useState("");
    const [flag, setFlag] = useState(false);
    const [otp, setOtp] = useState("");
    const [result, setResult] = useState("");
    // @ts-ignore
    const { setUpRecaptcha } = useUserAuth();
    const navigate = useNavigate();

    const getOtp = async (e:any) => {
        e.preventDefault();
        console.log(number);
        setError("");
        if (number === "" || number === undefined)
            return setError("Please enter a valid phone number!");
        try {
            const response = await setUpRecaptcha(number);
            setResult(response);
            setFlag(true);
        } catch (err:any) {
            setError(err.message);
        }
    };

    const verifyOtp = async (e:any) => {
        e.preventDefault();
        setError("");
        if (otp === "" || otp === null) return;
        try {
            // @ts-ignore
            await result.confirm(otp);
            navigate("/home");
        } catch (err:any) {
            setError(err.message);
        }
    };

    // @ts-ignore
    return (
        <>
            <div className="p-4 box">
                <h2 className="mb-3">Firebase Phone Auth</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={getOtp} style={{ display: !flag ? "block" : "none" }}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <input
                            type="tel"
                            className="form-control"
                            value={number}
                            onChange={(e)=>setNumber(e.target.value)}
                            placeholder="Enter Phone Number"
                        />
                        <small id="emailHelp" className="form-text text-muted">Enter Phone Number with Country Code</small>
                        <div id="recaptcha-container"></div>
                    </Form.Group>
                    <div className="button-right">
                        <Link to="/">
                            <Button variant="secondary">Cancel</Button>
                        </Link>
                        &nbsp;
                        <Button type="submit" variant="primary">
                            Send Otp
                        </Button>
                    </div>
                </Form>

                <Form onSubmit={verifyOtp} style={{ display: flag ? "block" : "none" }}>
                    <Form.Group className="mb-3" controlId="formBasicOtp">
                        <Form.Control
                            type="otp"
                            placeholder="Enter OTP"
                            onChange={(e) => setOtp(e.target.value)}
                        />
                    </Form.Group>
                    <div className="button-right">
                        <Link to="/">
                            <Button variant="secondary">Cancel</Button>
                        </Link>
                        &nbsp;
                        <Button type="submit" variant="primary">
                            Verify
                        </Button>
                    </div>
                </Form>
            </div>
        </>
    );
};

export default PhoneSignUp;
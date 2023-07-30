import { Alert, Col, Row } from "react-bootstrap"
import { useState, useEffect } from "react"
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const NewsLetter = ({ onValidated, status, message }) => {
    const [ email, setEmail ] = useState('')
    useEffect(() => {
        if (status === 'success') {
            clearFields()
        }
    }, [status])
    const handleSubmit = (e) => {
        e.preventDefault()
        email &&
        email.indexOf('@') > -1 &&
        onValidated ({
            EMAIL: email
        })
    }
    const clearFields = () => {
        setEmail('');
    }
    return (
        <Col lg={12}>
            <div className="newsletter-bx">
                <Row>
                    <Col lg={12} md={6} xl={5}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                                <h3>Subscribe to our NewsLetter</h3>
                                {status === 'sending' && <Alert>Sending...</Alert>}
                                {status === 'error' && <Alert variant="danger">{message}</Alert>}
                                {status === 'success' && <Alert variant="success">{message}</Alert>}
                            </div>}
                        </TrackVisibility>
                    </Col>
                    <Col md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                                <form onSubmit={handleSubmit}>
                                    <div className="new-email-bx">
                                        <input type="email" value={email} placeholder="Email"
                                            onChange={(e) => setEmail(e.target.value)} />
                                        <button type="submit">Submit</button>
                                    </div>
                                </form>
                            </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </div>
        </Col>
    )
}
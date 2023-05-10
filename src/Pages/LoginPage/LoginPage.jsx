import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './LoginPage.css'
import useLoginPage from './useLoginPage';


const LoginPage = (props) => {


  const {
    emailAddress,
    setEmailAddress,
    password,
    setPassWord,
    handleFormSubmit
  } = useLoginPage(props)


  return (
    <div className='loginPageMainContainer'>
      <Form onSubmit={(e) => handleFormSubmit(emailAddress, password, e)} className='formContainer'>
        <h1 className='headertext mb-4'>Market Pro</h1>
        <Form.Group className="mb-5 rounded-5" controlId="formBasicEmail">
          <Form.Control
            className='buttonClass'
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmailAddress(e.target.value)}
            value={emailAddress}
          />
        </Form.Group>

        <Form.Group className="mb-4" controlId="formBasicPassword">
          <Form.Control
            className='buttonClass'
            type="password"
            placeholder="Password"
            onChange={(e) => setPassWord(e.target.value)}
            value={password}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default LoginPage
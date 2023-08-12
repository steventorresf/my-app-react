import logo from './logo.svg';
import './App.css';
import { Form, FormGroup, FormLabel } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Form>
        <FormGroup>
          <FormLabel>Nombre de usuario:</FormLabel>
          <input className='form-control' required />
        </FormGroup>
        <FormGroup className='mt-3'>
          <FormLabel>Contraseña:</FormLabel>
          <input type='password' className='form-control' required />
        </FormGroup>
      </Form>
    </div>
  );
}

export default App;

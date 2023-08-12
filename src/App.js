import logo from './logo.svg';
import './App.css';
import { Button, Form, FormGroup, FormLabel } from "react-bootstrap";

function App() {
  function onSubmit() {

  }
  
  return (
    <div className="App">
      <Form onSubmit={onSubmit}>
        <FormGroup>
          <FormLabel>Nombre de usuario:</FormLabel>
          <input className='form-control' required />
        </FormGroup>
        <FormGroup className='mt-3'>
          <FormLabel>Contraseña:</FormLabel>
          <input type='password' className='form-control' required />
        </FormGroup>
        <FormGroup className='mt-3 text-center'>
          <Button type='submit'>Iniciar sesión</Button>
        </FormGroup>
      </Form>
    </div>
  );
}

export default App;

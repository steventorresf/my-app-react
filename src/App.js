import logo from './logo.svg';
import './App.css';
import { Form, FormGroup, FormLabel } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Form>
        <FormGroup>
          <FormLabel>Nombre de usuario:</FormLabel>
          <input className='form-control' />
        </FormGroup>
      </Form>
    </div>
  );
}

export default App;

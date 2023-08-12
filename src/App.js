import './App.css';
import { Button, Form, FormGroup, FormLabel } from "react-bootstrap";
import Swal from 'sweetalert2';
import * as Yup from 'yup';

const yupSchema = Yup.object().shape({
    tipoId: Yup.object().required("Este campo es obligatorio"),
    identificacion: Yup.string().required("Este campo es obligatorio"),
    nombreCompleto: Yup.string().required("Este campo es obligatorio"),
    generoId: Yup.object().required("Este campo es obligatorio"),
    direccion: Yup.string().required("Este campo es obligatorio"),
    telCel: Yup.string().required("Este campo es obligatorio")
})

function App() {
  function onSubmit() {
    Swal.fire({
      title: '¡Proceso exitoso!',
      text: 'Inicio de sesión correcto'
    })
  }

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
        <FormGroup className='mt-3 text-center'>
          <Button type='button' onClick={onSubmit}>Iniciar sesión</Button>
        </FormGroup>
      </Form>
    </div>
  );
}

export default App;

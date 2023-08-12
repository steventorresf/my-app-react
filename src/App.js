import { Formik, Form, Field, ErrorMessage } from 'formik';
import './App.css';
import { Button, FormGroup, FormLabel } from "react-bootstrap";
import Swal from 'sweetalert2';
import * as Yup from 'yup';

const yupSchema = Yup.object().shape({
  username: Yup.string().required("Este campo es obligatorio"),
  password: Yup.string().required("Este campo es obligatorio")
})

function App() {
  return (
    <div className="App">
      <Formik
        initialValues={{}}
        validationSchema={yupSchema}
        onSubmit={(values) => {
          Swal.fire({
            title: '¡Proceso exitoso!',
            text: 'Usted ha iniciado sesión correctamente',
            allowOutsideClick: false
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.reload();
            }
          })
        }}>
        {({ values, setFieldValue }) => (
          <Form autoComplete='off'>
            <FormGroup>
              <FormLabel>Nombre de usuario:</FormLabel>
              <Field className={'form-control'} name={'username'} required />
              <ErrorMessage className='text-danger' component={'div'} name={'username'} />
            </FormGroup>
            <FormGroup className='mt-3'>
              <FormLabel>Contraseña:</FormLabel>
              <Field type='password' className={'form-control'} name={'password'} required />
              <ErrorMessage className='text-danger' component={'div'} name={'password'} />
            </FormGroup>
            <FormGroup className='mt-3 text-center'>
              <Button type='submit'>Iniciar sesión</Button>
            </FormGroup>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default App;

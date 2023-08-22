import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button, FormGroup, Row } from "react-bootstrap";
import uuid from "react-uuid";
import * as Yup from 'yup';

const yupSchema = Yup.object().shape({
    texto: Yup.string()
        .min(5, "Mínimo 5 caracteres")
        .max(255, "Máximo 255 caracteres")
        .required("Este campo es obligatorio")
})

const Formulario = ({ data, setData }) => {
    const getNewUseId = () => {
        return uuid();
    }

    return (
        <Formik
            initialValues={{ texto: '' }}
            enableReinitialize={true}
            validationSchema={yupSchema}
            onSubmit={(values, { resetForm }) => {
                setData([
                    ...data,
                    { id: getNewUseId(), descripcion: values.texto }
                ]);

                resetForm({});
            }}>
            {() => (
                <Form noValidate autoComplete='off'>
                    <Row>
                        <FormGroup className="col-12 col-sm-8 col-md-9">
                            <Field id="texto" className="form-control" name="texto" required />
                            <ErrorMessage className='text-danger' component={'div'} name="texto" />
                        </FormGroup>
                        <FormGroup className='col-12 col-sm-4 col-md-3 text-end'>
                            <Button type='submit'>Add</Button>
                        </FormGroup>
                    </Row>
                </Form>
            )}
        </Formik>
    )
}
export default Formulario;
import { Formik } from "formik";
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Button, Container, ErrorMsg, Input, Label, StyledForm } from "./RegisterForm.styled";

const ContactSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, 'Too Short!')
        .required('Required'),
    email: Yup.string()
        .min(5, 'Too Short!')
        .required('Required'),
    password: Yup.string()
        .min(6, 'Too Short!')
        .required('Required'),
});

export const RegisterForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (value, actions) => {
        // e.preventDefault();
        // const form = e.currentTarget;
        console.log(value);
        dispatch(
            register(value)
        );
        actions.resetForm();
    };

    return (
        <Container>
            <Formik
                initialValues={{ name: "", email: '', password: '' }}
                validationSchema={ContactSchema}
                onSubmit={handleSubmit}
            >
                <StyledForm>
                    <Label
                    >Username
                        <Input name="name" type="text" />
                        <ErrorMsg name="name" component="div" />
                    </Label>
                    <Label>Email
                        <Input name="email" type="email" />
                        <ErrorMsg name="email" component="div" />
                    </Label>
                    <Label>Password
                        <Input name="password" type="password" />
                        <ErrorMsg name="password" component="div" />
                    </Label>
                    <Button type="submit">Register</Button>
                </StyledForm>
            </Formik>
        </Container>

    );
};
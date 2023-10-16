import { Formik } from "formik";
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Button, Container, ErrorMsg, Input, Label, StyledForm } from "./LoginForm.styled";

const ContactSchema = Yup.object().shape({
    email: Yup.string()
        .min(5, 'Too Short!')
        .required('Required'),
    password: Yup.string()
        .min(6, 'Too Short!')
        .required('Required'),
});

export const LoginForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (value, actions) => {
        // e.preventDefault();
        // const form = e.currentTarget;
        dispatch(
            logIn(value)
        );
        actions.resetForm();
    };

    return (
        <Container>
            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={ContactSchema}
                onSubmit={handleSubmit}
            >
                <StyledForm>
                    <Label>Email
                        <Input name="email" type="email" />
                        <ErrorMsg name="email" component="div" />
                    </Label>
                    <Label>Password
                        <Input name="password" type="password" />
                        <ErrorMsg name="password" component="div" />
                    </Label>
                    <Button type="submit">Log In</Button>
                </StyledForm>
            </Formik>
        </Container>

    );
};
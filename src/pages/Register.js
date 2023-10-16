import { Helmet } from 'react-helmet';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';

const styles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px'
};

export default function Register() {
    return (
        <div style={styles}>
            <Helmet>
                <title>Registration</title>
            </Helmet>
            <RegisterForm />
        </div>
    );
};
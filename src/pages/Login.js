import { Helmet } from 'react-helmet';
import { LoginForm } from 'components/LoginForm/LoginForm';

const styles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px'
};

export default function Login() {
    return (
        <div style={styles}>
            <Helmet>
                <title>Login</title>
            </Helmet>
            <LoginForm />
        </div>
    );
}
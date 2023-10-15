
import { useAuth } from 'hooks';
import { PageLink } from './Navigation.styled';


export const Navigation = () => {
    const { isLoggedIn } = useAuth();

    return (
        <nav>
            <PageLink to="/">
                Home
            </PageLink>
            {isLoggedIn && (
                <PageLink to="/tasks">
                    Tasks
                </PageLink>
            )}
        </nav>
    );
};
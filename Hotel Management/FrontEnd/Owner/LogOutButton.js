import { useAuth0 } from '@auth0/auth0-react';
import './LogOutButton.css'
const LogOutButton = () => {
    const { logout, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <button className='Logout' onClick={() => logout()}>
                Sign Out
            </button>
        )
    )
}

export default LogOutButton
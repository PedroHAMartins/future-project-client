import '../../style/components/nav.css';

const Nav = () => {
    return (
        <div className='nav'>
            <nav className='nav-container'>
                <table className='nav-menu'>
                    <tr>
                        <td>Homepage</td>
                        <td>About</td>
                        <td>FAQ</td>
                        <td>Contact</td>
                        <td>Login</td>
                        <td>Register</td>
                    </tr>
                </table>
            </nav>
        </div>
    );
}

export default Nav;
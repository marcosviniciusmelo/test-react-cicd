import {Link} from 'react-router-dom'
import styles from './NavBar.module.scss'

function NavBar(){
    return (
        <ul className={styles.menu}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/empresa">Empresa</Link></li>
            <li><Link to="/contato">Contato</Link></li>
        </ul>
    )
}

export default NavBar
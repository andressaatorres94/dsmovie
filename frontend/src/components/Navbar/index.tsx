import { ReactComponent as GitHubIncon } from 'assets/img/github.svg';
import './styles.css';
function Navbar() {

    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <h1> DSMovie</h1>
                    <a href="https://github.com/andressaatorres94">
                        <div className="dsmovie-contact-container">
                            <GitHubIncon />
                            <p className="dsmovie-contact-link">/andressaatorres94</p>
                        </div>
                    </a>
                </div>
            </nav>

        </header>
    );
}

export default Navbar;
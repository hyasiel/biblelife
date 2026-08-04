import "./styles/footer.css"
import { IconSmartHome, IconBook2, IconSettings2 } from '@tabler/icons-react';
import {Link} from "react-router-dom"

export default function Footer(){
    return (

        <footer>
        <nav className="nav">
            <ul className="nav_list">
                
                <li className="nav_items">
                    <Link to="/">
                    <button>
                        <IconSmartHome stroke={2}/>
                        <span>Home</span>
                    </button>
                    </Link>
                </li>

                <li className="nav_items">
                    <Link to="/bible">
                    <button>
                        <IconBook2 stroke={2}/>
                        <span>Bible</span>
                    </button>
                    </Link>
                </li>

                <li className="nav_items">
                    <Link to="/settings">
                    <button>
                        <IconSettings2 stroke={2} />
                        <span>Settings</span>
                    </button>
                    </Link>
                </li>
            </ul>
        </nav>
        </footer>
    )
}
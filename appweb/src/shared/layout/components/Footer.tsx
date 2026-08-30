import "./styles/footer.css"
import { IconSmartHome, IconBook2, IconSettings2 } from '@tabler/icons-react';
import {Link} from "react-router-dom"

export default function Footer(){
    return (

        <footer className="fixed bottom-2 flex justify-center rounded-2xl w-full">
        <nav className="nav relative flex rounded-[50px] bg-[#eeeeeeb7] backdrop-blur-[1px]">
            <ul className="nav_list flex gap-5 p-1.5 pl-2.5 pr-2.5 m-0">
                
                <li className="nav_items">
                    <Link to="/">
                    <button>
                        <IconSmartHome stroke={2}/>
                        <span className="text-[11px] sm:text-[15px]">Home</span>
                    </button>
                    </Link>
                </li>

                <li className="nav_items">
                    <Link to="/bible">
                    <button>
                        <IconBook2 stroke={2}/>
                        <span className="text-[11px] sm:text-[15px]">Bible</span>
                    </button>
                    </Link>
                </li>

                <li className="nav_items">
                    <Link to="/settings">
                    <button>
                        <IconSettings2 stroke={2} />
                        <span className="text-[11px] sm:text-[15px]">Settings</span>
                    </button>
                    </Link>
                </li>
            </ul>
        </nav>
        </footer>
    )
}
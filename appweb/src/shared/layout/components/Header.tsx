import "./styles/header.css"
import { IconFlameFilled } from '@tabler/icons-react';

export default function Header() {
    return (
        <header>
            <nav>
                <h1 className="app_title">BIBLELIFE</h1>
                <div className="racha"><span>1</span><IconFlameFilled/></div>
            </nav>
        </header>
    )
}
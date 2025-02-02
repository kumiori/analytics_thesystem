import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Header = () => (
    <nav >
        <div className="py-6 px-10 z-40 fixed bg-white flex font-mono border-b w-full justify-between ">
            <Link href="/">
                <a>
                    Home
                </a>
            </Link>
            <Link href="/cards">
                <a>
                    Cards
                </a>
            </Link>
            <Link href="/info">
                <a>
                    Info
                </a>
            </Link>
            <Link href="/players">
                <a>
                    Players
                </a>
            </Link>
            <Link href="/charts">
                <a>
                    Charts
                </a>
            </Link>
            <Link href="/transfers">
                <a>
                    Transfers
                </a>
            </Link>
        </div>
    </nav>
)

export default Header
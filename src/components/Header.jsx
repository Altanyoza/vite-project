import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

class Header extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <header className="bg-blue-600 text-white p-4">
                <nav className="flex gap-4">
                    <Link to="/" className="hover:underline px-2 py-1">Home</Link>
                    <Link to="/about" className="hover:underline px-2 py-1">About</Link>
                    <Link to="/blog" className="hover:underline px-2 py-1">Blog</Link>
                </nav>
            </header>
        )
    }
}

export default Header 
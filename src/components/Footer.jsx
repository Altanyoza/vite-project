import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

class Footer extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <footer className="bg-gray-800 text-white p-4 mt-auto">
                <div className="flex justify-center gap-6">
                    <Link to="/" className="hover:underline mx-2">Home</Link>
                    <Link to="/about" className="hover:underline mx-2">About</Link>
                    <Link to="/blog" className="hover:underline mx-2">Blog</Link>
                </div>
            </footer>
        )
    }
}

export default Footer
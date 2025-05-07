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
            <div class="bg-cyan-600 w-full mx-auto py-4 h-[calc(100vh-550px)] mt-[30px]">
            +7(914)220-92-79
        </div>
        )
    }
}

export default Footer
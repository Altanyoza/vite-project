import React, { PureComponent, ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface Props {}
interface State {}

class Home extends PureComponent<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            
        }
    }

    render(): ReactNode {
        return (
            <div className="min-h-screen flex flex-col">
                <main className="flex-grow p-4">
                    <h1 className="text-3xl font-bold">Home Page</h1>
                </main>
            </div>
        )
    }
}

export default Home

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
            <div class="bg-neutral-300 py-2.5">
                <a href='/' className='text-2x1 m-1 border-r-2'>Главная</a>
                <a href='/catalog' className='text-2x1 m-1 border-r-2'>Каталог</a>
                <a href='/about' className='text-2x1 m-1 border-r-2'>О нас</a>
                <a href='/contacts' className='text-2x1 m-1 border-r-2'>Контакты</a>
            </div>
        )
    }
}

export default Header 
import React, { PureComponent } from 'react'

class Text extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }
    
    getTextClasses() {
        const { size = 'md', bold = false, color = 'black', className = '' } = this.props;
        const sizeClasses = {
            sm: 'text-sm',
            md: 'text-base',
            lg: 'text-lg',
            xl: 'text-xl',
        };
        const colorClasses = {
            primary: 'text-amber-400',
            secondary: 'text-gray-600',
            white: 'text-white',
            black: 'text-black',
        };
        const boldClass = bold ? 'font-bold' : 'font-normal';

        return `${sizeClasses[size]} ${colorClasses[color]} ${boldClass} ${className}`;
    }

    render() {
        return (
            <p className={this.getTextClasses()}>
                {this.props.children}
            </p>
        )
    }
}

export default Text
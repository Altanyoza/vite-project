import React, { PureComponent, ReactNode } from 'react'
import Input from '../components/Input'


interface Props {}
interface State {}

class Contacts extends PureComponent<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            
        }
    }

    render(): ReactNode {
        return (
            <div className="container mx-auto px-4 py-12">
                <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">Свяжитесь с нами</h2>
                    <p className="text-gray-600 mb-8">Заполните форму, и мы ответим вам в ближайшее время</p>

                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="name">
                                    Ваше имя
                                </label>
                                <Input 
                                    id="name"
                                    type="text" 
                                    placeholder="Протодьяконова Алтанай" 
                                    size="md" 
                                    variant="outline"
                                    className="w-full"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="email">
                                    Email
                                </label>
                                <Input 
                                    id="email"
                                    type="email" 
                                    placeholder="altanyoza@gmail.com" 
                                    size="md" 
                                    variant="outline"
                                    className="w-full"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="phone">
                                Телефон
                            </label>
                            <Input 
                                id="phone"
                                type="tel" 
                                placeholder="+7 (XXX) XXX-XX-XX" 
                                size="md" 
                                variant="outline"
                                className="w-full"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="message">
                                Ваше сообщение
                            </label>
                            <textarea
                                id="message"
                                rows={5}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent min-h-[120px]"
                                placeholder="Напишите ваше сообщение здесь..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-4 rounded-md transition duration-300"
                        >
                            Отправить сообщение
                        </button>
                    </form>

                    <div className="mt-10 pt-6 border-t border-gray-200">
                        <h3 className="text-lg font-medium text-gray-800">Контакты</h3>
                        <div className="mt-4 space-y-2 text-gray-600">
                            <p>Телефон: +7 (914) 220-92-79</p>
                            <p>Email: zdsupport@mail.ru</p>
                            <p>Адрес: г. Якутск, ул. Якутские ножи, 12 офис 112</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contacts

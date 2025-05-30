import React, { PureComponent } from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import Text from '../components/Text'
import ProductCard from '../components/ProductCard'

interface Product {
  id: string;
  title: string;
  description: string;
  price: string;
  image?: string;
  
}

interface CatalogState {
  products: Product[];
  isModalOpen: boolean;
  newProduct: {
    title: string;
    description: string;
    price: string;
    image?: string;
  };
}

class Catalog extends PureComponent<{}, CatalogState> {
  constructor(props: {}) {
    super(props)
    this.state = {
      products: [
        {
          id: '1',
          title: 'Авторский нож',
          description: '11 см, черный граб',
          price: '10000',
          image: '/images/one.jpg'
        },
        {
          id: '2',
          title: 'Авторский нож',
          description: '15 см, карельчкая береза',
          price: '10000',
          image: '/images/two.jpg'
        }
      ],
      isModalOpen: false,
      newProduct: {
        title: '',
        description: '',
        price: '',
        image: ''
      }
    }
  }

  openModal = () => this.setState({ isModalOpen: true })
  closeModal = () => this.setState({ isModalOpen: false, newProduct: { title: '', description: '', price: '' } })

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    this.setState(prevState => ({
      newProduct: {
        ...prevState.newProduct,
        [name]: value
      }
    }))
  }

  addProduct = () => {
    const { newProduct, products } = this.state
    if (newProduct.title && newProduct.description && newProduct.price) {
      this.setState({
        products: [...products, {
          ...newProduct,
          id: Date.now().toString()
        }],
        isModalOpen: false,
        newProduct: { title: '', description: '', price: '' }
      })
    }
  }

  render() {
    const { products, isModalOpen, newProduct } = this.state

    return (
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <Text size="xl" bold>Каталог товаров</Text>
          <Button 
            title="Добавить товар" 
            color="primary" 
            onClick={this.openModal}
          />
        </div>

        {/* Модальное окно добавления товара */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg w-full max-w-md">
              <Text size="lg" bold className="mb-4">Добавить новый товар</Text>
              
              <div className="space-y-4">
                <div>
                  <Text className="block mb-2">Название</Text>
                  <Input
                    name="title"
                    value={newProduct.title}
                    onChange={this.handleInputChange}
                    placeholder="Название товара"
                  />
                </div>
                
                <div>
                  <Text className="block mb-2">Описание</Text>
                  <textarea
                    name="description"
                    value={newProduct.description}
                    onChange={this.handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    rows={3}
                    placeholder="Описание товара"
                  />
                </div>
                
                <div>
                  <Text className="block mb-2">Цена (₽)</Text>
                  <Input
                    name="price"
                    type="number"
                    value={newProduct.price}
                    onChange={this.handleInputChange}
                    placeholder="Цена"
                  />
                </div>
              </div>
              <div>
                <Text className="block mb-2">Изображение (URL)</Text>
                <Input
                name="image"
                value={newProduct.image}
                onChange={this.handleInputChange}
                placeholder="URL изображения товара"
                />
                </div>
              
              <div className="mt-6 flex justify-end space-x-3">
                <Button 
                  title="Отмена" 
                  color="secondary" 
                  onClick={this.closeModal}
                />
                <Button 
                  title="Добавить" 
                  color="primary" 
                  onClick={this.addProduct}
                />
              </div>
            </div>
          </div>
        )}

        {/* Список товаров */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(product => (
            <ProductCard
              key={product.id}
              title={product.title}
              description={product.description}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default Catalog

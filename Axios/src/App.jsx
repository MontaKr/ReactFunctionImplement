import React, { useState } from 'react'
import axios from 'axios'
import { Wrap } from './styles'
import Card from '../component/Card'

const App = () => {

  const [products, setProducts] = useState([])
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/products')
      setProducts(response.data.products.slice(0, 10));
      setIsButtonVisible(false); 
    }

    catch (error) {
      console.error('Error fetching data: ', error)
    }
  }

  return (
    <Wrap>
      {
        isButtonVisible ? 
        <button onClick={fetchData}>데이터 통신</button>
        :
        <div className="card__container">
        {
          products.map((val,idx)=>{
            return (
              <Card key={idx} data={val}/>
            )
          })
        }
      </div>
      }
    </Wrap>
  )
}

export default App
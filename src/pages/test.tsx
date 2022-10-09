import Image from 'next/image'
import React, { useState } from 'react'
import { trpc } from '../Server/trpc'

function Test() {
  const [products, setProducts] = useState([])
  trpc.useQuery(['product.getProducts'], {
    onSuccess: (data) => {
      setProducts(data)
    },
  })

  return (
    <div>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <h1></h1>
            <Image src={product.image} layout='fill' alt='image' />
          </div>
        )
      })}
    </div>
  )
}

export default Test

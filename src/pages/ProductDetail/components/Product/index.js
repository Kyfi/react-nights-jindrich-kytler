import React from 'react'
import { Link } from 'react-router-dom'

import urls from '../../../../constants/urls'
import {
  ProductWrap,
  ImgWrap,
  Img,
  TitleWrap,
  Title,
  Price,
  Description,
} from './styled'

import { Button } from '../../../../components/Button'

const ProductComponent = ({ node, addProduct }) => (
  <ProductWrap>
    <TitleWrap>
      <Title>{node.name}</Title>
    </TitleWrap>
    <ImgWrap>
      <Img src={node.image_url} alt={`${node.name} image`} />
    </ImgWrap>
    <Price>{node.price}</Price>
    <Description>{node.description}</Description>
    <Button
      onClick={() => {
        addProduct(node.id)
      }}
    >
      Add to Cart
    </Button>
    <hr />
    <Link to={urls.index}>Back to Product List</Link>
  </ProductWrap>
)

export default ProductComponent

import React from 'react'
import { ProductButton, ProductCard, ProductDesc, ProductHeading, ProductImg, ProductInfo, ProductPrice, ProductsContainer, ProductTitle, ProductWrapper } from './ProductsElements'

const Products = ({heading, data}) => {
    return (
        <ProductsContainer>
            <ProductHeading>{heading}</ProductHeading>
            <ProductWrapper>
                {data.map((product, index) => {
                    return(
                        <ProductCard key={index}>
                            <ProductImg src={product.img} alt={product.alt}/>
                            <ProductInfo>
                                <ProductTitle>{product.name}</ProductTitle>
                                <ProductDesc>{product.desc}</ProductDesc>
                                <ProductPrice>{product.price}</ProductPrice>
                                <ProductButton>{product.button}</ProductButton>
                            </ProductInfo>
                        </ProductCard>
                    )
                })}

            </ProductWrapper>
        </ProductsContainer>
    )
}

export default Products

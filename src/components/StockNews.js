import React from "react";
import { Button, Card, Image, Container } from 'semantic-ui-react'
import NewsCard from './NewsCard'


  const StockNews = ({news}) => {
    if (!news) {
      return null
    }

    const renderedList = news.map((news) => {
      return (
        <>
        <NewsCard news={news} />
        </>
      )
    })

      return (
        <Container>
        <h1 style={{color:"white"}}> News Stories </h1>

        {renderedList}
        </Container>
      )
  }

  export default StockNews

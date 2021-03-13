import React from "react";
import { Grid, Container } from 'semantic-ui-react'
import NewsCard from './NewsCard'


  const StockNews = ({news}) => {
    if (news.length === 0) {
      return null;
    }

    const renderedList = news.map((news) => {
      return (
        <>
        <NewsCard news={news} />
        </>
      )
    })

      return (
        <Container style={{marginTop:"20px"}}>
        <h1 style={{color:"white", textAlign:"left"}}> Stories </h1>

        <Grid columns='three' divided>
        <Grid.Row>


        {renderedList}

        </Grid.Row>

        </Grid>
        </Container>
      )
  }

  export default StockNews

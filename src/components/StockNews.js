import React from "react";
import { Grid, Container, Divider, Icon, Header } from 'semantic-ui-react'
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
        <Divider horizontal>
          <Header as='h4'>
            <Icon name='tag' />
            Stories
          </Header>
        </Divider>

        <Grid columns='three' divided>
        <Grid.Row>


        {renderedList}

        </Grid.Row>

        </Grid>
        </Container>
      )
  }

  export default StockNews

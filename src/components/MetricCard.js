import React from "react";
import { Container, Header,Icon,Divider, Table } from 'semantic-ui-react'

  const MetricCard = ({selectedStock}) => {
    if (!selectedStock) {
      return null
    }

    return (
      <Container>
      <Divider horizontal>
        <Header as='h4'>
          <Icon name='tag' />
          Financials
        </Header>
      </Divider>      <Table celled padded>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell><h3> 52 Week High </h3></Table.HeaderCell>
        <Table.HeaderCell><h3>52 Week High Date</h3></Table.HeaderCell>
        <Table.HeaderCell><h3>52 Week Low</h3></Table.HeaderCell>
        <Table.HeaderCell><h3>52 Week Low Date</h3></Table.HeaderCell>
        <Table.HeaderCell><h3>52 Week Price Return Daily</h3></Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>
          <b> ${selectedStock["52WeekHigh"]} </b>
        </Table.Cell>
        <Table.Cell> <b> {selectedStock["52WeekHighDate"]} </b></Table.Cell>
        <Table.Cell>
        <b>   {selectedStock["52WeekLow"]} </b>
        </Table.Cell>
        <Table.Cell textAlign='left'>
          <b> {selectedStock["52WeekLowDate"]} </b>
        </Table.Cell>
        <Table.Cell>
          <b> {selectedStock["52WeekPriceReturnDaily"]} </b>
        </Table.Cell>
      </Table.Row>

    </Table.Body>
  </Table>
  </Container>


    )
  }

  export default MetricCard

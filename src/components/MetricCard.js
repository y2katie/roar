import React from "react";
import { Container, Header, Table } from 'semantic-ui-react'

  const MetricCard = ({selectedStock}) => {
    if (!selectedStock) {
      return null
    }

    return (
      <Container>
      <h1 style={{color:"White", textAlign:"left"}}>Financials </h1>
      <Table celled padded>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell singleLine>52 Week High</Table.HeaderCell>
        <Table.HeaderCell>52 Week High Date</Table.HeaderCell>
        <Table.HeaderCell>52 Week Low</Table.HeaderCell>
        <Table.HeaderCell>52 Week Low Date</Table.HeaderCell>
        <Table.HeaderCell>52 Week Price Return Daily</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>
          <Header as='h2' textAlign='center' >
          ${selectedStock["52WeekHigh"]}
          </Header>
        </Table.Cell>
        <Table.Cell singleLine> {selectedStock["52WeekHighDate"]} </Table.Cell>
        <Table.Cell>
          {selectedStock["52WeekLow"]}
        </Table.Cell>
        <Table.Cell textAlign='right'>
          {selectedStock["52WeekLowDate"]}
        </Table.Cell>
        <Table.Cell>
          {selectedStock["52WeekPriceReturnDaily"]}
        </Table.Cell>
      </Table.Row>

    </Table.Body>
  </Table>
  </Container>


    )
  }

  export default MetricCard

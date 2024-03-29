import React from "react";
import {
  Icon,
  Statistic,
  Container,
  Divider,
  Header,
} from "semantic-ui-react";

const StatisticExampleEvenlyDivided = ({ trends, stockProfile }) => {
  console.log(trends);
  if (!trends || !stockProfile) {
    return <div style={{ display: "none" }}> </div>;
  }

  return (
    <Container stackable>
      <Divider horizontal>
        <Header as="h4">
          <Icon name="hotjar" />
          Recommendations
        </Header>
      </Divider>
      <Statistic.Group stackable widths="four">
        <Statistic stackable>
          <Statistic.Label> Symbol</Statistic.Label>

          <Statistic.Value>
            {trends.map((trend) => {
              return <> {trend.symbol} </>;
            })}
          </Statistic.Value>
        </Statistic>

        <Statistic stackable>
          <Statistic.Label size="large"> Buy</Statistic.Label>

          <Statistic.Value>
            {trends.map((trend) => {
              return <> {trend.buy} </>;
            })}
          </Statistic.Value>
        </Statistic>

        <Statistic>
          <Statistic.Label>Sell</Statistic.Label>

          <Statistic.Value>
            {trends.map((trend) => {
              return <> {trend.sell} </>;
            })}
          </Statistic.Value>
        </Statistic>

        <Statistic>
          <Statistic.Label>Hold</Statistic.Label>

          <Statistic.Value>
            {trends.map((trend) => {
              return <> {trend.hold} </>;
            })}
          </Statistic.Value>
        </Statistic>
      </Statistic.Group>
      <Divider horizontal></Divider>
    </Container>
  );
};

export default StatisticExampleEvenlyDivided;

import React from "react";
import { Icon, Image, Statistic, Rail, Sticky, Container,Divider,Header } from "semantic-ui-react";

const StatisticExampleEvenlyDivided = ({ trends,stockProfile }) => {
  console.log(trends);
  if (!trends || !stockProfile) {
    return <div style={{ display: "none" }}> </div>;
  }

  return (

<Container stackable>
    <Divider horizontal>
      <Header as='h4'>
        <Icon name='hotjar' />
        Trending
      </Header>
    </Divider>
      <Statistic.Group stackable widths="four">

      <Statistic stackable>
      <Statistic.Label>
          {trends.map((trend) => {
            return <> {trend.symbol} </>;
          })}</Statistic.Label>
        <Statistic.Value>
          <Image
            src={stockProfile.logo}
            inline
          />

        </Statistic.Value>

      </Statistic>

        <Statistic stackable>
        <Statistic.Label> Buy</Statistic.Label>

          <Statistic.Value>
            {trends.map((trend) => {
              return <> {trend.buy} </>;
            })}
          </Statistic.Value>
        </Statistic>

        <Statistic>
        <Statistic.Label>Sell</Statistic.Label>

          <Statistic.Value>
          <Icon name="send" size="tiny"/>
          {trends.map((trend) => {
            return <> {trend.sell} </>;
          })}
          </Statistic.Value>
        </Statistic>

        <Statistic>
        <Statistic.Label>Hold</Statistic.Label>

          <Statistic.Value>
            <Icon name="send" />   {trends.map((trend) => {
                return <> {trend.hold} </>;
              })}
          </Statistic.Value>
        </Statistic>


      </Statistic.Group>
      <Divider horizontal>
      </Divider>


  </Container>

  );
};

export default StatisticExampleEvenlyDivided;

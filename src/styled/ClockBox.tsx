import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  margin-top: 40px;

  shadow-opacity: 0.14;
  shadow-radius: 5px;
  shadow-color: black;
  shadow-offset: 2px 4px;

  border-radius: 26px;
  min-width: 350px;
  text-align: center;
  position: relative;
`;

const TopBox = styled.View`
  background: #FA957B;
  border-top-right-radius: 26px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: 26px;
  padding: 20px;
  margin-bottom: 0;
`;
const BottomBox = styled.View`
  margin-top: 0;
  padding: 30px;
  background: #ffffff;
  border-top-right-radius: 0;
  border-bottom-right-radius: 26px;
  border-bottom-left-radius: 26px;
  border-top-left-radius: 0;
    
    h1 {
      margin-bottom: 20px;
    }
    h2 {
      margin-top: 0;
    }

`;

const Title = styled.Text`
  font-weight: 900;
  font-size: 30px;
  color: #ffffff;
  line-height: 9px;
  text-transform: uppercase;
  line-height: 30px;
  margin: 20px 0;
  margin-bottom: 0px;
`;

const City = styled.Text`
  font-size: 24px;
  font-weight: 700;
  color: #FA957B;
  text-align: center;
  text-transform: uppercase;
`;

const Time = styled.Text`
  font-size: 45px;
  font-weight: 900;
  color: #FA957B;
  text-align: center;
  margin: 20px 0 20px 0;
`;

const TimeLeft = styled.Text`
  font-size: 10px;
  color: #FA957B;
  text-align: center;
`;

const Shadow = styled.View`
  opacity: 0.8;
  background: #0000001a;
  border-radius: 26px;
  position: absolute;
  left: -50px;
  top: 75px;
  z-index: -1;
  min-width: 300px;
  min-height: 450px;
`;

const ClockBox = ({ citystate, hour, what, sunset }) => (
    <Container>
      <TopBox>
        <Title>
          THE NEXT
          GOLDEN
          HOUR
        </Title>
      </TopBox>
      <BottomBox>
        <City>In {citystate}</City>
        <Time>{hour}</Time>
        <TimeLeft>
          ({what} is at {sunset}!)
        </TimeLeft>
      </BottomBox>
    </Container>
);

export default ClockBox;

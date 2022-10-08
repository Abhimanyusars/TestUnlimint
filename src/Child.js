import React from 'react'
import useCountdown from './useCountdown';
import styled from 'styled-components'

const Child = ({ item }) => {
    const [timeLeft, setEndTime] = useCountdown(item.b + (item.input * 1000));
    const minutes = Math.floor(timeLeft / 60000) % 60;
    const seconds = Math.floor(timeLeft / 1000) % 60;

    const handleClick = () => {
        setEndTime(0)
    }

    return (
        <Wrapper>
            {
                timeLeft != 0 &&
                <Card>
                    <b>{`${minutes},${seconds}`}</b>
                    <p>{item.a}</p>
                    <button onClick={() => handleClick()}> X</button>
                </Card>
            }

        </Wrapper>
    )
}

const Card = styled.div`
//   border:1px solid black;
  width: 50%;
  margin-top:20px;
  padding:15px;
  background: #DEE4E7;


`;

const Wrapper = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
`;
export default Child
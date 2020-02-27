import styled from "styled-components/native"

export default styled.TouchableOpacity`
    background-color: ${props => props.results ? '#FA957B': '#79B0F4'};
    color: #ffffff;
    padding: 20px;
    margin-top: 10px;
    border-radius: 30px;
    width: 150px;
    align-items: center;

`
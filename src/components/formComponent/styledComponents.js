import styled from 'styled-components';

export const Input = styled.input`
    border: solid 2px ${props =>
    props.isValid ? 'blue' :
        'red'};
`;

export const MessagesBlock = styled.div`
  width: 150px;
  height: 100px;
  margin: 15px auto 15px auto;
  padding: 5px;
  border: solid 2px
    ${props =>
    props.isValid ? 'blue' :
        'red'};
`;


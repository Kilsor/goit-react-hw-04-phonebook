import styled from 'styled-components';

export const ListWrapper = styled.ul`
  list-style: none;
  border: 1px solid black;
  border-radius: 8px;
  margin: 12px;
  padding: 12px;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 0;
    border-bottom: 1px solid #ccc;

    button {
      padding: 2px 5px;
      background-color: #dc3545;
      color: white;
      border: none;
      border-radius: 3px;
      cursor: pointer;
    }
  }
`;

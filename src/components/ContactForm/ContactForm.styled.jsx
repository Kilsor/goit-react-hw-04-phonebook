import styled from 'styled-components';

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  border: 1px solid black;
  border-radius: 8px;
  margin: 12px;
  padding: 12px;

  label {
    margin-bottom: 5px;
  }

  input {
    margin-bottom: 10px;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }

  button {
    padding: 5px 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 3px;
    cursor: pointer;
  }
`;

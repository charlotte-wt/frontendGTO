import styled from "styled-components";

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19);

`;

export const MutedLink = styled.a`
  font-size: 11px;
  color: rgb(217, 117, 176);
  font-weight: 500;
  text-decoration: none;
`;

export const BoldLink = styled.a`
  font-size: 11px;
  color: rgb(255, 189, 228);
  font-weight: 500;
  text-decoration: none;
  margin: 0 4px;
`;

export const Input = styled.input`
  width: 90%;
  height: 42px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.3);
  padding: 0px 10px;
  border-bottom: 1.4px solid transparent;
  transition: all 200ms ease-in-out;
  font-size: 12px;

  &::placeholder {
    color: rgba(200, 200, 200, 1);
  }

  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(255, 189, 228, 0.4);
  }

  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(255, 189, 228);
  }
`;

export const SubmitButton = styled.button`
  width: 50%;
  padding: 11px 10%;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 90px 90px 90px 90px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: rgb(255, 189, 228);
  background: linear-gradient(
    58deg,
    rgb(255, 189, 228) 20%,
    rgb(255, 189, 228) 100%
  );

  &:hover {
    filter: brightness(1.05);
  }
`;

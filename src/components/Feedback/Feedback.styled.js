import styled from "styled-components";


export const Button = styled.button`
  text-decoration: none;
  display: inline-block;
  width: 90px;
  height: 45px;
  line-height: 45px;
  border-radius: 45px;
  margin: 5px 5px;
  font-family: inherit;
  font-size: 11px;
  text-transform: uppercase;
  text-align: center;
  font-weight: 600;
  color: #524f4e;
  background: white;
  box-shadow: 0 8px 15px rgba(0, 0, 0, .1);
  transition: .3s;
  cursor: pointer;
    &:hover {
      background: #2ee59d;
      box-shadow: 0 15px 20px rgba(46, 229, 157, .4);
      color: white;
      transform: translateY(-7px);
    }
`
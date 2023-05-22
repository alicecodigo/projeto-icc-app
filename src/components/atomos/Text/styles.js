import styled from "styled-components/native";

export const CustomText = styled.Text`
  font-size: 23;
  font-weight: bold;
  color: ${({color}) => color || 'white'};
  margin-top: 12px;
  
`;
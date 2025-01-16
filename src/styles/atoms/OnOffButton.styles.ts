import styled from 'styled-components';
import { StyledToggleProps } from '../../interfaces/atoms/OnOffButton.interfaces';

export const ToggleSwitch = styled('div').withConfig({
  shouldForwardProp: (prop) => !['isOn'].includes(prop),
})<StyledToggleProps>`
  width: 60px;
  height: 30px;
  background-color: ${({ isOn }) => (isOn ? (props) => props.theme.primary : (props) => props.theme.secondary)};
  border-radius: 15px;
  position: relative;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

export const ToggleButton = styled('div').withConfig({
  shouldForwardProp: (prop) => !['isOn'].includes(prop),
})<StyledToggleProps>`
  width: 26px;
  height: 26px;
  background-color: white;
  border-radius: 50%;
  position: absolute;
  top: 2px;
  left: ${({ isOn }) => (isOn ? '32px' : '2px')};
  transition: left 0.3s ease;
`;
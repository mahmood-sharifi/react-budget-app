import styled from 'styled-components';
import { spacings } from '../variables';
import { ProgressBarProps } from '../../interfaces/atoms/ProgressBar.interfaces';

export const ProgressBarWrapper = styled.div`
  position: relative;
  overflow: hidden;
  margin: ${spacings.small};
  width: 200px;
  height: 10px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.dark};
`;

export const ProgressBarCompleted = styled('div').withConfig({
  shouldForwardProp: (prop) => !['percent'].includes(prop),
})<ProgressBarProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: ${(props) => props.percent}%;
  height: 100%;
  background-color: ${(props) => props.theme.success};
`;

import styled from 'styled-components';
import { Wrapper as SummaryWrapper } from './Summary.styles';
import { spacings } from '../variables';

export const Wrapper = styled(SummaryWrapper)`
  width: 400px;

  ul {
    list-style-type: none;
    padding-left: 0;

    li {
      margin-bottom: ${spacings.small};
      padding: ${spacings.small};
      background-color: ${props => props.theme.info+'66'};
      border-radius: 5px;
    }
  }
`;
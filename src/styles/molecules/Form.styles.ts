import styled from 'styled-components';
import { spacings } from '../variables';

export const FormContainer = styled.div`
  margin: ${spacings.medium};
  margin-bottom: ${spacings.large};
  padding: ${spacings.large};
  border: 1px solid ${(props) => props.theme.light};
  border-radius: 8px;
  width: 300px;
  background-color: ${(props) => props.theme.light};
`;
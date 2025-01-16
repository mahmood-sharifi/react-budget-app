import styled from 'styled-components';

export const StyledNavLink = styled.div`
  a {
    color: #555555aa;
    text-decoration: none;
    padding: 0.2rem 0.5rem;
    background-color: none;
    transition: 200ms ease-in-out;
    border-bottom: 2px solid #22222200;

    &:hover {
      border-bottom: 2px solid #22222200;
      color: #222222ff;
    }

    &.active {
      border-bottom: 2px solid #222222;
      color: #222222ff;
    }

  }
`;
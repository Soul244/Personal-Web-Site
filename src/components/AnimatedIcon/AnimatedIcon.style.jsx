import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0.5rem 0.25rem;
  padding: 0.375rem 0.75rem;
  color: ${({ color }) => color};
  border: ${({ color }) => `1px solid ${color}`};
  border-radius: 16px;
  transition: all 0.15s linear;
  svg {
    font-size: 1.4rem !important;
    transition: all 0.15s linear;
  }
  :hover {
    background-color: ${props => props.backgroundColor};
    border: ${({ backgroundColor }) => `1px solid ${darken(0.2, backgroundColor)}`};
    svg {
      margin-right: 0.5rem;
      transform: translate3d(4px, -4px, 0) scale(1.6);
    }
  }
`;

export const IconContainer = styled.span`
  margin-right: 0.25rem;
`;

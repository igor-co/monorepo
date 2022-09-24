import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface ButtonProps {}

const StyledButton = styled.button`
  color: brown;
`;

export function Button(props: ButtonProps) {
  return <StyledButton {...props} />;
}

export default Button;

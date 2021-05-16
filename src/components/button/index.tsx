import styled, { keyframes } from "styled-components";
interface Props {
  color?: string;
  onClick?: () => void;
}
const StyledButton = styled.button`
  font-size: 1.6rem;
  line-height: 1.6;
  background: #fff;
  color: ${({ theme }) => theme.colors.bg};
  border-radius: 0.6rem;
  padding: 0 1.6rem 0;
  height: 3.8rem;
  min-width: 8rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  transition: all 200ms ease-in-out;
  font-family: "Avenir";
  letter-spacing: 0.02rem;
  cursor: pointer;
  outline: none;
  &:hover {
    background: #f8f8f8;
  }
`;

// &.loading {
//     background: ${({ theme, type }) => theme.colors[type][3]} !important;
//     border-color: ${({ theme, type }) => theme.colors[type][3]} !important;
//     cursor: not-allowed !important;
//     svg {
//     }
//   }
// const donutSpin = keyframes`
//     0% {
//         transform: rotate(0deg);
//     }
//     100% {
//         transform: rotate(360deg);
//     }
// `;
//
// const LoadingState = styled.span`
//   display: inline-block;
//   border: 4px solid ${({ theme, type }) => theme.colors.dark[3]};
//   border-left-color: ${({ theme, type }) => theme.colors.dark[1]};
//   border-radius: 50%;
//   width: 24px;
//   height: 24px;
//   animation: ${donutSpin} 0.8s linear infinite;
// `;
const Button: React.FC<Props> = ({ children, color, onClick }) => {
  return (
    <StyledButton color="red" onClick={onClick}>
      {children}
    </StyledButton>
  );
};
export default Button;

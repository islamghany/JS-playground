import styled from "styled-components";
import { useState } from "react";
const Unit = styled.div`
  position: relative;
  margin-bottom: 1.5rem;
  .toggle {
    display: flex;
    align-items: center;
    &__content {
      flex: 1;
      font-size: 1.6rem;
      font-weight: 400;
      padding-right: 1rem;
      color: ${({ theme }) => theme.colors.mainText};
    }
    &__container {
      input {
        display: none;
        &:checked ~ label {
          background: ${({ theme }) => theme.colors.primary};
          &::after {
            background-color: white;
            transform: translateX(1.9rem);
          }
        }
      }
      label {
        background: ${({ theme }) => theme.colors.subText};
        width: 4.5rem;
        height: 2.6rem;
        display: flex;
        align-items: center;
        border-radius: 5.2rem;
        transition: all 0.3s ease-in-out;
        cursor: pointer;

        &::after {
          content: "";
          padding-top: 0.3rem;
          width: 2rem;
          height: 2rem;
          position: relative;

          left: 0.3rem;
          background-color: white;
          display: block;
          border-radius: 50%;
          transition: all 0.15s ease 0s;
          opacity: 1;
        }
      }
    }
  }
`;

interface Props {
  name: string;
  active?: boolean;
  onCheck?: (active: string) => void;
}
const Toggle: React.FC<Props> = ({
  children,
  name,
  active = false,
  onCheck,
}) => {
  return (
    <Unit>
      <div className="toggle">
        <div className="toggle__content">{children}</div>
        <div className="toggle__container">
          <input
            type="checkbox"
            checked={active}
            className="form__toggle"
            id={name}
            onChange={(e) => {
              let on = e.target.checked ? "on" : "off";

              onCheck(on);
            }}
          />
          <label htmlFor={name} className="toggle__label ios"></label>
        </div>
      </div>
    </Unit>
  );
};
export default Toggle;

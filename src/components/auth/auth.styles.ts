import styled, { css } from "styled-components";
import { buttonBase } from "../ui/button/button.styles";
import { NavLink } from "react-router";

const buttonStyles = css`
  ${buttonBase}
  padding: 8px 24px;

  font-weight: 800;
  font-size: 18px;

  text-shadow: 1px 1px 1px ${({ theme }) => theme.colors.textSecondary};
  border-image: ${({ theme }) => theme.borderImage.default};

  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.bgDarker};

  &:hover {
    background-color: ${({ theme }) => theme.colors.bgLight};
  }
`;

const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 420px;
  padding: 12px;

  border-radius: 6px;

  font-weight: 800;
  text-shadow: 1px 1px 1px ${({ theme }) => theme.colors.textSecondary};
  box-sizing: border-box;

  background: ${({ theme }) => theme.colors.bgPrimary};
  border-image: ${({ theme }) => theme.borderImage.default};
`;

const Title = styled.h1`
  color: yellow;
  font-size: 24px;
  margin-bottom: 0;
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 12px;
  margin: 24px 0;
`;

const RuneNavButton = styled(NavLink)`
  ${buttonStyles}
`;

const RuneButton = styled.button`
  ${buttonStyles}
`;

export const ErrorMessage = styled.span`
  display: block;

  width: 100%;
  margin-bottom: 6px;

  font-size: 12px;
  text-align: right;

  color: red;
`;

export { AuthContainer, RuneNavButton, RuneButton, Title, ButtonsContainer };

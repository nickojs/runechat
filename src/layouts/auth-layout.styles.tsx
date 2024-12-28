import styled from "styled-components";
import authBg from "../assets/img/auth-wall.png";

const AuthLayoutBase = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-image: url(${authBg});
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;

  height: 100vh;
  width: 100vw;
`;

export { AuthLayoutBase };

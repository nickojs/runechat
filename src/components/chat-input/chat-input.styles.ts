import styled from "styled-components";
import borderImage from "../../assets/img/input-border.png";

const ChatInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #ccbb9a;
  padding: 16px;
  width: 600px;
  border-image: url(${borderImage}) 30 / 30px / 1px;

  font-weight: 800;
`;

const InputOverride = styled.input`
  all: unset;
  width: 100%;
  margin-left: 8px;
  background-color: transparent;
`;

export { ChatInputContainer, InputOverride };

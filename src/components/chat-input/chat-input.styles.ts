import styled from "styled-components";
import borderImage from "../../assets/img/input-border.png";

const ChatInputContainer = styled.div`
  display: flex;
  flex-direction: row;

  padding: 16px;

  font-weight: 800;

  border-image: url(${borderImage}) 30 / 30px / 1px;
  background-color: #ccbb9a;

  p {
    margin: 0;
  }
`;

const InputOverride = styled.input`
  all: unset;

  flex: 1;
  margin-left: 8px;

  background-color: transparent;
`;

export { ChatInputContainer, InputOverride };

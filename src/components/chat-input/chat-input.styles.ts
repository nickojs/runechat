import styled from "styled-components";
import sendImg from "../../assets/img/send.png";

const ChatInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 16px;

  font-weight: 800;

  border-image: ${({ theme }) => theme.borderImage.default};
  background-color: ${({ theme }) => theme.colors.bgLight};

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

const SendBtn = styled.button`
  all: unset;
  position: relative;

  margin-left: 8px;
  width: 30px;
  height: 30px;

  cursor: pointer;
  user-select: none;

  color: transparent;

  background-image: url(${sendImg});
  background-size: 100%;

  &:active {
    background-size: 105%;
    transform: translateY(-5%);
  }

  &:disabled {
    cursor: not-allowed;
    pointer-events: none;

    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.6);
      clip-path: polygon(
        50% 0%,
        80% 10%,
        100% 35%,
        100% 70%,
        80% 90%,
        50% 100%,
        20% 90%,
        0% 70%,
        0% 35%,
        20% 10%
      );
    }
  }
`;

export { ChatInputContainer, InputOverride, SendBtn };

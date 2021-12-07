import styled from "styled-components";

export const FooterStyles = styled.div`
  display: flex;
  position: fixed;
  align-items: flex-end;
  justify-content: center;
  bottom: 0;
  height: 20vh;
  width: 100vw;
`;

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 60%;

  .icon-footer {
    font-size: 4rem;
    /* background-color: cornflowerblue; */
    border-radius: 50%;
    cursor: pointer;
    padding: 0.5rem 0;
    transition: 0.3s;
  }

  .icon-footer:hover {
    transform: scale(1.3);
  }
`;

import styled from "styled-components";

export const NavStyles = styled.div`
  background-color: #ffd966;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4vh;
  border: 1px solid grey;
  width: 100%;
  overflow: hidden;
  position: fixed;
  top: 0;
`;

export const Div1 = styled.div`
  display: flex;
  flex-grow: 0.2;
  justify-content: space-between;

  .icon-arrow {
    margin-top: 2px;
    display: none;
    cursor: pointer;
  }

  .container-title {
    padding-left: 2rem;
  }

  @media (max-width: 812px), (orientation: potrait) {
    .icon-arrow {
      display: block;
    }
  }
`;

export const Div2 = styled.div`
  display: flex;
  flex-grow: 0.8;
  justify-content: flex-end;
  padding-right: 2rem;
`;

export const Div1Child = styled.div`
  cursor: pointer;
  /* margin-left: 2rem; */

  @media (max-width: 812px), (orientation: potrait) {
    display: none;
  }
`;

export const Div2Child = styled.div`
  margin-left: 2rem;

  @media (max-width: 580px) {
    display: none;
  }
`;

export const DropdownDiv = styled.div`
  position: absolute;
  top: 4%;
  width: 120px;
  color: black;
  transform: translateX(35%);
  background-color: rgb(255, 255, 255, 0.8);
  border: 1px solid black;
  padding: 1rem;
  overflow: hidden;
`;

export const DropdownItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  cursor: pointer;
`;

import styled from "styled-components";

export const NavStyles = styled.div`
  background-color: #ffd966;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4vh;
  padding: 0 2rem;
  border: 1px solid grey;
  /* width: 100%; */
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

  @media (max-width: 782px), (orientation: potrait) {
    .icon-arrow {
      display: block;
    }
  }
`;

export const Div2 = styled.div`
  display: flex;
  flex-grow: 0.8;
  justify-content: flex-end;
`;

export const Div1Child = styled.div`
  cursor: pointer;
  /* margin-left: 2rem; */

  @media (max-width: 782px), (orientation: potrait) {
    display: none;
  }
`;

export const Div2Child = styled.div`
  margin-left: 2rem;
`;

export const DropdownDiv = styled.div`
  position: absolute;
  top: 4%;
  width: 120px;
  color: black;
  /* transform: translateX(-45%); */
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

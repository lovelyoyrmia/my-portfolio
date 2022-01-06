import styled from "styled-components";

export const BodyStyles = styled.div`
  display: flex;
  padding: 1rem;
`;

export const BodyLeft = styled.div`
  flex-grow: 0.6;
`;

export const BodyRightDiv = styled.div`
  flex-grow: 0.4;
  padding-top: 2rem;
`;

export const BodyRightWrapper = styled.div`
  text-align: center;
  .right-intro {
    font-size: 1.5rem;
    font-weight: 100;
    color: whitesmoke;
  }
  .right-name {
    font-size: 2.1rem;
    font-weight: bold;
    color: whitesmoke;
  }
`;
export const BodyRightTitle = styled.div`
  margin-top: 1rem;
  height: 50px;
  overflow: hidden;
`;
export const BodyRightTitleWrapper = styled.div`
  height: 100%;
  animation: move 10s ease-in-out infinite alternate;

  @keyframes move {
    25% {
      transform: translateY(-50px);
    }
    50% {
      transform: translateY(-100px);
    }
    75% {
      transform: translateY(-150px);
    }
    100% {
      transform: translateY(-200px);
    }
  }
`;

export const BodyRightTitleItem = styled.div`
  height: 50px;
  font-size: 1.9rem;
  color: #ffd966;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RightFormWrapper = styled.div`
  margin-top: 2rem;
  text-align: center;
  align-items: center;

  .form-title {
    font-size: 1.5rem;
    color: white;
    margin-bottom: 10px;
  }
`;

export const RightForm = styled.form`
  color: white;
  /* display: flex; */
  /* justify-content: center; */
  /* flex-direction: column; */
  text-align: center;
  /* width: 60%; */
`;

export const RightInput = styled.input`
  margin-top: 1rem;
  margin-left: 1rem;
  width: 20rem;
  height: 4vh;
  padding: 0.5rem;
  border-radius: 1rem;
  border: 1px solid grey;
  outline: none;
`;

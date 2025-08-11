import styled from "styled-components";

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loader">
        <div className="box1" />
        <div className="box2" />
        <div className="box3" />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .loader {
    width: 28px; /* was 112px → now 25% */
    height: 28px;
    position: relative;
  }

  .box1,
  .box2,
  .box3 {
    border: 4px solid #f5f5f5; /* was 16px → now 25% */
    box-sizing: border-box;
    position: absolute;
    display: block;
  }

  .box1 {
    width: 28px; /* was 112px → now 25% */
    height: 12px; /* was 48px → now 25% */
    margin-top: 16px; /* was 64px → now 25% */
    margin-left: 0px;
    animation: abox1 4s 1s forwards ease-in-out infinite;
  }

  .box2 {
    width: 12px;
    height: 12px;
    margin-top: 0px;
    margin-left: 0px;
    animation: abox2 4s 1s forwards ease-in-out infinite;
  }

  .box3 {
    width: 12px;
    height: 12px;
    margin-top: 0px;
    margin-left: 16px; /* was 64px → now 25% */
    animation: abox3 4s 1s forwards ease-in-out infinite;
  }

  /* Keyframes: same logic, just scaled numbers */
  @keyframes abox1 {
    0% {
      width: 28px;
      height: 12px;
      margin-top: 16px;
      margin-left: 0px;
    }
    12.5%,
    25%,
    37.5%,
    50%,
    62.5% {
      width: 12px;
      height: 12px;
      margin-top: 16px;
      margin-left: 0px;
    }
    75% {
      width: 12px;
      height: 28px;
      margin-top: 0px;
      margin-left: 0px;
    }
    87.5%,
    100% {
      width: 12px;
      height: 12px;
      margin-top: 0px;
      margin-left: 0px;
    }
  }

  @keyframes abox2 {
    0%,
    12.5%,
    25%,
    37.5% {
      width: 12px;
      height: 12px;
      margin-top: 0px;
      margin-left: 0px;
    }
    50% {
      width: 28px;
      height: 12px;
      margin-top: 0px;
      margin-left: 0px;
    }
    62.5%,
    75%,
    87.5%,
    100% {
      width: 12px;
      height: 12px;
      margin-top: 0px;
      margin-left: 16px;
    }
  }

  @keyframes abox3 {
    0%,
    12.5% {
      width: 12px;
      height: 12px;
      margin-top: 0px;
      margin-left: 16px;
    }
    25% {
      width: 12px;
      height: 28px;
      margin-top: 0px;
      margin-left: 16px;
    }
    37.5%,
    50%,
    62.5%,
    75%,
    87.5% {
      width: 12px;
      height: 12px;
      margin-top: 16px;
      margin-left: 16px;
    }
    100% {
      width: 28px;
      height: 12px;
      margin-top: 16px;
      margin-left: 0px;
    }
  }
`;

export default Loader;

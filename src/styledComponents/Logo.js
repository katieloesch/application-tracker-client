import styled from 'styled-components';

const Wrapper = styled.section`
  .logo {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }

  .logo-txt {
    color: var(--primary-500);
    font-weight: 600;
    padding-left: 10px;
    letter-spacing: var(--letter-spacing);
    font-size: clamp(1.35rem, 2.2vw, 1.6rem);
  }

  .logo-icon {
    width: 50px;
    height: 50px;
    color: white;
    border-radius: 50%;
    background-color: var(--primary-500);

    svg {
      width: 100%;
      height: 100%;
      padding: 9px;
    }
  }

  .logo.auth {
    width: 100%;
    margin: 0 auto;
    margin-bottom: 1.38rem;
    justify-content: center;

    .logo-txt {
      font-size: clamp(1.15rem, 1.5vw, 1.3rem);
    }

    .logo-icon {
      width: 45px;
      height: 45px;
    }
  }

  @media (max-width: 420px) {
    .logo-icon {
      width: 45px;
      height: 45px;
    }
  }

  @media (max-width: 315px) {
    .logo.auth {
      .logo-txt {
        font-size: clamp(1rem, 1.2vw, 1.1rem);
        text-align: center;
        width: min-content;
      }

      .logo-icon {
        width: 32px;
        height: 32px;

        svg {
          padding: 6px;
        }
      }
    }
  }
`;
export default Wrapper;

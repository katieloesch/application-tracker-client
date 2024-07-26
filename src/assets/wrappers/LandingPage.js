import styled from 'styled-components';

const Wrapper = styled.section`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }
  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3rem;
  }
  h1 {
    font-weight: 700;
    span {
      color: var(--primary-500);
    }
    margin-bottom: 1.5rem;
  }
  p {
    line-height: 2;
    color: var(--text-secondary-color);
    margin-bottom: 1.5rem;
    max-width: 35em;
  }
  .register-link {
    margin-right: 1rem;
  }
  .btn {
    padding: 0.75rem 1rem;
  }
  .main-img {
    border-radius: 13px;
  }
  .logo {
    width: 50px;
    height: 50px;
    /* color: var(--primary-500); */
    color: white;

    border-radius: 50%;
    background-color: var(--primary-500);
  }

  nav span {
    color: var(--primary-500);
    font-weight: bold;
    padding-left: 10px;
    letter-spacing: var(--letter-spacing);
    font-size: clamp(1rem, 2vw, 1.4rem);
  }

  .logo svg {
    width: 100%;
    height: 100%;
    padding: 8px;
  }

  @media (max-width: 992px) {
    .page {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      padding: 6rem 0;
      gap: 3rem;
    }
    .info {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .register-link {
      margin-bottom: 8px;
    }
    .main-img {
      display: block;
      width: 100%;
    }
  }
  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 400px;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
      width: 100%;
    }
  }
  @media (min-width: 1075px) {
    .page {
      grid-template-columns: 1fr 580px;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
      width: 100%;
    }
  }
  @media (max-width: 420px) {
    p {
      line-height: 1.8;

      font-size: 15px;
    }
  }
`;

export default Wrapper;

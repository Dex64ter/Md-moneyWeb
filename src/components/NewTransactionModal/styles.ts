import styled from 'styled-components';

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem; // 24px
    margin-bottom: 2rem; // 32px

  }

  input {
    width: 100%;
    padding: 1.5rem; // 24px
    height: 4rem; // 64px
    border-radius: 0.25rem; // 4px

    background: #E7E9EE;
    border: 1px solid #D7D7D7;

    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 1rem; // 16px

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem; // 24px
    height: 4rem; // 64px
    background: var(--green);
    color: #FFF;
    border-radius: 0.25rem; // 4px
    border: 0px;
    font-size: 1rem; // 16px
    font-weight: 600;
    margin-top: 1.5rem; // 24px

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }

  }

  
`
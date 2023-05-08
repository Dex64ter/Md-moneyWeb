import styled from 'styled-components'

export const Container = styled.header`
  background: var(--blue);

`;

export const Content = styled.div`
  max-width: 1128px;
  margin: 0 auto;

  padding: 2rem 1rem 12rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 1rem;
    background: var(--blue-light);
    color: #FFF;
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: filter 0.2s;  // a variável em transition q for usada demorará0.2 segundos para ser ativada.

    &:hover {
      filter: brightness(0.9);
    }
  }

`;
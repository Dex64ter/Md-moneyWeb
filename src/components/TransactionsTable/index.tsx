import { Container } from "./styles";

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposite">R$9.685,00</td>
            <td>Desenvolvimento</td>
            <td>07/05/2023</td>
          </tr>
          
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$685,00</td>
            <td>Casa</td>
            <td>20/04/2023</td>
          </tr>
          
        </tbody>
      </table>
    </Container>
  );
}
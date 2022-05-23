import { useContext } from 'react'
import { Container } from '../../components/TransationTable/style'
import { TransationContext } from '../../TransationContext';

export default function TransationTable() {

  const { transations } = useContext(TransationContext);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {
            transations.map((transation) => (
              <tr key={transation.id}>
                <td>{transation.title}</td>
                <td className={transation.type}>
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  }).format(transation.amount)}
                </td>
                <td>{transation.category}</td>
                <td>
                  {new Intl.DateTimeFormat('pt-BR').format(
                    new Date(transation.createdAt)
                  )}
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </Container>
  )
}

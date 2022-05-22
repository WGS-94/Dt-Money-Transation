import { useEffect } from 'react'
import { Container } from '../../components/TransationTable/style'
import { api } from '../../services/api';

export default function TransationTable() {

  useEffect(() => {
    api.get('transations')
      .then(response => console.log(response.data))
  }, []);

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
          <tr>
            <td>Desenvolvimento de website</td>
            <td className='deposit'>R$ 12.000</td>
            <td>Desenvolvimento</td>
            <td>20/02/2022</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className='withdraw'>- R$ 1.100</td>
            <td>Casa</td>
            <td>10/05/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}

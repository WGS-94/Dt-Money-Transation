import { Container } from '../Dashboard/style';
import Summary from '../Sumamary';
import TransationTable from '../TransationTable';

export default function Dashboard() {
  return (
    <Container>
      <Summary /> 
      <TransationTable />
    </Container>
  )
}

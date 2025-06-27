import { PropagateLoader  } from 'react-spinners'
import { colors } from '../../styles'
import { Container } from './styles'

const Loader = () => (
  <Container>
      <PropagateLoader  color={colors.orange_rose} />
  </Container>
)

export default Loader

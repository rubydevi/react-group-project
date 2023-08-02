import Container from 'react-bootstrap/Container';
import DragonApi from '../Redux/Dragons/dragonsApi'
const DragonsComponents = () => (
  <Container>
    <h1>Dragons Page</h1>
    <DragonApi />
  </Container>
);

export default DragonsComponents;

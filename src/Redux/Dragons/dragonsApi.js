import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import { useEffect, useState } from "react";



const DragonApi = () => {
  const [dragons, setDragons] = useState([])

  useEffect(() => {
    fetch("https://api.spacexdata.com/v4/dragons")
    .then(data => data.json())
    .then(result => setDragons(result))
  }, [])

  const card = dragons.map((dragon) => (
    
      <div key={dragon.id}>
        <Row className='m-3'>
          <Col> 
            <img src={dragon.flickr_images} className='w-100 m-3' />
          </Col>
          <Col className='p-5'>
            <Table striped bordered hover>
            <thead>
              <tr>
                <th>{dragon.name}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{dragon.type}</td>
              </tr>
              <tr>
                <td>
                  <button type='button' style={{ border: "2px solid white", borderRadius: "4px"}} className='bg-primary text-light'>Reserve Dragon</button>
                </td>
              </tr>
            </tbody>
            </Table>
          </Col>
        </Row>
      </div>
  ))

  return (
    <>
      <Container>
        {card}
      </Container>
    </>
  )
}

export default DragonApi
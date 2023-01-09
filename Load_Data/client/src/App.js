import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Table from 'react-bootstrap/Table';


const App = () => {
  const [data, setdata] = useState([{}])
  useEffect(() => {
    fetch("/members").then(
      res => res.json()
    ).then(
      data => {
        setdata(data)
        console.log(data)
      }
    )
  }, [])

  return (
    <div>
      {/* <Container> */}
      <div>
        <Navbar expand="lg" variant="light" bg="primary">
          <Container>
            <Navbar.Brand style={{ backgroundColor: "white", color: "black", fontWeight: "bold", padding: '12px' }} href="#">Bitcoin Compass</Navbar.Brand>
          </Container>
        </Navbar>
      </div>
      <Container>
        <div>
          <br />
          <h4>Welcome, You are here to find out about my accuracy.</h4><br />
          <h4>Well here are my previous predictions.</h4>
        </div>
        <div>
          <Table style={{ textAlign: "center" }} striped bordered hover size="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Date</th>
                <th>Predicted closing price ($)</th>
                <th>Actual closing price ($)</th>
                <th>Error ($)</th>
              </tr>
            </thead>
            <tbody>
              {data.map((element, key) => {
                return (
                  <tr key={key}>
                    <td>{key + 1}</td>
                    <td>{element.date?.slice(0, 10)}</td>
                    <td>{parseFloat(element.predicted).toFixed(2)}</td>
                    <td>{parseFloat(element.actual).toFixed(2)}</td>
                    <td>{(element.actual - element.predicted) <= 0 ? parseFloat(element.predicted - element.actual).toFixed(2) : (element.actual - element.predicted) > 0 ? parseFloat(element.actual - element.predicted).toFixed(2) : "N/A"}</td>
                  </tr>
                )
              })}

            </tbody>
          </Table>
        </div>
      </Container>
      {/* </Container> */}
    </div>
  )
}

export default App
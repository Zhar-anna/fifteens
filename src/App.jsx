import React from 'react';
import { Table } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <Table striped bordered hover>
      <tbody>
        <tr>
          <td className="p-3">14</td>
          <td className="p-3">2</td>
          <td className="p-3">12</td>
          <td className="p-3">1</td>
        </tr>
        <tr>
          <td className="p-3">3</td>
          <td className="p-3">13</td>
          <td className="p-3">9</td>
          <td className="p-3">8</td>
        </tr>
        <tr>
          <td className="p-3">5</td>
          <td className="p-3">7</td>
          <td className="p-3">15</td>
          <td className="p-3" />
        </tr>
      </tbody>
    </Table>
  );
}

export default App;

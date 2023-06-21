import React, { useState }  from 'react';
import Number from './Number.jsx'
import { Table } from 'react-bootstrap';
import './App.css';

function App(values) {
  let grid = [];
  const firstLine = values.children.slice(0, 4);
  grid.push(firstLine);
  const secondLine = values.children.slice(4, 8);
  grid.push(secondLine);
  const thirdLine = values.children.slice(8, 12);
  grid.push(thirdLine);
  const fourthLine = values.children.slice(-3);
  grid.push(fourthLine);
  grid[3].push('');
  // console.log(grid)
  const [newgrid, makeAction] = useState(grid);
  // console.log(document.getElementsByClassName('striped'));
  const handleKeyDown = (event) => {
    let linWithEmpty;
    for(let i = 0; i < newgrid.length; i++) {
      if(newgrid[i].includes('')) {
        linWithEmpty = i;
      }
    };
    const columnWithEmpty = newgrid[linWithEmpty].indexOf('');

    
    if (event.key === 'ArrowDown') {
      // const copymatrix = newgrid;
      newgrid[linWithEmpty - 1][columnWithEmpty] = '';
      console.log(newgrid);
      makeAction(newgrid)
    }
    else if(event.key === 'ArrowUp') {

    }
    else if(event.key === 'ArrowLeft') {

    }
    else if(event.key === 'ArrowRight') {
      
    }
  };
  return (
    <Table onKeyDown={handleKeyDown} striped bordered hover tabIndex={0}>
      <tbody>
        <tr>
          { newgrid[0].map((el) =>  <td id={el} key={el} className="p-3">{el}</td>)}
        </tr>
        <tr>
        { newgrid[1].map((el) => <td id={el} key={el} className="p-3">{el}</td>)}
        </tr>
        <tr>
        { newgrid[2].map((el) => <td id={el} key={el} className="p-3">{el}</td>)}
        </tr>
        <tr>
        { newgrid[3].map((el) => <td id={el} key={el} className="p-3">{el}</td>)}
        </tr>
      </tbody>
    </Table>
  );
}

export default App;

import React, { useState }  from 'react';
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

  const [newgrid, makeAction] = useState(grid);
  const [count, setCount] = useState(0);
  const [wintext, setWinText] = useState('');

  const handleKeyDown = (event) => {
    let linWithEmpty;
    for(let i = 0; i < newgrid.length; i++) {
      if(newgrid[i].includes('')) {
        linWithEmpty = i;
      }
    };
    const columnWithEmpty = newgrid[linWithEmpty].indexOf('');
    const winArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, '']
    if (JSON.stringify(newgrid.flat()) === JSON.stringify(winArray)) {
      setWinText('Вы выиграли!');
    }
    if (event.key === 'ArrowDown') {
      if (linWithEmpty === 0) {
        return;
      }
      newgrid[linWithEmpty][columnWithEmpty] = newgrid[linWithEmpty - 1][columnWithEmpty];
      newgrid[linWithEmpty - 1][columnWithEmpty] = '';
      makeAction(newgrid);
      setCount(count + 1);
    }
    else if(event.key === 'ArrowUp') {
      if (linWithEmpty === 3) {
        return;
      }
      newgrid[linWithEmpty][columnWithEmpty] = newgrid[linWithEmpty + 1][columnWithEmpty];
      newgrid[linWithEmpty + 1][columnWithEmpty] = '';
      makeAction(newgrid);
      setCount(count + 1);
    }
    else if(event.key === 'ArrowLeft') {
      if (columnWithEmpty === 3) {
        return;
      }
      newgrid[linWithEmpty][columnWithEmpty] = newgrid[linWithEmpty][columnWithEmpty + 1];
      newgrid[linWithEmpty][columnWithEmpty + 1] = '';
      makeAction(newgrid);
      setCount(count + 1);
    }
    else if(event.key === 'ArrowRight') {
      if (columnWithEmpty === 0) {
        return;
      }
      newgrid[linWithEmpty][columnWithEmpty] = newgrid[linWithEmpty][columnWithEmpty - 1];
      newgrid[linWithEmpty][columnWithEmpty - 1] = '';
      makeAction(newgrid);
      setCount(count + 1);
    }
  };
  return (
    <>
      <Table onKeyDown={handleKeyDown} striped bordered hover tabIndex={0}>
        <thead>
          <tr>
            <th colSpan={3}>Количество ходов: {count}</th>
          </tr>
        </thead>
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
      <div>{wintext}</div>
    </>
  );
}

export default App;

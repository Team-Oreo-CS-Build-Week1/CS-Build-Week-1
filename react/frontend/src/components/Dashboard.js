import React, { useEffect, useState } from 'react';
import axiosWithAuth from "../authentication/axiosWithAuth";

function Dashboard() {
  const [array, setArray] = useState([]);
  const [selected, setSelected] = useState({id: ""});

  useEffect(() => {
    console.log('TOKEN', localStorage.getItem('token'))
    axiosWithAuth()
    // .get('http://localhost:8000/api/adv/init')
    .get('http://localhost:8000/api/adv/rooms')
    .then(res => {
        console.log('ROOMS DATA', res.data)
        let data = res.data;

        axiosWithAuth()
        .get('http://localhost:8000/api/adv/init')
        .then(res => {
          console.log('INIT RESPONSE', res)
          setSelected(res.data.roomId)
        })
        .catch(err => {
            console.log(err)
        })

        // let numOfRooms = data.length;
        let lookup = {};
        for (let i = 0; i < data.length; i++) {
          lookup[data[i].id] = data[i]
        }
        
        function createMap(columnCount, rowCount) {
          const map = [];
          for (let x = 0; x < columnCount; x++) {
            map[x] = []; // set up inner array
            for (let y = 0; y < rowCount; y++) {
               addCell(map, x, y);
            }
          }
          return map;
        }
       
        function addCell(map, x, y) {
           map[x][y] = {room: false, id: -1, roomData: '', left: false, right: false, top: false, down: false}
        }
       
        const map = createMap(10, 10);
        console.log('MAP', map)

        let y = 9;
        let x= 5;
        let position = map[y][x];
        position.room = true
        position.id = data[0].id
        position.roomData = data[0]
        // let rooms = 1;

        console.log('UPDATED MAP', map)

        goNorth(position, y, x);
        
        function goJustNorth(position, y, x) {
          let current = position;
          let yAxis = y;
          let xAxis = x;
          console.log('GOjustNorth: Y: ', y, 'X: ',x, 'CURRENT NODE: ', current )
          if (current.roomData.n_to) {
            console.log('IF TRUE')
            while (current.roomData.n_to > 0 && yAxis >= 0) {
              map[yAxis-1][xAxis].roomData = lookup[current.roomData.n_to];
              map[yAxis-1][xAxis].id = lookup[current.roomData.n_to].id;
              map[yAxis-1][xAxis].room = true;
              current = map[yAxis-1][xAxis];
              yAxis -= 1;
            }
         }
        }

        function goNorth(position, y, x) {
          let current = position;
          goEast(position, y, x);
          goWest(position, y, x);
          let yAxis = y;
          let xAxis = x;
          while (current.roomData.n_to > 0 && yAxis >= 0) {
            map[yAxis-1][xAxis].roomData = lookup[current.roomData.n_to];
            map[yAxis-1][xAxis].id = lookup[current.roomData.n_to].id;
            map[yAxis-1][xAxis].room = true;
            current = map[yAxis-1][xAxis];
            yAxis -= 1;
            goEast(current, yAxis, xAxis);
            goWest(current, yAxis, xAxis);

            let xStart = 0;
            while(xStart <= 9) {
              // console.log('First while xAxis: ', xAxis)
              let newPosition = map[yAxis][xStart]
              goJustNorth(newPosition, yAxis, xStart);
              xStart++;
            }
          }
        }

        function goEast(position, y, x) {
          let current = position;
          let yAxis = y;
          let xAxis = x;
          while (current.roomData.e_to > 0 && xAxis <= 9) {
            map[yAxis][xAxis+1].roomData = lookup[current.roomData.e_to];
            map[yAxis][xAxis+1].id = lookup[current.roomData.e_to].id;
            map[yAxis][xAxis+1].room = true;
            current = map[yAxis][xAxis+1];
            xAxis += 1;
          }
        }

        function goWest(position, y, x) {
          let current = position;
          let yAxis = y;
          let xAxis = x;
          while (current.roomData.w_to > 0 && x >= 0) {
            map[yAxis][xAxis-1].roomData = lookup[current.roomData.w_to];
            map[yAxis][xAxis-1].id = lookup[current.roomData.w_to].id;
            map[yAxis][xAxis-1].room = true;
            current = map[yAxis][xAxis-1];
            xAxis -= 1;
          }
        }
        

        console.log('HERE', map)

        setArray(map);

    })
    .catch(err => {
        console.log(err)
    })
  }, [])

  const handleUp = (e) => {
    console.log('click up')

    axiosWithAuth()
    .post('http://localhost:8000/api/adv/move', {direction: 'n'})
    .then(res => {
      console.log('MOVE RESPONSE', res)

      axiosWithAuth()
      .get('http://localhost:8000/api/adv/init')
      .then(res => {
        console.log('INIT RESPONSE', res)
        setSelected(res.data.roomId)
  
      })
      .catch(err => {
          console.log(err)
      })

    })
    
    .catch(err => {
        console.log(err)
    })
  }

  const handleLeft = (e) => {
    console.log('click left')
    axiosWithAuth()
    .post('http://localhost:8000/api/adv/move', {direction: 'w'})
    .then(res => {
      console.log('MOVE RESPONSE', res)

      axiosWithAuth()
      .get('http://localhost:8000/api/adv/init')
      .then(res => {
        console.log('INIT RESPONSE', res)
        setSelected(res.data.roomId)
  
      })
      .catch(err => {
          console.log(err)
      })

    })
    .catch(err => {
        console.log(err)
    })
  }

  const handleRight = (e) => {
    console.log('click right')
    axiosWithAuth()
    .post('http://localhost:8000/api/adv/move', {direction: 'e'})
    .then(res => {
      console.log('MOVE RESPONSE', res)

      axiosWithAuth()
      .get('http://localhost:8000/api/adv/init')
      .then(res => {
        console.log('INIT RESPONSE', res)
        setSelected(res.data.roomId)
  
      })
      .catch(err => {
          console.log(err)
      })

    })
    .catch(err => {
        console.log(err)
    })
  }

  const handleDown = (e) => {
    console.log('click down')
    axiosWithAuth()
    .post('http://localhost:8000/api/adv/move', {direction: 's'})
    .then(res => {
      console.log('MOVE RESPONSE', res)

      axiosWithAuth()
      .get('http://localhost:8000/api/adv/init')
      .then(res => {
        console.log('INIT RESPONSE', res)
        setSelected(res.data.roomId)
  
      })
      .catch(err => {
          console.log(err)
      })

    })
    .catch(err => {
        console.log(err)
    })
  }

  return (
    <div>
      <div style={{display: 'flex', justifyContent: 'center', fontSize: '28px', fontWeight: '600', paddingTop: '20px'}}>Game Board</div>
      <div style={{display: 'flex', width: '100%'}}>
        <div style={{margin: '20px', width: '80%'}}>
          {array.map(row => {
            return <Row row={row} selected={selected} />
          })}
        </div>
        <div style={{width: '20%', marginTop: '20px'}}>
          <div>Room</div>
          <div style={{width: '120px', height: '120px', borderRadius: '70px', backgroundColor: 'gray'}}>
            {/* <div style={{borderRadius: '70px'}}> */}
              <div style={{display: 'flex'}}>
                <div style={{width: '40px', height: '40px', backgroundColor: 'transparent', borderRadius: '50px'}}></div>
                <div onClick={handleUp} style={{width: '0px', height: '0px', borderLeft: '20px solid transparent', borderRight: '20px solid transparent', borderBottom: '40px solid red', cursor: 'pointer'}}></div>
                <div style={{width: '40px', height: '40px', backgroundColor: 'transparent'}}></div>
              </div>
              <div style={{display: 'flex'}}>
                <div onClick={handleLeft} style={{width: '0px', height: '0px', borderTop: '20px solid transparent', borderBottom: '20px solid transparent', borderRight: '40px solid red', cursor: 'pointer'}}></div>
                <div style={{width: '40px', height: '40px', backgroundColor: 'transparent'}}></div>
                <div onClick={handleRight} style={{width: '0px', height: '0px', borderTop: '20px solid transparent', borderBottom: '20px solid transparent', borderLeft: '40px solid red', cursor: 'pointer'}}></div>
              </div>
              <div style={{display: 'flex'}}>
                <div style={{width: '40px', height: '40px', backgroundColor: 'transparent'}}></div>
                <div onClick={handleDown} style={{width: '0px', height: '0px', borderLeft: '20px solid transparent', borderRight: '20px solid transparent', borderTop: '40px solid red', cursor: 'pointer'}}></div>
                <div style={{width: '40px', height: '40px', backgroundColor: 'transparent'}}></div>
              </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;

function Row({row, selected} ) {
console.log('ROW', row)
  return (
    <div style={{display: 'grid', textAlign: 'left', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr',
         }}>
      {row.map(card => {
        return <Card card={card} selected={selected}/>
      })}
    </div>
  )
}

function Card({card, selected}) {
console.log('CARD', card, 'selected', selected)
  return (
    <div style={{border: '1px solid gray', height: '60px', width: '100%',
                 backgroundColor: `${card.room ? card.id === selected ? "orange" : "green" : "gray"}`,
    }}>   
      {/* <div style={{display: 'flex', width: '100%'}}>
        <div style={{width: '30%', height: '30%', backgroundColor: 'transparent'}}></div>
        <div style={{width: '30%', height: '30%', borderTop: '10px solid red', }}></div>
        <div style={{width: '30%', height: '30%', backgroundColor: 'transparent'}}></div>
      </div>
      <div style={{display: 'flex', width: '100%'}}>
        <div style={{width: '30%', height: '30%', borderLeft: '10px solid red'}}></div>
        <div style={{width: '30%', height: '30%', backgroundColor: 'transparent'}}></div>
        <div style={{width: '30%', height: '30%', borderRight: '10px solid red'}}></div>
      </div>
      <div style={{display: 'flex', width: '100%'}}>
        <div style={{width: '30%', height: '30%', backgroundColor: 'transparent'}}></div>
        <div style={{width: '30%', height: '30%', borderBottom: '10px solid red'}}></div>
        <div style={{width: '30%', height: '30%', backgroundColor: 'transparent'}}></div>
      </div>    */}
    </div>
  )
}
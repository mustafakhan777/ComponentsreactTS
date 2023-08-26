import react from 'react';
import React, { useState } from 'react';
import './App.css';
import SMSelect from './components/SMselect'
import Button from './components/Button'
import INput from './components/INput'
import Card from './components/Card'
import SMtabel from './components/SMtable'


function App() {
  // Table Component Data 
  const Data = [
    {
      "rollno": 101,
      "percentage": 85.25,
      "name": "Alice Johnson",
      "fathername": "Mr. Johnson"
    },
    {
      "rollno": 102,
      "percentage": 78.50,
      "name": "Bob Smith",
      "fathername": "Mr. Smith"
    },
    {
      "rollno": 103,
      "percentage": 92.75,
      "name": "Charlie Williams",
      "fathername": "Mr. Williams"
    },
    {
      "rollno": 104,
      "percentage": 66.80,
      "name": "David Davis",
      "fathername": "Mr. Davis"
    },
    {
      "rollno": 105,
      "percentage": 95.00,
      "name": "Eve Brown",
      "fathername": "Mr. Brown"
    },
    {
      "rollno": 101,
      "percentage": 85.25,
      "name": "Alice Johnson",
      "fathername": "Mr. Johnson"
    },
    {
      "rollno": 102,
      "percentage": 78.50,
      "name": "Bob Smith",
      "fathername": "Mr. Smith"
    },
    {
      "rollno": 103,
      "percentage": 92.75,
      "name": "Charlie Williams",
      "fathername": "Mr. Williams"
    },
    {
      "rollno": 104,
      "percentage": 66.80,
      "name": "David Davis",
      "fathername": "Mr. Davis"
    },
    {
      "rollno": 105,
      "percentage": 95.00,
      "name": "Eve Brown",
      "fathername": "Mr. Brown"
    },
    {
      "rollno": 106,
      "percentage": 88.90,
      "name": "Frank Miller",
      "fathername": "Mr. Miller"
    },
    {
      "rollno": 107,
      "percentage": 79.30,
      "name": "Grace Wilson",
      "fathername": "Mr. Wilson"
    },
    {
      "rollno": 108,
      "percentage": 71.75,
      "name": "Hannah Jackson",
      "fathername": "Mr. Jackson"
    },
    {
      "rollno": 109,
      "percentage": 93.20,
      "name": "Isaac Taylor",
      "fathername": "Mr. Taylor"
    },
    {
      "rollno": 110,
      "percentage": 84.60,
      "name": "Jane Anderson",
      "fathername": "Mr. Anderson"
    },
    {
      "rollno": 101,
      "percentage": 85.25,
      "name": "Alice Johnson",
      "fathername": "Mr. Johnson"
    },
    {
      "rollno": 102,
      "percentage": 78.50,
      "name": "Bob Smith",
      "fathername": "Mr. Smith"
    },
    {
      "rollno": 103,
      "percentage": 92.75,
      "name": "Charlie Williams",
      "fathername": "Mr. Williams"
    },
    {
      "rollno": 104,
      "percentage": 66.80,
      "name": "David Davis",
      "fathername": "Mr. Davis"
    },
    {
      "rollno": 105,
      "percentage": 95.00,
      "name": "Eve Brown",
      "fathername": "Mr. Brown"
    },
    {
      "rollno": 106,
      "percentage": 88.90,
      "name": "Frank Miller",
      "fathername": "Mr. Miller"
    },
    {
      "rollno": 107,
      "percentage": 79.30,
      "name": "Grace Wilson",
      "fathername": "Mr. Wilson"
    },
    {
      "rollno": 108,
      "percentage": 71.75,
      "name": "Hannah Jackson",
      "fathername": "Mr. Jackson"
    },
    {
      "rollno": 109,
      "percentage": 93.20,
      "name": "Isaac Taylor",
      "fathername": "Mr. Taylor"
    },
    {
      "rollno": 110,
      "percentage": 84.60,
      "name": "Jane Anderson",
      "fathername": "Mr. Anderson"
    },
    {
      "rollno": 111,
      "percentage": 89.75,
      "name": "Kevin Martinez",
      "fathername": "Mr. Martinez"
    },
    {
      "rollno": 112,
      "percentage": 76.40,
      "name": "Linda Garcia",
      "fathername": "Mr. Garcia"
    },
    {
      "rollno": 113,
      "percentage": 91.20,
      "name": "Michael Lee",
      "fathername": "Mr. Lee"
    },
    {
      "rollno": 114,
      "percentage": 67.80,
      "name": "Nancy Hernandez",
      "fathername": "Mr. Hernandez"
    },
    {
      "rollno": 115,
      "percentage": 94.50,
      "name": "Oliver Clark",
      "fathername": "Mr. Clark"
    },
    {
      "rollno": 116,
      "percentage": 88.30,
      "name": "Patricia Hall",
      "fathername": "Mr. Hall"
    },
    {
      "rollno": 117,
      "percentage": 72.70,
      "name": "Quincy Green",
      "fathername": "Mr. Green"
    },
    {
      "rollno": 118,
      "percentage": 90.10,
      "name": "Rachel White",
      "fathername": "Mr. White"
    },
    {
      "rollno": 119,
      "percentage": 82.90,
      "name": "Samuel Turner",
      "fathername": "Mr. Turner"
    },
    {
      "rollno": 120,
      "percentage": 88.75,
      "name": "Tina Martinez",
      "fathername": "Mr. Martinez"
    }

  ]

  const [text, setText] = useState<string>('')
  const [list, setList] = useState<any>([]);


  const add = () => {
    if (!text) {


    } else {
      list.push(text);
      setList([...list]);
    }

  }

  return (

    <>
      <div className='App'>
        <h2 style={{ textAlign: 'center', color: 'Black', backgroundColor: 'aqua' }}>TypeScript Component</h2>

        <div className='show'>
          <INput type='text' onChange={(e: any) => setText(e.target.value)} />
          <Button label='Add' onClick={add} />
          {list.map((x: string, i: number) => (
            <>
              <div className='del' >
                <p id='para' key={i}>{x}</p>
              </div>
            </>
          ))}
        </div>

        <SMSelect label='Select Gender' options={[
          {
            value: "male",
            displayName: "Male",
          },
          {
            value: "female",
            displayName: "Female",
          },
        ]} getValue={(e: string) => console.log(e)

        } />


        <Card Name="Mustafa" isApproved='true' Learning='Mern Stack' phone="12345678910" />
        <SMtabel cols={[
          {
            heading: "Rollno",
            key: "rollno"
          },
          {
            heading: "Name",
            key: "name"
          },
          {
            heading: "Father Name",
            key: "fathername"
          },
          {
            heading: "Percentage",
            key: "percentage"
          }
        ]} datasource={Data} />




      </div>

    </>
  );
}

export default App;

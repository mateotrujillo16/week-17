import { Component } from 'react';
import './App.css';
import BasicInfo from './Components/Person'


// VERY EASY
// class App extends Component {

//   render() {
//     return (
//       <div>
//         <p>Name: Mateo Trujillo</p>
//         <p>Number: 980-267-7329</p>
//         <p>DOB: 11-22-1997</p>
//       </div>
//     )
//   }
// }

// EASY
// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       person: {

//       }
//     }
//   }
//   render() {
//     return (
//       <div>
//         <p>Name: Mateo Trujillo</p>
//         <p>Number: 980-267-7329</p>
//         <p>DOB: 11-22-1997</p>
//       </div>
//     )
//   }
// }


// MEDIUM
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: [
        {
          name: 'Mateo',
          number: '980-267-7329',
          date: '11-22-1997'
        },
        {
          name: 'John',
          number: '123-456-7890',
          date: '11-11-2000'
        },
        {
          name: 'Jane',
          number: '111-111-1111',
          date: '01-02-2003'
        }
      ]
    }
  }
  render() {
    return (
      <div className='App'>
        <BasicInfo
          name={this.state.person[0].name}
          number={this.state.person[0].number}
          date={this.state.person[0].date}
        />
        <BasicInfo
          name={this.state.person[1].name}
          number={this.state.person[1].number}
          date={this.state.person[1].date}
        />
        <BasicInfo
          name={this.state.person[2].name}
          number={this.state.person[2].number}
          date={this.state.person[2].date}
        />
      </div>
    )
  }
}


export default App;

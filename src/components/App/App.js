import React, { Component } from 'react';
import styles from './App.module.css';
import Header from '../Header/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [{
        id: 1,
        name: 'Ivan Lovrić',
        avatar_url: "https://place-hold.it/75x75",
        company: "Profico"
      },
      {
        id: 2,
        avatar_url: "https://place-hold.it/75x75",
        company: "Aspira"
      }, {
        id: 3,
        name: 'Jane Doe',
        avatar_url: "https://place-hold.it/75x75",
        company: "Workspace"
      }, {
        id: 4,
        name: 'Richard Roe',
        avatar_url: "https://place-hold.it/75x75",
        company: "Aspira"
      }],
    };
  }

  render() {
    return (
      <div className={styles.container}>
        <Header />
        <p>Konzultacije 27.3.</p>
      </div>
    );
  }
}

export default App;

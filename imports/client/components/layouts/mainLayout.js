import React from 'react';

export default class Main extends React.Component {
  render(){
    return (
      <main className="main-container">
        <header><h1>Site Header</h1></header>
        {React.cloneElement(this.props.children, this.props)}
        <footer><p>Footer Text</p></footer>
      </main>
    )
  }
}

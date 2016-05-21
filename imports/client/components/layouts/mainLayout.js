import React from 'react';

export default class Main extends React.Component {
  render(){
    return (
      <main className="main-container">
        <header>header</header>
        {React.cloneElement(this.props.children, this.props)}
        <footer>footer</footer>
      </main>
    )
  }
}

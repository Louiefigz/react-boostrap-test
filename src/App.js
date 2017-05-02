




import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Button, Nav, NavItem, MenuItem, NavDropdown, Navbar, Grid, Col, Row} from 'react-bootstrap';





class App extends Component {




  render() {
    const navbarInstance = (
          <Navbar>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#">React-Bootstrap</a>
              </Navbar.Brand>
            </Navbar.Header>
            <Nav>
              <NavItem eventKey={1} href="#">Link</NavItem>
              <NavItem eventKey={2} href="#">Link</NavItem>
              <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.4}>Separated link</MenuItem>
              </NavDropdown>
            </Nav>
          </Navbar>
        );


        const gridInstance = (
          <Grid>
            <Row className="show-grid">
              <Col xs={12} md={4} className="black"><code>&lt;{'Col xs={12} md={8}'} /&gt;</code></Col>
              <Col xs={6} md={4} className="green"><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
              <Col xs={6} md={4} className="pink">Pink baby!</Col>
            </Row>

            <Row className="show-grid">
              <Col xs={6} md={4} className="green"><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
              <Col xs={6} md={4} className="pink"><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
              <Col xsHidden md={4} className="orange"><code>&lt;{'Col xsHidden md={4}'} /&gt;</code></Col>
            </Row>

            <Row className="show-grid">
              <Col xs={6} xsOffset={6} className="black"><code>&lt;{'Col xs={6} xsOffset={6}'} /&gt;</code></Col>
            </Row>

            <Row className="show-grid">
              <Col md={6} mdPush={6} className="green"><code>&lt;{'Col md={6} mdPush={6}'} /&gt;</code></Col>
              <Col md={6} mdPull={6} className="orange"><code>&lt;{'Col md={6} mdPull={6}'} /&gt;</code></Col>
            </Row>
          </Grid>
        );



        //
        // const gridInstance = (
        //   <Grid>
        //     <Row className="show-grid">
        //       <Col xs={12} md={8}><code>&lt;{'Col xs={12} md={8}'} /&gt;</code></Col>
        //       <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
        //     </Row>
        //
        //     <Row className="show-grid">
        //       <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
        //       <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
        //       <Col xsHidden md={4}><code>&lt;{'Col xsHidden md={4}'} /&gt;</code></Col>
        //     </Row>
        //
        //     <Row className="show-grid">
        //       <Col xs={6} xsOffset={6}><code>&lt;{'Col xs={6} xsOffset={6}'} /&gt;</code></Col>
        //     </Row>
        //
        //     <Row className="show-grid">
        //       <Col md={6} mdPush={6}><code>&lt;{'Col md={6} mdPush={6}'} /&gt;</code></Col>
        //       <Col md={6} mdPull={6}><code>&lt;{'Col md={6} mdPull={6}'} /&gt;</code></Col>
        //     </Row>
        //   </Grid>
        // );




    return (
      <div className="App">

        {navbarInstance}
        {gridInstance}

        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <button>hola</button>
        <Button>Que Pasa?</Button>

      </div>
    );
  }
}

export default App;

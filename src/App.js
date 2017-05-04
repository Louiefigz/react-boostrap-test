




import React, { Component } from 'react';

import './App.css';

import { Button, Nav, NavItem, MenuItem, NavDropdown, Navbar, Grid, Col, Row, Jumbotron, Image} from 'react-bootstrap';





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


        // const gridInstance = (
        //   <Grid>
        //     <Row className="show-grid">
        //       <Col xs={12} md={4} className="black"><code>&lt;{'Col xs={12} md={8}'} /&gt;</code></Col>
        //       <Col xs={6} md={4} className="green"><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
        //       <Col xs={6} md={4} className="pink">Pink baby!</Col>
        //     </Row>
        //
        //     <Row className="show-grid">
        //       <Col xs={6} md={4} className="green"><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
        //       <Col xs={6} md={4} className="pink"><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
        //       <Col xsHidden md={4} className="orange"><code>&lt;{'Col xsHidden md={4}'} /&gt;</code></Col>
        //     </Row>
        //
        //     <Row className="show-grid">
        //       <Col xs={6} xsOffset={6} className="black"><code>&lt;{'Col xs={6} xsOffset={6}'} /&gt;</code></Col>
        //     </Row>
        //
        //     <Row className="show-grid">
        //       <Col md={6} mdPush={6} className="green"><code>&lt;{'Col md={6} mdPush={6}'} /&gt;</code></Col>
        //       <Col md={6} mdPull={6} className="orange"><code>&lt;{'Col md={6} mdPull={6}'} /&gt;</code></Col>
        //     </Row>
        //   </Grid>
        // );



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
        const jumbotronInstance = (
          <Jumbotron>
            <h1>Welcome to Vampire Class!</h1>
            <p>Learn how to seduce with your piercing eyes</p>
            <p><Button bsStyle="primary">Bite Here</Button></p>
          </Jumbotron>
        );


    return (
      <div className="App">

        {navbarInstance}
        {jumbotronInstance}


        <Grid>
          <Row>
            <Col md={6} mdPush={6} className="green">
            Allergies of a Vampire
              <ul>
                <li>Garlic(obviously)</li>
                <li>Holy Crosses</li>
              </ul>
            </Col>
            <Col md={6} mdPull={6} className="orange">
              Pros and Cons of falling in love with a mortal
              <div className="match-item-wrapper">
                <div className="match-item">
                <Image className="browse-pic" src="http://www.heroesandheartbreakers.com/images/stories/November2012/Hyland-Vampire-Couples-Twilight-466.jpg"  />
                </div>
              </div>
            </Col>
          </Row>
        </Grid>

        <button>hola</button>
        <Button>Que Pasa?</Button>

      </div>
    );
  }
}

export default App;

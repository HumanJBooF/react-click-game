import React from 'react';
import Nav from './components/Nav';
import Row from './components/Row';
import Cards from './components/Cards';
import images from './images.json';



class App extends React.Component {

    state = {
        images
    }


    render () {
        return (
            <div>
                <Nav />
                <Row>

                </Row>
            </div>

        );
    }
}


export default App;
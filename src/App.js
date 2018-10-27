import React from 'react';
import Nav from './components/Nav';
import Row from './components/Row';
import Cards from './components/Cards';
import Container from './components/Container';
import images from './images.json';



class App extends React.Component {

    state = {
        images: images
    }


    render () {
        return (
            <Container>
                <Nav />
                <Row>
                    {this.state.images.map((image, i) => <Cards
                        key={i}
                        image={image.image} />)}
                </Row>
            </Container>

        );
    }
}


export default App;
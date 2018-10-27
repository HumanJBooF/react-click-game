import React from 'react';
import Nav from './components/Nav';
import Row from './components/Row';
import Cards from './components/Cards';
import Container from './components/Container';
import images from './images.json';



class App extends React.Component {

    state = {
        images: images,
        currentScore: 0,
        topScore: 0,
        clicked: []
    }
    componentDidMount () {

    }

    shuffleCards = array => {
        const shuffled = array.map(a => [Math.random(), a])
            .sort((a, b) => a[0] - b[0])
            .map(a => a[1]);
        return shuffled;
    }


    handleClick = id => {
        console.log(`id: ${id}`)
        this.shuffleCards()
        this.setState({
            clicked: [...this.state.clicked, id],
            images: this.shuffleCards(images)
        });
    }

    render () {
        return (
            < div >
                <Nav />
                <Container>
                    <Row>
                        {this.state.images.map((image, i) => <Cards
                            key={image.id}
                            image={image.image}
                            id={image.id}
                            handleClick={this.handleClick} />)}
                    </Row>
                </Container>
            </div >

        );
    }
}


export default App;
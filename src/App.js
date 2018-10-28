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


    checkClicked = ids => {
        let matchFound = false;
        this.state.clicked.map(id => {
            if (ids === id) {
                matchFound = true;
            }
        })
        return matchFound;
    }

    shuffleCards = array => {
        const shuffled = array.map(a => [Math.random(), a])
            .sort((a, b) => a[0] - b[0])
            .map(a => a[1]);
        console.log(shuffled);
        return shuffled;
    }

    handleClick = id => {
        console.log(`id: ${id}`)
        switch (this.checkClicked(id)) {
            case true:
                console.log(`YOU LOSE!`);
                this.checkWinLose(true);
                break;
            case false:
                this.checkWinLose(false, id);
                break;
            default:
                console.log(`DEFAULT!`);
                break;
        }
    }

    checkWinLose = (lost, id) => {
        const newScore = this.state.currentScore
        if (this.state.clicked.length === 11) {
            alert('YOU WIN!')
            this.setState({
                images: images,
                currentScore: 0,
                topScore: newScore > this.state.topScore ? newScore : this.state.topScore,
                clicked: []
            })
        } else {
            const score = this.state.currentScore + 1
            this.setState({
                clicked: [...this.state.clicked, id],
                images: this.shuffleCards(images),
                currentScore: score
            });
        }
        if (lost) {
            this.setState({
                images: images,
                currentScore: 0,
                topScore: newScore > this.state.topScore ? newScore : this.state.topScore,
                clicked: []
            })
        }

    }

    render () {
        return (
            <div>
                <Nav
                    currentScore={this.state.currentScore}
                    topScore={this.state.topScore}
                />
                <Container>
                    <Row>
                        {this.state.images.map(image => <Cards
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
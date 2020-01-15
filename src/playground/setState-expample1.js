import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

class Home extends Component {
    state  = { 
        magicNumber:23
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.randomMagicNumber(),
            1000
        );

    };

    componentWillUnMount(){
        clearInterval(this.timerID);
    }

    randomMagicNumber= () => {
        return this.setState({
            magicNumber: _.random(100)
        });
    }

    render() {
        return (
            <div className="Home">
                {this.state.magicNumber}
                <ChildOfHome magicNumber={this.state.magicNumber} />
                <ChildOfHomeBrother magicNumber={this.state.magicNumber} />
                <ChildOfHomeSister magicNumber={this.state.magicNumber} />
            </div>        
            );
    }
}

class ChildOfHome extends React.Component {
    render(){
        return (
            <div className="ChildOfHome">
                <p>  Child of home:  {this.props.magicNumber}</p> 
            </div>
        )
    }
}

class ChildOfHomeBrother extends Component {
    state = {
        magicNumber: 0
    }

    componentDidMount () {
        this.setState({
            magicNumber: this.props.magicNumber,
        });
    }
    render(){
        return (
            <div className="ChildOfHomeBrother">
              <p>  Child of home borher:  {this.state.magicNumber}</p> 
            </div>
        )
    }
}


class ChildOfHomeSister extends Component {
    render(){
        return (
            <div className="ChildOfHomeSister">
                {this.props.magicNumber}
            </div>
        )
    }
}
ReactDOM.render(<Home />, document.getElementById('app'));
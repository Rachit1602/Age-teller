import React,{Component} from 'react';
import './App.css';

//components
import AgeCard from './components/AgeCard';



//Class component
class App extends Component {
    // constructor(){
    //     super();

    //     this.state = {
    //         newDate:'',
    //     }
    // }
    render(){
        return (
            <div className='App dark-theme'>
                <AgeCard state={this.state}/>
            </div>
        )
    }
}

export default App;
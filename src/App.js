import React from 'react';
import TodoList from './TodoList'
import Form from './Form';
import './app.css';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            list:['プログラミング','お買い物','カフェ']
        }
    }
    handleChange = (event) => {
        this.setState({value : event.target.value});
    }
    handleSubmit = (event) => {
        event.preventDefault();

        this.setState(
            {
                list:[
                    ...this.state.list,
                    this.state.value,
                ],
                value:'',
            }
        );
    }

    render() {
        return (
            <div class="app">
                <h1>todoアプリ</h1>
                <Form 
                    value={this.state.value}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                />
                <TodoList list={this.state.list} />
            </div>
        );
    }
}
export default App;
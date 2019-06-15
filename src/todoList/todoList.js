import React from 'react';

class TodoList extends React.Component{

    constructor(props){
        super();
        this.state = {
            userInput : '',
            items : []
        };
    }

    onChange(event){
        this.setState({
            userInput : event.target.value
        })
    }

    addTodo(event){
        event.preventDefault();
        this.setState({
            userInput : '',
            items : [...this.state.items, this.state.userInput]
        },()=>console.log(this.state))
    }

    rendersTodo(){
        return this.state.items.map((item)=>{
            return(
                <div key={item}>
                    {item} 
                        __|||||___    
                    <button onClick = {this.deleteTodo.bind(this, item)}>X</button>
                </div>
            )
        });
    }

    deleteTodo(item){
        const array = this.state.items;
        const index = array.indexOf(item);
        array.splice(index,1);
        this.setState({
            items : array
        });
    }

    render(){
        return (
            <div>
                <h3>Ma todoList</h3>
                <form>
                    <input
                        value = {this.state.userInput}
                        type = "text"
                        placeholder = "Champ à renseigner"
                        onChange = {this.onChange.bind(this)}></input>
                    <button onClick = {this.addTodo.bind(this)}>Ajouter</button>
                </form>
            <div>
                {this.rendersTodo()}
            </div>  
            </div>
        )
    }
}

export default TodoList;
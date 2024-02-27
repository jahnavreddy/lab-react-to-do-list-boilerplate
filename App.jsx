import React from "react";
import "./App.css";
import TodoItem from "./Components/TodoItem";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
      todoList: [],
    };
  }

  inputChange = (e) => {
    this.setState({
      input: e.target.value,
    });
  };

  formSubmit = (e) => {
    e.preventDefault();
    if (this.state.input.length > 0)
      this.setState({
        input: "",
        todoList: [...this.state.todoList, this.state.input],
      });
  };

  componentDidUpdate() {
    console.log(this.state);
  }


  updateItem = (newItem,index) =>{
    let arr = this.state.todoList

    arr.splice(index,1,newItem)

    this.setState({
      todoList:arr 
    })
  }


  deleteItem = (index) =>{
    let arr = this.state.todoList;
    arr.splice(index,1)

    this.setState({
      todoList:arr
    })
  }



  render() {
    return (
      <>
        <h1>TODO LIST</h1>
        <form action="" onSubmit={this.formSubmit}>
          <input
            type="text"
            onChange={this.inputChange}
            value={this.state.input}
          />
          <button>ADD</button>
        </form>
        <p>My input : {this.state.input}</p>
        <div className="todoList">
          <h2>LIST</h2>
         

         {this.state.todoList.length == 0 ? (
          <h3>List is Empty</h3>
         ) : (
          this.state.todoList.map((e,i)=>{
            return (
            <TodoItem 
            e ={e}
            i={i}
            deleteItem={this.deleteItem}
            updateItem={this.updateItem}
            />
            )
           })
         )}

        
        </div>
      </>
    );
  }
}

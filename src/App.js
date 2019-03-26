import React, { Component } from 'react';
import './App.css';
import AddItem from './Components/Home/Add';
import ToDoList from './Components/Home/ToDoList';
import DoneList from './Components/Home/DoneList';
import DeletedList from './Components/Home/DeletedList';

export const Context = React.createContext()


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
    this.AddTodo = this.AddTodo.bind(this);
    this.DoneToggle = this.DoneToggle.bind(this);
    this.DeleteToggle = this.DeleteToggle.bind(this);

  }

  AddTodo(todo) {
    const { data } = this.state;
    this.setState({ data: [...data, todo] })
  }

  DoneToggle(id) {
    const { data } = this.state;
    const doneBool = data.find(doneData => doneData.id === id);
    doneBool.done = !doneBool.done;
    doneBool.deleted = false;
    this.setState({ data })
  }

  DeleteToggle(id) {
    const { data } = this.state;
    const deleteBool = data.find(deleteData => deleteData.id === id);
    deleteBool.deleted = !deleteBool.deleted;
    this.setState({ data })
  }

  render() {
    const value = {
      state: this.state,
      AddTodo: this.AddTodo,
      DoneToggle: this.DoneToggle,
      DeleteToggle: this.DeleteToggle
    }
    return (
      <Context.Provider value={value}>
        <div className="todo">
          <AddItem />
          <span className="list-item__text">To Do List:</span>
          <ToDoList />
          <span className="list-item__text">Done List:</span>
          {/* <ToDoList /> */}
          <DoneList />
          <span className="list-item__text">Deleted items:</span>
          {/* <ToDoList /> */}
          <DeletedList />
        </div>
      </Context.Provider>

    )
  }
}

export default App;

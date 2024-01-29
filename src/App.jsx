import './App.css'
import Display from './components/display'
import { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toDo: [],
      toDoItems: { key: "", desc: "" }
    }
  }

  handleDelete = (key) => {
    const filterItems = this.state.toDo.filter((ele) =>
      ele.key !== key
    )

    this.setState({
      toDo: filterItems
    })
  }

  handleUpdate = (description, key) => {
    const listOfItems = this.state.toDo

    listOfItems.map((ele => {
      if (ele.key == key) {
        ele.desc = description
      }
    }))

    this.setState({
      toDo: listOfItems
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    let newItem = this.state.toDoItems
    if (newItem.desc != "") {
      const Item = [...this.state.toDo, newItem]
      this.setState({
        toDo: Item,
        toDoItems: { key: "", desc: "" }
      })

    }
  }
  handleChange = (e) => {
    this.setState({
      toDoItems: { key: Date.now(), desc: e.target.value }
    })
  }
  render() {
    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder='Type here' onChange={this.handleChange} value={this.state.toDoItems.desc} />
          <button type='submit' onClick={this.handleSubmit}>Add Item</button>
        </form>
        <p>{this.state.toDoItems.desc}</p>
        <Display toDoItems={this.state.toDo} handleUpdate={this.handleUpdate} handleDelete={this.handleDelete} />
      </div>
    )
  }
}

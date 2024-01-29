

function Display(props) {
    const toDo = props.toDoItems
    const newList = toDo.map(currItem => {
      return(
        <div key = {currItem.key}>
          <input type = "text" id = {currItem.key} value = {currItem.desc}
            onChange={(e)=> {
              props.handleUpdate(e.target.value, currItem.key)
            }}
          />
          <button key={currItem.key} onClick={()=> {props.handleDelete(currItem.key)}}>Delete Item</button>
        </div>
      )
    })
  return (
    <div className="list">
      {newList}
    </div>
  )
}

export default Display

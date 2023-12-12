import React,{ Component } from "react";

export default class TodoItem extends Component{
  constructor(){
    super()
  }

  render(){
    let {e,i,updateItem,deleteItem} = this.props;
    return (
      <div>
  
              <div key={i}>
                <input type="text" value={e} onChange={(e)=>{
                  this.updateItem(e.target.value,i)
                }}/>
                <button onClick={()=>{
                  deleteItem(i)
                }}  style={{
                  backgroundColor:"gold",
                  borderRadius:"20px",
                  fontWeight:"bolder"
                }
                
                }>DELETE</button>
              </div>

      </div>
    )
  }
}
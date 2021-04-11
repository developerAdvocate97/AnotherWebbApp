import React from 'react';
import ItemService from '../services/ItemService';



class ItemComponent extends React.Component{

    
    constructor(props){
        super(props)
        this.state = {
            items:[],
            newItemDescription: ''
            
        }
        this.addNewItemHandler = this.addNewItemHandler.bind(this);
        this.sendNewItemHandler = this.sendNewItemHandler.bind(this);
        this.editItem = this.editItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }


    editItem(id) {
        this.props.history.push(`/updateItem/${id}`);

    }

    deleteItem (id) {
       

         ItemService.deleteItem(id).then(res => {

            this.setState({items: this.state.items.filter(item => item.id != id)});
         });
          

    }

    componentDidMount(){
        ItemService.getItems().then((res) => {
            this.setState({items: res.data})
        });
    }


    sendNewItemHandler =  async (e) => {

        let item = {description: this.state.newItemDescription, completed: false};
        console.log('item => ' + JSON.stringify(item));
        await ItemService.createItem(item);
            this.props.history.push('/items');
        

    }

    addNewItemHandler = (event) =>{

        this.setState({newItemDescription: event.target.value});
    }


   

    updateCheckedItem =  (e, id) => {

        let item = this.state.items.find(item => item.id === id);
          item.completed =  e.target.checked;
          console.log('item => ' + JSON.stringify(item));
           ItemService.updateItem(item,id);
              this.props.history.push('/items');
  
        
    }



    render(){
        return(

            <div>
                <h1 className = "text-center">To-Do List     </h1>
                <table className = "table table-striped">
                    <thead>
                        <tr>
                            <td>Completed</td>
                            <td>Item Description</td>
                            <td></td>
                            <td></td>

                        </tr>

                    </thead>
                    <tbody>
                        {
                            this.state.items.map(item => 
                                <tr key = {item.id}>
                                    
                                   
                                    <td> <input type="checkbox"  defaultChecked={item.completed} onChange={(e, value) => this.updateCheckedItem(e, item.id)} />   </td>  
                                    <td>{item.description}</td>
                                    <td>
                                        <button onClick = { () => this.editItem(item.id)} className = "btn btn-info">Edit</button>
                                        </td>
                                        <td>
                                        <button onClick = { () => this.deleteItem(item.id)} className = "btn btn-info">Delete</button>
                                        </td>
                                    
                                </tr>
                            )

                        }


                    </tbody>


                </table>
    <form onSubmit={this.handleSubmit}>
        <label>
          
          <input type="text" value={this.state.newItemDescription} onChange={this.addNewItemHandler} /> 
        </label>
          <button className="btn btn-success" onClick={this.sendNewItemHandler}>Add</button>
    </form>

            </div>
        )
    }

}


export default ItemComponent
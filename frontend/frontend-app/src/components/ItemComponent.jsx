import React from 'react';
import ItemService from '../services/ItemService';
import FolderService from '../services/FolderService';



class ItemComponent extends React.Component{

    
    constructor(props){
        super(props)
        this.state = {
            items:[],
            newItemDescription: '',
            folder_id: this.props.match.params.id,
            folder_description: ''         
            
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

            this.setState({items: this.state.items.filter(item => item.id !== id)});
         });
          

    }

    componentDidMount(){
        if(this.state.folder_id == null){
            console.log("1");
        ItemService.getItems().then((res) => {
            this.setState({items: res.data})
        });
    }else{
        
        console.log("2");

        
        FolderService.getFolder(this.state.folder_id).then((res) => {
            this.setState({folder_description: res.data.description,items: res.data.items});
        
        });
    }
    }


    sendNewItemHandler =  async (e) => {

        e.preventDefault();

        if(this.state.folder_id == null){
        console.log(this.state.folder_id);
        let item = {description: this.state.newItemDescription, completed: false};
        console.log('item => ' + JSON.stringify(item));
        await ItemService.createItem(item);
            this.props.history.push('/items');
        }else{


            console.log(this.state.folder_id);
        let item = {description: this.state.newItemDescription, completed: false};
        console.log('item => ' + JSON.stringify(item));
        var newItem = null;
        await ItemService.createItem(item).then((res)=> {
            newItem = res.data;
            
        });
              
        console.log(newItem);
        var updatedItems = this.state.items
        console.log(updatedItems);

        updatedItems.push(newItem);
        console.log(updatedItems);

        let folder = {description: this.state.folder_description, items: updatedItems }
        console.log('folder => ' + JSON.stringify(folder));
        await FolderService.updateFolder(folder,this.state.folder_id);
            this.props.history.push(`/viewItems/${this.state.folder_id}`);

        }

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
import React from 'react';
import ItemService from '../services/ItemService';


class UpdateItemComponent extends React.Component{



    constructor(props){
        super(props)

        this.state = {
            id: this.props.match.params.id,
            description: '',
            completed: false,
            oldDescription: '',
            folderId: ''

        }

        this.addNewDescriptionHandler = this.addNewDescriptionHandler.bind(this);

    }


    componentDidMount() {

        ItemService.getItem(this.state.id).then( (res)=> {
            let item = res.data;
                this.setState({
                    description: item.description,
                    oldDescription: item.description,
                    completed: item.completed,
                    
                });

        } );
    }



    addNewDescriptionHandler = async (event) =>{
 
                this.setState({description: event.target.value});

            
    }


    updateDescriptionItemHandler =  async (e) => {

        e.preventDefault();
        
        if(!(e.target.value.trim().length)){

            await ItemService.deleteItem(this.state.id);
            this.props.history.push('/items');

                console.log("is null")
        }else{

            let item = {description: this.state.description, completed: this.state.completed};
            console.log('item => ' + JSON.stringify(item));
            await ItemService.updateItem(item,this.state.id);
                this.props.history.push('/items');

        }

    }


    canceUpdateHanlder =  async (e) => {


        
        e.preventDefault();

        

        if(this.state.folderId ===! '' || this.state.folderId ===! null ){
            console.log("1");
            this.props.history.push('/folders');

        }else{
            console.log("2");
            this.props.history.push('/items');
        }
        
    }





render() {

    return(


            <div>

                <h1 className = "text-center">Editing task "{this.state.oldDescription}"  </h1>


    <form onSubmit={this.handleSubmit}>
        <label>
          
          <input type="text" defaultValue={this.state.description} onChange={this.addNewDescriptionHandler} /> 
        </label>
        <div>
            
          <button className="btn btn-success" onClick={this.updateDescriptionItemHandler}>Save</button>
          <button className="btn btn-success" onClick={this.canceUpdateHanlder}>Cancel</button>
          </div>
    </form>


            </div>

            



    )

} 
    

}

export default UpdateItemComponent
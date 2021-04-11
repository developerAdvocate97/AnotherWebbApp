import React from 'react';
import FolderService from '../services/FolderService';



class FolderComponent extends React.Component{

    
    constructor(props){
        super(props)
        this.state = {
            folders:[],
            newFolderDescription: ''
            
        }
        this.addNewFolderHandler = this.addNewFolderHandler.bind(this);
        this.sendNewFolderHandler = this.sendNewFolderHandler.bind(this);
        this.viewItems = this.viewItems.bind(this);
        this.deleteFolder = this.deleteFolder.bind(this);
    }



    viewItems(id) {
        this.props.history.push(`/viewItems/${id}`);

    }
   

    deleteFolder (id) {
       

         FolderService.deleteFolder(id).then(res => {

            this.setState({folders: this.state.folders.filter(folder => folder.id !== id)});
         });
          

    }

    componentDidMount(){
        FolderService.getFolders().then((res) => {
            this.setState({folders: res.data})
        });
    }


    sendNewFolderHandler =  async (e) => {

        let folder = {description: this.state.newFolderDescription, items: []};
        console.log('folder => ' + JSON.stringify(folder));
        await FolderService.createFolder(folder);
            this.props.history.push('/folders');
        

    }

    addNewFolderHandler = (event) =>{

        this.setState({newFolderDescription: event.target.value});
    }


   


    render(){
        return(

            <div>
                <h1 className = "text-center">Folders     </h1>
                <table className = "table table-striped">
                    <thead>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>

                        </tr>

                    </thead>
                    <tbody>
                        {
                            this.state.folders.map(folder => 
                                <tr key = {folder.id}>
                                    
                                   
                                    <td>{folder.description}</td>
                                    <td>
                                        <button onClick = { () => this.viewItems(folder.id)} className = "btn btn-info">View items</button>
                                        </td>
                                        <td>
                                        <button onClick = { () => this.deleteFolder(folder.id)} className = "btn btn-info">Remove</button>
                                        </td>
                                    
                                </tr>
                            )

                        }


                    </tbody>


                </table>
    <form onSubmit={this.handleSubmit}>
        <label>
          
          <input type="text" value={this.state.newFolderDescription} onChange={this.addNewFolderHandler} /> 
        </label>
          <button className="btn btn-success" onClick={this.sendNewFolderHandler}>Add</button>
    </form>

            </div>
        )
    }

}


export default FolderComponent
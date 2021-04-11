import axios from 'axios'

const FOLDERS_REST_API_URL = 'http://localhost:8080/folders';

class FolderService {

    getFolders(){
       return axios.get(FOLDERS_REST_API_URL);
    }

    createFolder(folder){
        return axios.post(FOLDERS_REST_API_URL,folder);
    }

    updateFolder(folder,folder_id){
        return axios.put(FOLDERS_REST_API_URL + '/' + folder_id,folder);
    }

    getFolder(folder_id){
        return axios.get(FOLDERS_REST_API_URL + '/' + folder_id);
    }
    
    deleteFolder(folder_id){
        return axios.delete(FOLDERS_REST_API_URL + '/' + folder_id);
    }
}

export default new FolderService();
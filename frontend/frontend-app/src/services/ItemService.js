import axios from 'axios'

const ITEMS_REST_API_URL = 'http://localhost:8080/items';

class ItemService {

    getItems(){
       return axios.get(ITEMS_REST_API_URL);
    }

    createItem(item){
        return axios.post(ITEMS_REST_API_URL,item);
    }

    updateItem(item,item_id){
        return axios.put(ITEMS_REST_API_URL + '/' + item_id,item);
    }

    getItem(item_id){
        return axios.get(ITEMS_REST_API_URL + '/' + item_id);
    }
    
    deleteItem(item_id){
        return axios.delete(ITEMS_REST_API_URL + '/' + item_id);
    }
}

export default new ItemService();
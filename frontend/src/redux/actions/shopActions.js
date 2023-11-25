import axios from "axios";
import { ADD_SHOP_LIST_DATA_FAIL, ADD_SHOP_LIST_DATA_REQUIEST, ADD_SHOP_LIST_DATA_SUCCESS, DELETE_SHOPS_LIST_DATA_FAIL, DELETE_SHOPS_LIST_DATA_REQUIEST, DELETE_SHOPS_LIST_DATA_SUCCESS, SHOW_SHOPS_LIST_DATA_FAIL, SHOW_SHOPS_LIST_DATA_REQUIEST, SHOW_SHOPS_LIST_DATA_SUCCESS, UPDATE_SHOPS_LIST_DATA_FAIL, UPDATE_SHOPS_LIST_DATA_REQUIEST, UPDATE_SHOPS_LIST_DATA_SUCCESS } from "../constans/shopConstans";

export const ShopListData = shopdata => async dispatch => {
    try {
        dispatch({ type:ADD_SHOP_LIST_DATA_REQUIEST })
        const {data} = await axios.post("https://shop-bair.onrender.com/shoplist", shopdata) 
        dispatch({ type: ADD_SHOP_LIST_DATA_SUCCESS})
    } catch (error) {
        dispatch({ type:ADD_SHOP_LIST_DATA_FAIL, payload: error.message})
    }
}

export const ShopListShow = () => async dispatch => {
    try {
        dispatch({ type:SHOW_SHOPS_LIST_DATA_REQUIEST })
        const {data} = await axios.get("https://shop-bair.onrender.com/shoplist") 
        dispatch({ type: SHOW_SHOPS_LIST_DATA_SUCCESS, payload:data })
    } catch (error) {
        dispatch({ type:SHOW_SHOPS_LIST_DATA_FAIL, payload: error.message})
    }
}
export const ShopListUpdate = (id, shopdata) => async dispatch => {
    try {
        dispatch({ type:UPDATE_SHOPS_LIST_DATA_REQUIEST })
        const {data} = await axios.put(`https://shop-bair.onrender.com/shoplist/${id}`, shopdata) 
        dispatch({ type: UPDATE_SHOPS_LIST_DATA_SUCCESS, payload:data })
    } catch (error) {
        dispatch({ type:UPDATE_SHOPS_LIST_DATA_FAIL, payload: error.message})
    }
}
export const ShopListDelete = (id) => async dispatch => {
    try {
        dispatch({ type:DELETE_SHOPS_LIST_DATA_REQUIEST })
        const {data} = await axios.delete(`https://shop-bair.onrender.com/shoplist/${id}`) 
        dispatch({ type: DELETE_SHOPS_LIST_DATA_SUCCESS, payload:data})
    } catch (error) {
        dispatch({ type:DELETE_SHOPS_LIST_DATA_FAIL, payload: error.message})
    }
}
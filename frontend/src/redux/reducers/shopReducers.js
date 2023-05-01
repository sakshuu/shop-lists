import { ADD_SHOP_LIST_DATA_FAIL, ADD_SHOP_LIST_DATA_REQUIEST, ADD_SHOP_LIST_DATA_SUCCESS, DELETE_SHOPS_LIST_DATA_FAIL, DELETE_SHOPS_LIST_DATA_REQUIEST, DELETE_SHOPS_LIST_DATA_SUCCESS, SHOW_SHOPS_LIST_DATA_FAIL, SHOW_SHOPS_LIST_DATA_REQUIEST, SHOW_SHOPS_LIST_DATA_SUCCESS, UPDATE_SHOPS_LIST_DATA_FAIL, UPDATE_SHOPS_LIST_DATA_REQUIEST, UPDATE_SHOPS_LIST_DATA_SUCCESS } from "../constans/shopConstans";

export const AddShopDetails = (
    state = { shopList:[] },
    {type, payload}
) => {
    switch (type) {
        case ADD_SHOP_LIST_DATA_REQUIEST: return{...state, loading: true  }
        case ADD_SHOP_LIST_DATA_SUCCESS: return{...state, loading: false, AddedShopList:true }
        case ADD_SHOP_LIST_DATA_FAIL: return{...state, loading: false, error: payload  }
    
        case SHOW_SHOPS_LIST_DATA_REQUIEST: return{...state, loading: true  }
        case SHOW_SHOPS_LIST_DATA_SUCCESS: return{...state, loading: false, ShopList:payload }
        case SHOW_SHOPS_LIST_DATA_FAIL: return{...state, loading: false, error: payload  }

        case UPDATE_SHOPS_LIST_DATA_REQUIEST: return{...state, loading: true  }
        case UPDATE_SHOPS_LIST_DATA_SUCCESS: return{...state, loading: false, ShopListEdit:payload }
        case UPDATE_SHOPS_LIST_DATA_FAIL: return{...state, loading: false, error: payload  }
    
        case DELETE_SHOPS_LIST_DATA_REQUIEST: return{...state, loading: true  }
        case DELETE_SHOPS_LIST_DATA_SUCCESS: return{...state, ShopListremove:payload,  loading: false }
        case DELETE_SHOPS_LIST_DATA_FAIL: return{...state, loading: false, error: payload  }
    
        default: return state
    }
}
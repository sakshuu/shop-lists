import { applyMiddleware, combineReducers, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import { AddShopDetails } from "./reducers/shopReducers"

const rootReducer = combineReducers({
    allShopList: AddShopDetails
})
const store = createStore(
    rootReducer,
    { },
    composeWithDevTools(applyMiddleware(thunk))
)
export default store

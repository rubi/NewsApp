import { combineReducers } from 'redux'
import navMenuState from '../navMenu/reducers/NavMenu'
import tabsRelatedListState from '../listView/reducers/ListView'

const rootReducer = combineReducers({
    navMenuState,
    tabsRelatedListState
})
export default rootReducer

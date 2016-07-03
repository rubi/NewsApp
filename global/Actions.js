import { bindActionCreators } from 'redux';
import * as NavMenuAction from '../navMenu/actions/index';
import * as ListViewAction from '../listView/actions/index';

export default function customBindActionCreators(dispatch){
    //return bindActionCreators({...NavMenuAction, ...ListViewAction}, dispatch);
    //return bindActionCreators(Object.assign({}, NavMenuAction, ListViewAction), dispatch);
    return bindActionCreators(Object.assign({}, NavMenuAction, ListViewAction), dispatch);
}

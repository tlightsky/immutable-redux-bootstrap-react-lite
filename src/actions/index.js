
import { bindActionCreators } from 'redux';
import * as counter from './counter';

export default function actions(dispatch) {
  return bindActionCreators({...counter}, dispatch);
}

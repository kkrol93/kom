import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import websites from './websites.reducer';
import skills from './skills.reducer';

const rootReducer = combineReducers({
  authentication,
  websites,
  skills,
});

export default rootReducer;

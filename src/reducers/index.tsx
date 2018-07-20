import {ADDTO} from '../actions/index';

export default function (state:any, action:any) {
    console.log('Action received : ', action);
    switch (action.type) {
        case ADDTO:
            state.abc=action.txt;
            return {...state};
    }
    return state;
}
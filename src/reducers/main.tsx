import {CHANGE_TITLE} from "../actions/indexAction";

export default function Index(state:any={},actions:any){
    switch(actions.type){
        case CHANGE_TITLE:
                return {title:actions.text,...state}
        default :
                return state;
    }
}
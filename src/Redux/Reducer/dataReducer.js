import data from '../../Data/miniData.json';
const stateData = {
    dataUser : data.data
};
const dataReducer = ( state = stateData, action ) => {
    switch ( action.type ) {
        case undefined: 
        // eslint-disable-next-line no-unreachable
        return {...state} ;break;
        default: ;break;
    };
    return {...state};
};
export default dataReducer;
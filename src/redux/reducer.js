const initialState = {
    allprojects: [],
    adminpresence:null,
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "putprojects": 
            return {
                ...state,
                allprojects: action.payload
            }
        

        case "Deletedone": 
            let newarr = [];
            if (true) {
                state.allprojects.map((proj, id) => {
                    if (proj._id !== action.payload) {
                        newarr.push(proj);
                    }
                })
            }


            return {
                ...state,
                allprojects: newarr


            }
            case "Admin":
                let token=action.payload?action.payload:null;
                return{
                    ...state,
                    adminpresence:token,
                }
        

        default:
            return state
    }
}





export default reducer;
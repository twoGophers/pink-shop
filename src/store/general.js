export default {
    state : {
        processing : false,
        error : null
    },
    mutations : { 
        SET_PROCESSING(state, payload) {
            state.processing = payload;
        },
        SET_ERROR(state, payload) {
            state.error = payload;
        },
        CLEAN_ERROR(state) {
            state.error = null;
        },
        SET_USER(state, payload) {
            state.user.isAuthenticated = true;
            state.user.uid = payload;
        },
        UNSET_USER(state){
            state.user = {
                isAuthenticated : false,
                uid : null
            }
        }
    },
    getters : {
        getProcessing : (state) => state.processing,
        getError : (state) => state.error
    }
}
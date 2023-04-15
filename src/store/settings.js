const settings = {
    namespaced: true,
    state() {
        return {
            incrementPointsBy: parseInt(localStorage.getItem("incrementPointsBy")) || 1,
        };
    },
    mutations: {
        setIncrementPointsBy(state, value) {
            state.incrementPointsBy = value;
            localStorage.setItem("incrementPointsBy", value);
        },
    },
};

export default settings;

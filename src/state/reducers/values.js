const valuesReducer = (state = "Working Text", action) => {
  switch (action.type) {
    case "INITIALIZE":
      return "Working2";
    case "ERASE":
      return " ";

    default:
      return state;
  }
};

export default valuesReducer;

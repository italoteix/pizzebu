import React, { useReducer } from "react";

export default (reducer, actions, initialState) => {
  const Context = React.createContext({});

  // eslint-disable-next-line react/prop-types
  const Provider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const boundActions = {};
    Object.keys(actions).forEach((action) => {
      boundActions[action] = actions[action](dispatch);
    });

    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
};

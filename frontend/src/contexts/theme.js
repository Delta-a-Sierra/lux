import React from "react";

const ThemeContext = React.createContext();

function ThemeReducer(state, action) {
  switch (action.type) {
    case "toggle": {
      return { dark: !state.dark };
    }
  }
}

function ThemeProvider({ children }) {
  const [state, dispatch] = React.useReducer(ThemeReducer, { dark: false });

  const value = { state, dispatch };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

function useTheme() {
  const context = React.useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useCount must be used within a CountProvider");
  }
  return context;
}

export { ThemeProvider, useTheme };

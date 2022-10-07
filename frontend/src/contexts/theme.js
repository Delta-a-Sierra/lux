import React from "react";

const ThemeContext = React.createContext();

function ThemeReducer(state, action) {
  switch (action.type) {
    case "toggle": {
      if (state.theme === "dark") {
        return { theme: "light" };
      }
      return { theme: "dark" };
    }
  }
}

function ThemeProvider({ children }) {
  const [state, dispatch] = React.useReducer(ThemeReducer, { theme: "light" });

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

import { createContext, useState } from 'react';
import { Child1 } from './child_1';
import { Child2 } from './child_2';

type ThemeType = {
  backgroundColor: string;
  color: string;
  padding: string;
  margin: string;
};

const defaultTheme: ThemeType = {
  backgroundColor: '#CCC',
  color: '#333',
  padding: '2rem',
  margin: '2rem',
};
export const ThemeContext = createContext(defaultTheme);

export const Parent = () => {
  const [darkTheme, setDarkTheme] = useState(true);

  const toggleTheme = () => {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  };

  const theme: ThemeType = {
    backgroundColor: darkTheme ? '#333' : '#CCC',
    color: darkTheme ? 'white' : '#333',
    padding: '2rem',
    margin: '2rem',
  };
  return (
    <ThemeContext.Provider value={theme}>
      <section>
        <h2>useContext</h2>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <Child1 />
        <Child2 />
      </section>
    </ThemeContext.Provider>
  );
};

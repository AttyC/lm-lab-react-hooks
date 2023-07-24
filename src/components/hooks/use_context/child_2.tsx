import { useContext } from 'react';
import { ThemeContext } from './parent';

export const Child2: React.FC = () => {
  const darkTheme = useContext(ThemeContext);
  const theme = {
    backgroundColor: darkTheme ? '#333' : '#CCC',
    color: darkTheme ? 'white' : '#333',
    padding: '2rem',
    margin: '2rem',
  };

  return <div style={theme}>Child 2</div>;
};

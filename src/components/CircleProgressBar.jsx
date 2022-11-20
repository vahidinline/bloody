import 'react-circular-progressbar/dist/styles.css';
import { useSpring, animated } from 'react-spring';
import { createTheme } from '@mui/system';
import { ThemeProvider } from 'styled-components';

const theme = createTheme({
  typography: {
    fontFamily: ['Nosifer'].join(','),
  },
});

const CircleProgressBar = (props) => {
  const { numbers } = props;
  const { number } = useSpring({
    from: { number: 0 },
    to: { number: numbers },
    config: { duration: 40000 },
  });
  return (
    <ThemeProvider theme={theme}>
      <animated.div
        style={{
          color: '#880808',
          fontSize: '5rem',
          fontWeight: 'bold',
          fontFamily: 'Nosifer',
        }}>
        {number.to((n) => n.toFixed(0))}
      </animated.div>
    </ThemeProvider>
  );
};

export default CircleProgressBar;

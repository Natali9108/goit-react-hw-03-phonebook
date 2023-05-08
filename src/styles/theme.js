export const theme = Object.freeze({
  colors: {
    primaryBlack: '#080103',
    borerFormColor: '#504e26',
    grey: '#bcc1cb',
    white: '#ffffff',
    green: '#4caf50',
    blue: '#1a46bb',
    red: '#991010',
    btnBgColor: '#cfce21',
    disabledBgColor: '#7e7e68',
    disabledColor: '#5a5a3c',
  },

  fontSizes: {
    mini: '16px',
    small: '18px',
    medium: '24px',
    large: '32px',
  },
  spacing: value => `${4 * value}px`,
  shadows: {
    small: '0 5px 7px -1px rgba(51, 51, 51, 0.23)',
    regular: '0px 4px 10px 4px #9e9e9e',
    medium: '0 9px 47px 11px rgba(51, 51, 51, 0.18);',
  },
  animation: {
    cubicBezier: 'cubic-bezier(0.7, 0.98, 0.86, 0.98)',
  },
});

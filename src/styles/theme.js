export const theme = Object.freeze({
  colors: {
    primaryBlack: '#070a14',
    borerFormColor: '#bfc3c7',
    grey: '#bcc1cb',
    white: '#ffffff',
    green: '#4caf50',
    blue: '#1a46bb',
    red: '#991010',
    btnColor: '#263f78',
    btnBgColor: '#d5e2e7',
    disabledBgColor: '#cfc8ca',
    disabledColor: '#74757e',
    backdropColor: 'rgba(0, 0, 0, 0.5)',
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

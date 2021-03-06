import { StyleSheet } from 'aphrodite/no-important';
import tinycolor from 'tinycolor2';
import { theme } from 'configs';

const alertColorAnimation = {
  '0%': {
    backgroundColor: theme.palette.alertColor,
  },
  '100%': {
    backgroundColor: theme.palette.warningColor,
  },
};

const classes = StyleSheet.create({
// ---- top level container
  progContainer: {
    marginTop: '48px',
  },
  progBarBody: {
    display: 'flex',
    border: '1px solid rgba(0,0,0,0.15)',
    height: '48px',
    lineHeight: '48px',
    textAlign: 'center',
    fontWeight: 'bolder',
    color: 'rgba(255, 255, 255, 0.6)',
    backgroundColor: '#c4c2b1',
    borderRadius: '6px',
    boxShadow: '0 1px 5px rgba(0,0,0,0.4)',
    overflow: 'hidden',
  },
  progBarProg: {
    height: '100%',
    backgroundColor: theme.palette.dachboardElementColor, // '#e64a19',
    // borderRight: '1px solid rgba(0, 0, 0, 0.5)',
    boxShadow: '1px 0px 3px rgba(0,0,0,0.4)',
    transition: 'all 0.25s',
  },
  animatedAlertColor: {
    animationName: alertColorAnimation,
    animationDuration: '0.5s',
    animationIterationCount: 'infinite',
    animationDirection: 'alternate',
  },
  progBarRest: {
    flex: 1,
  },
  titleContainer: {
    color: tinycolor(theme.palette.primary1Color).setAlpha(0.75).toRgbString(),
  },

  lightContainer: {
    marginTop: '48px',
    paddingRight: '24px',
  },
  lightBody: {
    border: '1px solid rgba(0,0,0,0.15)',
    height: '48px',
    width: '48px',
    backgroundColor: '#c4c2b1',
    borderRadius: '50%',
    boxShadow: '0 1px 5px rgba(0,0,0,0.4)',
    overflow: 'hidden',
    margin: 'auto',
  },
});

export default classes;

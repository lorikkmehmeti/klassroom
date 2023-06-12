import { style } from '@vanilla-extract/css';

export const ButtonStyles = style({
  margin: 0,
  marginInline: 10,
  textTransform: 'none',
  backgroundImage: 'none',
  position: 'relative',
  cursor: 'pointer',
  alignItems: 'center',
  borderRadius: '.25rem',
  backgroundColor: '#2b825b',
  fontFamily: 'General Sans, sans-serif',
  fontWeight: 500,
  border: 'none',
  padding: "8px 12px",
  textAlign: 'center',
  fontSize: '14px',
  lineHeight: '1rem',
  color: 'rgb(255 255 255/ 1)',
  outline: '2px solid transparent',
  outlineOffset: '2px',
  outlineWidth: 0,
  transitionProperty: 'all',
  transitionDuration: '.2s',
  transitionTimingFunction: 'cubic-bezier(0,0,.2,1)',
  boxShadow:
    'rgba(0,0,0, .01) 0 0 0 0, rgba(0,0,0, .01) 0 0 0 0,rgba(0,0,0, .22) 0 1px 1px 0, #40bf86 0 0 0 1px, rgba(0,0,0, .01) 0 0 0 0,rgba(0,0,0, .01) 0 0 0 0,rgb(64 68 82/8%) 0 2px 5px 0',
});

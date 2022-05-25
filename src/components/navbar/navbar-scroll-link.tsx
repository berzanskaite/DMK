import { styled } from '@mui/material';
import { Link } from 'react-scroll';

const NavbarScrollLink = styled(Link)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  color: theme.palette.common.white,
  textDecoration: 'none',
  alignSelf: 'stretch',
  padding: theme.spacing(0, 2),
  textTransform: 'uppercase',
  fontWeight: 600,
  letterSpacing: '2px',
  fontSize: '1.5em',
  fontFamily: 'Playfair Display SC',

  '&.active': {
    color: theme.palette.manoSpalva.light,
    boxShadow: `inset 0px -3px 0px 0px ${theme.palette.manoSpalva.light}`,
    // fontWeight: 900,
  },

  ':hover': {
    color: theme.palette.manoSpalva.light,
    cursor: 'pointer',
    boxShadow: `inset 0px -3px 0px 0px ${theme.palette.manoSpalva.light}`,
    // fontWeight: 900,
  },

}));

export default NavbarScrollLink;

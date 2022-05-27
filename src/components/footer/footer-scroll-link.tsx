import { styled } from '@mui/material';
import { Link } from 'react-scroll';

const FooterScrollLink = styled(Link)(({ theme }) => ({
  color: theme.palette.common.white,
  textDecoration: 'none',
  fontWeight: 300,
  fontSize: '1em',
  fontFamily: 'Playfair Display',

  '&.active': {
    color: theme.palette.bakery.light,
    fontWeight: 600,
  },

  ':hover': {
    color: theme.palette.bakery.light,
    cursor: 'pointer',
    fontWeight: 600,
  },

}));

export default FooterScrollLink;

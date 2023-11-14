// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'

const LinkStyled = styled(Link)(() => ({
  textDecoration: 'none',
  color: '#1376F0'
}))

const FooterContent = () => {
  // ** Var
  const hidden = useMediaQuery(theme => theme.breakpoints.down('md'))

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
      <Typography sx={{ mr: 2 }}>
        Copy Rights © 2022
        <LinkStyled target='_blank' href='/'>
          &nbsp;ZebraDoctor
        </LinkStyled>
        . All Rights Reserved
      </Typography>
      {hidden ? null : (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', '& :not(:last-child)': { mr: 4 } }}>
          {/* <LinkStyled target='_blank' href='https://themeselection.com/license/'>
            License
          </LinkStyled> */}
          <LinkStyled target='_blank' href='https://themeselection.com/'>
            Privacy Policy
          </LinkStyled>
          <LinkStyled
            target='_blank'
            href='https://demos.themeselection.com/materio-mui-react-nextjs-admin-template/documentation'
          >
            Help & Support
          </LinkStyled>
          <LinkStyled target='_blank' href='https://themeselection.com/support/'>
            About Us
          </LinkStyled>
        </Box>
      )}
    </Box>
  )
}

export default FooterContent

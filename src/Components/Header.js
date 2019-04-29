import React, { Fragment, PureComponent } from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import InvertColorsIcon from '@material-ui/icons/InvertColors'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import MailIcon from '@material-ui/icons/Mail'
import SearchIcon from '@material-ui/icons/Search'
import Fab from '@material-ui/core/Fab'
import NotificationsIcon from '@material-ui/icons/Notifications'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import Toolbar from '@material-ui/core/Toolbar'
import Tooltip from '@material-ui/core/Tooltip'
import Badge from '@material-ui/core/Badge'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'
import Divider from '@material-ui/core/Divider'
import { fade } from '@material-ui/core/styles/colorManipulator'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import PersonIcon from '@material-ui/icons/Person'
import AddIcon from '@material-ui/icons/Add'
import blue from '@material-ui/core/colors/blue'

const lightColor = 'rgba(255, 255, 255, 0.7)'

const styles = theme => ({
  secondaryBar: {
    zIndex: 0
  },
  avatar: {
    backgroundColor: blue[100],
    color: blue[600]
  },
  menuButton: {
    marginLeft: -theme.spacing.unit
  },
  iconButtonAvatar: {
    padding: 4
  },
  link: {
    textDecoration: 'none',
    color: lightColor,
    '&:hover': {
      color: theme.palette.common.white
    }
  },
  button: {
    borderColor: lightColor
  },
  margin: {
    margin: theme.spacing.unit * 0.5
  },
  fab: {
    margin: theme.spacing.unit
  },
  root: {
    width: '100%'
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    zIndex: 56,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
      width: 'auto'
    }
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit',
    width: '100%'
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200
      }
    }
  }
})

class SimpleDialog extends React.Component {
  handleClose = () => {
    this.props.onClose(this.props.selectedValue)
  }

  handleListItemClick = value => {
    this.props.onClose(value)
  }

  render () {
    const { classes, onClose, selectedValue, logout, ...other } = this.props

    return (
      <Dialog
        onClose={this.handleClose}
        aria-labelledby='simple-dialog-title'
        {...other}
      >
        {/*  <DialogTitle id='simple-dialog-title'>
          {' '}
          <Avatar
            className={classes.avatar}
            src={require('../public/images/servon-opp-summit.jpg')}
            sizes='lg'
          />
        </DialogTitle> */}
        <DialogTitle id='simple-dialog-title'>
          <Typography variant='h6'>Account Settings</Typography>
        </DialogTitle>
        <div>
          <List>
            <ListItem
              button
              onClick={() => {
                logout()
                return this.handleListItemClick(this)
              }}
              key={0}
            >
              <ListItemAvatar>
                <Avatar className={classes.avatar}>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary='Logout' />
            </ListItem>
          </List>
        </div>
      </Dialog>
    )
  }
}

SimpleDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func,
  selectedValue: PropTypes.string
}

const SimpleDialogWrapped = withStyles(styles)(SimpleDialog)

class Header extends PureComponent {
  state = {
    open: false,
    selectedValue: null
  }

  handleClickOpen = () => {
    this.setState({
      open: true
    })
  }

  handleClose = value => {
    this.setState({ selectedValue: value, open: false })
  }

  render () {
    const {
      classes,
      onDrawerToggle,
      navValue,
      getNavValue,
      swapTheme,
      logout,
      ...other
    } = this.props
    return (
      <Fragment>
        <AppBar
          color='primary'
          position='sticky'
          elevation={0}
          className={classes.AppBar}
        >
          <Toolbar>
            <Grid container spacing={8} alignItems='center'>
              <Hidden mdUp>
                <Grid item>
                  <IconButton
                    color='inherit'
                    aria-label='Open drawer'
                    onClick={onDrawerToggle}
                    className={classes.menuButton}
                  >
                    <MenuIcon />
                  </IconButton>
                </Grid>
              </Hidden>
              <Grid item xs />
              <Grid item>
                <Tooltip title='Toggle light or dark mode'>
                  <IconButton color='inherit' onClick={() => swapTheme()}>
                    <InvertColorsIcon />
                  </IconButton>
                </Tooltip>
              </Grid>
              <Grid item>
                <Tooltip title='Mail • 5 new Messages'>
                  <IconButton color='inherit'>
                    <Badge
                      className={classes.margin}
                      badgeContent={5}
                      color='secondary'
                    >
                      <MailIcon />
                    </Badge>
                  </IconButton>
                </Tooltip>
              </Grid>
              <Grid item>
                <Tooltip title='Alerts • 3 alters'>
                  <IconButton color='inherit'>
                    <Badge
                      className={classes.margin}
                      badgeContent={3}
                      color='error'
                    >
                      <NotificationsIcon />
                    </Badge>
                  </IconButton>
                </Tooltip>
              </Grid>
              <Grid item>
                <IconButton
                  color='inherit'
                  className={classes.iconButtonAvatar}
                  onClick={this.handleClickOpen}
                >
                  <Avatar
                    className={classes.avatar}
                    src={require('../public/images/servon-opp-summit.jpg')}
                  />
                </IconButton>
                <SimpleDialogWrapped
                  selectedValue={this.state.selectedValue}
                  open={this.state.open}
                  onClose={this.handleClose}
                  logout={logout}
                />
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <AppBar
          component='div'
          className={classes.secondaryBar}
          color='primary'
          position='static'
          elevation={0}
        >
          <Toolbar>
            <Grid container alignItems='center' spacing={8}>
              <Grid item sm>
                <Typography color='inherit' variant='h5'>
                  Harmony...
                </Typography>
              </Grid>
              <Grid container sm>
                <div className={classes.grow} />
                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <InputBase
                    placeholder='Search…'
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput
                    }}
                  />
                </div>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <AppBar
          component='div'
          className={classes.secondaryBar}
          color='primary'
          position='static'
          elevation={0}
        >
          <Tabs
            value={navValue}
            textColor='inherit'
            onChange={(e, v) => getNavValue(v)}
          >
            <Tab textColor='inherit' label='Users' />
            <Tab textColor='inherit' label='Groups' />
            <Tab textColor='inherit' label='Phishing Campaigns' />
          </Tabs>
        </AppBar>
      </Fragment>
    )
  }
}
Header.propTypes = {
  classes: PropTypes.object.isRequired,
  onDrawerToggle: PropTypes.func.isRequired,
  navValue: PropTypes.number.isRequired,
  getNavValue: PropTypes.func.isRequired,
  swapTheme: PropTypes.func.isRequired
}

export default withStyles(styles)(Header)
{
  /* <Grid item>
                {' '}
                <Button color='inherit' onClick={() => logout()}>
                  Logout
                </Button>
              </Grid> */
}

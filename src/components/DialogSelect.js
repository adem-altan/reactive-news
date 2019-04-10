import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {connect} from 'react-redux';


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

class DialogSelect extends React.Component {
  state = {
    open: false,
    country: '',
  };

  handleChange = name => event => {
    this.setState({ [name]: String(event.target.value) });
    this.props.setCountry(String(event.target.value));
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Button color="primary" className={classes.button} onClick={this.handleClickOpen}>Select Country</Button>
        <Dialog
          disableBackdropClick
          disableEscapeKeyDown
          open={this.state.open}
          onClose={this.handleClose}
        >
          <DialogTitle>Select Country</DialogTitle>
          <DialogContent>
            <form className={classes.container}>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="country-native-simple">Country</InputLabel>
                <Select
                  native
                  value={this.state.country}
                  onChange={this.handleChange('country')}
                  input={<Input id="country-native-simple" />}
                >
                  <option value="" />
                  <option value="au">Australia</option>
                  <option value="us">United States</option>
                  <option value="tr">Turkey</option>
                  <option value="ru">Russia</option>
                </Select>
              </FormControl>
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

DialogSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapDispatchToStore = (dispatch) => {
    return {
      setCountry: (countryCode) => {dispatch({type: "CHANGE_COUNTRY", countryCode: countryCode})}
    }
}

export default connect(null, mapDispatchToStore)(withStyles(styles)(DialogSelect)); 
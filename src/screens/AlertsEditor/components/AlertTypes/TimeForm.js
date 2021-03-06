import React from 'react';
import PropTypes from 'prop-types';
import pure from 'recompose/pure';

import AlertForm from './AlertForm';

import { TimePicker } from 'material-ui';

// import { css } from 'aphrodite/no-important';
// import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

// import classes from './classes';

function setAlertState(props) {
  return {
    driveTimeSec: props.alert !== undefined ? props.alert.driveTimeSec : 6000,
  };
}

class TimeForm extends React.Component {

  constructor(props) {
    super(props);
    /**
     * Initial values for controlled inputs
     **/
    this.state = setAlertState(props);
  }

  onChangeTime = (event, inDate) => {
    console.log(inDate);
    this.setState({
      driveTimeSec: (inDate.getHours() * 60 + inDate.getMinutes()) * 60,
    });
  }

  render() {
    const refDate = new Date();
    const hvrs = Math.floor(this.state.driveTimeSec / 60 / 60);
    refDate.setHours(hvrs);
    refDate.setMinutes((this.state.driveTimeSec / 60 - hvrs * 60));
    refDate.setSeconds(0);
    return (<AlertForm
      alert={this.props.alert}
      closeForm={this.props.closeForm}
      isOpened={this.props.isOpened}
      extraParams={{
        driveTimeSec: this.state.driveTimeSec,
      }}
    >
      <TimePicker
        format="24hr"
        hintText="Drive Time"
        defaultTime={refDate}
        onChange={this.onChangeTime}
      />
    </AlertForm>
    );
  }
}

TimeForm.propTypes = {
  alert: PropTypes.object,
  closeForm: PropTypes.func.isRequired,
  // isLoading: React.PropTypes.bool.isRequired,
  isOpened: PropTypes.bool.isRequired,
};

export default pure(TimeForm);

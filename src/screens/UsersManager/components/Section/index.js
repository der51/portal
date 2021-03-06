import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'aphrodite/no-important';
import { VelocityTransitionGroup } from 'velocity-react';
import SectionHeader from '../SectionHeader';
import MainActionButton from '../MainActionButton';

import classes from './classes';

class Section extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showForm: false,
      formMode: 'create',
    };
    // this.FormComponent = () => React.cloneElement(props.formComponent, {
    //   closeForm: this.closeForm,
    // });
    this.ListComponent = () => React.cloneElement(props.listComponent, {
      showForm: this.showForm,
    });
  }

  showForm = () => {
    this.setState({
      showForm: true,
    });
  }

  closeForm = () => {
    this.setState({
      showForm: false,
    });
  }

  render() {
    const enterAnimation = {
      animation: 'slideDown',
      duration: 400,
      style: { height: '' },
    };
    const leaveAnimation = {
      animation: 'slideUp',
      duration: 400,
    };

    return (
      <div>
        <SectionHeader
          label={this.props.headerLabel}
          action={!this.state.showForm && (
            <MainActionButton
              label={this.props.actionButtonLabel}
              onClick={this.showForm}
            />
          )}
        />

        <VelocityTransitionGroup
          component="div"
          enter={enterAnimation}
          leave={leaveAnimation}
        >
          { this.state.showForm && (
            <div className={css(classes.formWrapper)}>
              <div className={css(classes.formWrapper__inn)}>
                { this.props.renderForm({
                  isOpened: this.state.showForm,
                  closeForm: this.closeForm,
                })}
              </div>
            </div>
          )}
        </VelocityTransitionGroup>

        <this.ListComponent />
      </div>
    );
  }
}

Section.propTypes = {
  renderForm: PropTypes.func.isRequired,
  listComponent: PropTypes.any.isRequired,
  headerLabel: PropTypes.string.isRequired,
  actionButtonLabel: PropTypes.string.isRequired,
};

export default Section;

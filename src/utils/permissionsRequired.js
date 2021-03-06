import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { checkRolePermissions } from 'configs/roles';
import { getUserRole } from 'services/Session/reducer';

function checkAllPermissions(role, permissions) {
  const result = {};

  permissions.forEach(p => {
    result[p] = checkRolePermissions(role, p);
  });

  return result;
}

export default (permissions = []) => (Component) => {
  class PermissionsRequired extends React.Component {

    constructor(props) {
      super(props);

      this.permitted = checkAllPermissions(props.currentUserRole, permissions);
    }

    render() {
      return (
        <Component
          userPermittedTo={this.permitted}
          {...this.props}
        />
      );
    }
  }

  PermissionsRequired.propTypes = {
    currentUserRole: PropTypes.string.isRequired,
  };

  PermissionsRequired.defaultProps = {
    currentUserRole: 'admin',
  };

  const mapState = state => ({
    currentUserRole: getUserRole(state),
  });

  return connect(mapState)(PermissionsRequired);
};

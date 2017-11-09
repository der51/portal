import React from 'react';
import Section from '../Section';
import PermissionForm from '../PermissionForm';
import PermissionsList from '../PermissionsList';

const PermissionsSection = () => (
  <Section
    listComponent={<PermissionsList />}
    formComponent={<PermissionForm />}
    actionButtonLabel="Add permission"
    headerLabel="Permissions"
  />
);

export default PermissionsSection;

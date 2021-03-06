import endpoints from 'configs/endpoints';
import specsUtils from '../utils/specsUtils';

function _calc(record = {}, { selectedTypes }) {
  return specsUtils.calcToReturn({
    odometer: record.dist && parseInt((record.dist.total / 1000), 10) || 'N/A',
  }, selectedTypes);
}

function _filterSimilar(allSelectedReportTypes) {
  const similarTypes = ['odometer'];

  return specsUtils.filterSimilar(allSelectedReportTypes, similarTypes);
}

const commonFields = {
  endpoint: endpoints.getStats.url,
  checkedByDefault: false,
  domain: 'stats',
  query: {
    // for reports tzoffset is required by backend.
    tzoffset: 0,
  },
  filterSimilar: _filterSimilar,
  calc: _calc,
};

const fields = [{
  ...commonFields,
  reportType: 'odometer',
  name: 'odometer',
  order: 7,
}];

export default fields;

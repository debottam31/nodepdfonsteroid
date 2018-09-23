'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import  styles  from './styles.css';

var Report = function Report(props) {
  return _react2.default.createElement(
    'div',
    { className: 'reportcontainer' },
    _react2.default.createElement(
      'section',
      { className: 'frontpage' },
      _react2.default.createElement(
        'div',
        { className: 'pageheading' },
        _react2.default.createElement(
          'h3',
          { className: 'headingtext' },
          props.checklist.clientName
        ),
        _react2.default.createElement(
          'h5',
          { className: 'subheadingtext' },
          props.checklist.checklistName
        ),
        _react2.default.createElement(
          'p',
          { className: 'entrytype' },
          'Entity Type: ',
          props.checklist.entityType
        ),
        _react2.default.createElement(
          'p',
          { className: 'headingdate' },
          'Date Printed: ',
          props.checklist.reportPeriod
        )
      ),
      _react2.default.createElement(
        'table',
        { className: 'checklistsummary' },
        _react2.default.createElement(
          'thead',
          null,
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'th',
              { className: 'summaryheader' },
              'Checklist Tailoring Summary'
            )
          )
        ),
        _react2.default.createElement(
          'tbody',
          null,
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              { className: 'summarydescont' },
              _react2.default.createElement(
                'table',
                { className: 'summarydesc' },
                _react2.default.createElement(
                  'tbody',
                  null,
                  _react2.default.createElement(
                    'tr',
                    null,
                    _react2.default.createElement(
                      'th',
                      { style: { width: '50%', paddingLeft: '10px' } },
                      'Industry(ies)'
                    ),
                    _react2.default.createElement(
                      'th',
                      null,
                      'Events & Transactions'
                    ),
                    _react2.default.createElement(
                      'th',
                      null,
                      'New Standards Adopted'
                    )
                  ),
                  _react2.default.createElement(
                    'tr',
                    null,
                    _react2.default.createElement(
                      'td',
                      { className: 'summarydesccol' },
                      props.checklist.industryList && props.checklist.industryList.map(function (data, i) {
                        return _react2.default.createElement(
                          'div',
                          { key: i },
                          '\u2022 ',
                          data.metadata
                        );
                      })
                    ),
                    _react2.default.createElement(
                      'td',
                      { className: 'summarydesccol' },
                      props.checklist.FSList && props.checklist.FSList.map(function (data, i) {
                        return _react2.default.createElement(
                          'div',
                          { key: i },
                          '\u2022 ',
                          data.metadata
                        );
                      })
                    ),
                    _react2.default.createElement(
                      'td',
                      { className: 'summarydesccol' },
                      props.checklist.earlyAdoptionList && props.checklist.earlyAdoptionList.map(function (data, i) {
                        return _react2.default.createElement(
                          'div',
                          { className: 'summtext', key: i },
                          '\u2022 ',
                          data.metadata
                        );
                      })
                    )
                  )
                )
              )
            )
          )
        )
      )
    ),
    _react2.default.createElement(
      'section',
      { className: 'datatable' },
      _react2.default.createElement(
        'table',
        { className: 'treecontainer' },
        _react2.default.createElement(
          'thead',
          { className: 'datatableHeader' },
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'th',
              { className: 'dataheader1' },
              'Line Item(s)'
            ),
            _react2.default.createElement('th', null),
            _react2.default.createElement(
              'th',
              { className: 'dataheader2' },
              'Response'
            )
          )
        ),
        _react2.default.createElement(
          'tbody',
          null,
          props.tree && props.tree.map(function (row, i) {
            return _react2.default.createElement(TableRow, { key: i, row: row });
          })
        )
      )
    )
  );
};

var TableRow = function TableRow(props) {
  return _react2.default.createElement(
    'tr',
    { style: { border: '1px solid #9B9B9B' } },
    _react2.default.createElement(
      'td',
      { className: 'treedata', style: { paddingLeft: props.row.sequence * 20 + 10 + 'px' } },
      _react2.default.createElement(
        'div',
        { className: 'treedes des-' + props.row.type },
        props.row.description
      ),
      props.row.referenceJson && props.row.referenceJson.length > 0 && _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'ref-description' },
          'References:'
        ),
        _react2.default.createElement(
          'div',
          { style: { display: 'inline-block' } },
          props.row.referenceJson.map(function (refid, i) {
            return _react2.default.createElement(
              'a',
              { href: refid.referenceUrl, className: 'ref-deltail', key: i },
              refid.referenceId
            );
          })
        )
      )
    ),
    _react2.default.createElement('td', null),
    _react2.default.createElement('td', null)
  );
};
exports.default = Report;
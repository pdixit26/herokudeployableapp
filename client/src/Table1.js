import React, {Component} from 'react'
import {BootstrapTable, TableHeaderColumn} 
        from 'react-bootstrap-table'
import 'react-bootstrap-table/css/react-bootstrap-table.css'
import 'bootstrap/dist/css/bootstrap.min.css'
 
 
class Table1 extends Component {
  render() {
    const cellEditProp = {
      mode: 'click', // 'dbclick' for trigger by double-click
      afterSaveCell: this.onAfterSaveCell
    }
    return (
      <div>
        <BootstrapTable striped data={this.props.data}
                        cellEdit={cellEditProp}
        >
          <TableHeaderColumn isKey dataField='tableid'>Table Name</TableHeaderColumn>
          <TableHeaderColumn dataField='devicetype'>Device Type</TableHeaderColumn>
          <TableHeaderColumn dataField='c0r0'>Unit - Row1 </TableHeaderColumn>
          <TableHeaderColumn dataField='c1r0'>Price - Row1</TableHeaderColumn>
          <TableHeaderColumn dataField='c2r0'>Mfg Yr - Row1</TableHeaderColumn>
          <TableHeaderColumn dataField='c0r1'>Unit - Row2 </TableHeaderColumn>
          <TableHeaderColumn dataField='c1r1'>Price - Row2</TableHeaderColumn>
          <TableHeaderColumn dataField='c2r1'> Mfg Yr - Row2</TableHeaderColumn>
          <TableHeaderColumn dataField='c0r2'>Unit - Row3</TableHeaderColumn>
          <TableHeaderColumn dataField='c1r2'>Price - Row3</TableHeaderColumn>
          <TableHeaderColumn dataField='c2r2'>Mfg Yr - Row3</TableHeaderColumn>
        </BootstrapTable>
      </div>
    )
  }
}
 
export default Table1;

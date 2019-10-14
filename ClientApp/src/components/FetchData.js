import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField'
import Switch from '@material-ui/core/Switch'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import MaterialTable from 'material-table'

import { forwardRef } from 'react';

import AddBox from '@material-ui/icons/AddBox';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

const styles = theme => ({
    paper: {
        marginTop: '30px;',
    }
})


export class AirlineTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Airlineoverridedata: [],
            Airlineoverridetargetdata: [],
            modalOpen: false,
            targetmodalOpen: false,
            airline: '',
            payingform: 0,
            startdate: new Date(),
            enddate: new Date(),
            minrevenue: 0,
            guaranteedroi: 0,
            groupable: false,
            selfticketing: true
        }

        fetch('api/AirlineOverride/Index')
            .then(response => response.json())
            .then(data => {
                this.setState({ Airlineoverridedata: data })
            });
        fetch('api/AirlineOverrideTarget/Index')
            .then(response => response.json())
            .then(data => {
                this.setState({ Airlineoverridetargetdata: data })
            });
        this.handleModalOpen = this.handleModalOpen.bind(this)
        this.handleModalClose = this.handleModalClose.bind(this)
        this.handleSave = this.handleSave.bind(this)
        this.targetModalOpen = this.targetModalOpen.bind(this)
        this.targetModalClose = this.targetModalClose.bind(this)
    }

    handleModalOpen() {
        this.setState({
            modalOpen: true,
        })
    }

    handleModalClose() {
        this.setState({
            modalOpen: false,
        })
    }

    targetModalOpen() {
        this.setState({
            targetmodalOpen: true,
        })
    }

    targetModalClose() {
        this.setState({
            targetmodalOpen: false,
        })
    }

    handleSave(event) {
        event.preventDefault()
        const data = new FormData(event.target)
        console.log(data)
        fetch('api/AirlineOverride/Create', {
            method: 'POST',
            body: data,
        }).then((response) => response.json())
            .then((responseJson) => {
                this.props.history.push("/fetchdata")
            })
        window.location.reload()

    }

    targetSave(event) {
        event.preventDefault()
        const data = new FormData(event.target)

        fetch('api/AirlineOverrideTarget/Create', {
            method: 'POST',
            body: data,
        })
        window.location.reload()
    }

    render() {
        console.log(this.state.Airlineoverridedata)
        return (
            
            <Paper className="table">
                <Button variant="contained" color="primary" onClick={this.handleModalOpen} className = "add_target">ADD</Button>
                <Dialog open={this.state.modalOpen}>
                    <DialogTitle>Airline Override</DialogTitle>
                    <form onSubmit={this.handleSave}>
                        <DialogContent className="dialogcontent">
                        
                            <TextField
                                label="Airline"
                                margin="normal"
                                className = "textfield"
                                placeholder="Search"
                                InputLabelProps={{
                                    shrink: true,
                                    style: { fontSize: 15 }
                                }}
                                name = "code"
                            />
                            <TextField
                                label="Paying Form"
                                margin="normal"
                                className = "textfield"
                                placeholder="Paying Form"
                                InputLabelProps={{
                                    shrink: true,
                                    style: { fontSize: 15 }
                                }}
                                name = "payingFrom"
                            />
                            <TextField
                                label="Start Date"
                                margin="normal"
                                type = "date"
                                className = "textfield"
                                placeholder="Start Date"
                                InputLabelProps={{
                                    shrink: true,
                                    style: { fontSize: 15 }
                                }}
                                name = "startDate"
                            />
                            <TextField
                                label="End Date"
                                margin="normal"
                                type="date"
                                className="textfield"
                                placeholder="End Date"
                                InputLabelProps={{
                                    shrink: true,
                                    style: { fontSize: 15 }
                                }}
                                name="endDate"
                            />
                            <TextField
                                label="Min Revenue"
                                margin="normal"
                                className="textfield"
                                placeholder="Min Revenue"
                                InputLabelProps={{
                                    shrink: true,
                                    style: { fontSize: 15 }
                                }}
                                name = "minRevenue"
                            />
                            <TextField
                                label="Guaranteed ROI"
                                margin="normal"
                                className="textfield"
                                placeholder="Guaranteed ROI"
                                InputLabelProps={{
                                    shrink: true,
                                    style: { fontSize: 15 }
                                }}
                                name = "guaranteedRoi"
                            />
                            <FormControlLabel
                                className="formcontrollabel"
                                control={
                                    <Switch
                                        name = "groupable"
                                    />
                                }
                                label="Groupable"
                                name="groupable"
                            />
                            <FormControlLabel
                                className="formcontrollabel"
                                control={
                                    <Switch
                                        name = "selfTicketing"
                                    />
                                }
                                label="Self Ticketing"
                                name="selfTicketing"
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button color="primary" type="submit" onClick={this.handleModalClose}>Save</Button>
                            <Button color="primary" onClick={this.handleModalClose}>Cancel</Button>
                        </DialogActions>
                    </form>
                </Dialog>
                <MaterialTable
                    icons={tableIcons}
                    title="Airline Override Table"
                    data={this.state.Airlineoverridedata}
                    columns={[
                        { title: 'Code', field: 'code' },
                        { title: 'Start Date', field: 'startDate' },
                        { title: 'End Date', field: 'endDate' },
                        { title: 'Groupable', field: 'groupable' },
                        { title: 'Min Revenue', field: 'minRevenue' },
                        { title: 'GuaranteedROI', field: 'guaranteedRoi' },
                        { title: 'Paying From', field: 'payingFrom' },
                        { title: 'Self Ticketing', field: 'selfTicketing' },
                        
                    ]}
                    editable={{
                        onRowUpdate: (newData, oldData) => 
                            new Promise((resolve, reject) => {
                                setTimeout(() => {
                                    {
                                        const data = this.state.Airlineoverridedata
                                        const index = data.indexOf(oldData);
                                        console.log(index)
                                        data[index] = newData;
                                        
                                        this.setState({ Airlineoverridedata: data }, () => resolve())
                                    }
                                    resolve()
                                }, 1000)
                            }),
                        
                    }}
                    detailPanel={
                        [
                            {
                                tooltip: 'Show Detail',
                                render: rowData => {
                                    console.log(rowData.airlineOverrideId)
                                    return (
                                        <div>
                                            <Button variant="contained" color="primary" className="add_target" onClick={this.targetModalOpen}>Add Target</Button>
                                            <Dialog open={this.state.targetmodalOpen}>
                                                <DialogTitle>Airline Override</DialogTitle>
                                                <form onSubmit={this.targetSave}>
                                                    <DialogContent className="dialogcontent">
                                                        <TextField
                                                            defaultValue={rowData.airlineOverrideId}
                                                            name="airlineOverrideId"
                                                            className="target_overrideId"
                                                            
                                                        />
                                                        <TextField
                                                            label="Sequence"
                                                            margin="normal"
                                                            className="textfield"
                                                            placeholder="1"
                                                            type = "number"
                                                            InputLabelProps={{
                                                                shrink: true,
                                                                style: { fontSize: 15 }
                                                            }}
                                                            name="sequence"
                                                        />
                                                        <TextField
                                                            label="Percent"
                                                            margin="normal"
                                                            className="textfield"
                                                            type="number"
                                                            defaultValue = "2"
                                                            InputLabelProps={{
                                                                shrink: true,
                                                                style: { fontSize: 15 }
                                                            }}
                                                            name="percent"
                                                        />
                                                        <TextField
                                                            label="ROI"
                                                            margin="normal"
                                                            type="number"
                                                            className="textfield"
                                                            placeholder="ROI"
                                                            InputLabelProps={{
                                                                shrink: true,
                                                                style: { fontSize: 15 }
                                                            }}
                                                            name="roi"
                                                        />
                                                        <TextField
                                                            label="Max ROI"
                                                            margin="normal"
                                                            type="number"
                                                            className="textfield"
                                                            placeholder="Max ROI"
                                                            InputLabelProps={{
                                                                shrink: true,
                                                                style: { fontSize: 15 }
                                                            }}
                                                            name="maxRoi"
                                                        />
                                                        <TextField
                                                            label="Hard Max ROI"
                                                            margin="normal"
                                                            type = "number"
                                                            className="textfield"
                                                            placeholder="Hard Max ROI"
                                                            InputLabelProps={{
                                                                shrink: true,
                                                                style: { fontSize: 15 }
                                                            }}
                                                            name="hardMaxRoi"
                                                        />
                                                        <TextField
                                                            label="Max"
                                                            margin="normal"
                                                            type = "number"
                                                            className="textfield"
                                                            placeholder="Max"
                                                            InputLabelProps={{
                                                                shrink: true,
                                                                style: { fontSize: 15 }
                                                            }}
                                                            name="max"
                                                        />
                                                    </DialogContent>
                                                    <DialogActions>
                                                        <Button color="primary" type="submit" onClick={this.targetModalClose}>Save</Button>
                                                        <Button color="primary" onClick={this.targetModalClose}>Cancel</Button>
                                                    </DialogActions>
                                                </form>
                                            </Dialog>
                                            <MaterialTable
                                                icons={tableIcons}
                                                title="Airline Override Target Table"
                                                data={this.state.Airlineoverridetargetdata.filter(data => rowData.airlineOverrideId == data.airlineOverrideId)}
                                                columns={[
                                                    { title: 'Sequence', field: 'sequence' },
                                                    { title: 'Hard Max ROI', field: 'hardMaxRoi' },
                                                    { title: 'Max ROI', field: 'maxRoi' },
                                                    { title: 'Max', field: 'max' },
                                                    { title: 'Percent', field: 'percent' },
                                                    { title: 'ROI', field: 'roi' },
                                                    { title: 'Action' },
                                                ]}
                                                editable={{
                                                    onRowUpdate: (newData, oldData) =>
                                                        new Promise((resolve, reject) => {
                                                            setTimeout(() => {
                                                                {
                                                                    const data = this.state.Airlineoverridetargetdata
                                                                    const index = data.indexOf(oldData);
                                                                    data[index] = newData;
                                                                    this.setState({ Airlineoverridetargetdata: data }, () => resolve())
                                                                }
                                                                resolve()
                                                            }, 1000)
                                                        }),
                                                }}
                                                options={{
                                                    columnsButton: true,
                                                    paginationType: "stepped",
                                                }}
                                            />
                                         </div>
                                        )
                                }
                            }
                        ]
                    }
                />
            </Paper>
            
        )
    }
}


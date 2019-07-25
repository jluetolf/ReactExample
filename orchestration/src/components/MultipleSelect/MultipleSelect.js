import React, {Component} from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Chip from '@material-ui/core/Chip';


const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 220,
        maxWidth: 300,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
        margin: 2,
    }
});

class MultipleSelect extends Component {


    render() {
        const {classes} = this.props;

        return (
            <form className={classes.root} autoComplete="off">
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="name">{this.props.labelName}</InputLabel>
                    <Select
                        multiple
                        value={this.props.selectedServerList}
                        onChange={event => this.props.onHandleChange(event.target.value)}
                        input={<Input id="select-multiple-placeholder"/>}
                        renderValue={selected => {
                            return (
                                <div className={classes.chips}>
                                    {
                                        selected.map(value => {

                                            const label = this.props.list.find(x => {
                                                return x.value === value;
                                            });

                                            return (
                                                <Chip key={label.value} label={label.label} className={classes.chip}/>
                                            )
                                        })}
                                </div>
                            )
                        }}
                    >
                        {this.props.list.map(item => (
                            <MenuItem key={item.label} value={item.value}>
                                {item.label}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </form>
        );
    }
}

MultipleSelect.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MultipleSelect);
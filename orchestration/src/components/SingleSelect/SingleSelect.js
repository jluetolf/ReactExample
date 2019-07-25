import React, {Component} from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
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
        minWidth: 80,
        maxWidth: 80,
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

class SimpleSelect extends Component {
    state = {
        selected: [],
        hasError: false
    };

    handleChange(value) {
        this.setState({ selected: value });
    }

    handleClick() {
        this.setState({ hasError: false });
        if (!this.state.selected) {
            this.setState({ hasError: true });
        }
    }

    render() {
        const { classes } = this.props;
        const { selected, hasError } = this.state;

        return (
            <form className={classes.root} autoComplete="off">
                <FormControl className={classes.formControl} error={hasError}>
                    <InputLabel htmlFor="age-native-simple">{this.props.labelName}</InputLabel>
                    <Select
                        native
                        name={this.props.labelName}
                        value={this.props.selectedOrchestrationType}
                        onChange={event => this.props.onHandleChange(event.target.value)}
                        input={<Input id="age-native-simple" />}
                        renderValue={selected => {

                            return selected;
                        }}

                    >
                        {this.props.list.map(item => (
                            <option key={item} value={item}>
                                {item}
                            </option>
                        ))}
                    </Select>
                </FormControl>
            </form>
        );
    }
}

SimpleSelect.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleSelect);
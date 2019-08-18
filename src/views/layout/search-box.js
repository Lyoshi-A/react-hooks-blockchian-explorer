import React, {useRef} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {createBrowserHistory} from 'history'
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    root: {
        padding: '0',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
    },
    input: {
        marginLeft: 8,
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '100%',
    },
}));

const SearchBox = ({className}) => {
    const classes = useStyles();
    const searchRef = useRef();
    const history = createBrowserHistory();
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            history.push(`/search/${searchRef.current.value}`);
            history.go();
        }
    }

    return <div className={classes.root}>
        <IconButton className={classes.iconButton} aria-label="Search">
            <SearchIcon />
        </IconButton>
        <TextField
            inputRef={searchRef}
            id="search"
            label="Search"
            placeholder="Block, Transaction, Hash + press Enter"
            className={classes.textField}
            margin="normal"
            onKeyPress={handleKeyPress}
        />
    </div>
}

export default SearchBox
import React, {Suspense } from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import CircularProgress from '@material-ui/core/CircularProgress';

const ColorLinearProgress = withStyles({
    colorPrimary: {
        backgroundColor: 'rgb(212,230,255)',
    },
    barColorPrimary: {
        backgroundColor: '#265ca3',
    },
})(LinearProgress);
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    margin: {
        margin: theme.spacing(1),
    },
}));

const useStylesFacebook = makeStyles({
    root: {
        position: 'relative',
    },
    top: {
        color: '#eef3fd',
    },
    bottom: {
        color: '#6798e5',
        animationDuration: '550ms',
        position: 'absolute',
        left: 0,
    },
});

function FacebookProgress(props) {
    const classes = useStylesFacebook();

    return (
        <div className={classes.root}>
            <CircularProgress
                variant="determinate"
                value={100}
                className={classes.top}
                size={24}
                thickness={4}
                {...props}
            />
            <CircularProgress
                variant="indeterminate"
                disableShrink
                className={classes.bottom}
                size={24}
                thickness={4}
                {...props}
            />
        </div>
    );
}

const Loader = ({View, param = null, title=''}) => {
    const classes = useStyles();
    const renderLoader = () => <ColorLinearProgress className={classes.margin} />;
    return <Suspense fallback={renderLoader()}>
        <View loader={<FacebookProgress />} param={param} title={title} />
    </Suspense>
}

export default Loader
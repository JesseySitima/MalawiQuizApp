import { makeStyles } from "@mui/styles";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
    questionRoot: {
        flexGrow: 1,
        overflow: 'hidden',
        padding: theme.spacing(0, 3),
    },

    paper: {
        margin: '${theme.spacing(1)}px auto',
        padding: theme.spacing(2),
        backgroundColor: 'tomato',
    },
    choices: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        marginTop: theme.spacing(2),
    },
    explanation: {
        marginTop: theme.spacing(2),
        fontStyle: 'italic',
    },
    correctAnswer: {
        color: 'green',
    },
    wrongAnswer: {
        color: 'red',
    },
    root: {
        '&disabled': {
            color: 'white',
        }
    }, 
    disabled: {}
}));

const Question = ({ data, currentQuestionIndex}) => {
    const [selectedChoice, setSelectedChoice] = useState();
    const [disableChoice, setDisableChoice] = useState(false);
    const classes = useStyles();
    
    if (!data) {
        return null;
    }

    return(
        <div>
            {JSON.stringify(data)}
        </div>
    );
}

export default Question;
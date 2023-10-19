import {Buttons, Button} from './FeedBack.styled'


export const FeedBack = ({buttonClick, options}) => {
    return (
        <Buttons>
            {options.map((option, idx) => {
                return (
                    <Button key = {idx} type="button" onClick={() =>{buttonClick(option)}}>
                        {option}
                    </Button>
                )
            })}
        </Buttons>
    )
};
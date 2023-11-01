
interface Props{
 isChecked : boolean
 handCheckChenge :()=> void
}

export const Input = (props:Props) => {

    return (
        <div>
            <input
                type='checkbox'
                checked={props.isChecked}
                onChange={props.handCheckChenge}
            />
            {props.isChecked ? <p style={{color : 'red'}}>HelloWorld</p> : 'aaaaa'}
        </div>
    )
}
import './iconButton.css';

interface IconButtonProps{
    value:string;
    disabled?:boolean;
}

/**
 * Component that renders a button with an icon and a text label.
 * @param {IconButtonProps} props - The component props.
 * @param {string} props.value - The text to display on the button.
 * @param {boolean} [props.disabled=false] - Determines if the button is disabled. Defaults to `false`.
 * @returns {JSX.Element} The icon button component.
 */
const IconButton:React.FC<IconButtonProps> = ({value,disabled=false})=>{
    return(
        <button className='iconButton' disabled={disabled}>
            <div className='iconButton-img'></div>
            <div className='iconButton-value'>{value}</div>
        </button>
    )
}
export default IconButton;
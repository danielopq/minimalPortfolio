import './standardButton.css';

interface StandardButtonProps{
    value:string;
    disabled?:boolean;
}

/**
 * Component that renders a standard button used throughout the website.
 * @param {standardButtonProps} props - The properties for the button.
 * @param {string} props.value - The text displayed on the button.
 * @param {boolean} [props.disabled=false] - Indicates whether the button is disabled. Defaults to `false`.
 * @returns {JSX.Element} The rendered standardButton component.
 */
const StandardButton:React.FC<StandardButtonProps> =({value,disabled=false})=>{
    return(
        <button className='defaultButton' disabled={disabled}>{value.toUpperCase()}</button>
    )
}
export default StandardButton;
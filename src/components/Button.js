
 function Button(props) {

    const handleClick = () => {
        props.handleClickApp();
    };

    return(
        <button className="button" type="button" onClick={handleClick}>
            Click Me
        </button>
    )
}

export default Button;
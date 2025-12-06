function Button({handleClickButton,children}){
    return(
        <button className="button" onClick={handleClickButton}>{children}</button>
    )}
export default Button;
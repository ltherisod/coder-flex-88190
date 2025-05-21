const ButtonMultiuso = ({texto, handler, cssStyle, styles}) => {
    //  const{texto, handler, cssStyle, styles}= props
    return(
        <button className={cssStyle} style={styles} onClick={handler}>
            {texto}
        </button>
    )
}

export default ButtonMultiuso
const BotonMultiuso = (props)=> {
    console.log(props, 'props')
    const {color}= props
    return(
        <>

        <button 
        style={{backgroundColor:color, padding:'10px 20px', border:'none', cursor:'pointer'}}
        onClick={props.onClickFunction}
        >
          {props.text}
        </button>
         {/* {props.children} */}
        </>
    )
}

export default BotonMultiuso
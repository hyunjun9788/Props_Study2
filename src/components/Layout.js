import './Layout.css'

function Layout(props){

    const classes = 'box' + props.className
    return(
        <div className={classes}>{props.children}</div>
    )
}

export default Layout
class Header extends React.Component{
    render(props){
        const style={
            border:'1px solid white',
            textAlign:'center',
            width: '400px',
            margin: 'auto',
            padding: '20px 20px 0 20px',
        }
        return(
            <div style={style}>
               <h1>{this.props.name}</h1>
               <p>{this.props.mini}</p>
            </div>
        )
    }
}
class Header extends React.Component{
    render(props){
        const style={
            textAlign:'center',
            margin: '0 auto -5px auto',
            padding: '20px 10px 0 10px',
        }
        const hStyle={
            marginBottom:'10px',
            fontWeight:'bold',
            letterSpacing: '2px',  
        }
        const hfirst={
            fontSize:'45px',
        }
        const nameStyle={
            fontSize:'35px',
        }
        const hyphen={
            display: 'flex',
            justifyContent: 'center',
        }
        const hyphLine={
            border: '0.5px solid white',
            width:'20px',
            height: '0.5px',
            margin: '12px 5px 0 5px',
        }
        return(
            <div style={style}>
                <h1 style={hStyle}>
                    <span style={hfirst}>{this.props.firstLetter}</span><span style={nameStyle}>{this.props.name}</span>
                </h1>
            </div>
        )
    }
}
class NavHeader extends React.Component{
    render(props){
        const style={
            border:'1px solid white',
            textAlign:'center',
            width: '450px',
            margin: 'auto',
            padding: '20px 10px 5px 10px'
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
                    <span style={hfirst}>{this.props.firstLetter}</span><span style={nameStyle}>{this.props.name}</span> <span style={hfirst}>{this.props.secondLetter}</span><span style={nameStyle}>{this.props.secondName}</span>
                </h1>
                <div style={hyphen}>
                    <div style={hyphLine}></div>
                    <p>{this.props.mini}</p>
                    <div style={hyphLine}></div>
                </div>
            </div>
        )
    }
}
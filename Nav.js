class Nav extends React.Component{
    render(){
        const style = {
            backgroundImage:'url(images/bg.jpg)',
            height:'100vh',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            color: 'white',
        }
        const navStyle={
            float: 'right',
            margin: '25px 30px 30px',
            display: 'block',
            fontSize: '12px',
            letterSpacing: '2px',
            fontWeight: 'bold',
        }
        const buffer={
            height: '40vh',
        }
        const adder={
            marginRight: '60px'
        }
        return(
            <div style={style}>
                <ul style={navStyle}>
                    <li style={navStyle}><span style={adder}>CONTACT</span></li>
                    <li style={navStyle}>PORTFOLIO</li>
                    <li style={navStyle}>HOME</li>
                </ul>
                <div style={buffer}></div>
                <NavHeader firstLetter = 'W' name='EB' secondLetter = 'D' secondName = 'EVELOPMENT' mini='Vanilla JS | React | Node'/>
            </div>
        )
    }
}

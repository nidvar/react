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
            margin: '15px 30px 30px',
            display: 'block',
            fontSize: '14px',
            letterSpacing: '2px',
        }
        const buffer={
            height: '40vh',
        }
        return(
            <div style={style}>
                <ul style={navStyle}>
                    <li style={navStyle}>CONTACT</li>
                    <li style={navStyle}>PORTFOLIO</li>
                    <li style={navStyle}>HOME</li>
                </ul>
                <div style={buffer}></div>
                <Header name='Web Development' mini=' Vanilla JS - React - Node '/>
            </div>
        )
    }
}

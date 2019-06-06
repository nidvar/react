class Footer extends React.Component{
    render(){
        const foot={
            backgroundColor:'black',
            padding: '0 0 20px 0'
        }
        const pee={
            margin: '20px 0 0 0',
            color:'white',
            textAlign:'center',
        }
        const style={
            display: 'flex',
            justifyContent: 'center',
        }
        const imageStyle={
            height: '25px',
            width: '25px',
        }
        const imback={
            width: '40px',
            height:'38px',
            borderRadius:'50%',
            padding: '5px 0 10px 0',
            textAlign: 'center',
            margin: '15px 5px 0 5px',
            justifyContent: 'center',
        }
        return(
            <div style={foot}>
                <div style={style}>



                    <a href='#'><div className='asdf'><img style={imageStyle} src={'images/ticon.png'} /></div></a>
                    <a href='#'><div className='asdf'><img style={imageStyle} src={'images/fbicon.png'} /></div></a>
                    <a href='#'><div className='asdf'><img style={imageStyle} src={'images/igicon.png'} /></div></a>

                    

                </div>
                <p style={pee}>© Copyright 2018 | <a href='https://nidvar.github.io/'>By Me</a></p>
            </div>
        )
    }
}
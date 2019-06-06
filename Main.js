class Main extends React.Component{
    render(){
        const style={
            margin: '20px',
        }
        const underline={
            borderTop: '1px solid black',
            textAlign: 'center',
            width: '90px',
            margin: 'auto',
        }
        const underline2={
            borderTop: '1px solid black',
            textAlign: 'center',
            width: '160px',
            margin: 'auto',
        }
        return(
            <div>
                <div style={style}></div>
                <Header firstLetter = 'A' name='PPS'/>
                <div style={underline}></div>
                <Items />
                <Header firstLetter = 'C' name='ONTACT'/>
                <div style={underline2}></div>
            </div>
        )
    }
}
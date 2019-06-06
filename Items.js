class Items extends React.Component{
    render(){
        const style={
            fontWeight: 'bold',
            textAlign: 'center',
            margin:'30px 0 20px 0',
        }
        const flexer={
            display:'flex',
            justifyContent: 'center',
        }
        const imageStyle={
            width: '200px',
            height: '200px',
            margin: '10px',
        }
        return(
            <div>

                <h4 style={style}>BASIC</h4>
                <div style={flexer}>
                    <img style={imageStyle} src={'images/todo_list.png'} />
                    <img style={imageStyle} src={'images/exam.png'} />
                    <img style={imageStyle} src={'images/calculator.png'} />
                    <img style={imageStyle} src={'images/games.png'} />
                </div>

                <h4 style={style}>INTERMEDIATE</h4>
                <div style={flexer}>
                    <img style={imageStyle} src={'images/chatroom.png'} />
                    <img style={imageStyle} src={'images/budget.png'} />
                    <img style={imageStyle} src={'images/ui.png'} />
                </div>

                <h4 style={style}>ADVANCED</h4>
                <div style={flexer}>
                    <img style={imageStyle} src={'images/typingtest.png'} />
                </div>


            </div>
        )
    }
}
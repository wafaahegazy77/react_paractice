function Clients(props) {
    const {name , age , city , status } = props

    return (
        <div className="clientBox">
            <h5>Welcome : {name} </h5>
            <h5>age : {age} </h5>
            <h5>city : {city} </h5>
            <h5>status : {status} </h5>
        </div>
    )
}

export default Clients;
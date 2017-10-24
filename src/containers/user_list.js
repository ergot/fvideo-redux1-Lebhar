import react from 'react'

class UserList extends Component {
    render() {
        return (
            <div>
                <ul className="col-md-4">
                    {
                        this.props.user.map((user)=> {
                            return (
                                <li className="list-group-item" key={user.id}>
                                    {user.name}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default UserList
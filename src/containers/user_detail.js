import React from 'react'
import { connect} from 'react-redux'

class UserDetail extends React.Component {
    render(){
        const {myActiveUser} = this.props
        if(!myActiveUser) {
            return <div>selectionnez un user</div>
        }
        return (
            <div>
                <h3>detail de  {myActiveUser.name}</h3>
                <ul>
                    <li>id {myActiveUser.id}</li>
                    <li>role {myActiveUser.role}</li>
                    <li>actif {myActiveUser.active}</li>
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        myActiveUser: state.activeUser // reducer/index
    }
}

export default connect(mapStateToProps)(UserDetail)
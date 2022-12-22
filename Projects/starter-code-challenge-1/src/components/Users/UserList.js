import Card from "../UI/Card"
import styles from "./UserList.module.css"

const UserList = (props) => {
    return <ul>
        <Card className={styles.users}>
            {props.users.map(user => <li key={user.id}>{user.name} - {user.age} years</li>)}
        </Card>
    </ul>
}

export default UserList
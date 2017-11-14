import store from '../../modules/store.js';
import { getUsers } from '../api/user.js';


const userUtil = {
    getUsers() {
        if (store.state.userList && store.state.userList.length > 0) {
            return store.state.userList
        } else {
            if (store.state.loadingUserList){
                return []
            }
            store.state.loadingUserList = true
            getUsers().then((data) => {
                data.forEach((item) => {
                    store.state.userList.push(item)
                })
                store.state.loadingUserList = false
            }).catch((e) => {
                store.state.loadingUserList = false
            })
            return []
        }
    },
    getCurrentUser() {
        return store.state.user;
    },
    setCurrentUser(account, name) {
        store.state.user={account, name};
    }
}

export default userUtil;
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers } from './redux/userSlice';
import User from './User';

const UserList = () => {
    const dispatch = useDispatch();

    const { users } = useSelector(store => store.user)

    useEffect(() => {
        dispatch(getAllUsers())
    }, [])
    return (
        <>
            {
                users && users.map((user) => (
                    <User key={user.id} user={user} />
                ))
            }
        </>
    )
}

export default UserList
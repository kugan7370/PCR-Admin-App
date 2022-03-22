import { collection, onSnapshot, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { auth, db } from '../../Firebase'

function User() {
    const [userData, setuserData] = useState();
    // useEffect(() => {
    //     let isMounted = true
    //     const ref = collection(db, 'users')
    //     const q = query(ref, where('uid', '==', auth.currentUser.uid))
    //     const snap = onSnapshot(q, (snapshot) => {
    //         if (isMounted) {
    //             snapshot.docs.map((doc) => {

    //                 setuserData(doc.data())

    //             })
    //         }


    //     })
    //     return () => { isMounted = false }
    // }, [])

    // console.log(userData);


    return (
        <div>User</div>
    )
}

export default User
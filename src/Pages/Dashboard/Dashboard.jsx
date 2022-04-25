import { Assessment, ChromeReaderMode, Group, LocalLibrary, MenuBook } from '@material-ui/icons'
import { collection, onSnapshot, query, where } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { db } from '../../Firebase'
import './Dashboard.css'
function Dashboard() {
    const [user, setuser] = useState()
    const [post, setpost] = useState()
    const [article, setarticle] = useState()
    const [book, setbook] = useState()
    //user-count

    useEffect(() => {
        let isMounted = true
        try {

            const ref = collection(db, 'users')


            const snapdata = onSnapshot(ref, (snapshot) => {

                let user = [];
                if (isMounted) {
                    snapshot.docs.map((doc) => {

                        user.push({ ...doc.data(), id: doc.id })
                    })

                    setuser(user)

                }

            })

        } catch (error) {

            let user = [];
            setuser(user)

        }


        return () => { isMounted = false }
    }, [])

    //post-count




    useEffect(() => {
        let isMounted = true
        try {

            const ref = collection(db, 'blogs')


            const snapdata = onSnapshot(ref, (snapshot) => {

                let post = [];
                if (isMounted) {
                    snapshot.docs.map((doc) => {

                        post.push({ ...doc.data(), id: doc.id })
                    })

                    setpost(post)

                }

            })

        } catch (error) {

            let post = [];
            setpost(post)

        }


        return () => { isMounted = false }
    }, [])


    //article-count
    useEffect(() => {
        let isMounted = true
        try {

            const ref = collection(db, 'blogs')

            const q = query(ref, where("type", '==', "Article"))
            const snapdata = onSnapshot(q, (snapshot) => {

                let article = [];
                if (isMounted) {
                    snapshot.docs.map((doc) => {

                        article.push({ ...doc.data(), id: doc.id })
                    })

                    setarticle(article)

                }

            })

        } catch (error) {

            let article = [];
            setarticle(article)

        }


        return () => { isMounted = false }
    }, [])

    //book-count
    useEffect(() => {
        let isMounted = true
        try {

            const ref = collection(db, 'blogs')

            const q = query(ref, where("type", '==', "Book"))
            const snapdata = onSnapshot(q, (snapshot) => {

                let book = [];
                if (isMounted) {
                    snapshot.docs.map((doc) => {

                        book.push({ ...doc.data(), id: doc.id })
                    })

                    setbook(book)

                }

            })

        } catch (error) {

            let book = [];
            setbook(book)

        }


        return () => { isMounted = false }
    }, [])



    return (
        <div>
            <Row className='p-2'>
                <Col lg={3}>
                    <Card className='card-1 p-2 '>

                        <Card.Body>
                            <Card.Title>Users</Card.Title>
                            <Card.Text className=' d-flex align-items-center'>
                                <Group className='fs-1' />
                                {user && <span className='ms-2 fs-3'>{user.length}</span>}
                            </Card.Text>
                        </Card.Body>

                    </Card>
                </Col>
                <Col lg={3}>
                    <Card className='card-2 p-2'>


                        <Card.Body>
                            <Card.Title>Posts</Card.Title>
                            <Card.Text className=' d-flex align-items-center'>
                                <LocalLibrary className='fs-1' />
                                {post && <span className='ms-2 fs-3'>{post.length}</span>}
                            </Card.Text>
                        </Card.Body>

                    </Card>
                </Col>
                <Col lg={3}>
                    <Card className='card-3 p-2'>


                        <Card.Body>
                            <Card.Title>Article</Card.Title>
                            <Card.Text className=' d-flex align-items-center'>
                                <Assessment className='fs-1' />
                                {article && <span className='ms-2 fs-3'>{article.length}</span>}
                            </Card.Text>
                        </Card.Body>

                    </Card>
                </Col>
                <Col lg={3}>
                    <Card className='card-4 p-2'>


                        <Card.Body>
                            <Card.Title>Books</Card.Title>
                            <Card.Text className=' d-flex align-items-center'>
                                <MenuBook className='fs-1' />
                                {book && <span className='ms-2 fs-3'>{book.length}</span>}
                            </Card.Text>
                        </Card.Body>

                    </Card>
                </Col>

            </Row>

            <div className="dashboad-image mt-4 text-center ">
                <img src="https://media-exp1.licdn.com/dms/image/C5612AQEyn_QuJGIvWA/article-cover_image-shrink_720_1280/0/1629356866985?e=1652918400&v=beta&t=HbTHqs44Kp0bNzt3VCnJyIvZ1O_93lJxJN_chxB0BSI" class="img-fluid d-image" alt="" />
            </div>
        </div>

    )
}

export default Dashboard
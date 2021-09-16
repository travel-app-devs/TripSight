import style from './style.module.css'
import React, { useState } from 'react'
import Auth from '../../utils/auth'

import { useMutation } from '@apollo/client'
import { ADD_POST } from '../../utils/mutations'

export default function Form () {
    const [ titleInput, setTitleInput ] = useState('')
    const [ tagsInput, setTagsInput ] = useState('')
    const [ titleImageLink, setTitleLinksInput ] = useState('')
    const [ bodyImageLink, setBodyLinksInput ] = useState('')
    const [ postVidLink, setVidLinksInput ] = useState('')
    const [ postInput, setPostInput ] = useState('')

    const [ post, setPost ] = useState({title: '', tags:[], titleImageLink: '', bodyImageLink: [], postVid: '', textBody: ''})

    const [titleCharacterCount, setTitleCharacterCount] = useState(0);
    const [postCharacterCount, setPostCharacterCount] = useState(0);

    const [addPost, { error, data }] = useMutation(ADD_POST)

    const handleChangeTitle = (event) => {
        const { name, value } = event.target

        if (name === 'titleInput' && value.length <= 50) {
            setTitleInput(value);
            setTitleCharacterCount(value.length);
        } 
    }
    
    const handleChangePost = (event) => {
        const { name, value } = event.target

        if (name === 'postInput' && value.length <= 10000) {
            setPostInput(value);
            setPostCharacterCount(value.length);
        } 
    }

    const handleChangeTags = (event) => {
        const { name, value } = event.target

        if (name === 'tagsInput') {
            setTagsInput(value);
        } 
    }

    const handleChangeLink1 = (event) => {
        const { name, value } = event.target

        if (name === 'titleImage') {
            setTitleLinksInput(value);
        }
    }

    const handleChangeLink2 = (event) => {
        const { name, value } = event.target

        if (name === 'bodyImage') {
            setBodyLinksInput(value);
        }
    }

    const handleChangeLink3 = (event) => {
        const { name, value } = event.target

        if (name === 'postVid') {
            setVidLinksInput(value);
        }
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault()
        const userId = Auth.getProfile().data._id
        let sepTags = tagsInput.split(',')
        let sepLinks = bodyImageLink.split(',')
        const tagsArray = sepTags.map(tag => tag.trim())
        const linksArray = sepLinks.map(link => link.trim())
        // title: $title, titleImageLink: $titleImageLink, textBody: $textBody, bodyImageLinks: $bodyImageLinks, postVid: $postVid, latitude: $latitude, longitude: $longitude, description: $description, userId: $userId, pinned: $pinned, tags: $tags
        setPost({title: titleInput, textBody: postInput, tags: tagsInput, titleImageLink: titleImageLink, bodyImageLinks: linksArray, postVid: postVidLink, userId: userId})
        try {
            const { data } = await addPost({
                variables: {
                    title: 'title', 
                    titleImageLink: null, 
                    textBody: null, 
                    bodyImageLinks: null, 
                    postVid: null, 
                    latitude: 1, 
                    longitude: 1, 
                    description: null, 
                    userId: userId, 
                    pinned: false, 
                    tags: null
                }
            })
            console.log(post)

            setTitleInput('')
            setPostInput('')
            setTagsInput('')
            setTitleLinksInput('')
            setBodyLinksInput('')
            setVidLinksInput('')
        } catch (err) {
            console.log(err)
        }

    }
    // useEffect(()=>console.log(tagsInput))
    // useEffect(()=>console.log(post))


    return (
        <>
            <div className={style.formContainer}>
                <form className={style.form}>
                <input className={style.submitPost} type='submit' onClick={handleFormSubmit} value='Publish Post'></input>
                    <div>
                        <div className={style.titleInput}>
                            <label htmlFor='title'>Title</label>
                            <input id='title' name='titleInput' onChange={handleChangeTitle} value={titleInput} type='text'></input>
                        </div>
                        <div className={style.tagsInput}>
                            <label htmlFor='tags'>Tags (Separate with comma)</label>
                            <input id='tags' name='tagsInput' onChange={handleChangeTags} value={tagsInput} type='text'></input>
                        </div>
                        <div className={style.linksInput}>
                            <div>
                                <label htmlFor='titleImage'>Title Image Link</label>
                                <input className={style.links} id='titleImage' name='titleImage' onChange={handleChangeLink1} value={titleImageLink} type='text'></input>
                                <label htmlFor='bodyImage'>Image Links</label>
                                <input className={style.links} id='bodyImage' name='bodyImage'onChange={handleChangeLink2} value={bodyImageLink} type='text'></input>
                                <label htmlFor='postVid'>Video Link</label>
                                <input className={style.links} id='postVid' name='postVid' onChange={handleChangeLink3} value={postVidLink} type='text'></input>
                            </div>
                        </div>
                    </div>
                    <div className={style.postInput}>
                        <label htmlFor='post'>Post</label>
                        <textarea name='postInput' rows='5' cols='90' id='posts' onChange={handleChangePost} value={postInput} type='text'></textarea>
                    </div>
                    
                </form>
            </div>
        </>
    )
}
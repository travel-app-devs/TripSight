import style from './style.module.css'
import { useState, useEffect } from 'react'

export default function Form () {
    const [ titleInput, setTitleInput ] = useState('')
    const [ tagsInput, setTagsInput ] = useState('')
    const [ linksInput, setLinksInput ] = useState('')
    const [ postInput, setPostInput ] = useState('')

    const [ post, setPost ] = useState({title: '', tags:[], titleImageLink: '', bodyImageLink: [], postVid: '', textBody: ''})

    const [titleCharacterCount, setTitleCharacterCount] = useState(0);
    const [postCharacterCount, setPostCharacterCount] = useState(0);

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

    const handleChangeLink = (event) => {
        const { name, value } = event.target

        if (name === 'linksInput') {
            setLinksInput(value);
        }
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault()
        let sepTags = tagsInput.split(',')
        let sepLinks = linksInput.split(',')
        sepTags.forEach(tag => tag.trim())
        sepLinks.forEach(link => link.trim())
        setPost({title: titleInput, textBody: postInput, tags: sepTags, titleImageLink: linksInput, bodyImageLink: sepLinks, postVid: linksInput})
        console.log(post)
    }
    useEffect(()=>console.log(tagsInput))
    useEffect(()=>console.log(post))


    return (
        <>
            <div className={style.formContainer}>
                <form className={style.form}>
                <input className={style.submitPost} type='submit' onClick={handleFormSubmit} value='Publish Post'></input>
                    <div>
                        <div className={style.titleInput}>
                            <label htmlFor='title'>Title</label>
                            <input id='title' name='titleInput' onChange={handleChangeTitle} type='text'></input>
                        </div>
                        <div className={style.tagsInput}>
                            <label htmlFor='tags'>Tags</label>
                            <input id='tags' onChange={handleChangeTags} type='text'></input>
                        </div>
                        <div className={style.linksInput}>
                            <div>
                                <label htmlFor='titleImage'>Title Image Link</label>
                                <input className={style.links} id='titleImage' name='titleImage' onChange={handleChangeLink} type='text'></input>
                                <label htmlFor='bodyImage'>Body Image Link</label>
                                <input className={style.links} id='bodyImage' name='bodyImage'onChange={handleChangeLink} type='text'></input>
                                <label htmlFor='postVid'>Video Link</label>
                                <input className={style.links} id='postVid' name='postVid' onChange={handleChangeLink} type='text'></input>
                            </div>
                        </div>
                    </div>
                    <div className={style.postInput}>
                        <label htmlFor='post'>Post</label>
                        <textarea name='postInput' rows='5' cols='90' id='posts' onChange={handleChangePost} type='text'></textarea>
                    </div>
                    
                </form>
            </div>
        </>
    )
}
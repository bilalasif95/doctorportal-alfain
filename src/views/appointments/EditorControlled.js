// ** React Imports
import { useState } from 'react'

// ** Third Party Imports
import { EditorState } from 'draft-js'

// ** Component Import
import ReactDraftWysiwyg from 'src/@core/components/react-draft-wysiwyg'

const EditorControlled = () => {
    // ** State
    const [value, setValue] = useState(EditorState.createEmpty())

    return <ReactDraftWysiwyg toolbar={{
        options: ['inline', 'fontSize', 'fontFamily', 'link', 'colorPicker', 'list', 'textAlign', 'history'],
        inline: {
            options: ['bold', 'italic', 'underline', 'strikethrough']
        },
        link: {
            options: ['link']
        },
        list: {
            options: ['unordered', 'ordered']
        }
    }} editorState={value} placeholder="Type here..." onEditorStateChange={data => setValue(data)} />
}

export default EditorControlled

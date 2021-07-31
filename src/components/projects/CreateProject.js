import {useState} from 'react';
import {createProject} from '../../store/actions/projectActions';
import {connect} from 'react-redux';

const CreateProject = (props) => {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        console.log(title, content);
        props.createProject({title, content});
    };

    return (
        <div className="container">
            <form className="white" onSubmit={handleSubmit}>
                <h5 className="grey-text text-darken-3">Sign In</h5>
                <div className="input-field">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div className="input-field">
                    <label htmlFor="content">Content</label>
                    <textarea id="content" className="materialize-textarea"  value={content} onChange={e => setContent(e.target.value)}></textarea>
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Create</button>
                </div>
            </form>
        </div>
    )
};

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(null, mapDispatchToProps)(CreateProject);


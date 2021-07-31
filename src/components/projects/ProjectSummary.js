const ProjectSummary = ({project}) => {
    return (
        <div className="card z-depth-0 project-sumarry">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{project.title}</span>
                <p>Posted by the Marian</p>
                <p className="grey-text">3rd September, 9am</p>
            </div>
        </div>
    )
};

export default ProjectSummary;
const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, velit officia, totam dolorem voluptate blanditiis veritatis nemo iure omnis, accusamus minus accusantium? Praesentium atque voluptas beatae quasi ullam maxime asperiores?</p>
                </div>
                <div className="card-action gret lighten-4 grey-text">
                    <div>Posted by the Marian Nociar</div>
                    <div> 31. jule 2021</div>
                </div>
            </div>
        </div>
    )
};

export default ProjectDetails;
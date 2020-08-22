import React from 'react';

import projects from '../Res/projects.json';
import { Project } from '../Api';

interface ProjectDetailsProps {
    id: string;
}

interface ProjectDetailsState {
    project?: Project;
}

class ProjectDetails extends React.Component<ProjectDetailsProps, ProjectDetailsState>  {
    constructor(props: ProjectDetailsProps){
        super(props);
        
        this.state = {project: projects.find(p => p.title.toLocaleLowerCase().localeCompare(props.id.toLocaleLowerCase()) === 0)};
    }

    render() {
        return (<div>
            { (this.state.project) &&
            <div>
                <h1>{this.state.project.title}</h1>
            </div>
            }
        </div>);
    }
}

export default ProjectDetails;
import React from 'react';

import { Project, CardItem } from '../Api';
import CardList from '../Components/CardList';
import Search from '../Components/Search';
import projects from '../Res/projects.json';
import Constants from '../Other/Constants';

interface ProjectsState {
    items: Project[];
    vaultSearchKeyword: string | null;
}

interface ProjectsProps {
}

class Projects extends React.Component<ProjectsProps, ProjectsState> {
    
    constructor(props: ProjectsProps) {
        super(props);
    
        this.state = {items: projects, vaultSearchKeyword: null};
    }
    
    render() {
        return (<div className="projects-page" >
            <div className="projects-container">
                <h1>Projects</h1>
                <div>
                <h2 className="mt-5">The Forge</h2>
                <p>{Constants.FORGE_DESCRIPTION}</p>
                </div>
                <CardList items={this.forgeItems()} toCardItem={this.projectToCardItem} columns={false} />

                <h2 className="mt-5">The Vault</h2>
                <div className="d-flex flex-row flex-wrap">
                    <p>{Constants.VAULT_DESCRIPTION}</p>
                    <Search className="ml-auto w-35 d-lg" onChange={this.onSearchChanged}/>
                </div>
                <CardList items={this.vaultItems()} toCardItem={this.projectToCardItem} columns={true} />
                <div className="d-flex justify-content-center">
                    <h2 className="m-5">The End</h2>
                </div>
            </div>
        </div>);
    }

    vaultItems = () : Project[] => {
        let vaultItems = this.state.items.filter(i => i.location === "vault");
        
        if (this.state.vaultSearchKeyword) {
            let keyword : string = this.state.vaultSearchKeyword.toLowerCase(); 
            vaultItems = vaultItems.filter(i => {
                return i.categories.flatMap(i => i.toLowerCase()).includes(keyword) ||
                i.title.toLowerCase().includes(keyword) || 
                i.description.toLowerCase().includes(keyword)
            });
        }

        return vaultItems;
    }

    forgeItems = () : Project[] => {
        return this.state.items.filter(i => i.location === "forge")
    }

    projectToCardItem = (item: Project) : CardItem => {
        var cardItem = {
            title: item.title,
            date: item.date,
            categories: item.categories,
            imgSrc: item.imgSrc,
            vidSrc: item.vidSrc,
            description: item.description,
        } as CardItem;

        if (item.extendedInfo || item.extendedInfo === {}) {
            cardItem.extendedInfo = {};
        }

        return cardItem;
    }

    onSearchChanged = (val: string | null) => {
       this.setState({vaultSearchKeyword: val});
    }
}

export default Projects;
import React from "react";
import "./assets/css/projectPage.css";
import TopNav from './components/Navbar/TopNav';

import { Button, Container, Row, Col} from 'react-bootstrap';
import ProjectSection from "./components/ProjectsPage/ProjectSection";

class ProjectPage extends React.Component {
    state = {
        projectName : "CSC309 PHASE 1"
    }
    render() {
        return (
            <div className="mission-panel">
                <TopNav />
                <h1 className="mt-3 ml-3">{this.state.projectName}</h1>
                <Container>

                    <ProjectSection />
                </Container>
                
                
            </div>
        );
    }
}

export default ProjectPage;
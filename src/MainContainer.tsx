import React, { SyntheticEvent } from 'react';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
 
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import UnderConstruction from './Pages/UnderConstruction';

import { createBrowserHistory } from 'history';
import { Container } from 'react-bootstrap';
import { ArrowUp as ArrowUpIcon } from 'react-feather';
import { ArrowDown as ArrowDownIcon } from 'react-feather';
import { ArrowLeft as ArrowLeftIcon } from 'react-feather';

enum NavQueuePosition {
  None, Up, Down, Left, Top
}

interface MainContainerState {
  navHovered: boolean;
  pageChanged: boolean;
  navQueued: NavQueuePosition;
  history: any;
}

interface MainContainerProps {
  history: any;
}

class MainContainer extends React.Component<MainContainerProps, MainContainerState> {
    projectsPageRef: any;
    projectPageElement: any;
    stopPropagationFlag: boolean = false;

    constructor(props: MainContainerProps) {
      super(props);

      this.projectsPageRef = React.createRef();

      this.state = { 
        navHovered: false, 
        pageChanged: false, 
        navQueued: NavQueuePosition.Top, 
        history: createBrowserHistory({basename: process.env.PUBLIC_URL}) };
    }

    componentDidMount() {
      this.projectPageElement = ReactDOM.findDOMNode(this.projectsPageRef.current) as Element;
    }
  
    render() {
        const navQueuedClassName = 'nav-queued';
        const downQd = this.state.navQueued === NavQueuePosition.Down;
        const upQd = this.state.navQueued === NavQueuePosition.Up;
        const leftQd = this.state.navQueued === NavQueuePosition.Left;
        
        return (
            <HashRouter>
            <Container className="d-flex mt-5 h-100" onWheel={this.onWheel} onScroll={this.onScroll}>
                <Switch>
                <Route path="/projects/QVision">
                  <Link to='/projects'>
                    <ArrowLeftIcon className={'page-button page-button-left' + (leftQd ? navQueuedClassName : '')}
                        size={leftQd ? 48 : 24}
                      />
                  </Link>
                  <UnderConstruction />
                  {/* {<ProjectDetails id="qvision"/>} */}
                </Route>
                <Route path="/projects/TaskT">
                  <Link to='/projects'>
                    <ArrowLeftIcon className={'page-button page-button-left ' + (leftQd ? navQueuedClassName : '')}
                        size={leftQd ? 48 : 24}
                      />
                  </Link>
                  <UnderConstruction />
                  {/* <ProjectDetails id="taskt"/> */}
                </Route>
                <Route path="/projects/Tether">
                  <Link to='/projects'>
                    <ArrowLeftIcon className={'page-button page-button-left ' + (leftQd ? navQueuedClassName : '')}
                        size={leftQd ? 48 : 24}
                      />
                  </Link>
                  <UnderConstruction />
                  {/* {<ProjectDetails id="tether" />} */}
                </Route>
                <Route exact path="/projects">
                  { (this.state.navQueued === NavQueuePosition.Top || this.state.navQueued === NavQueuePosition.Up) &&
                    <Link to='/'>
                      <ArrowUpIcon 
                        className={'page-button page-button-up ' + (upQd ? navQueuedClassName : '')}
                        size={upQd ? 48 : 24}
                      />
                    </Link>
                  }
                  <Projects ref={this.projectsPageRef}/>
                </Route>
                <Route exact path="/">
                  <Home />
                  <Link to='/projects'>
                    <ArrowDownIcon  
                      className={'page-button page-button-down ' + (downQd ? navQueuedClassName : '')}
                      size={downQd ? 48 : 24}
                    />
                  </Link>
                </Route>
              </Switch>
              <Route exact path="/">                 
              </Route>
              </Container>
          </HashRouter>
        );
    }

    onWheel = (e: SyntheticEvent) => {
      if (this.state.history.location.pathname === '/'){
        this.handleWheelOnHomePage(e);
      } else if (this.state.history.location.pathname === '/projects'){
        this.handleWheelOnProjectsPage(e);
      } else if (this.state.history.location.pathname.includes('/projects/')){
        this.handleWheelOnProjectPage(e);
      }
    }

    onScroll = (e: SyntheticEvent) => {
      if (this.state.history.location.pathname === '/projects'){
        if (this.IsProjectPageAtTop()){
          this.setState({navQueued: NavQueuePosition.Top});
        }
      } 
    }

    IsWheelUp = (e: SyntheticEvent) => {
      return (e.nativeEvent as WheelEvent).deltaY < 0;
    }

    IsWheelDown = (e: SyntheticEvent) => {
      return (e.nativeEvent as WheelEvent).deltaY > 0;
    }

    IsWheelLeft = (e: SyntheticEvent) => {
      return (e.nativeEvent as WheelEvent).deltaX < 0;
    }
    
    handleWheelOnHomePage = (e: SyntheticEvent) => {
      if (this.IsWheelDown(e)) {
        if (this.state.navQueued === NavQueuePosition.Down) {
          this.stopPropagationFlag = true;
          this.setState({navQueued: NavQueuePosition.Top})
          this.state.history.push('/projects');
        } 
        else if (this.state.navQueued === NavQueuePosition.None) {
          this.setState({navQueued: NavQueuePosition.Down});
        }
        else {
          this.setState({navQueued: NavQueuePosition.None});
        }
      } else if (this.IsWheelUp(e)) {
        this.setState({navQueued: NavQueuePosition.None});
      }
    }

    handleWheelOnProjectsPage = (e: SyntheticEvent) => {
      // The user has scrolled upwards and we're at the top (is this gonna be difference on mac?)
      if (this.IsWheelUp(e)) {

        if(!this.IsProjectPageAtTop())
          return;

        if (this.state.navQueued === NavQueuePosition.Up) {
          // Fire Navigation Event
          this.state.history.push('/');
        } 
        else if (this.state.navQueued === NavQueuePosition.Top) {
          this.setState({navQueued: NavQueuePosition.Up});
        }
        else {
          this.setState({navQueued: NavQueuePosition.Top});
        }
      } else if (this.IsWheelDown(e)) {
        this.setState({navQueued: NavQueuePosition.None});
      }
    }

    handleWheelOnProjectPage = (e: SyntheticEvent) => {
      // The user has scrolled left // The Queuing of this nav doesn't feel good so I'll skip the Q

      // this.setState({navQueued: NavQueuePosition.Left})
      if (this.IsWheelLeft(e)){
        this.state.history.push('/projects');
      }
    }

    IsProjectPageAtTop = () => {
      this.projectPageElement = ReactDOM.findDOMNode(this.projectsPageRef.current) as Element;
      if (this.projectPageElement == null)
        return false;

      return this.projectPageElement.scrollTop === 0
    }
}

export default MainContainer;

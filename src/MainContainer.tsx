import React, { SyntheticEvent } from 'react';
import ReactDOM from 'react-dom';
 
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import ScrollIndicator from './Components/ScrollIndicator';
import UnderConstruction from './Pages/UnderConstruction';

import If from './Components/If';

import { createBrowserHistory } from 'history';
import { Container } from 'react-bootstrap';
import { ArrowUp as ArrowUpIcon } from 'react-feather';
import { ArrowDown as ArrowDownIcon } from 'react-feather';
import { ArrowLeft as ArrowLeftIcon } from 'react-feather';

enum NavQueuePosition {
  None, Up, Down, Left, Top
}

class Router {
  history: string[] = [];

  constructor(base: string) {
    this.history.push(base);
  }

  push(path: string) {
    this.history.push(path);
  }

  pop() {
    this.history.pop();
  }

  location() {
    return {
      pathname: this.history[this.history.length-1]
    }
  }
}

interface MainContainerProps {
}

interface MainContainerState {
  navHovered: boolean;
  pageChanged: boolean;
  lastTouchY: number | null;
  navQueued: NavQueuePosition;
  history: Router;
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
        lastTouchY: null,
        navQueued: NavQueuePosition.Top, 
        history: new Router(process.env.PUBLIC_URL),
      }
    }

    componentDidMount() {
      this.projectPageElement = ReactDOM.findDOMNode(this.projectsPageRef.current) as Element;
    }

    routeToBase = () => {
      this.state.history.push('');
      this.forceUpdate();
    }

    routeTo = (path: string) => {
      console.log("Routing to: " + path);
      this.state.history.push(path);
      this.forceUpdate();
    }
  
    render() {
        console.log("Rendering: " + this.state.history.location().pathname)
        const navQueuedClassName = 'nav-queued';
        const downQd = this.state.navQueued === NavQueuePosition.Down;
        const upQd = this.state.navQueued === NavQueuePosition.Up;
        const leftQd = this.state.navQueued === NavQueuePosition.Left;
        
        return (
          <Container className="d-flex flex-column h-100 full-width-fill background justify-content-center" 
            onWheel={this.onWheel} 
            onScroll={this.onScroll}
            onTouchStart={this.onTouchStart}
            onTouchMove={this.onTouchMove}
          >
              <If condition={this.state.history.location().pathname === '/projects/QVision'}>
                <ArrowLeftIcon 
                  onClick={() => this.routeTo('/projects')} 
                  className={'page-button page-button-left' + (leftQd ? navQueuedClassName : '')}
                  size={leftQd ? 48 : 24}
                />
                <UnderConstruction />
                {/* {<ProjectDetails id="qvision"/>} */}
              </If>
              <If condition={this.state.history.location().pathname === '/projects/TaskT'}>
                  <ArrowLeftIcon onClick={() => this.routeTo('/projects')} className={'page-button page-button-left ' + (leftQd ? navQueuedClassName : '')}
                    size={leftQd ? 48 : 24}
                  />
                  <UnderConstruction />
                  {/* <ProjectDetails id="taskt"/> */}
              </If>
              <If condition={this.state.history.location().pathname === '/projects/Tether'}>
                  <ArrowLeftIcon onClick={() => this.routeTo('/projects')} className={'page-button page-button-left ' + (leftQd ? navQueuedClassName : '')}
                    size={leftQd ? 48 : 24}
                  />
                  <UnderConstruction />
                  {/* {<ProjectDetails id="tether" />} */}
              </If>
              <If condition={this.state.history.location().pathname === '/projects/Project Terra'}>
                  <ArrowLeftIcon onClick={() => this.routeTo('/projects')} className={'page-button page-button-left ' + (leftQd ? navQueuedClassName : '')}
                    size={leftQd ? 48 : 24}
                  />
                  <UnderConstruction />
                  {/* {<ProjectDetails id="terra" />} */}
              </If>
              <If condition={this.state.history.location().pathname === '/projects/Project Arena'}>
                  <ArrowLeftIcon onClick={() => this.routeTo('/projects')} className={'page-button page-button-left ' + (leftQd ? navQueuedClassName : '')}
                    size={leftQd ? 48 : 24}
                  />
                  <UnderConstruction />
                  {/* {<ProjectDetails id="arena" />} */}
              </If>
              <If condition={this.state.history.location().pathname === '/projects/QDirStat'}>
                  <ArrowLeftIcon onClick={() => this.routeTo('/projects')} className={'page-button page-button-left ' + (leftQd ? navQueuedClassName : '')}
                    size={leftQd ? 48 : 24}
                  />
                  <UnderConstruction />
                  {/* {<ProjectDetails id="qdirstat" />} */}
              </If>
              <If condition={this.state.history.location().pathname === '/projects'}>
                <If condition={(this.state.navQueued === NavQueuePosition.Top || this.state.navQueued === NavQueuePosition.Up)}>
                  <If condition={!upQd}>
                    <ScrollIndicator size="md" inverse={true}
                      onClick={() => {this.routeTo('')}}  
                      onMouseOver={() => {this.setState({navQueued: NavQueuePosition.Up})}} 
                      onMouseLeave={() => {this.setState({navQueued: NavQueuePosition.None})}} 
                    />
                  </If>
                  <If condition={upQd}>
                    <ScrollIndicator size="lg" inverse={true}
                      onClick={() => {this.routeTo('')}}  
                      onMouseOver={() => {this.setState({navQueued: NavQueuePosition.Up})}} 
                      onMouseLeave={() => {this.setState({navQueued: NavQueuePosition.None})}} 
                    /> 
                  </If> 
                </If>
                <Projects ref={this.projectsPageRef} routeTo={this.routeTo}/>
              </If>
              <If condition={this.state.history.location().pathname === ''}>
                <Home className='align-self-stretch h-100' routeTo={this.routeTo} />
                <div>
                <If condition={!downQd}>
                  <ScrollIndicator size="md"
                    onClick={() => {this.routeTo('/projects')}}  
                    onMouseOver={() => {this.setState({navQueued: NavQueuePosition.Down})}} 
                    onMouseLeave={() => {this.setState({navQueued: NavQueuePosition.None})}} 
                  />            
                </If>
                <If condition={downQd}>
                  <ScrollIndicator size="lg"
                    onClick={() => {this.routeTo('/projects')}}  
                    onMouseOver={() => {this.setState({navQueued: NavQueuePosition.Down})}} 
                    onMouseLeave={() => {this.setState({navQueued: NavQueuePosition.None})}}
                  />            
                </If>
                </div>
                
              </If>
            </Container>
        );
    }

    onWheel = (e: SyntheticEvent) => {
      if (this.state.history.location().pathname === ''){
        this.handleWheelOnHomePage(e);
      } else if (this.state.history.location().pathname === '/projects'){
        this.handleWheelOnProjectsPage(e);
      } else if (this.state.history.location().pathname.includes('/projects/')){
        this.handleWheelOnProjectPage(e);
      }
    }

    onScroll = (e: SyntheticEvent) => {
      if (this.state.history.location().pathname === '/projects'){
        if (this.IsProjectPageAtTop()){
          this.setState({navQueued: NavQueuePosition.Top});
        }
      } 
    }

    handleTouchOnHomePage = (e: SyntheticEvent) => {
      let event = (e.nativeEvent as TouchEvent);

      if (this.state.lastTouchY == null)
        return;

      if (event.touches[0].clientY + 100 < this.state.lastTouchY)
      this.setState({navQueued: NavQueuePosition.Down});

      if (event.touches[0].clientY + 150 < this.state.lastTouchY && this.state.navQueued == NavQueuePosition.Down)
      {
        this.setState({lastTouchY: null});
        this.state.history.push('/projects');
      }
      
    }

    handleTouchOnProjectPage = (e: SyntheticEvent) => {
      let event = (e.nativeEvent as TouchEvent);

      if (this.state.lastTouchY == null)
        return;

      if (!this.IsProjectPageAtTop())
        return;

      if (event.touches[0].clientY - 100 > this.state.lastTouchY)
        this.setState({navQueued: NavQueuePosition.Up});

      if (event.touches[0].clientY - 150 < this.state.lastTouchY && this.state.navQueued == NavQueuePosition.Up)
        this.state.history.push('');
    }

    onTouchMove = (e: SyntheticEvent) => {
      console.log('touch move');

      if (this.state.history.location().pathname === ''){
        this.handleTouchOnHomePage(e);
      } else if (this.state.history.location().pathname === '/projects'){
        this.handleTouchOnProjectPage(e);
      }
    }

    onTouchStart = (e: SyntheticEvent) => {
      console.log('touch start');
      let event = (e.nativeEvent as TouchEvent);
      this.setState({lastTouchY: event.touches[0].clientY});
    }

    onTouchEnd = (e: SyntheticEvent) => {
      this.setState({lastTouchY: null});
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
          this.state.history.push('');
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

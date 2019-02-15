import React from 'react';
import classNames from 'classnames';
import { Affix, Button } from 'antd';
import { 
    Grid, 
    Menu,
    Sidebar,
} from 'semantic-ui-react';
import './layout-main.scss';
import SidebarContent from 'containers/layout/sidebar/index';
import Content from 'containers/layout/content/index';
import MenuContent from 'containers/layout/menu/index';
import PropTypes from 'prop-types';
const VerticalSidebar = ({ animation, direction, visible }) => (
    <Sidebar
      as={Menu}
      animation={animation}
      direction={direction}
      visible={visible}
      width='wide'
      
    >
      <SidebarContent/>
    </Sidebar>
)

VerticalSidebar.propTypes = {
    animation: PropTypes.string,
    direction: PropTypes.string,
    visible: PropTypes.bool,
}

class MainLayout extends React.Component {
    state = {
        isOpen: true,
        itemMenuActive: 'profile',
        vertical: false
    }

    handleItemClick = (e, { name }) => {
        this.setState({ itemMenuActive: name })
    }

    updateDimensions() {
        if(window.innerWidth < 600){
          this.setState({ vertical: true,  });
        }else{
          this.setState({ vertical: false,  });
        }
    }
    
    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions.bind(this));
    }

    render() {
        const {  isOpen } = this.state
        return (
            <div className="cv-main-layout">
                
                <Grid padded columns={1} relaxed>
                    <Grid.Row>
                        <Grid.Column 
                            mobile={16} tablet={16} computer={16}
                            width={16}>
                            <div className="cv-header-wrapper">
                            </div>
                        </Grid.Column>
                    </Grid.Row>

                    
                    <Grid.Row columns={2}>
                        <Grid.Column 
                            mobile={16} tablet={(isOpen)?3:0} computer={(isOpen)?3:0}
                            >
                            <div  
                                className={
                                    classNames({
                                    "cv-sidebar-wrapper": true,
                                    'cv-open': isOpen,
                                    'cv-close': !isOpen
                                })
                                }
                            >
                                <SidebarContent/>
                            </div>  
                        </Grid.Column>
                        <Grid.Column 
                            mobile={16} tablet={(isOpen)?13:16} computer={(isOpen)?13:16}
                            >
                            <div className="cv-content-wrapper">
                            {(this.state.vertical)?
                                <MenuContent 
                                    hideSidebar={()=>this.setState({isOpen: true})}
                                    showSidebar={()=>this.setState({isOpen: false})}
                                    isOpenSidebar={this.state.isOpen}
                                    handleActiveItemMenu={this.handleItemClick}
                                    activeItem= {this.state.itemMenuActive}
                                    vertical={this.state.vertical}
                                />:
                                <Affix offsetTop={10} >
                                    <MenuContent 
                                        hideSidebar={()=>this.setState({isOpen: true})}
                                        showSidebar={()=>this.setState({isOpen: false})}
                                        isOpenSidebar={this.state.isOpen}
                                        handleActiveItemMenu={this.handleItemClick}
                                        activeItem= {this.state.itemMenuActive}
                                        vertical={this.state.vertical}
                                        />
                                </Affix>
                            }
                                <Content 
                                    itemMenuActive={this.state.itemMenuActive}/>
                            </div>
                        </Grid.Column>

                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}


export default MainLayout;

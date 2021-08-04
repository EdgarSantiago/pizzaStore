import React from 'react'
import { CloneIcon, Icon, SidebarContainer, SidebarLink, SidebarMenu, SidebarRoute, SideBtnWrap } from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloneIcon/>
            </Icon>
            <SidebarMenu>
            <SidebarLink to='/'>Pizzas</SidebarLink>
            <SidebarLink to='/'>Desserts</SidebarLink>
            <SidebarLink to='/'>Full Menu</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/">Order Now</SidebarRoute>
            </SideBtnWrap>
        </SidebarContainer>
    )
}

export default Sidebar

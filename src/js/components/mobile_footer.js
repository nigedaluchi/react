import React from 'react';
import {Row,Col} from 'antd';
import {Menu,Icon} from 'antd';
const SubMenu=Menu.SubMenu;
const MenuItemGroup=Menu.ItemGroup;

export default class MobileFooter extends React.Component{
    render(){
        return (
            <footer>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20} className="footer">
                        &copy;&nbsp;2019 ReactNews. All Rights Resolved.
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </footer>
        );
    };
}

import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;
    
export default function Home(props){
    return (
        <Layout>
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <div className="logo" />
            </Header>
            <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    );
}
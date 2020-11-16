import { Layout, Menu, Breadcrumb } from 'antd';
import { useHistory, Route, Redirect } from "react-router-dom";

const { Header, Content, Footer } = Layout;
    
export default function Home({ component: Component, authenticated, ...rest }) {
    return (
      <Route
        {...rest}
        render={(props) => <Redirect to={{ pathname: '/login', state: { from: props.location } }} />}
      />
    )
};

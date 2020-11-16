import { Route, Redirect } from "react-router-dom";
    
export default function Home({ component: Component, authenticated, ...rest }) {
    return (
      <Route
        {...rest}
        render={(props) => <Redirect to={{ pathname: '/login', state: { from: props.location } }} />}
      />
    )
};

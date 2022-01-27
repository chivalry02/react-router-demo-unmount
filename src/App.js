import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import './style.css';

class Header extends React.Component {
  render() {
    return (
      <div>
        Header <Link to="/home">跳转到Home页面</Link>
        <br />
        <Link to="/my">跳转到My页面</Link>
      </div>
    );
  }
}

class HomePage extends React.Component {
  componentDidMount() {
    console.log('HomePage did mount');
  }

  componentWillUnmount() {
    console.log('HomePage will unmount');
  }

  render() {
    return <div>Home Page</div>;
  }
}

class MyPage extends React.Component {
  componentDidMount() {
    console.log('MyPage did mount');
  }

  componentWillUnmount() {
    console.log('MyPage will unmount');
  }

  render() {
    return <div>My Page</div>;
  }
}

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route
        path={'/my'}
        exact
        children={(props) => {
          return props.location.pathname !== '/person' ? (
            <div
              style={{
                display: props.location.pathname != '/my' ? 'none' : 'block',
              }}
            >
              <MyPage />
            </div>
          ) : (
            ''
          );
        }}
      ></Route>

      <Switch>
        <Route path={'/home'} exact component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
}

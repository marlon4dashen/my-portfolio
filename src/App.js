import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import SinglePost from "./component/SinglePost";
import Post from "./component/Post";
import Project from "./component/Project";
import NavBar from "./component/NavBar"


function App() {
  return (
    <BrowserRouter>
    {/* <NavBar/> */}
      <Switch>
        <Route component={Home} path = '/' exact />
        <Route component={About} path = '/about' />
        {/* <Route component={SinglePost} path = '/post/:slug' /> */}
        <Route component={Post} path = '/post' />
        <Route component={Project} path = '/project' />
      </Switch>
    </BrowserRouter>
  )
}

export default App;


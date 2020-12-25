import React from "react";
import Contact from "../../components/home";
import About from "../../components/about/about";
import Blog from "../../components/blog";
class Home extends React.Component {
  render() {
    return(
        <div>
            <Contact />
            <About />
            <Blog />
        </div>
    )
  }
}
export default Home;

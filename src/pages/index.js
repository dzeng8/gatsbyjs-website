import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function Home() {
    return (
        <div> {/* is this part necessary? */}
            {/* why isn't it to="/contact.js"?*/}
            <head>
                <title>Website Title!</title>
            </head>
            <body>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/about/">About</Link>
                    <Link to="/contact/">Contact</Link>
                    <Link to="/about-css-modules/">About CSS Modules</Link>
                </nav>
                <Header headerText="Hello Gatsby!" />
                <p>What a world</p>
                <img src="https://source.unsplash.com/random/400x200" alt="" />
                <Header headerText="Here's Another Heading" />
                <ul>
                    <li>I just learned about CSS Modules, but</li>
                    <li>I'm editing css through a global.css file instead of
                    using component-scoped CSS</li>
                    <li>I'm also learning how to use git</li>
                </ul>
            </body>
            <footer>
                <p> Here is some footer text</p>
            </footer>
        </div>
    )
}
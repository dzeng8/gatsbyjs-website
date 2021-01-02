import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function About() {
    return (
        <div>
            <head>
                <title>Website Title: About</title>
            </head>
            <body>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/about/">About</Link>
                    <Link to="/contact/">Contact</Link>
                    <Link to="/about-css-modules/">About CSS Modules</Link>
                </nav>
                <Header headerText="About Gatsby" />
                <p>There's things you can do with Gatsby</p>
            </body>
            <footer>
                <p> Here is some footer text</p>
            </footer>
        </div>
    )
}
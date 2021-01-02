import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function Contact() {
    return (
        <div>
            <head>
                <title>Website Title: Contact</title>
            </head>
            <body>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/about/">About</Link>
                    <Link to="/contact/">Contact</Link>
                    <Link to="/about-css-modules/">About CSS Modules</Link>
                </nav>
                <Header headerText="Contact" />
                <p>Send us a message!</p>
            <label>Your Message (No more than 100 characters):</label>
            <input type="text" minLength="1" maxLength="100" size="10"/>
            <button>Submit</button>
            </body>
            <footer>
                <p>Here is some footer text</p>
            </footer>
        </div>
    )
}
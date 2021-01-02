import React from "react"
import styles from "./about-css-modules.module.css"
import { Link } from "gatsby"
import Container from "../components/container"
import Header from "../components/header";

console.log(styles)

// here we are defining a component used only once here
const User = props => (
    <div className={styles.user}>
        <img src={props.avatar} className={styles.avatar} alt="" />
        <div className={styles.description}>
            <h2 className={styles.username}>{props.username}</h2>
            <p className={styles.excerpt}>{props.excerpt}</p>
        </div>
    </div>
)

export default function About() {
    return (
        <Container>
            <head>
                <title>Website Title: About CSS Modules</title>
            </head>
            <body>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/about/">About</Link>
                    <Link to="/contact/">Contact</Link>
                    <Link to="/about-css-modules/">About CSS Modules</Link>
                </nav>
                <h1>About CSS Modules</h1>
                <p>CSS Modules are cool</p>
                <User
                    username="Jane Doe"
                    avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
                    excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                />
                <User
                    username="Bob Smith"
                    avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
                    excerpt="I'm Bob Smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
                />
            </body>
        </Container>
    )
}
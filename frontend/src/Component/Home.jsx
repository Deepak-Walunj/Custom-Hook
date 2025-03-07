import UseFetch from "./UseFetch";
import './Home.css'

const Home = () =>{
    const data = UseFetch('https://api.quotable.io/random')
    console.log(data)
    return(
        <div className="home-container">
            <h1>Welcome to our React App!</h1>
            <p>
                This is a simple React project to demonstrate the use of custom hooks
                and data fetching. We will be using custom hooks to fetch data and display
                it in a user-friendly way.
            </p>
            <section className="quote-container">
                <h2>Quote</h2>
                {data && data.content ? ( // Check if data is not null and if it has a 'content' property
                    <blockquote>
                        <p>"{data.content}"</p> {/* Display the quote content */}
                        <footer>— {data.author}</footer> {/* Display the author's name */}
                    </blockquote>
                ) : (
                    <p>Loading Quote...</p> // Show loading message while fetching
                )}
            </section>
            <section className="features">
                <h2>Key Features</h2>
                <ul>
                <li>
                    <strong>Custom Hooks:</strong> Learn how to use React's hooks to manage state, lifecycle, and side effects.
                </li>
                <li>
                    <strong>Data Fetching:</strong> Understand how to fetch data from external APIs and display it in your React components.
                </li>
                <li>
                    <strong>React Routing:</strong> Implement routing with React Router to navigate between different views seamlessly.
                </li>
                </ul>
            </section>
            <section className="call-to-action">
                <h2>Start Exploring</h2>
                <p>
                Click on the links in the navigation bar to start exploring various
                pages and see the data fetched using custom hooks. If you're new to
                React, start by reading the documentation on hooks and learn how they
                can simplify your app development process.
                </p>
                <button onClick={() => window.location.href='/yoga'}>Get Started with Yoga</button>
                <button onClick={() => window.location.href='/food'}>Get Started with Food</button>
            </section>
        </div>
    )
}

export default Home;
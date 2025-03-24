import branchImage from "../assets/branchImage2.png";

const About = () => {
    return (
    <>
        <h1>About the Book Branch</h1>
        <img className="aboutBranchImage"src={branchImage} alt="Book Branch"></img>
        <p>Book Branch is a project inspired by my book loving friends. 
        It utilizes the Google Books API to display book information and links to PDF versions of books. 
        Book Branch was created with a React front end and Node back end. To save user data Book Branch uses a MongoDB database and is hosted using Google Cloud hosting services.</p>
        <p>Users can browse or search for books, create an account to save their books, and add reviews to titles they have read.</p>
    </>
    );
}

export default About;
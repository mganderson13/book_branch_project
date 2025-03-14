import bookBranchLogo from "../assets/bookBranchLogo.png";

const Home = () => {
    return (
        <>
        <div>
            <div className="homeTitleDiv">
            <img id="bookBranchImage"src={bookBranchLogo} alt="Book Branch Logo"></img>
            <h1>Book Branch</h1>
            </div>
            <div className="homeParagraphsDiv">
            <p>Read, connect, discuss, share... the world is your library!</p>
            <p>Happy reading!</p>
            </div>
        </div>
        <div>
            <h2>Browse books for inspiration. Search for a specific title or author. <br></br>Save books and rate titles you have finished.</h2>
        </div>
        </>
    );
}

export default Home;
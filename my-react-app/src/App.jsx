export default function App() {
    return(
        <div>
            <h1>Hello I am Sanjay</h1>
            <p>Welcome to my first React App</p>
            <MyButton />
            <p>Enjoy your stay!</p>
        </div>
    );
}
function MyButton() {
    return (
        <button>
            CLICK ME!
        </button>
    );
}

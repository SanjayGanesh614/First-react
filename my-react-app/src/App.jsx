export default function App() {
    const name = "Sanjay";
    const age = 19;
    return(
        <div>
            <h1>Hello I am {name} and I am {age} </h1>
            <p>Welcome to my first React App</p>
            <MyButton />
            <p>Enjoy your stay!</p>
            <Welcome name="USER" />
            
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
function Welcome(props) {
    return <h2>Welcome, {props.name}</h2>;
}



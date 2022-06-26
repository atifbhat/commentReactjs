import Comments from "./comments/Comments";
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <Card
        img="https://images.unsplash.com/photo-1550510537-89d5433de5cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1pY3Jvc29mdCUyMDM2NXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        alt=""
        title="microsoft-1"
        description="HTML/CSS"
        
        
      />

      <Card
        img ="https://images.unsplash.com/photo-1588421024623-940056140e58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        alt=""
        title="wallmart-2"
        description="CSS/BOOTSTRAP"
        
      />

      <Card
        img="https://images.unsplash.com/photo-1633675254053-d96c7668c3b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZWJvb2t8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        alt=""
        title="facebook-3"
        description="REACT"
       
      />
    </div>
  );
}

function Card(props) {
  return (
    <div className="card">
      <div className="card__body">
        <img src={props.img} className="card__image" alt="n" />
        <h2 className="card__title">{props.title}</h2>
        <p className="card__description">{props.description}</p>
      </div>
      <Comments
        commentsUrl="http://localhost:3000/comments"
        currentUserId="1"
      />
    </div>
  );
}
  

export default App;

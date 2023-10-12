import React from 'react'
import Amazon from "../img/amazon.png"
import Todolist from "../img/todolist.png"
import "./Project.css"


function Project() {
  return (

    <div className="container" id = "projects">
    <h1 className = "text-center" > PROJECTS </h1>
        <div className="row list-project">
            <div class="col-md-7">
            <img src={Amazon} alt="project-image" class="rounded tablet-top"/>
            </div>
       
        <div className="col-md-5">
             <div className="project-info-box mt-0">
                <h5>Amazon Clone</h5>
                <p>In this project i used React.JS , Context Api and Firebase Authentication
                in this you can sign in and sign out , Add items and remove items from basket , It is responsive also and you can do many more things </p>
             </div>
             <a href="https://amazon-clone-7340d5.netlify.app/" class="btn btn-primary d-block">VIEW PROJECT</a>
        </div>

    </div>
  
    



    <div className="row list-project">
        <div className="col-md-5 tablet-top">
            <div className="project-info-box mt-0">
                <h5>To Do List App</h5>
                <p>In this web app I used HTML,CSS,JavaScript from frontend and NodeJS , mongoDb ,express and etc from Backend . You can add and delete List of tasks you want to perform and the are saved in database so if the page is refreshed the data is not lost and you can maintain multiple lists </p>
            </div>
            
            <a href="https://github.com/khushj007/TODOlist-app" className="btn btn-primary d-block">VIEW PROJECT</a>
        </div>
        

        <div className="col-md-7">
            <img src={Todolist} alt="project-image" class="rounded"/>
        </div>
       </div> 





</div>
       
  );
}

export default Project
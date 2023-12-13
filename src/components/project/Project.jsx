import "./project.scss";

const Project = () => {
    const images = Array.from({ length: 3 }, (_, index) => (
        <img src={"/project/image_" + (index + 1) + ".png"} alt="project no let" />
    ));

    return (
      <div className="project">
        <div className="wrapper">
            <div className="imageContainer">
                {images.reverse()}
            </div>

            <div className="detailsContainer">
                <h1 className="projectTitle">No Let</h1>
                <h4 className="projectDescription">Squash Scoring app</h4>
                <ul>
                    <li>Ideal for scoring singles and doubles matches with precision.</li>
                    <li>Input match details, player details, and choose a wide range of t-shirt colours..</li>
                    <li>Seamless support for par 11 and par 15 scoring.</li>
                    <li>Set up "best of" games and tie breaker strategies for flexible gameplay.</li>
                    <li>See the stats of marked matches including time spent and decisions given.</li>
                </ul>
                <a href="https://apps.apple.com/gb/app/no-let/id6473088995" className="appstoreButton">
                    <img src="/project/appstorebutton.png" alt="appstore" />
                </a>
            </div>
            
        </div>
        <div className="projecttitle">No Let</div>
      </div>

    );
  };

  export default Project;
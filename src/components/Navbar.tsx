import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <div className="nav-container">
        <nav>
          <div className="nav-l">
            <img
              src="https://cdn.prod.website-files.com/64a2f403c1475cfd3aa0218f/64f6f60f34931189c9949b05_logo%20de%20pexels.webp"
              alt=""
            />
            <span>Pexels</span>
          </div>
          <div className="nav-r">
            <div>
              <select name="explore" id="">
                <option value="">Explore</option>
                <option value="option1">Option 1</option>
              </select>
            </div>
            <div>
              <a href="/licence">Licence</a>
            </div>
            <div>
              <a href="/upload">Upload</a>
            </div>
            <div>
              <button>Join</button>
            </div>
          </div>
        </nav>
        <div className="nav-search-container">
          <div className="nav-search">
            <h1>
              The best free stock photos, royalty free images & videos shared by
              creators.
            </h1>
            <div className="custom-input">
              <select name="custom-input" id="custom-input">
                <option value="hello">Photos</option>
              </select>
              <input type="text" placeholder="Search for free photos" />
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="container-c">
        <NavLink 
        to="home"
        style={(s) => s.isActive ? {color: 'white', background: 'black'} : {}}
        >Home
        </NavLink>
        <NavLink 
        style={(s) => s.isActive ? {color: 'white', background: 'black'} : {}}
        to="leaderboard">Leaderboard</NavLink>
        <NavLink 
        style={(s) => s.isActive ? {color: 'white', background: 'black'} : {}}
        to="videos">Videos</NavLink>
        <NavLink 
        style={(s) => s.isActive ? {color: 'white', background: 'black'} : {}}
        to="challenges">Challenges</NavLink>
      </div>
      <div className="container-b">
        <h1>Trending Free Stock Videos</h1>
        <select name="explore" id="">
                <option value="">Trending</option>
                <option value="option1">Option 1 <i className="fa-solid fa-check"></i></option>
              </select>
      </div>
      <div className="container-d">
        <img src="https://images.pexels.com/photos/29137971/pexels-photo-29137971/free-photo-of-scenic-autumn-pathway-lined-with-vibrant-leaves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <img src="https://images.pexels.com/photos/28870747/pexels-photo-28870747/free-photo-of-cinematic-urban-portrait-in-new-york-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <img src="https://images.pexels.com/photos/29401471/pexels-photo-29401471/free-photo-of-cozy-vintage-cafe-corner-with-artistic-flair.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <img src="https://images.pexels.com/photos/28996347/pexels-photo-28996347/free-photo-of-vibrant-dahlia-flowers-in-glass-vases.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <img src="https://images.pexels.com/photos/19469089/pexels-photo-19469089/free-photo-of-a-bird-perching-in-a-christmas-tree.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <img src="https://images.pexels.com/photos/19149254/pexels-photo-19149254/free-photo-of-hand-with-cup-of-coffee-by-small-christmas-tree.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        {/* <img src="https://images.pexels.com/photos/28584803/pexels-photo-28584803/free-photo-of-cozy-morning-coffee-with-leaf-on-table.jpeg" alt="" /> */}
        <img src="https://images.pexels.com/photos/29465911/pexels-photo-29465911/free-photo-of-cozy-winter-scene-with-christmas-lights-and-pillows.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <img src="https://images.pexels.com/photos/29465911/pexels-photo-29465911/free-photo-of-cozy-winter-scene-with-christmas-lights-and-pillows.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <img src="https://images.pexels.com/photos/29465911/pexels-photo-29465911/free-photo-of-cozy-winter-scene-with-christmas-lights-and-pillows.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <img src="https://images.pexels.com/photos/29465911/pexels-photo-29465911/free-photo-of-cozy-winter-scene-with-christmas-lights-and-pillows.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <img src="https://images.pexels.com/photos/29465911/pexels-photo-29465911/free-photo-of-cozy-winter-scene-with-christmas-lights-and-pillows.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <img src="https://images.pexels.com/photos/29465911/pexels-photo-29465911/free-photo-of-cozy-winter-scene-with-christmas-lights-and-pillows.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

      </div>
      {/* <div className="ce">
        <div><img src="https://images.pexels.com/photos/29137971/pexels-photo-29137971/free-photo-of-scenic-autumn-pathway-lined-with-vibrant-leaves.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /></div>
        <div><img src="https://images.pexels.com/photos/28870747/pexels-photo-28870747/free-photo-of-cinematic-urban-portrait-in-new-york-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /></div>
        <div><img src="https://images.pexels.com/photos/29401471/pexels-photo-29401471/free-photo-of-cozy-vintage-cafe-corner-with-artistic-flair.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /></div>
        <div><img src="https://images.pexels.com/photos/28996347/pexels-photo-28996347/free-photo-of-vibrant-dahlia-flowers-in-glass-vases.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
        <div>div 5</div>
        <div>div 6</div>
        <div>div 7</div>
        <div>div 8</div>
        <div>div 9</div>
      </div> */}

      <div className="footer">
        <h1>Thanks for visiting this website</h1>
      </div>
    </>
  );
}

export default Navbar;

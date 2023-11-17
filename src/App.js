import './App.css';

const HeaderLink = ({children="ItemX", href="#"}) =>
<li><a class="item" href={href}>{children}</a></li>

const Cards = ({children="description"}) =>
<>
<div class="card">
  <img class="buildings" src="9.png" alt="city" />
  <div class="bold">Lorem ipsum dolor sit amet</div>
  <div class="content">{children}</div>
  <button type="button" class="go">Go!</button>
</div>
</>      

function App() {
  return (
  <section class="alevel">
   <header>
    <img src="logo-camp-A-level-Ukraine.png" alt="logo" class="logo" />
    <nav class="main-nav hamburger-menu">
        <input id="menu__switch" type="checkbox" />
        <label class="menu__btn" for="menu__switch">
          <span></span>
        </label>
        
        <ul class="menu__box">
          <HeaderLink>Item1</HeaderLink>
          <HeaderLink>Item2</HeaderLink>
          <HeaderLink>Item3</HeaderLink>
          <HeaderLink>Item4</HeaderLink>
          <HeaderLink>Item5</HeaderLink>
        </ul>
      </nav>
      
   </header> 
   <div class="main-content">
     <div class="description">
      <div class="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit placeat, ducimus eaque ut error quidem sit quibusdam veritatis. Magnam cum fugit tenetur, obcaecati minima incidunt illo sapiente maiores ipsum vero.</div>
      <h1 class="name">OUR WORK</h1>
      <div class="cards">
      <Cards>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat qui maxime animi impedit illum odit quidem blanditiis consectetur.</Cards>
      <Cards>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Cards>
      <Cards>Lorem ipsum dolor sit amet consectetur adipisicing elit.  quidem sit quibusdam veritatis.</Cards>
      <Cards>Lorem ipsum dolor sit amet consectetur adipisicingm vitae culpa perferendis incidunt nulla! Qui illo molestias magni nisi!</Cards>
      <Cards>Lorem ipsum dolor sit amet consectetur adipisicing elit. facilis molestiae aspernatur vitae dolor?</Cards>
      <Cards>Lorem ipsum dolor sit amet consectetur adipisicing elit. </Cards>
    </div>
    </div>

   <aside class="left">Aside1</aside>
   <aside class="right">Aside2</aside>
    </div>
   <footer>Footer</footer>
</section>    
  );
}

export default App;

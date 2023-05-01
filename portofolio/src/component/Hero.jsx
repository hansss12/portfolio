import { Link } from "react-router-dom"

export default function Hero({ type }) {
  const but = type == 'home' ? <Link to={'/portfolio'} className="btn btn-accent">Get Started</Link> : ''
  return (
    <>
      <div className="hero min-h-screen" style={{ backgroundImage: `url("https://www.karier.mu/blog/wp-content/uploads/2021/12/programmin-990x500.jpg")` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">{type == 'home' ? 'Welcome' : type == 'about' ? 'My Profile' : 'My Projects'}</h1>
            <p className="mb-5">Hello there welcome to my personal website you can see biography and my project with details and screenshot{type == 'home' ? ' you can see my portfolio by clicking this button below!' : '.'}</p>
            {but}
          </div>
        </div>
      </div>
    </>
  )
}
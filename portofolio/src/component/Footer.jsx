export default function Footer() {
  return (
      <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
          <div className="grid grid-flow-col gap-4">
              <p>This portfolio has made with</p>
          </div>
          <div>
              <div className="grid grid-flow-col gap-10">
                  <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png"
                      alt=""
                      className="w-10 h-10"
                  />
                  <img
                      src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/tailwind-css-icon.png"
                      alt=""
                      className="w-20 h-10"
                  />
                  <img
                      src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
                      alt=""
                      className="w-15 h-10"
                  />
              </div>
          </div>
          <div>
              <p>
                  Copyright © 2023 - All right reserved by Raihan Aqil Fadillah
                  HCK-56
              </p>
          </div>
      </footer>
  )
}
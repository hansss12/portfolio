import home1 from '../../assets/netflix/homepage.jpg'
import p1img1 from '../../assets/netflix/movie.jpg'
import p1img2 from '../../assets/netflix/detail.jpg'
import p1img3 from '../../assets/netflix/movies.jpg'
import p1img4 from '../../assets/netflix/payment.jpg'


import home2 from '../../assets/cfcCust/home.png'
import p2img1 from '../../assets/cfcCust/menu.png'
import p2img2 from '../../assets/cfcCust/detail.png'
import p2img3 from '../../assets/cfcCust/detail2.png'

import home3 from '../../assets/cfcAdmin/login.png'
import p3img1 from '../../assets/cfcAdmin/dashboard.png'
import p3img2 from '../../assets/cfcAdmin/list.png'
import p3img3 from '../../assets/cfcAdmin/edit.png'
import p3img4 from '../../assets/cfcAdmin/add.png'

const defaultValue = [
  {
    id: 1,
    name: 'Netflix',
    image: home1,
    addImg: [
      {
        name: "Movie",
        image: p1img1,
        desc: "This page show the list of movie in my project"
      }, 
      {
        name: "Detail Movie",
        image: p1img2,
        desc: "This page show the Detail of movie in my project"
      }, 
      {
        name: "Movie",
        image: p1img3,
        desc: "This page show the list of movie in my project"
      }, 
      {
        name: "Movie",
        image: p1img4,
        desc: "This page show the payment user should insert his card for the membership"
      }
    ],
    description: 'This is my netflix clone project references from neflix the reason why i make this project is because i always watch netfix and i decided to make a clone from it',
    usage: [
      {
        name: 'Vue',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png'
      }, 
      {
        name: 'Tailwind',
        logo: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/tailwind-css-icon.png'
      },
      {
        name:'JS',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png'
      },
      {
        name: 'Node JS',
        logo: 'https://www.ruhidesain.com/wp-content/uploads/2017/10/nodejs-logo-e1497443346889.png'
      }
    ],
    link: `My netflix project doesn't have link for now because i always got copyright`,
    features: ["Payment with Midtrans", "Membership", "Show Trailer", "Wishlist Features" ]
  },
  {
    id: 2,
    name: 'CFC Clone',
    image: home2,
    addImg: [
      {
        name: "Home Screen",
        image: home2,
        desc: "This page show the home pages with promotion"
      }, 
      {
        name: "Home with menu's",
        image: p2img1,
        desc: "This page show the home pages with list of menu's"
      }, 
      {
        name: "Detail",
        image: p2img2,
        desc: "This page show the detail of menu's"
      }, 
      {
        name: "Detail 2",
        image: p2img3,
        desc: "This page show the detail of menu's"
      }
    ],
    description: 'This is my cfc clone project references from cfc the reason why i make this project is because i like a chicken from cfc and this is my task from hacktiv8 phase 3',
    usage: [
      {
        name: 'React',
        logo: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png'
      },
      {
        name: 'Tailwind',
        logo: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/tailwind-css-icon.png'
      },
      {
        name: 'JS',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png'
      },
      {
        name: 'Node JS',
        logo: 'https://www.ruhidesain.com/wp-content/uploads/2017/10/nodejs-logo-e1497443346889.png'
      }
    ],
    link: 'https://cfc-clone-customer.web.app',
    features: ["Show all menu", "Show Detail to cust"]
  },
  {
    id: 3,
    name: 'CFC Admin',
    image: home3,
    addImg: [
    {
      name: "Login",
      image: home3,
      desc: "This page show the login using the jwt token for the login"
    },
    {
      name: "Dashboard",
      image: p3img1,
      desc: "This page show the Dashboard of all menu and category"
    }, 
    {
      name: "List Menu's",
      image: p3img2,
      desc: "This page show thw list of menu's in this page admin can add and edit"
    },
    {
      name: "Add Menu's",
      image: p3img4,
      desc: "This page show the form for add the menu's"
    }, 
    {
      name: "Edit Menu's",
      image: p3img3,
      desc: "This page show the form for edit the menu's"
    }
    ],
    description: 'This is my cfc admin project references from cfc the reason why i make this project is because i like a chicken from cfc and this is my task from hacktiv8 phase 3 with this admin side we can configurate the customer side',
    usage: [
      {
        name: 'React',
        logo: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png'
      },
      {
        name: 'Tailwind',
        logo: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/tailwind-css-icon.png'
      },
      {
        name: 'JS',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png'
      },
      {
        name: 'Node JS',
        logo: 'https://www.ruhidesain.com/wp-content/uploads/2017/10/nodejs-logo-e1497443346889.png'
      }
    ],
    link: 'https://cfc-clone-admin.web.app',
    features: ["Admin side for cfc clone", "Adding sequelize transaction in add feature ", "Add menu and category", "Edit menu and category"]
  }
]



export function counterReducer(state = defaultValue, action) {
  switch (action.type) {
      case 'portFolio/fetchSuccess':
          return { portFolio: action.payload }
      default:
          return state
  }
}

## Step 1 Create project
```bash
    npm create vite .
    npm install
    npm run dev
```

## Step 2 push project to github
```bash
git init

git add .
git commit -m "init"
git push
```

### When updated code
```bash
    git add .
    git commit -m "init"
    git push
```
## Step 3 install React Router
```bash
npm i react-router
```

```jsx

import { Link, Links, Route,Routes } from 'react-router'
import MainNav from '../components/MainNav'
import Layouts from '../Layouts/Layouts'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Login from '../pages/Login'
import Register from '../pages/Register'

function AppRoutes() {
  return (
    <div>
      
      <Routes>
        {/* Public */}
        <Route path="/" element={<Layouts/>}>
          <Route index element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="register" element={<Register/>}/>
        </Route>

        {/* Private */}
        <Route path="admin" element={<Layouts/>}>
          <Route index element={<h1>Dashboard page</h1>}/>
          <Route path="manage" element={<h1>Manage page</h1>}/>
          <Route path="setting" element={<h1>Setting page</h1>}/>
        </Route>
        
      </Routes>
    </div>
  )
}

export default AppRoutes
```
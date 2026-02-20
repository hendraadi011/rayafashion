import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LayoutPage from '../Layouts/LayoutPage'
import HomePage from '../views/Web/Home/Index'

export default function RoutesIndex() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutPage />}>
          <Route path='/' element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

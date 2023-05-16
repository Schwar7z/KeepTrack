import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Overview from './pages/overview/Overview'
import Widgets from './pages/widgets/Widgets'
import Settings from './pages/settings/Settings'

let router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				index: true,
				element: <Overview />
			},
			{
				path: "widgets",
				element: <Widgets />
			},
			{
				path: "settings",
				element: <Settings />
			}
		]
	}
])

const root = ReactDOM.createRoot( document.getElementById( 'root' ) )
root.render(
	<React.StrictMode>
		<div className='bg-light'>
			<RouterProvider router={ router } />
		</div>
	</React.StrictMode>
)

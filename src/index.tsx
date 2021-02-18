import {render } from 'react-dom';
import * as React from 'react';
import Editor from './components/editor/'
const App = ()=>{
	return <div>
	<h1>
		Hello
	</h1>
	<Editor 
	initialValue="heloo"
	onChange={(value)=>{}} />
	</div>
}

render(<App />,document.querySelector('#root'));
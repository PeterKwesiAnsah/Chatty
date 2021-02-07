import React from 'react';
import Landing from './components/Landing';
import Steps from './components/Steps'
import Aftersteps from './components/Aftersteps'
import Footer from './components/Footer'

const Home = () => {
	return (
		<>
			<Landing></Landing>
			<Steps></Steps>
			<Aftersteps></Aftersteps>
			<Footer></Footer>
		</>
	);
};

export default Home;

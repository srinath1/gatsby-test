import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import Head from '../components/head';
const AboutPage = () => {
	return (
		<Layout>
			<Head title="about" />
			<h1>About</h1>
			<p>Teaching</p>
			<p>
				<Link to="/contact">Please contact me</Link>
			</p>
		</Layout>
	);
};
export default AboutPage;

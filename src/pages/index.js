import React from 'react';
import { Link } from 'gatsby';
//import Footer from '../components/Footer';
//import Header from '../components/Header';
import Layout from '../components/Layout';
import Head from '../components/head';
const IndexPage = () => {
	return (
		<Layout>
			<Head title="Home" />
			<h3>Hello.</h3>
			<h2>Srinath,from CPH</h2>

			<p>
				Please contact me <Link to="/contact">You can contact me</Link>
			</p>
		</Layout>
	);
};

export default IndexPage;

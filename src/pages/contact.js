import React from 'react';
import Layout from '../components/Layout';
import Head from '../components/head';
const ContactPage = () => {
	return (
		<Layout>
			<Head title="contact" />
			<h1>Contact</h1>
			<p>The best way to reach me</p>
			<p>
				Reach me at{' '}
				<a href="https://google.com" target="_blank">
					Google
				</a>
			</p>
		</Layout>
	);
};
export default ContactPage;

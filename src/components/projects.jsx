import React from 'react';
import ReactDOM from 'react-dom';

const Projects = () => {
	return (
		<section className="section">
			<h2>Personal Projects</h2>
			<div className="flex">
				<article className="flex-item">
					<h3>
						DevOps Library <small className="date">2016 - Present</small>
					</h3>
					<p>
						Founded the "DevOps Library", providing free videos & courses for everyone in the DevOps 
						community, as well hosting an annual conference.  Over 300,000 watches on YouTube<br/>
						<a href="https://www.devopslibrary.com">https://www.devopslibrary.com</a>
					</p> 
					<div className="tags">
						<span className="tag-item">Jenkins</span>
						<span className="tag-item">SaltStack</span>
						<span className="tag-item">DevOps</span>
						<span className="tag-item">Vagrant</span>
						<span className="tag-item">ELK</span>
						<span className="tag-item">PowerShell</span>
					</div>
				</article>
				<article className="flex-item">
					<h3>
						Learning Sensu - Setting Up, Scaling, and Mastering DevOps Monitoring <small className="date">2015</small>
					</h3>
					<p>
						Video Course published through O'Reilly on monitoring with Sensu.  <a href="http://shop.oreilly.com/product/0636920044529.do">http://shop.oreilly.com/product/0636920044529.do</a>
					</p>
					<div className="tags">
						<span className="tag-item">Sensu</span>
						<span className="tag-item">Monitoring</span>
					</div>
				</article>
			</div>
		</section>
	);
};

export default Projects;

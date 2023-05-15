import React from "react";

const Projects = () => {
	return (
		<section className="section">
			<h2>Personal Projects</h2>
			<div className="flex">
				<article className="flex-item">
					<h3>
						Dialogue Smith
					</h3>
					<small className="date">2022 - Present</small>
					<p>
						Game dialog generator and API for RPGs, built in partnership with two other AI/game developers, leveraging GPT (text-davinci-003), NestJS, and Pinecone (Vector DB). 
						<br />
						<a href="https://dialoguesmith.com">
						https://dialoguesmith.com
						</a>
					</p>
					<div className="tags">
						<span className="tag-item">LLM</span>
						<span className="tag-item">GPT</span>
						<span className="tag-item">text-davinci-003</span>
						<span className="tag-item">NestJS</span>
						<span className="tag-item">Pinecone</span>
						<span className="tag-item">Vector DB</span>
					</div>
				</article>
				<article className="flex-item">
					<h3>
						DevOps Library
					</h3>
					<small className="date">2016 - Present</small>
					<p>
						Founded the "DevOps Library", providing free videos & courses for
						everyone in the DevOps community, as well hosting an annual
						conference. Over 300,000 watches on YouTube
						<br />
						<a href="https://www.devopslibrary.com">
							https://www.devopslibrary.com
						</a>
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
						Learning Sensu - Setting Up, Scaling, and Mastering DevOps Monitoring				
					</h3>
					<small className="date">2015</small>
					<p>
						Video Course published through O'Reilly on monitoring with Sensu.{" "}
						<a href="http://shop.oreilly.com/product/0636920044529.do">
							http://shop.oreilly.com/product/0636920044529.do
						</a>
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

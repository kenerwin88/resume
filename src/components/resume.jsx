import React from "react";
import Experience from "./experience.jsx";
import Education from "./education.jsx";
import Projects from "./projects.jsx";
import Certifications from "./certifications";

const STORE_KEY = "USE_DARK_MODE";

class Resume extends React.Component {
	state = {
		checkedInput: false,
	};

	componentWillMount() {
		if (typeof localStorage !== "undefined") {
			const checked = localStorage.getItem(STORE_KEY) || false;
			this.setState({ checkedInput: JSON.parse(checked) });
		}
	}

	handleToggle = () => {
		if (typeof localStorage !== "undefined") {
			const checkedInput = !this.state.checkedInput;
			localStorage.setItem(STORE_KEY, checkedInput);
			this.setState({ checkedInput });
		}
	};

	render() {
		return (
			<div
				id="wrapper"
				className={this.state.checkedInput ? "dark-theme" : "default-theme"}
			>
				<section className="controls">
					<div className="toggle-theme">
						<i className="mdi mdi-24px mdi-white-balance-sunny" />
						<label className="switch">
							<input
								checked={this.state.checkedInput}
								onChange={this.handleToggle}
								type="checkbox"
							/>
							<span className="slider" />
						</label>
						<i className="mdi mdi-24px mdi-weather-night" />
					</div>
				</section>
				<main className="sheet">
					<section className="flex head">
						<div className="flex-item">
							<h1>Ken Erwin</h1>
						</div>
						<div className="flex-item">
						</div>
					</section>
					<section className="flex contact">
						<span className="flex-item">
							<a className="contact-item" href="https://www.devopslibrary.com">
								<i className="mdi mdi-earth" />
								&nbsp;https://www.devopslibrary.com
							</a>
						</span>
						<span className="flex-item">
							<a className="contact-item" href="mailto:ken@devopslibrary.com">
								<i className="mdi mdi-gmail" />
								&nbsp;ken@devopslibrary.com
							</a>
						</span>
						<span className="flex-item">
							<a
								className="contact-item"
								href="https://github.com/devopslibrary"
							>
								<i className="mdi mdi-github-circle" />
								&nbsp;/devopslibrary
							</a>
						</span>
						<span className="flex-item">
							<a
								className="contact-item"
								href="https://www.linkedin.com/in/kenerwin88/"
							>
								<i className="mdi mdi-linkedin-box" />
								&nbsp;/kenerwin88
							</a>
						</span>
					</section>
					<section className="pitch">
						<p>
							Proven, resourceful engineering visionary with extensive
							experience architecting, developing, and delivering solutions at
							every level of the technology stack. Founder of the DevOps
							Library, with experience leading projects and mentoring. Known for
							working across team boundaries to deliver business value.
							Personable team player, with a passion for excelling in constantly
							evolving environments.
						</p>
						<p>
							<br />
							<b>Specialties:</b>
						</p>
						<table border="1">
							<tr>
								<td>
									<ul>
										<li>Technical Strategy and Roadmap</li>
										<li>Hiring, Mentoring, Growth, Retention of Talent</li>
										<li>Microservices at Scale</li>
										<li>DevOps Culture & Tools</li>
										<li>Configuration Management</li>
										<li>Continuous Integration and Delivery</li>
										<li>Highly-Available Architecture</li>
									</ul>
								</td>
								<td>
									<ul>
										<li>Agile Methodologies</li>
										<li>NoSQL & SQL Databases</li>
										<li>Immutable Infrastructure</li>
										<li>Kubernetes</li>
										<li>IaaS, PaaS</li>
										<li>Open Source Tools</li>
										<li>Performance Monitoring</li>
									</ul>
								</td>
							</tr>
						</table>
					</section>
					<Experience />
					<Education />
					<Projects />
					<Certifications />
				</main>
			</div>
		);
	}
}

export default Resume;

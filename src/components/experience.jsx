import React from 'react';
import ReactDOM from 'react-dom';

const Experience = () => {
	return (
		<section className="section">
			<h2>Relevant Experience</h2>
			<div className="flex">
				<article className="flex-item">
					<h3>
						Senior Manager of Automation @ Salesforce <small className="date">Dec 2016 - Present</small>
					</h3>
					<p>
						Leading Infrastructure & Development automation efforts across Salesforce, through declarative data, configuration management, and continuous integration.
					</p>
					<br/>
					<p><b>Accomplishments:</b></p>
					<ul>
						<li>Built & managed a team of 9 rockstar direct reports, as well as providing tools and guidance for all other infrastructure teams.</li>
						<li>Architected & Implemented Jenkins for all teams to consume (used for automated testing, continuous integration, and declarative data pipelines).</li>
						<li>Automated deployment of physical SQL clusters, deploying over 400 in a few hours. (automated iLO, BIOS configuration, IPs reserved in IPAM, NICs teamed & tagged, WWNs gathered for storage, OS deployed, patched (including firmware), configured via Chef, clustered, LUNs mounted, & SQL installed.)</li>
						<li>Declarative Data - Under my direction, my team created a declarative data REST API. All of the data within is generated automatically, & is automatically validated. This was the first declarative data initiative within Salesforce MC, and has served as an early model for other teams looking to adopt declarative data.</li>
						<li>Standardized Images - Used Packer to automate the creation of a standard set of OS images, with an identical image created for deploying to VMware, Virtualbox, and MAAS (for physical deployments). This has made it possible to quickly iterate and test on the exact same image that’s deployed in all 3 scenarios. Our Server 2016 image is now the 4th most popularimage for Vagrant on Atlas.</li>
						<li>Automated deployment of application servers utilizing Chef for configuration management & Terraform for provisioning.</li>
						<li>Automated network VIP creation & management of F5 pools.</li>
						<li>Converted run-books of 50 server types to Chef cookbooks.</li>
						<li>Fleet Management reporting (using Splunk & Chef for metrics gathered within a ~30 minute interval across 30,000+ servers).</li>
						<li>Created REST API for declarative data, used to simplify and automate builds across OS, storage, networking, and application teams.</li>
						<li>Chef release pipeline</li>
					</ul>
					<div className="tags">
						<span className="tag-item">Chef</span>
						<span className="tag-item">Jenkins</span>
						<span className="tag-item">Packer</span>
						<span className="tag-item">SQL</span>
						<span className="tag-item">Network Automation</span>
					</div>
					<div className="tags">
						<span className="tag-item">Splunk</span>
						<span className="tag-item">Declarative Data</span>
						<span className="tag-item">F5 Load Balancers</span>
					</div>
				</article>
				<article className="flex-item">
					<h3>
						Senior Automation Engineer & Python Developer @ KinneyGroup<small className="date">Nov 2015 - Dec 2016</small>
					</h3>
					<ul>
						<li>Architected & Implemented Disaster Recovery solution (4000+ VDI VMs) for client (Total recovery time under 8 hours).</li>
						<li>Worked full time as a Python developer for several months on a custom application for a client.</li>
						<li>Developed and Implemented automated testing (Through Jenkins, Bitbucket, PyTest, PyTest-BDD, and CasperJS)</li>
						<li>Managed internal Stash environment, later migrating to Bitbucket.</li>
						<li>Automated Developer environments using Docker, and set up RancherOS PoC.</li>
						<li>Implemented CI Pipelines for various projects.</li>
						<li>Automated VMware server provisioning using Terraform, & PowerCLI.</li>
						<li>Developed Puppet modules for automating application configuration, as well as applying STIGS to harden servers and applications.</li>
						<li>Designed and rebuilt lab in cloud (SoftLayer), managed hybrid VMware Cloud.</li>
						<li>Developed blueprints & automation around VMware vRealize Suite (Orchestrator, vCAC, Ops Manager, custom PowerCLI etc.)</li>
						<li>Implemented basic ChatOps functionality using Hubot & Jenkins.</li>
						<li>Trained team members on various technology topics (including automated testing, Docker, Puppet, and Jenkins).</li>
					</ul>
				</article>
			</div>
			<div className="flex">
				<article className="flex-item">
					<h3>
						Senior Automation Engineer @ Nephila Advisors <small className="date">Apr 2015 - Oct 2015</small>
					</h3>
					<ul>
						<li>Created and maintained Puppet environment (Primarily Windows, using R10K & The Foreman).</li>
						<li>Storage Automation (Using PowerShell to interact with 3PAR SSH & REST APIs).</li>
						<li>Jenkins Administrator (Setup and Maintained).</li>
						<li>Octopus Deploy Administrator (Setup and Maintained).</li>
						<li>Atlassian Stack Administrator (JIRA, Confluence)</li>
						<li>Extensive JIRA Configuration, including JEMH, custom workflows, and dashboards.</li>
						<li>VMware Automation (PowerCLI, for ESXi 6.0U1 environment)</li>
						<li>Cisco UCS Automation (PowerShell PowerTools)</li>
					</ul>
				</article>
				<article className="flex-item">
					<h3>
						Senior DevOps Developer @ Interactive Intelligence<small className="date">May 2014 - Mar 2015</small>
					</h3>
					<p>Remote/Onsite consulting for tools & apps owned by small and medium scale businesses. Built & maintained over 15+ projects for happy clients.</p>
					<ul>
						<li>Created and actively maintained the largest production Windows Chef environment in the world.</li>
						<li>Lead developer on Openstack initiative for CaaS, a multi-million dollar project to replace hundreds of HP blades running Hyper-V with Openstack (Icehouse) on white box hardware. Estimated to save Interactive 2/3rds on future hardware purchases.</li>
						<li>On team responsible for ensuring platform is highly available, scalable, and cost effective.</li>
					</ul>
				</article>
			</div>
			<div className="flex">
				<article className="flex-item">
					<h3>
						Senior DevOps Engineer<small className="date">Sep 2013 - May 2014</small>
					</h3>
					<ul>
						<li>Designed and implemented a dramatically improved production deployment process, reducing code deploy time from 3 hours to under 2 minutes, while eliminating downtime. This led to an interview with BitTorrent featured here: http://www.youtube.com/watch?v=yEriQW2evy4&feature=youtu.be</li>
						<li>Managed several hundred Windows and Linux servers, (Blades, VMs, and AWS instances).</li>
						<li>Created various tools to improve company efficiency, all of which are in active use at Angie’s List:</li>
						<li>Deployment Tool written in PowerShell, utilizing the Bittorrent Sync API. This also drastically reduced the complexity of deployments, with training for new employees previously taking roughly a month, new engineers are now able to understand the deployment process within hours.</li>
						<li>EC2 Management Tools (For managing and monitoring .NET services on auto scaled instances).</li>
						<li>Mass IIS Management Tool – For cycling IIS, Application pools, clearing folders, etc. on every server simultaneously.</li>
						<li>Combination of MDT images and PowerShell scripts to fully configure web servers.</li>
						<li>F5 Load Balancer Tool (Created an easier GUI for management of servers)</li>
						<li>Environment Status App (Written in PHP -- allows everyone to see the status of a given environment at any time, as well as tracking deployments/versions.</li>
						<li>Release Project Management Tool – Used for tracking releases from development to production, in order to identify slow points and current status of packages.</li>
						<li>Server Status & Performance App – Similar to Gomez, but specific to each server. Written in PHP and Powershell. </li>
						<li>Set up a Puppet Master for configuring developer environments on Windows utilizing Chocolatey (Like Apt-Get but for Windows).</li>
						<li>Rebuilt production servers from the ground up, automating as much as possible.</li>
						<li>Fully automated UAT Deployment.</li>
						<li>Actively monitored server status with (and managed) a variety of tools, including Gomez, New Relic, Orion, Nagios, Zabbix, and custom scripts.</li>
						<li>Maintained massive MS SQL and MySQL databases.</li>
					</ul>
				</article>
			</div>
		</section>
	);
};

export default Experience;

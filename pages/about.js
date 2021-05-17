import React, { useEffect } from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import PageLayout from "../components/layouts/PageLayout";
import { Row, Col } from "react-bootstrap";

export default function about() {
	return (
		<BaseLayout>
			<PageLayout>
				<Row> <h1 className="title">What is it all about?</h1></Row>
				<Row className="mt-8">
					<Col md="6" className="about-col">
						<div className="left-side">
							
							<h4 className="subtitle"></h4>
							<p className="subsubTitle"> </p>
							<h5>Community event, huh?</h5>
							<p>
								A community event run by group of people passionate about technology and learning for anyone of any background and
								any knowledge level, interested in a particular topic, to take part.
								For ByteSize this means all aspects of software development and system operations;
								from coding websites and programs, to deploying your creation on the cloud.
								Our events are free to attend and are organised and lead by individuals within the tech industry.
							</p>
							<h5>What is in it for me?</h5>
							<p>
							    Code, community and potentially a career in Tech.
							    Unfortunately there isn't any certificates available at the end. We host events to teach
							    eager individuals the tech which is widely used or important in the industry and tech which is just neat to use.

							    We won't deny that there are other avenues to learn how to code and to gain a job in the industry,
							    however that isn't what we are aiming for. This isn't a bootcamp. It is a community of individuals
							    eager to learn and share all aspects of development, in an inclusive, open and free environment.
							</p>
						</div>
					</Col>
					<Col md="6" className="about-col">
					<p className="subsubTitle"> </p>
						<div className="about">
							
							<h5>How does it work?</h5>
							<p>
							    We host live events otherwise known as meet ups one per month.
							    Every 2nd Tuesday of the month to be exact.
							    Each session gives focuses on a different topis - whether this would be Introduction 
								to React, API or Python. We give short theretical introduction to the topic and then 
								focus on live coding - we belive in learning by building things!
							    
								We host our live session on both YouTube and Twitch and we also have a Discord channel where 
								you can ask any questions related to programming or starting career in tech - make sure to join our 
								discord channel over <a href="https://discord.com/invite/FycPvf6W3e"> here</a>.
					
							</p>
							
							<h5>Where do I sign up?</h5>
							<p>
								We post all our events on Eventbrite, to help us gauge the numbers of attendees.
								You can find all of our events listed <a href="https://www.eventbrite.co.uk/o/bytesize-31554287601">here.</a>
								<br></br>
								See you at the next event :)
							</p>
							<h5>All of this wouldnt be possible without support from our sponsor <a className="iw-link" href="https://infinityworks.com/">Infinity Works. Part of Accenture</a> - make sure to check
							our their website and their <a href="https://infinityworks.com/academy/"> Academy.</a> </h5>
						</div>
					</Col>
				</Row>
			</PageLayout>
		</BaseLayout>
	);
}

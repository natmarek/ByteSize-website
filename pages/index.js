import BaseLayout from "../components/layouts/BaseLayout";
import { Container, Row, Col, Jumbotron, Button } from "react-bootstrap";
import Image from "next/image";

export default function Home() {
	return (
		<BaseLayout>
			<Container className="cover" >
				<Jumbotron fluid className="jumbotron-index" bsPrefix>
					<h1>Seeking all things development</h1>
					<p>
						ByteSize is a community event for adults whom are eager to learn how to code,
						develop website & programs or looking for a career in tech.<br></br>
						Based in Leeds, United Kingdom, accessible globally. We hold sessions on key tech
						topics to aid you in your learning.
					</p>
					<p>
						<Button variant="primary" href="/about">
							Tell me more please
						</Button>
					</p>
				</Jumbotron>

				<Row className="justify-content-md-center">
					<Col md="auto">
						<img
							className="hero"
							src="/images/aboutus.png"
							alt="Drawing of a person using laptop"
							width={500}
							height={400}
							sizes="(max-width: 900px) 50px"
						/>
					</Col>
				</Row>
			</Container>
		</BaseLayout>
	);
}

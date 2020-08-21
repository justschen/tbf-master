import React from 'react';
import { Link } from '@reach/router';

import '../../css/Blog.scss';
import AboutHeader from '../../img/aboutUsJPG.JPG';
import Header from '../A-WebElements/Header';
import Footer from '../A-WebElements/Footer';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const RandPaul = () => {
	return (
		<div className="conversations">
			<Header name="blog" />
			<Container fluid className="blog-content">
				<div className="header-feng">
					<h2>CRISPR Pioneer Feng Zhang at the Berkeley Forum</h2>
				</div>

				<Row>
					<p className="italics">
						Professor Feng Zhang appeared at the Berkeley Forum on March 1,
						2017. Professor Zhang’s talk focused on how the powerful CRISPR-cas9
						technology was developed, the ways in which genome editing will
						transform the world, and the human impact of capitalizing on
						nature’s diversity. The event was moderated by Michael Chien.
					</p>
				</Row>
				<Row>
					<p>
						<strong>Michael Chien</strong>: Professor Zhang, thank you so much
						for taking the time to speak with us here today. I want to begin
						with a topic that has gained national media attention but has been
						especially discussed here on UC Berkeley’s campus over the last
						month, and that’s the relationship between your work and that of
						Professor Jennifer Doudna’s. Last month, the US Patent and Trademark
						Office upheld the validity of the Broad Institute’s patent on your
						research and found no interference, in fact, with UC Berkeley’s,
						which is still pending. What do you see as the main differences
						between your work on CRISPR technology and that of Professor
						Doudna’s?
					</p>
				</Row>
				<Row>
					<p>
						<strong>Feng Zhang</strong>: Thank you for your question. This is a
						good question. So, my understanding is that, we have our patent, and
						Berkeley will be issued its patent, and so, we’ll all have patents.
						There will be patents , which is fantastic for the world. And the
						thing is, there’s really been a tremendous amount of contribution
						from many different groups. It’s great to see that the different
						contributions getting rewarded and through these different
						mechanisms, and I think it’s really great that all these work will
						be recognized.
					</p>
				</Row>
				<Row>
					<p>
						<strong>Michael Chien</strong>: Well, the patent awarded to the
						Broad Institute last month covers the use of CRISPR-cas9 technology
						in eukaryotic environments, but other patents have been submitted
						for use in technology in other environments, like UC Berkeley’s.
						That being said, there are still other institutions, as you
						mentioned, doing their own original research on CRISPR. So, how do
						you think the differences in domain of all these patents, that will
						eventually be filed, affect every institution’s licensing potential?
					</p>
				</Row>
				<Row>
					<p>
						<strong>Feng Zhang</strong>: There are different contributions to
						the field. And so these patents will reward or honor these different
						contributions. And I think they will do it appropriately so. In
						terms of licensing, one thing that we have been doing so far, is to
						make sure that the technology is accessible. In fact, that’s
						something we have been trying to do for many years now, and we’re
						going to be able to continue to do that, especially with this patent
						decision. The technology is a fundamental, foundational technology.
						So, we want to make sure that as many people have access to that as
						possible. So, MIT and the Broad Institute have been adopting a
						non-exclusive licensing approach. So, any party, academics, can use
						it freely. Commercial entities can have a nonexclusive license. That
						doesn’t preclude anybody else from doing it. I think that’s the way
						that we should approach these kinds of technologies. Make it
						accessible. Do not stifle progress, and really enabling as many
						people as possible.
					</p>
				</Row>
				<Row>
					<p>
						<strong>Michael Chien</strong>: You spoke very thoroughly about how
						the methodology of your research, and I want to focus a little bit
						more on the ideation process and the potential applications. As you
						mentioned, the CRISPR-cas9 system was originally discovered in
						bacteria, in archaea, which use it to develop immunity through
						storing the genetic signature of viruses that previously attacked
						it. How did you initially make that connection that this system
						might be modified for the purpose of gene editing in other
						organisms?
					</p>
				</Row>
				<Row>
					<p>
						<strong>Feng Zhang</strong>: So, I had been working on genome
						editing for a while before I started work on the CRISPR-cas9 system.
						So, there were earlier generations, like I showed on slides, there’s
						sometimes meganucleases. So, when I was a graduate student at
						Stanford, at one time I worked on optogenetics. So optogenetics has
						three needs that I needed to solve. The first is, how do you get
						neurons to become light sensitive? And that was done by developing
						these microbial opsin proteins so that we can express the neurons to
						confer light sensitivity. The second challenge was, how do you
						deliver light into the brain when the skull is opaque? So, if you
						just shine light the frontal skull, it doesn’t work. So, then I
						developed a way to use optical fibers to implant into a specific
						brain region, and then be able to see into the cells. The third one
						is, how do you get the opsins to express in a specific group of
						cells, not any kind of neuron, only a subset of neurons. So, as a
						graduate student I had developed a ton of different methods to do
						that using either viral vectors or using a crude recombinant system
						with CRE Driver mice to get cell-specific expression. But I really
						wanted to get access to specific cell types in any kind of organism.
						Maybe eventually even human for clinical translation. So, when I
						thought about how to do that, one of the things that I thought about
						is to develop nucleuses to be able to cleave a specific promoter in
						the genome, that’s specific to a subtype cell, so that you can
						insert the opsin genes into that specific genomous region, so that
						is expressed only in the cell that we’re interested in, in the
						nuclei. When I started to work on CRISPR, after I left Stanford, I
						realized that these nucleuses are pretty challenging to use. And so
						that’s really problematic. And also, a lot of the reagents were not
						readily available at the time. So, it’s around that time that I
						started to read about other kinds of systems, and I stumbled upon a
						system called TALE. Transcription activator-like effector. It was in
						2010, it was just starting to become understood how TALE proteins
						are able to recognize DNA sequences. So, I worked on developing
						that, and so that turned out to be an efficient system to reprogram
						and recognize specific DNA sequences. So, I started my lab in the
						beginning of 2011, and I thought maybe I can start using TALE
						systems to study neurobiology. I can teach students to build them,
						and to be able to engineer specific cell types in the brain. But
						that turned out to be quite cumbersome. As I was teaching students
						to build TALEs, I realized that each TALE construction project is
						really a serious project on its own. And so, if we had to build
						these complicated systems, it is quite challenging. So, I started to
						think about, are there other systems that you can also use for
						reprogrammable genome editing? It was in the beginning of 2011 when
						I just started lab, that I went to a talk at the Broad Institute.
						Mike Gilmore was a professor there, and he had a talk on his work on
						Enterococcus bacteria. But he had casually mentioned that in
						Enterococcus he also find these CRISPR systems. And so, when I heard
						about CRISPR systems, I didn’t know what it was. And so, I went to
						try to look it up. When I started to look it up on Wikipedia, and
						also started to read some of the papers, I realized that this is an
						endonuclease. This is, furthermore, an RNA guided endonuclease. So,
						it’s also around that time that Sylvain Moineau from the Laval
						University in Canada, had published a paper in Nature showing that
						the cas9 system is an RNA guided single nucleus that can make a
						double strand breaks inside the bacterial cells. When I saw that, I
						got really excited. I thought…there’s this new system CRISPR-cas9
						that maybe you can harness to be able to reprogram by just giving it
						a short RNA guide. And so that’s how the idea started. If I wasn’t
						thinking about genome editing of nucleuses before, when I heard that
						talk in the beginning of 2011, I probably wouldn’t have realized the
						potential.
					</p>
				</Row>
				<Row>
					<p>
						<strong>Michael Chien</strong>: Well the progression of your
						research, from not only your graduate schooling but all the way up
						until now, has shown immense potential for really curing diseases.
						That being said, there are a lot of ethical implications of this
						kind of technology. In 2015, researchers at Sun Yat-Sen University
						in China used CRISPR-cas9 technology to edit the genomes of human
						embryos, which result in genetic changes that are potentially
						heritable. As a result of your now successful patent, the Broad
						Institute has the ability to restrict ethically controversial
						applications of this technology. How does the Institute really come
						to decide what types of regulations should be enforced when
						licensing that technology?
					</p>
				</Row>
				<Row>
					<p>
						<strong>Feng Zhang</strong>: You must have read the licensing
						statement from the Broad Institute. So, one of the things that the
						Broad does not provide license for is germline self-editing, exactly
						because the controversial issue that’s surrounding the technology.
						The other thing that it doesn’t provide license for is the
						production of survival. So, things that have known health
						consequences for humans. So, the ethical issues surrounding germline
						editing is a very important issue. And that’s something that has
						been highlighted and also thoroughly discussed. And I think it’s
						something that we really need to pay serious attention to, to make
						sure that we are really thinking and understanding these problems
						and doing our best to try to think about ways to be able to move
						forward.
					</p>
				</Row>
				<Row>
					<p>
						<strong>Michael Chien</strong>: Speaking of that licensing agreement
						though, part of the complicated nature of licensing is the disparity
						in size and intent of all the private companies involved. And so,
						the Broad Institute has already licensed the technology to Monsanto,
						one of the world’s largest agricultural conglomerates. And UC
						Berkeley has partnered with Dupont Pioneer, a subsidiary of the
						chemical giant Dupont. Do academic research institutions forfeit
						autonomy over the direction of their technology’s use when they
						allow large corporations to use that technology for financial gain?
					</p>
				</Row>
				<Row>
					<p>
						<strong>Feng Zhang</strong>: I think that the most important thing
						is to make sure that foundational technology, like CRISPR-cas9, are
						broadly distributed. We enable as many people as possible so let
						1,000 flowers bloom. So many people have created ideas, but each one
						of them not be limited by what they can do, but really enable them
						with all these tools. Broad has licensed to many different companies
						– we have distributed this to 2,100 laboratories around the world,
						really trying to enable as many people as possible so then they have
						access to this tool to be able to do what they want to do.
					</p>
				</Row>
				<Row>
					<p>
						<strong>Michael Chien</strong>: In line with that method of
						thinking, you’ve also co-founded a company, Editas Medicine, a
						startup dedicated to using CRISPR for gene therapy. Is there a clear
						delineation between what applications of CRISPR are best suited for
						the academic environment versus, say, a corporate research
						environment?
					</p>
				</Row>
				<Row>
					<p>
						<strong>Feng Zhang</strong>: I think it’s really great that many
						groups are actively developing the CRISPR applications. There are
						things that are developing in clinics by academics, things that are
						developed for a clinical application by commercial groups. I think
						it’s really great that many people are so excited about this and
						developing this to its maximum potential. There are a lot of
						challenges that we still face today with these genome editing tools.
						We need to understand how efficacious it is, how safe it is. Does it
						cause a neurogenic effect when you put it into the body? So, the
						more groups that work on it, I think, the better. There are enormous
						challenges, and fundamentally, the way that I got excited about the
						research partly was motivated by a friend who was sick. I think it’s
						really important that we keep that in mind. The quicker that we can
						get to these health solutions, to actually impact the lives of the
						patients, the better. So, I think the more groups really, the better
						for the world.
					</p>
				</Row>
				<Row>
					<p>
						<strong>Michael Chien</strong>: For the sake of time, this will be
						my last question before we turn things over to the audience. My last
						question really is about what you said, which is to solve health
						problems across the world. CRISPR-cas9 has become very notable for
						its potential. In your eyes, probably being one of these individuals
						closest to the technology, what do you think is the best-case
						scenario for curing diseases of all sorts as they impact across all
						lives in this world?
					</p>
				</Row>
				<Row>
					<p>
						<strong>Feng Zhang</strong>: I think CRISPR-cas9 is really just the
						beginning of molecular medicine. As we sequence the human genome
						more, we will understand genetic contribution to this much more.
						We’ll know the mechanisms of these problems a lot more clearly. And
						then all that will enable us to develop next generation medicine.
						CRISPR is also enabling researchers to accelerate their research.
						Drug companies can now screen and validate drugs with a fraction of
						the time that it used to take them. And all of these combined
						together I think is going to make a huge impact on the future of
						medicine.
					</p>
				</Row>
				<Row>
					<p>
						<strong>Audience Member</strong>: Hi Professor Zhang. I have a
						question regarding the C2c2 enzyme you mentioned just now. Did you
						observe any off targeted effect for the C2c2, and if there is any
						off target effect, how sensitive, or how specific it is for the RNA
						that you wanted to target?
					</p>
				</Row>
				<Row>
					<p>
						<strong>Feng Zhang</strong>: In some of [way, it’s] very similar to
						cas9 or Cpf1. The way you increase the number of these batches and
						then it becomes quite specific. And I think just like the way we’re
						able to engineer the cas9 to make it more specific by reducing
						non-specific interactions, we’ll push it out to be able to make C2c2
						even more specific.
					</p>
				</Row>
				<Row>
					<p>
						<strong>Audience Member</strong>: Hi Professor. You mentioned the
						great documentary, Jurassic Park. In a related note, I’d your
						thoughts on the work being done at the UC Santa Cruz and also at MIT
						by George Church on the resurrection of mammoths using CRISPR. What
						do you have to say about that?
					</p>
				</Row>
				<Row>
					<p>
						<strong>Feng Zhang</strong>: I think that’s pretty difficult to do.
						To say the least. I think there are a lot of ideas like this, and
						it’s thought provoking. But I think in practice, is actually pretty
						challenging to realize that.
					</p>
				</Row>
				<Row>
					<p>
						<strong>Audience Member</strong>: Hi Professor. My name is Mark. So,
						I actually currently work as a software engineer. I don’t have too
						much context around this, but I’m actually curious. So, I followed
						your collaborators, the Broad’s Ramnik Xavier. And in an age where
						autoimmune disease and a lot of chronic diseases, not just DNA the
						whole philosophy of nature versus nurture. What are your general
						thoughts on the microbiome and therapeutics within that area, and
						where you see things being malleable with regard to microbiome?
					</p>
				</Row>
				<Row>
					<p>
						<strong>Feng Zhang</strong>: I think microbiome is really an
						exciting area. There is actually a lot of really interesting
						research being done here in California that highlights the
						importance of micro biomes for a variety of different health
						consequences: Alzheimer’s disease or Parkinson’s disease, autism
						even. And we don’t know enough about what the interactions of
						microbiome in the body is. Is it entirely going through the immune
						system, or is it also direct interface with the nervous system in
						the body? I think it’s very exciting. And I think it’s a very
						powerful direction to be able to develop new categories of
						therapeutics. And as already being shown to be very efficacious for
						some diseases. So, it’s a very, very exciting area and I think we
						should do more there.
					</p>
				</Row>
				<Row>
					<p>
						<strong>Audience Member</strong>: Hello Professor. I’m a third-year
						molecular biology student here at the University. And as an MCB
						student, I am very much interested on the human clinical trials of
						CRISPR that has been going on. My question is, if you were to direct
						one of these clinical trials, what disease, what genetic disease
						would you like to target or possibly cure?
					</p>
				</Row>
				<Row>
					<p>
						<strong>Feng Zhang</strong>: I would like to be able to treat as
						many as possible of genetic diseases. I think you also have to be a
						realist. You have to start with the ones that are tractable. And so
						right now, tractability is defined by areas that we can have
						efficient delivery. Mutation types that we can have high
						efficiencies in correction. And I think if you go through the list
						and evaluate based on those criteria, you will find that blood
						disorders are probably things that are tractable right now. And so,
						like sickle cell disease or beta thalassemia, and also eye diseases
						or ear, hearing diseases, are areas that are tractable to deliver.
					</p>
				</Row>
				<Row>
					<p>
						<strong>Audience Member</strong>: Hello Professor. I have questions
						regarding the C2c2 switch to the non-specific RNA’s activity. What
						is the current status, or what do we know about the mechanism of
						that switch?
					</p>
				</Row>
				<Row>
					<p>
						<strong>Feng Zhang</strong>: Good question. So, we don’t know a lot
						about that. Very recently the crystal structure for C2c2 has been
						recorded. And that shows some conformational flexibility in the
						enzyme that may provide that collateral activity. We have also trans
						mutagenesis of the proteins, so we know what are the [domains]. It’s
						happened though in the genes that are responsive partly involved in
						the collateral activity. And so, it’s still early days. But I think
						in the next year we’ll probably learn a lot more about what’s
						happening.
					</p>
				</Row>
				<Row>
					<p>
						<strong>Audience Member</strong>: Hi Dr Zhang. I have two questions.
						So, the first one, is where do you see the direction of your
						research where your lab in the next 5,10 years? Will it be more
						application-based genetics? And then my second question would be,
						where do you see the future of the field genetics?
					</p>
				</Row>
				<Row>
					<p>
						<strong>Feng Zhang</strong>: Thank you. These are tough questions.
						Where’s my lab going to go? I think for one thing is where we are
						very actively working on trying to address challenges that face the
						genome editing technologies, especially with translating this into
						therapeutic applications. Making the enzyme more specific. Making
						the editing mechanism more robust. And also working on delivery
						approaches that makes it possible to target more tissues beyond just
						a system or the other. In terms of the field of genetics, I think we
						are in a renaissance for genetics. There are so many exciting
						discoveries. So many model technologies that all converging right
						now. And that’s really making our understanding of genetic
						contributions of any process disease or non-disease much more likely
						to be addressed. And I think in the next 10 years, we’ll learn so
						much. It’s hard to predict how far we’ll be. Certainly, 10 years ago
						predicting where genetics is today would be difficult to make an
						accurate prediction. So, I think in 10 years, I think diseases will
						be treatable, some diseases. And we will know a lot more and we will
						be able to develop more personalized mechanism-based therapeutics of
						so many health problems.
					</p>
				</Row>
				<Row>
					<p>
						<strong>Audience Member</strong>: Hi Dr Zhang. Thanks for coming to
						Berkeley and thanks to Forum for organizing this event. We all
						understand that CRISPR technology should be promoted as much as
						possible in that academic field. But from the commercial
						perspective, so if there was a start-up company that wants to use
						this technology, what kind of licensing agreement would this company
						to do with the public company or the research institute in the
						field? Does the start-up only need to do one, or if problem is to do
						several licensing agreements with the different institutes?
					</p>
				</Row>
				<Row>
					<p>
						<strong>Feng Zhang</strong>: I think what we’re trying to do at MIT
						and Broad is, we’re trying to make the technology as accessible as
						possible. So, we are non-exclusively licensing it to anybody who
						wants to come in and get a license. And so, whether you are a
						start-up company or you’re a Fortune 50 company or you’re an
						academic course facility, you get the same treatment to get access
						to the technology.
					</p>
				</Row>
				<Row>
					<p>
						<strong>Audience Member</strong>: Hello Professor Zhang. I was
						curious. Recently, there’s been a huge push for genomic, genetic, I
						guess, general nucleic acid based technologies and solutions to
						disease. Do you see that as a be all, end all? Or do you think that
						as we’re exploring these, there’s going to be a combination of that
						and, maybe, some other approaches that are going to be required to
						solve these diseases?
					</p>
				</Row>
				<Row>
					<p>
						<strong>Feng Zhang</strong>: When we’re thinking a multiple-choice
						question, usually it’s A, B, C, or all of the above. Usually, all of
						the above is a good guess to choose. So, absolutely. Genomics
						approaches is a very powerful approach. Or vary so much from these
						genetic sequencing or genetic analysis approaches of that disease.
						But that’s probably not going to be everything. We need other
						methodologies. And I think that’s where interdisciplinary approaches
						that combine sophisticated computation with chemistry with physical
						methods, and also all of the different arrays of biological
						interrogation of this. Conversion, then, is going to be critical for
						us to make a huge push.
					</p>
				</Row>
			</Container>
			<Footer />
		</div>
	);
};

export default RandPaul;

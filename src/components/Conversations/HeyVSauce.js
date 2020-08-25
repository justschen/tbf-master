import React from 'react';

import '../../css/Blog.scss';
import Header from '../A-WebElements/Header';
import Footer from '../A-WebElements/Footer';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const RandPaul = () => {
	return (
		<div className="conversations">
			<Header name="blog" />
			<Container fluid className="blog-content">
				<div className="header-vsauce">
					<h2>
						VSauce Creator Michael Stevens at the <br></br>Berkeley Forum
					</h2>
				</div>

				<Row>
					<p className="italics">
						Michael Stevens appeared at the Berkeley Forum on September 21,
						2017. Mr. Steven’s talk delved into questions of science, illusion,
						and human behavior and the broader history behind his popular
						Youtube channel. The event was moderated by Hersh Bhargava.
					</p>
				</Row>
				<Row>
					<p>
						<strong>Hersh Bhargava:</strong> In your videos you answer these
						questions that tens of millions of people find so fascinating, yet
						most people wouldn’t think to ask or at least ask in the detail that
						you do – which way is down for instance. What’s your process for
						coming up with these questions in the first place?
					</p>
				</Row>
				<Row>
					<p>
						<strong>Michael Stevens:</strong> It really comes from something I
						heard that I cannot understand. I can’t wrap my head around. For
						instance, that orange peel thing, I was like, “Why four?” And I
						talked to a mathematician, he said: “Well, it’s true of any convex
						solid.” You have to take the average though, like, I don’t know, he
						took a cube. A cube can have a shadow that’s a square or an octagon
						or anything in between, but if you average all those areas they will
						always be a quarter of its surface area. And then my next question
						is “Why? Can I explain it even to, like, a child?” And the answer is
						always yes. Anyone can always understand anything, sometimes it just
						takes more words. But the key is to always make sure that you
						overestimate your audience’s intelligence. They’re super smart and
						they’re curious to learn deeply, but you want to underestimate their
						vocabularies. Meaning, you can’t just use words, you can’t just
						throw a word out there and say that’s the answer, it’s because of
						inertia. “Well, what’s inertia?” “It’s because of, like, you know,
						math.” “But why? Like, why do the angles all add up to that number?
						Like, why isn’t the universe different? Why is the speed of light
						the fastest anything can go, who decided that?” And so, I keep
						wanting to go deeper and deeper and playing that, sort of, childish
						game of ‘But why, why?’
					</p>
				</Row>

				<Row>
					<p>
						<strong> Hersh Bhargava:</strong> You mentioned in your talk a few
						minutes ago that some of the questions that you want to ask are so
						obscure that there’s not even a Wikipedia page to start from. How do
						you in many of your topics with no formal educational background,
						manage to delve into such detail on topics that even the people who
						are in that space haven’t yet created the Wikipedia page for?
					</p>
				</Row>
				<Row>
					<p>
						<strong>Michael Stevens:</strong>I just hope to do some justice to
						it. Like, I’m not an expert. I don’t even consider myself a teacher.
						A teacher has a much harder job. They have to show up, like, early.
						And their students mandatorily have to be there by law. You know?
						Whereas, I can…I can spend as much time as I want in the topic that
						I want to talk about. And a lot of it comes down to speaking with
						experts and reading as many explanations that I can. Until I’ve
						worked my way up to the actual…the rigorous explanations. And once I
						can understand them, then I know that I’m ready to go back to the
						beginning and explain it at a level that doesn’t necessarily need
						for knowledge of all of the symbols and the words. So, with, like,
						Banack Tarski, I couldn’t even find a mathematician that could
						explain it, so, I just met with a mathematician at the Brit Lab,
						Youtube channel and just, like, presented the video to her, like,
						live, and she was able to follow it and I said “Okay, print.
						That’s…that will be the script I guess.” But it’s some…it takes
						forever and I think a lot of people don’t understand why it takes so
						long because I’m, kind of, like a vlogger in some ways. But, it’s
						not like I turn on the camera and I just know it all. It took me
						weeks or months and it took me lots of versions and lots of trials
						and lots of conversations and reading to get to that point. Like, I
						only have that one book with me because I need to read it in
						preparation for today, but I have a stack of relativity books and
						they all say things in different ways. But the more ways you hear
						someone explain something the more likely you are to finally get it
						intuitively. You need all those different voices, not one person,
						but different people with different backgrounds who have approached
						it with different backgrounds to say “Here’s how I would explain
						it.”
						<br></br>
						<br></br>[audience laughing]
					</p>
				</Row>

				<Row>
					<p>
						<strong>Hersh Bhargava:</strong> Even if you don’t consider yourself
						a teacher, your content is both entertaining as well as educational,
						essentially across the board. Do, you ever find it difficult or feel
						constrained by a need to be entertaining at the same time as being
						educational?
					</p>
				</Row>
				<Row>
					<p>
						<strong>Michael Stevens:</strong> No, I don’t think they’re mutually
						exclusive at all. But I get that question all the time, right? It’s
						like, “So, tell the audience, how do you make learning fun?”
						<br></br>
						<br></br>[audience laughing]
					</p>
				</Row>
				<Row>
					<p>
						<strong>Michael Stevens:</strong> And I’m like, “Uh, newsflash.”
						There’s pleasure in finding things out, we all have that. However,
						it’s not always the same kind of learning that is narrowly defined
						in school. Like, you might love sports facts and looking at
						statistics and the history of the team. You might love your favorite
						band. You know everything about drummers were used, where they’ve
						played. That’s curiosity as well. But it’s not the kind you get
						tested on or get, you know, on the SAT or whatever. You can’t…you
						don’t come across like you’re some kind of, smart person if you’re
						into that. But everyone’s got something that they’re really
						passionate about, that they define themselves by, they want to learn
						about it. And, so, I just try to find ways to hook in as many people
						as possible. And maybe you don’t care about Rayleigh scattering but
						you do care about why the sky is blue and how that’s related to why
						blue eyes are blue.
					</p>
				</Row>
				<Row>
					<p>
						<strong>Hersh Bhargava:</strong> So, there’s this recent phenomenon
						known as binge-watching and people binge watch your videos, but
						you’ll never see people binge-watching their CS lectures.
						<br />
						<br />
						[audience laughing]
					</p>
				</Row>
				<Row>
					<p>
						<strong>Hersh Bhargava:</strong> Or maybe almost never.
					</p>
				</Row>
				<Row>
					<p>
						<strong>Michael Stevens:</strong> Challenge accepted. <br />
						<br />
						[audience laughing]
					</p>
				</Row>
				<Row>
					<p>
						<strong>Hersh Bhargava:</strong> Do you think that there are
						techniques that you use to make your content so captivating that
						could be leveraged by people who love to teach in more didactic
						environments?
					</p>
				</Row>
				<Row>
					<p>
						<strong>Michael Stevens:</strong> That’s a really good question and
						I think it’s hard to answer because I’m just doing what I do. I
						haven’t, like, planned out some kind of strategy. When I think back
						to the, like, high school days of doing informative speaking, I
						learned a lot about chill bump moments. Okay? These are moments
						where you say something significant, the audience wants to, like,
						write down and tell their friends and family later to make
						themselves look smarter, funny or whatever. And, kind of, have a
						certain density with those and every topic has them. So, I just need
						to make sure that I find enough tidbits that are interesting even in
						20 seconds and make sure that they happen frequently enough. But I
						keep trying to make my videos more boring. My last one on the napkin
						ring problem, I spent like, three minutes just doing the Pygathorean
						theorem. You, kind of, had to, to truly understand, to truly show
						why it is what it is. But, yeah, I’m always making sure that the
						amount, sort of, tweetable shareable things that will make people
						talk later about the episode or share it on Facebook with a certain
						quote they like or a certain perspective. I want to make sure that
						those are happening frequently enough that you, kind of, want to
						keep watching.
					</p>
				</Row>
				<Row>
					<p>
						<strong>Hersh Bhargava:</strong> This methodology you have has made
						you incredibly successful on Youtube. You know, you have over 12
						million subscribers recently surpassed a billion cumulative video
						views. Has your process for designing and executing these videos
						changed since the beginning almost 10 years ago?
					</p>
				</Row>
				<Row>
					<p>
						<strong>Michael Stevens:</strong> Oh, for sure. I mean, one thing is
						that there’s just a lot more pressure. You know? Like, I couldn’t
						just do a two-minute video that was, kind of, you know, like, basic
						by the standards of what I’ve done lately because people would be
						all mad at me, right?
						<br />
						<br />
						[audience laughing]
					</p>
				</Row>
				<Row>
					<p>
						<strong>Michael Stevens:</strong> So, you just…it feels like “Oh,
						man, every time I upload it’s like, “Oh, this is the new, like,
						VSauce episode. I better be prepared to write about how he’s
						different now and how this…we’re all worse now.” I used to do more
						outer space. Less outer space. I never know. So, I just picked a
						thing that I liked and usually by the time I’m actually recording
						the episode, I’m, like, this is the boringest stuff ever. But then I
						remind myself that when I first learned it, I thought it was cool
						enough that I wrote it down. So, I just trust that initial instinct
						and say it all. And I have no…no one telling me what to do. No one’s
						telling me “Can you tighten that up? Could you, like, maybe cut over
						this? I don’t know – can you, kind of, loosen it here?” No, I just
						make it and what you see is what I wanted to do.
					</p>
				</Row>
				<Row>
					<p>
						<strong>Hersh Bhargava:</strong> Have there ever been topics that
						you wanted to cover that you haven’t been able to, either because
						they were too obscure or just didn’t suit themselves well to the
						kind of videos you make?
					</p>
				</Row>
				<Row>
					<p>
						<strong>Michael Stevens:</strong> Not really because I would love to
						do anything. But I think there’s a lot of things I want to build
						that I don’t have the know-how or the funds or the team to do. I’m
						trying to think of a good example. Like, I’ve always wanted to see
						if I could watch light bend as we dropped a flashlight. Say if you
						were…if you found a foggy day on, like, the salt flat, and you went
						really far away with the camera that shot that, like, you know,
						thousands of frames a second and you dropped the flashlight, you
						should be able to see the beam, like, do the worm move, right?
						Because the light would fall but it would take…it would travel at
						light speed through the beam. Anyway, I want to do that.
						<br />
						<br />
						[audience laughing]
					</p>
				</Row>
				<Row>
					<p>
						<strong>Michael Stevens:</strong> But I don’t know if you could
						because I think I did the math and I was like, even at a, you know,
						100,000 frames a second only half of the frames would have any
						movement in them. And you also need to have good enough fog that can
						see the whole beam. Anyway, you guys figure it out and let me know.
						<br />
						<br />
						[audience laughing]
					</p>
				</Row>
				<Row>
					<p>
						<strong>Hersh Bhargava:</strong> So, you mentioned a little bit
						earlier about your beginnings. You started essentially when you were
						our age, in college making these videos. Was there a point where you
						realized that this was going to be your full-time job, that this was
						going to be where you, at least, so far will have left your legacy?
					</p>
				</Row>
				<Row>
					<p>
						<strong>Michael Stevens:</strong> So, two answers. One, I really
						didn’t cover the fact that in, like, 2011, a company acquired Next
						NewNetworks and that company was Google. Yeah. So, I was a Google
						employee for about four or five years. They owned VSauce. And it was
						a really bizarre, kind of, thing that was not common in Google
						obviously. They were starting to fund original content but no one at
						Youtube had ever made a Youtube video. So, they booked Next New
						Networks that made successful content and also very family friendly
						content and said, “We’re going to acquire you. And you guys are
						going to be called the Next Lab. And you’re going to just, like,
						have all this knowledge about how to make videos. You’re going to
						help our clients make better content. Along with that acquisition,
						VSauce was part of it. But VSauce was really small at that time. So,
						it was only my part-time job. My real job was to be a strategist who
						would sit down with the BBC or with, you know, UEFA and talk to them
						about how to make, you know, get more views basically. But as VSauce
						grew it became more obvious that focusing on that would be my job.
						So, I never had that nervous moment of how am I going to make ends
						meet because I was employed by other a big company and there was so
						many benefits that went along with that, I didn’t have to worry
						about sponsors. I didn’t have to worry about releasing content fast
						enough that I was making enough money from the ads. I could just
						make things that I wanted to. And I had some pressure. You know, I
						couldn’t not do my job. But the only time it became a problem was
						when we wanted to grow faster and I couldn’t just say “Hey, Google,
						I want a team of ten people. I want to budget of millions of dollars
						to make this big show, big experiments.” They’d be like,
						“That’s…we’re a tech company. What are you talking about?” But then
						last year, in January, VSauce became independent. So, it hasn’t even
						been that long. It’s been like a year and a half. So, now VSauce is
						on its own and we can do things like create the Minefield show.
					</p>
				</Row>
				<Row>
					<p>
						<strong>Hersh Bhargava:</strong> In the interest of time this is
						going to my last question before we transition into the audiences Q
						and A portion of our event. You touched through VSauce, through
						Minefield, through Brain Candy, millions or maybe even tens of
						millions of lives on a regular basis, what is your goal for the
						impact that you should have on all these people?
					</p>
				</Row>
				<Row>
					<p>
						<strong>Michael Stevens:</strong> I think a knowledge of the
						philosophy of science. More generally, what does it mean to know
						something? <br />
						<br />
						[audience laughing]
					</p>
				</Row>
				<Row>
					<p>
						<strong>Michael Stevens:</strong> I mean, you get this a lot
						because, you know, I did a video on, ‘Is the Earth actually flat?’
						And my answer is…I mean, what do you guys think, is the world flat?
						I would say probably not. There’s no evidence that it is. But what
						does it mean to know the truth of something? But what’s weird is
						that when you get into that, kind of, territory, you come across
						like maybe you support flat Earthers, right? When in reality, what
						I’m trying to do is talk about what can science do? Why is it our
						best way of knowing? There are other ways to know things, but
						science is the one that allows us to predict and explain things that
						doesn’t contradict itself, that works over and over again. And so, I
						guess…I just want to keep…I want…I think more people need to learn
						the history of science and the philosophy behind what we do. Because
						as soon as you start saying “Hey, science is right whether you
						believe in it or not.” Well, that’s not the point of science at all.
						You know, it’s all about trying to improve itself. And it’s not
						something that you just accept. It’s our best way of knowing. So,
						anyway, I guess that’s, kind of, a vague abstract answer. But, you
						know, I’m always trying to touch on that and it, kind of, goes along
						with the, “But what is water?” You know? Where I’m going, “But wait
						a second, like, what does it mean to say the Earth is round? Like,
						what about this explanation? What about this one?” They all seem to
						work but “Ooh, they contradict each other. Interesting.” And I think
						that when you teach the controversy, you’ll almost always push
						people in the direction of what science has found. But when you
						ignore all the challenges, then…I don’t know, people don’t seem as
						convinced.
					</p>
				</Row>
				<Row>
					<p>
						<strong>Hersh Bhargava:</strong> Well, thank you so much for
						answering my questions.
					</p>
				</Row>
				<Row>
					<p>
						<strong>Michael Stevens:</strong> Thank you.
						<br />
						<br />
						[audience laughing]
					</p>
				</Row>
				<Row>
					<p>
						<strong>Hersh Bhargava:</strong> So for the remainder of our time,
						we’re going to take questions from the audience. If you have a
						question, please raise your hand and I will call on you.
					</p>
				</Row>
				<Row>
					<p>
						<strong>Audience Member:</strong> Where do you see humans in 100
						years?
					</p>
				</Row>
				<Row>
					<p>
						<strong>Michael Stevens:</strong> Oh, man. Well, I’ll be dead.
						<br />
						<br />
						[audience laughing]
					</p>
				</Row>
				<Row>
					<p>
						<strong>Michael Stevens:</strong> And I hope…I hope I am. I don’t
						want to live forever, okay? Okay, so, I was in Romania, and someone
						asked me if I wanted to live forever and I said “No,” and the entire
						auditorium erupted in applause.
						<br />
						<br />
						[audience laughing]
					</p>
				</Row>
				<Row>
					<p>
						<strong>Michael Stevens:</strong> They love death in Bucharest.
						<br />
						<br />
						[audience laughing]
					</p>
				</Row>
				<Row>
					<p>
						<strong>Michael Stevens:</strong> I couldn’t believe it. I don’t
						think it’s going to be that different. 100 years isn’t that long.
						I’m interested in a million years. I’m interested in what evolution
						can do to us. Can it anymore? Like, have we passed that, sort of,
						natural selection shadow and now it’s all in under our control? I
						don’t know. Are we going to still be on this planet in 100 years?
						Yeah, for sure. In a million? We might not even call them planets.
						We’ll be speaking some other language. I don’t have a really good
						answer, so, I’m not really much of a…I’m not a very good futurist.
						Sorry. [laughing]
						<br />
						<br />
						[audience laughing]
					</p>
				</Row>
				<Row>
					<p>
						<strong>Audience Member:</strong> So, firstly, I would let you know
						that you take…you need a camera that takes a trillion frames a
						second to be able to see the light bend if you’re looking from a few
						feet away.
					</p>
				</Row>
				<Row>
					<p>
						<strong>Michael Stevens:</strong> Yeah, I know. But I don’t even
						like those because what they really do is they take a whole bunch of
						pictures of the same light beam and then they, like, create an
						animation. It’s not like you’re seeing the same photons moving,
						you’re seeing, like, “Oh, here’s this picture that captured it
						there. And then, later on, we found it a little bit later. So, we’ll
						collate them together in that order.” And I want to just do it with,
						like, a phantom camera on a salt flat. I mean, I thought about it.
						I’ve looked into it.
					</p>
				</Row>
				<Row>
					<p>
						<strong>Audience Member:</strong> And my next question. So, have you
						ever had an experience where you thought you knew something and you
						asked an expert to clarify and they told you that what how you
						thought it works was completely wrong. How does that change
						everything?
					</p>
				</Row>
				<Row>
					<p>
						<strong>Michael Stevens:</strong> Every day.
						<br />
						<br />
						[audience laughing]
					</p>
				</Row>
				<Row>
					<p>
						<strong>Michael Stevens:</strong> Oh, yeah, no, I…you have to be in
						love with looking dumb, or else you’re not going to learn. So, I’ll
						just throw out…okay, “Is this right?” And…like, for instance, the
						thing about gravity being caused by time, I spoke to Henry Reish,
						who’s got a doctorate in this and he was like “OOh,” and I was like
						“Go on. Why…what can you tell me? Like, I’m not fragile about this.”
						And I think that in 10 years, I’m going to look back and go “Man, I
						was dumb.” And I’m going to get that I’m going to be like “I don’t
						know anything.” Like, as…the more you read and learn, the more
						people you meet, the larger your, you know, circle of knowledge is,
						but the larger the circumference of darkness beyond it becomes. So,
						for everything I learn, I realize that I don’t know 20 things.
					</p>
				</Row>
				<Row>
					<p>
						<strong>Audience Member:</strong> And, lastly, just for you. You
						know that 2,290 sound variants can average 6?
					</p>
				</Row>
				<Row>
					<p>
						<strong>Michael Stevens:</strong> Spit facts.
						<br />
						<br />
						[audience laughing]
					</p>
				</Row>
				<Row>
					<p>
						<strong>Michael Stevens:</strong> I appreciate that. Keep it alive.
						<br />
						<br />
						[audience laughing]
					</p>
				</Row>
				<Row>
					<p>
						<strong>Audience Member:</strong> I have two questions. What was it
						like to work with Adam Savage?
					</p>
				</Row>
				<Row>
					<p>
						<strong>Michael Stevens:</strong> So, it was phenomenal because he
						can talk about anything. But he can also build things, which I can’t
						do. And, so, I could say things like “Oh, man, you know, you can
						create vortexes or you can show Bernoulli’s Principal really well
						with such and such a thing. He’ll be like “Well, let’s build it
						really big and let’s put a person in it.” I’m like, “What?”
						<br />
						<br />
						[audience laughing]
					</p>
				</Row>
				<Row>
					<p>
						<strong>Michael Stevens:</strong> And then I go off and I do my
						thing, writing the scripts and reading and a month later he’s like
						“Look, what do you think?” I’m like ” The heck? What do I owe you?”
						Like, and he’s like “No, this…we’re doing this together.” And I was
						like, “Ah, okay, cool. I’m going to look awesome.” So, it’s been
						fantastic. And he’s such a curious person, such a critically
						thinking person, but also such a performer. It’s very weird, kind
						of, how similar we are but also how we complement each other. So, we
						are back on tour this fall and we’re going to…I think I’m supposed
						to say, we’re going to another country besides the USA, next year.
						Or are we? I don’t know if I’m supposed to announce it, so I am
						going to look awesome. That’s been fantastic and it was so, weird
						how it all started. I didn’t believe it was really happening. I
						didn’t believe it was really happening until two weeks before the
						first show. And he was like, Okay, so, you’re coming out to the
						rehearsals and I was like “Oh, wow, we’re really doing this.” We’d
						filled notebooks with ideas and we built things, but I never
						realized, we’re going to do this 40 times in a row. Traveling around
						on a bus. Let’s go.
						<br />
						<br />
						[audience laughing]
					</p>
				</Row>
				<Row>
					<p>
						<strong>Michael Stevens:</strong> You had a second part.
					</p>
				</Row>
				<Row>
					<p>
						<strong>Audience Member:</strong> The second question, my little
						brother wanted me to ask you, do you think a hot dog is a sandwich?
						<br />
						<br />
						[audience laughing and applauding]
					</p>
				</Row>
				<Row>
					<p>
						<strong>Michael Stevens:</strong> I absolutely believe that a hot
						dog is a sandwich.
						<br />
						<br />
						[audience laughing]
					</p>
				</Row>
				<Row>
					<p>
						<strong>Michael Stevens:</strong> But it’s not a sandwich, sandwich.
						Okay? If you’ve seen my episode on ‘Is Cereal soup?’, I dive into
						the fact that we made up these words. And it didn’t really hit home
						until I asked the paleontologist who worked on Jurassic Park, right?
						I asked him, “Is a hyena a dog or a cat?” and he goes “It’s giraffe,
						we make up the terms.”
						<br />
						<br />
						[audience laughing]
					</p>
				</Row>
				<Row>
					<p>
						<strong>Michael Stevens:</strong> Like, people get really hung up on
						labeling things with words, but in reality, it’s all the other
						things that the animal does that matters. And, so, what I’m trying
						to get at is, you know, we have prototypical sandwiches, right?
						Like, a BLT, a PB and J. Two slices of bread with stuff in between.
						What about an Oreo, it’s a sandwich cookie, okay? What about when
						you’re sandwiched between two people in an airplane seat? That’s not
						the sandwich that you eat but the sandwich word still applies. So,
						what I’m trying to say is that a hot dog is somewhere over here,
						whereas the BLT is here. It’s called…what’s the name for that? It’s
						like contrastive reduplication. When you repeat a word to mean a
						prototypical example. So, I don’t want to take a whole bunch of time
						but, when you say something like, “Oh, yeah, we went out on a date
						but it wasn’t like a date, date.” What you’re saying is you say the
						word date twice that’s reduplication to contrast it with fringe
						versions. “Okay, it was a date, but it wasn’t, like, the
						stereotypical date, date. A penguin is a bird. That’s not like a
						bird, bird.”So, a hot dog is a sandwich but it’s not a sandwich,
						sandwich. It’s pretty close and we get the similarities but when we
						get hung up on, it’s either one thing or the other, we get ourselves
						into trouble. But we also create great internet memes, so.
						<br />
						<br />
						[audience laughing]
					</p>
				</Row>
				<Row>
					<p>
						<strong>Audience Member:</strong> Hi, so, within the current
						political impacts on science, do you feel any more obligation or a
						sense of urgency to make science videos? And do you share any
						similar views with other science experiments on Youtube on science?
					</p>
				</Row>
				<Row>
					<p>
						<strong>Michael Stevens:</strong> So, it was really convenient that
						this year, and at the end of last year, I started to doing not only
						VSauce but also Brain Candy Live. Like, literally going all around
						the country and the world putting science into people’s hands. Like,
						literally bringing them onstage and showing them what it means to
						know something. What it means to think. What it means for something
						to be probably true or uncertain and it’s just made me really proud
						to do what I’m doing. But it was just lucky that I happen to be
						doing this. But I feel good about what I’m doing. And I feel good
						about trying to, again, reach the largest audience possible. One of
						the things I’m the most proud of is an episode on ‘Why animals don’t
						have wheels,’ right? Because wheels are so simple. I mean, we
						invented the wheel and we’ve like perfected it. We’re so good and
						they’re so good. But animals never thought to evolve a wheel.
						They’ve got these, like, limbs that we can’t even replicate. It’s so
						complicated to make a leg, to make a wing that flaps? We made wings
						eventually, but they don’t flap.
						<br />
						<br />
						[audience laughing]
					</p>
				</Row>
				<Row>
					<p>
						<strong>Michael Stevens:</strong> So, why did nature make it so
						difficult? And, anyway, the, kind of, short answer is that in order
						for a wheel work you need to have roads. You need to have a species
						that will say “Hey, guys, let’s build flat areas that we’ll all
						benefit from.” And only do humans have that, kind of, cooperative
						sense. Anyway, in that entire episode, I never once said the word
						evolution. I just talked about how “Look, if you’ve…if you grow a
						thing that’s not connected to your body, it’s going to die off. So,
						you’re not going to probably live long enough to have…to reproduce.
						So, anything that had a wheel is just not going to be around.” And
						everyone gets that. Even if you think evolution is, like, this
						dangerous thing. So, I’m always trying to, like, accidentally show
						people everything.
						<br />
						<br />
						[audience laughing]
					</p>
				</Row>
				<Row>
					<p>
						<strong>Audience Member:</strong> Do you ever read your Youtube
						comments?
						<br />
						<br />
						[audience laughing]
					</p>
				</Row>
				<Row>
					<p>
						<strong>Michael Stevens:</strong> I do at first. Like, I…in the
						first few hours I read them all to make sure that I haven’t missed
						something or made a mistake. Like, they’re just terrible.
						<br />
						<br />
						[audience laughing]
					</p>
				</Row>
				<Row>
					<p>
						<strong>Michael Stevens:</strong> The…I would turn them off if it
						wouldn’t cause everyone to go “Oh, can’t take the criticism.”
						<br />
						<br />
						[audience laughing]
					</p>
				</Row>
				<Row>
					<p>
						<strong>Michael Stevens:</strong> Like, seriously, like, you should
						just pull up all my videos. I mean, it’s all just like “How
						offensive can I be because that’s what gets attention.” But…I mean,
						it’s, kind of, my fault too because I produce these episodes as,
						kind of, rhetorical performances, I don’t ask people “Write below
						what you think the mass of the sun is.” It’s like no, I just, this
						is what it’s believed to be and if you have a…you don’t believe
						that, then I don’t know what to say.
						<br />
						<br />
						[audience laughing]
					</p>
				</Row>
				<Row>
					<p>
						<strong>Michael Stevens:</strong> But, no. And I think…look, Amazon
						Prime, television, Netflix…they don’t have a comment section. But
						the comment section becomes this place people go to, like, figure
						out how they’re supposed to feel about the episode before they even
						watch it and it’s very annoying. Sorry, that’s, kind of, a bummer.
						But, yes, it’s…yeah, it’s only helpful for finding mistakes.
					</p>
				</Row>
				<Row>
					<p>
						<strong>Audience Member:</strong> What’s your stance on religion?
					</p>
				</Row>
				<Row>
					<p>
						<strong>Michael Stevens:</strong> Oh, yeah. I would love to create
						an actual channel on religion and theology because we don’t talk
						about it enough, right? It’s, kind of…I mean, what I mean by that is
						it’s not treated as it should be. It’s not treated like
						educationally. It’s not seen as being as important as it really is
						to human history. And everything is religion. In that book I showed
						you the Epstein Relativity book, he’s got a side note where he’s
						like, “By the way, science is a religion.” Like, we have to have
						faith that our measurements are correct. We have to have faith that,
						like, the ratio between a diameter and a circumference is Pi because
						it really isn’t. I mean, spacetime is curved. Spacetime might not be
						infinitely divisible, so, you’re never going to get a perfect
						circle. Like, we have all these ideas that we have very little
						uncertainty about but we haven’t truly proven. We could be brains in
						bats. So, anyway, Brady Haran created a great channel that more
						people should watch where they, like, went through every book of the
						Bible. He’s the guy who did the channel on periodic videos, where
						they did a video about every element and now he’s doing once called
						‘ Numberphile,’ where there’s a video about every number. [laughing]
						That one can last a lot longer.
						<br />
						<br />
						[audience laughing]
					</p>
				</Row>
				<Row>
					<p>
						<strong>Michael Stevens:</strong> And then…yeah, I read ‘The
						Evolution of God,’ who…I don’t remember who wrote it but I just
						recommended it to my wife. It’s fantastic. It really goes back to,
						like, who’s the first person to go, “Guys, guys, guys, the sky is
						alive and it talks to me, like, I’m in shock.”
						<br />
						<br />
						[audience laughing]
					</p>
				</Row>
				<Row>
					<p>
						<strong>Michael Stevens:</strong> And someone heard that and thought
						“Oh, well, yeah obviously.”
						<br />
						<br />
						[audience laughing]
					</p>
				</Row>
				<Row>
					<p>
						<strong>Michael Stevens:</strong> The same could be said for every
						everything and who is the first person to go “Hey, guys, I found
						this rock and, like, I touched it and, like, it says that I’m the
						king?…
						<br />
						<br />
						[audience laughing]
					</p>
				</Row>
				<Row>
					<p>
						<strong>Michael Stevens:</strong> …I’m in charge?” And everyone was
						like, “Yeah, well, that’s how it works I guess. So… but it’s a
						serious thing and I think that if there is…I mean, I’d love to talk
						about it forever and I…maybe I will at some point. But I think the
						flat Earth video touches on it too. It’s, like, [sigh]…anyway.
						<br />
						<br />
						[audience laughing]
					</p>
				</Row>
				<Row>
					<p>
						<strong>Audience Member:</strong> This is a bit of a silly question
						but, how did you meet Ethan and Eli, Ian and make videos with them?
					</p>
				</Row>
				<Row>
					<p>
						<strong>Michael Stevens:</strong> So, I followed Ethan and Ian on
						Twitter a long time ago and then they would just DM me and be like
						“Hey, do you want to get some chicken nuggets?”
						<br />
						<br />
						[audience laughing]
					</p>
				</Row>
				<Row>
					<p>
						<strong>Michael Stevens:</strong> Spoiler, he didn’t actually call
						me and ask, I knew he was coming. But I think that it’s been a
						really great way to reach people who might not want…who might not
						think they want to learn, right? So, branching out and showing that
						to be curious, you don’t have to be socially inept is really
						important to me. Because there’s a lot of things in our society that
						tell us, “Look, you’re either successful and attractive or you’re
						smart. One or the other.” Seriously. And especially when you’re a
						kid you start to think “Oh, man, you know, none of my friends are
						curious about this and if I pursue math club, it means I literally
						lose my friends. Or…so, okay, I…” So, anyway, I want to show that
						you can be whatever you want to be and still be curious and still be
						a critical thinker and a good citizen because of it.
					</p>
				</Row>
				<Row>
					<p>
						<strong>Audience Member:</strong> With science and technology that
						you are able to use big figures, what would you say is the biggest
						thing you got out of doing that, because it doesn’t seem like what
						you’re doing now involves that. So, what was the biggest thing you
						got out of that?
					</p>
				</Row>
				<Row>
					<p>
						<strong>Michael Stevens:</strong> What I got out of it was a way of
						thinking. It was this, like, when I wrote papers in high school,
						they were really bad and then all of a sudden when I was in college
						you didn’t have to write to a rubric. Like, in high school it was
						always like “Okay, you have to use five vocabulary words. You have
						to discuss one of these 12 themes and you have to start with a
						paragraph that’s like a funnel, it starts big and it gets narrow.
						So, every one of my papers began with “Ever since the dawn of time
						many have wondered what order is. In Lord of the Flies, the conch
						shell represents order.”
						<br />
						<br />
						[audience laughing]
					</p>
				</Row>
				<Row>
					<p>
						<strong>Michael Stevens:</strong> And then in college, I had a…I
						took a philosophy course that was only for graduate students but I
						got in there accidentally somehow, so, there’s another thing. Like,
						everyone says when you’re young in college take all the things
						you’re required to first so, that you don’t have to worry about them
						when you’re a senior. I did the opposite. I took all the ridiculous,
						like, Spinoza’s Ethics taught by a visiting professor philosopher,
						right? And I didn’t take any of the, you know, general ed
						requirements or any of those things until the very last minute. And
						I was so glad I did because I was forced to be surrounded by the
						smartest people and then by the end of my college time when I was
						starting to work more on the Youtube stuff, I had easier classes.
						So, I was like so smart.
						<br />
						<br />
						[audience laughing]
					</p>
				</Row>
				<Row>
					<p>
						<strong>Michael Stevens:</strong> Anyway, your question is not being
						answered by me at the moment. Okay, so…yeah, the…this philosopher
						visiting professor told me “Your thesis statement just needs to be
						something that’s not trivial.” Saying that this thing represents
						order everyone said. Say something crazy. And I realized “Oh, you
						mean I get to do what I want to do.” As long as I can back it up and
						as long as it’s interesting and fascinating and leads to all kinds
						of conversations, that’s what it should be. And it’s…it was the
						people I met in the way of thinking and the ideas I was introduced
						to that mattered. I did not go to college to get a certain job. Many
						people do and that’s perfect. But for me, I didn’t go there thinking
						“I’m going to become an English literature professional.” I went
						thinking, I want to be able to know what humans have done and
						whatever job I wind up having…because you, kind of, have to make
						money in our society, will be hopefully something that dovetails
						with it.
					</p>
				</Row>
				<Row>
					<p>
						<strong>Audience Member:</strong> How much technology is changing in
						the way we consume specifically video media? What are your thoughts
						on that? For example, Facebook is coming out with, you know, their
						own content. I always find myself waking up and just watching a
						video and then it automatically scrolls up into a new video about
						something that Youtube doesn’t do and even the way it counts is
						different. What is your thought on the future of that what will
						happen with that?
					</p>
				</Row>
				<Row>
					<p>
						<strong>Michael Stevens:</strong> Man, I don’t know. I mean, Youtube
						does an auto-play thing, which its recommendations are getting
						better and better. But it is weird, right? Like, we didn’t use to
						watch this much content. There just wasn’t even that much. And I
						don’t think it’s a bad thing at all. I think this is just a new
						thing that’s going to happen to our species. I mean, Socrates was
						really worried about writing. We know from what Plato said he said
						that he was like “Writing? This is a terrible invention. It means
						that people don’t remember things. They trust the written word and
						not their own minds.” Well, guess who’s got egg on his face now,
						right? It turned out to be a great invention.
						<br />
						<br />
						[audience laughing]
					</p>
				</Row>
				<Row>
					<p>
						<strong>Michael Stevens:</strong> And it’s, kind of, a for better or
						worse thing. It’s like, “Well, what’s going to happen in the
						future?” I’m like, “It’s already happened. We’re already displacing
						more and more of what this thing does to other things. We’re already
						like, spending a lot of time on the internet. I did a thing about
						the friend zone, have you guys seen it? Sounds like it would be this
						really annoying topic. Like “Oh, my gosh. Is he going to say that
						the friend zone is some, like, you know, “Well, you’re owed, love.”
						Instead, I was, like, “Guys, guys, friends is more important than
						ever…” being friends because now we’re able to connect with people
						on the internet who believe exactly what we believe. And that’s
						what…that’s the one thing that worries me, that I…I’m not forced to
						deal with, like, “Oh, my neighbors have completely different belief
						in things than I do.” Doesn’t have to happen that way anymore. I can
						just stay on the internet, only hear what I want to hear, and I can
						live in a location and country where everyone agrees with me. And
						then a long time ago, when people weren’t as, you know, didn’t move
						as much, when you couldn’t be connected as much, you really would,
						like, go bowling every Tuesday night with five people who all
						disagreed on things. And you were forced to talk with them and
						privately hate them. And I don’t know, I’m going to be fascinated to
						find out but I’m not concerned about it at all.
					</p>
				</Row>
				<Row>
					<p>
						<strong>Hersh Bhargava:</strong> Thank you so much, Mr. Stevens, for
						answering our questions.
					</p>
				</Row>
			</Container>
			<Footer />
		</div>
	);
};

export default RandPaul;

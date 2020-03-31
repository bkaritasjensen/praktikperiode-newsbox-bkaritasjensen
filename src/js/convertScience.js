/**
 * This function coverts a DOM Tree into JavaScript Object. 
 * @param srcDOM: DOM Tree to be converted. 
 */

function xml2json(srcDOM){
	let children = [...srcDOM.children];

	//base case for recursion.
	if (!children.length){
		return srcDOM.innerHTML
	}

	//initialization object to be returned.
	let jsonResult = {};
	
	for (let child of children){
		//checking is child has siblings of same name.
		let childIsArray = children.filter(eachChild => eachChild.nodeName === child.nodeName).length > 1;

		//If child is array, save the values as array, else as string.
		if (childIsArray) {
			if (jsonResult[child.nodeName] === undefined){
				jsonResult[child.nodeName] = [xml2json(child)];
			}else {
				jsonResult[child.nodeName].push(xml2json(child));
			}
		}else{
			jsonResult[child.nodeName] = xml2json(child);
		}
	}
	return jsonResult;
}

let strxml = `
<channel>
<title>NYT > Science</title>
<link>https://www.nytimes.com/section/science</link>
<atom:link href="https://rss.nytimes.com/services/xml/rss/nyt/Science.xml" rel="self" type="application/rss+xml"/>
<description/>
<language>en-us</language>
<copyright>Copyright 2020 The New York Times Company</copyright>
<lastBuildDate>Thu, 26 Mar 2020 08:51:09 +0000</lastBuildDate>
<pubDate>Thu, 26 Mar 2020 08:51:09 +0000</pubDate>
<image>
<title>NYT > Science</title>
<url>
https://static01.nyt.com/images/misc/NYT_logo_rss_250x40.png
</url>
<link>https://www.nytimes.com/section/science</link>
</image>
<item>
<title>Jane Goodall Is Self-Isolating, Too</title>
<link>
https://www.nytimes.com/2020/03/25/science/jane-goodall-coronavirus.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/25/science/jane-goodall-coronavirus.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/25/science/jane-goodall-coronavirus.html" rel="standout"/>
<description>
She’s in England, in the house she grew up in, and she has a few thoughts about chimpanzees, the coronavirus pandemic and the loo paper shortage.
</description>
<dc:creator>James Gorman</dc:creator>
<pubDate>Wed, 25 Mar 2020 16:16:59 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Goodall, Jane</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Monkeys and Apes</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Epidemics</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Animal Cognition</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">van Lawick, Hugo</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Africa</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Cambridge (England)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">China</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Tanzania</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">your-feed-science</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/25/science/25GOODALL-QNA1/25GOODALL-QNA1-moth.jpg" width="151"/>
<media:credit>Enric Fontcuberta/EPA, via Shutterstock</media:credit>
<media:description>
British primatologist Jane Goodall in the science museum CosmoCaixa of Barcelona in 2018.
</media:description>
</item>
<item>
<title>
Life on the Planet Mercury? ‘It’s Not Completely Nuts’
</title>
<link>
https://www.nytimes.com/2020/03/24/science/mercury-life-water.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/24/science/mercury-life-water.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/24/science/mercury-life-water.html" rel="standout"/>
<description>
A new explanation for the rocky world’s jumbled landscape opens a possibility that it could have had ingredients for habitability.
</description>
<dc:creator>Shannon Hall</dc:creator>
<pubDate>Wed, 25 Mar 2020 21:07:31 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Mercury (Planet)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Extraterrestrial Life</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Space and Astronomy</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Water</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Research</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Rodriguez, Alexis P</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Scientific Reports (Journal)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Domingue, Deborah</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Kargel, Jeffrey</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/31/science/24OBS-MERCURY1/24TB-MERCURY1-moth.jpg" width="151"/>
<media:credit>
NASA/Johns Hopkins University Applied Physics Laboratory/Carnegie Institution of Washington
</media:credit>
<media:description>
The study theorizes that the “chaotic terrain” on Mercury’s surface was formed by activity underneath the planet’s barren, scorched exterior, and not a collision.
</media:description>
</item>
<item>
<title>
Chimp Sanctuaries Restrict Visits Over Concerns About the Coronavirus
</title>
<link>
https://www.nytimes.com/2020/03/24/science/chimpanzee-sanctuaries-coronavirus.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/24/science/chimpanzee-sanctuaries-coronavirus.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/24/science/chimpanzee-sanctuaries-coronavirus.html" rel="standout"/>
<description>
There’s a possibility chimpanzees could be susceptible to Covid-19, so sanctuaries are taking precautions.
</description>
<dc:creator>James Gorman</dc:creator>
<pubDate>Tue, 24 Mar 2020 23:39:35 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Chimp Haven</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Monkeys and Apes</category>
<category domain="">chimpanzees</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Louisiana</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">your-feed-science</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/24/science/24VIRUS-CHIMPS1/24VIRUS-CHIMPS1-moth.jpg" width="151"/>
<media:credit>Melissa Golden for The New York Times</media:credit>
<media:description>
A new chimp arrival at Project Chimps, in Morganton, Ga., from the New Iberia Research Center at the University of Louisiana in 2017.
</media:description>
</item>
<item>
<title>Turning Back the Clock on Aging Cells</title>
<link>
https://www.nytimes.com/2020/03/24/science/aging-dna-epigenetics-cells.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/24/science/aging-dna-epigenetics-cells.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/24/science/aging-dna-epigenetics-cells.html" rel="standout"/>
<description>
Researchers report that they can rejuvenate human cells by reprogramming them to a youthful state.
</description>
<dc:creator>Nicholas Wade</dc:creator>
<pubDate>Tue, 24 Mar 2020 14:08:03 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Genetics and Heredity</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Osteoarthritis</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Proteins</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Yamanaka, Shinya</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Izpisua Belmonte, Juan Carlos</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Sebastiano, Vittorio</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">your-feed-health</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">your-feed-science</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/24/science/24SCI-STEMCELLS1/24SCI-STEMCELLS1-moth.jpg" width="151"/>
<media:credit>David Scharf/Science Source</media:credit>
<media:description>
A scanning electron micrograph of a human embryonic stem cell.
</media:description>
</item>
<item>
<title>Welcome to the Virosphere</title>
<link>
https://www.nytimes.com/2020/03/24/science/viruses-coranavirus-biology.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/24/science/viruses-coranavirus-biology.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/24/science/viruses-coranavirus-biology.html" rel="standout"/>
<description>
SARS-CoV-2, the cause of the pandemic, belongs to one of 6,828 named species of virus. Hundreds of thousands more species are known, with perhaps trillions waiting to be found.
</description>
<dc:creator>Carl Zimmer</dc:creator>
<pubDate>Tue, 24 Mar 2020 22:36:20 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Genetics and Heredity</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Biodiversity</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Science and Technology</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Epidemics</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Microbiology</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Kuhn, Jens H</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Sullivan, Matthew B</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">your-feed-health</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">your-feed-science</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/24/science/23SCI-MEGAVIRUS/23SCI-MEGAVIRUS-moth.jpg" width="151"/>
<media:credit>Sean McSorley</media:credit>
</item>
<item>
<title>
Remember When Japan Blasted an Asteroid? Here’s What We Learned
</title>
<link>
https://www.nytimes.com/2020/03/23/science/japan-hayabusa2-asteroid-ryugu.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/23/science/japan-hayabusa2-asteroid-ryugu.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/23/science/japan-hayabusa2-asteroid-ryugu.html" rel="standout"/>
<description>
The Hayabusa2 spacecraft’s explosive encounter reveals that a space rock called Ryugu looks extremely young for its age.
</description>
<dc:creator>Kenneth Chang</dc:creator>
<pubDate>Mon, 23 Mar 2020 18:33:02 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Asteroids</category>
<category domain="">Hayabusa2</category>
<category domain="">Ryugu</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Bombs and Explosives</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Solar System</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Research</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Space and Astronomy</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Japan Aerospace Exploration Agency</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Japan</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/23/science/23TB-ASTEROID-promo/23TB-ASTEROID-promo-moth.jpg" width="151"/>
<media:credit>JAXA, via Associated Press</media:credit>
<media:description>
The shadow of the Hayabusa2 spacecraft after its successful touchdown on the asteroid Ryugu. 
</media:description>
</item>
<item>
<title>
When Coronavirus Closes Your Lab, Can Science Go On?
</title>
<link>
https://www.nytimes.com/2020/03/23/science/coronavirus-closed-labs.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/23/science/coronavirus-closed-labs.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/23/science/coronavirus-closed-labs.html" rel="standout"/>
<description>
Plenty of work can be done from home, but the pandemic is forcing some parts of the scientific process to be put on the shelf.
</description>
<dc:creator>The New York Times</dc:creator>
<pubDate>Mon, 23 Mar 2020 17:35:53 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Shutdowns (Institutional)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Laboratories and Scientific Equipment</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Colleges and Universities</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Graduate Schools and Students</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Science and Technology</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Research</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Medicine and Health</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">your-feed-science</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/23/science/23SCI-VIRUS-CLOSEDLABS-promo/23SCI-VIRUS-CLOSEDLABS-promo-moth.jpg" width="151"/>
<media:credit>David Gruber</media:credit>
<media:description>
Bioluminescent plankton studied in the lab of David Gruber, a biologist at City University of New York.
</media:description>
</item>
<item>
<title>The Search for E.T. Goes on Hold, for Now</title>
<link>
https://www.nytimes.com/2020/03/23/science/seti-at-home-aliens.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/23/science/seti-at-home-aliens.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/23/science/seti-at-home-aliens.html" rel="standout"/>
<description>
A popular screen saver takes a break while its inventors try to digest data that may yet be hiding news of extraterrestrials.
</description>
<dc:creator>Dennis Overbye</dc:creator>
<pubDate>Tue, 24 Mar 2020 05:10:02 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Computers and the Internet</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Extraterrestrial Life</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Voyager Project</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Crowdsourcing (Internet)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Space and Astronomy</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Research</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Stars and Galaxies</category>
<category domain="">seti@home</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">your-feed-science</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/24/science/23SCI-OUTTHERE-SETI/23SCI-OUTTHERE-SETI-moth.jpg" width="151"/>
<media:description>
The seti@home screen saver, launched in May 1999, crunched data while your computer was idle.
</media:description>
</item>
<item>
<title>
Geese May Not Inspire You, but They Certainly Take Your Mind Off the Virus
</title>
<link>
https://www.nytimes.com/2020/03/22/science/geese-social-coronavirus.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/22/science/geese-social-coronavirus.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/22/science/geese-social-coronavirus.html" rel="standout"/>
<description>
Watching birds that do not practice social distancing is a nice break from washing your hands and disinfecting friends.
</description>
<dc:creator>James Gorman and Natalie Keyssar</dc:creator>
<pubDate>Tue, 24 Mar 2020 16:54:17 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Geese</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Birds</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Animal Cognition</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Animal Behavior</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">your-feed-science</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Quarantines</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/21/science/00VIRUS-GEESE-top/00VIRUS-GEESE-top-moth.jpg" width="151"/>
<media:description>
Gulls, ducks and brants, a type of goose, in Flushing Meadows Park in Queens.
</media:description>
</item>
<item>
<title>coronavirus</title>
<link>
https://www.nytimes.com/2020/03/26/world/coronavirus-news.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/26/world/coronavirus-news.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/26/world/coronavirus-news.html" rel="standout"/>
<description>
The measure promises a $1,200 payout to millions of Americans and increased jobless aid. It also creates a government bailout fund for distressed businesses.
</description>
<pubDate>Thu, 26 Mar 2020 08:11:53 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Stimulus (Economic)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Senate</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Fauci, Anthony S</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Trump, Donald J</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">New York City</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">United States</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/03/world/coronavirus-map-promo/coronavirus-map-promo-moth-v192.png" width="151"/>
<media:credit>The New York Times</media:credit>
</item>
<item>
<title>
Standing Rock Sioux Tribe Wins a Victory in Dakota Access Pipeline Case
</title>
<link>
https://www.nytimes.com/2020/03/25/climate/dakota-access-pipeline-sioux.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/25/climate/dakota-access-pipeline-sioux.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/25/climate/dakota-access-pipeline-sioux.html" rel="standout"/>
<description>
A federal judge on Wednesday struck down permits for the pipeline and ordered a new environmental review of the project.
</description>
<dc:creator>Lisa Friedman</dc:creator>
<pubDate>Wed, 25 Mar 2020 22:04:26 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Global Warming</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Environment</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Greenhouse Gas Emissions</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Pipelines</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Native Americans</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Water Pollution</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Army Corps of Engineers</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Earthjustice</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Standing Rock Sioux Reservation (ND-SD)</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/25/climate/25CLI-DAKOTAPIPELINE1/25CLI-DAKOTAPIPELINE1-moth.jpg" width="151"/>
<media:credit>Al Drago/The New York Times</media:credit>
<media:description>
Demonstrators protested against the Dakota Access Pipeline on the National Mall in Washington in 2017.
</media:description>
</item>
<item>
<title>Can You Become Immune to the Coronavirus?</title>
<link>
https://www.nytimes.com/2020/03/25/health/coronavirus-immunity-antibodies.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/25/health/coronavirus-immunity-antibodies.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/25/health/coronavirus-immunity-antibodies.html" rel="standout"/>
<description>
It’s likely you can, at least for some period of time. That is opening new opportunities for testing and treatment.
</description>
<dc:creator>Apoorva Mandavilli</dc:creator>
<pubDate>Thu, 26 Mar 2020 00:35:02 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">your-feed-science</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Tests (Medical)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Antibodies</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Immune System</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Blood</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">China</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">England</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">New York State</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">United States</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Vaccination and Immunization</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/25/science/25VIRUS-ANTIBODIES1/25VIRUS-ANTIBODIES1-moth.jpg" width="151"/>
<media:credit>Xinhua/Alamy Live News</media:credit>
<media:description>
A recovered coronavirus patient donated plasma at the Hainan Blood Center in Haikou, China, in February.
</media:description>
</item>
<item>
<title>
Coronavirus Symptoms Full List: What Are They? Is There a Cure?
</title>
<link>
https://www.nytimes.com/article/symptoms-coronavirus.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/article/symptoms-coronavirus.html
</guid>
<atom:link href="https://www.nytimes.com/article/symptoms-coronavirus.html" rel="standout"/>
<description>
Here’s what to do if you feel sick and are worried it may be the coronavirus.
</description>
<dc:creator>The New York Times</dc:creator>
<pubDate>Wed, 25 Mar 2020 19:11:00 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Quarantines</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Tests (Medical)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Ventilators (Medical)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Epidemics</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Influenza</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Pneumonia</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Centers for Disease Control and Prevention</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">World Health Organization</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/03/us/03virus-symptoms-image/03virus-symptoms-image-moth-v2.jpg" width="151"/>
<media:credit>Brittainy Newman/The New York Times</media:credit>
<media:description>
Experts have urged people not to panic over the coronavirus. “The mantra is, ‘Keep calm and carry on,’” said Dr. Marguerite Neill, an infectious disease expert at Brown University.
</media:description>
</item>
<item>
<title>
Coronavirus Doesn’t Slow Trump’s Regulatory Rollbacks
</title>
<link>
https://www.nytimes.com/2020/03/25/climate/coronavirus-environmental-regulations-trump.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/25/climate/coronavirus-environmental-regulations-trump.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/25/climate/coronavirus-environmental-regulations-trump.html" rel="standout"/>
<description>
The administration is pushing ahead with efforts to roll back environmental protections and impose new limits on how science can be used for making rules.
</description>
<dc:creator>Lisa Friedman</dc:creator>
<pubDate>Wed, 25 Mar 2020 19:34:42 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Global Warming</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Environment</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Greenhouse Gas Emissions</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">United States Politics and Government</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Regulation and Deregulation of Industry</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Epidemics</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Environmental Protection Agency</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Trump, Donald J</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/25/climate/25CLI-REGULATIONS1/25CLI-REGULATIONS1-moth.jpg" width="151"/>
<media:credit>Justin Sullivan/Getty Images</media:credit>
<media:description>
An oil-covered bird in Goleta, Calif., after a spill there in 2015. 
</media:description>
</item>
<item>
<title>
Gilead Withdraws Request for Special Orphan Status on Experimental Coronavirus Treatment
</title>
<link>
https://www.nytimes.com/2020/03/25/health/gilead-coronavirus-orphan-drug.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/25/health/gilead-coronavirus-orphan-drug.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/25/health/gilead-coronavirus-orphan-drug.html" rel="standout"/>
<description>
Critics said the company was profiteering from the coronavirus pandemic by seeking tax and monopoly benefits under a program intended to encourage drug development for rare diseases.
</description>
<dc:creator>Katie Thomas</dc:creator>
<pubDate>Wed, 25 Mar 2020 22:24:40 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Drugs (Pharmaceuticals)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Gilead Sciences Inc</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Food and Drug Administration</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Remdesivir (Drug)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">your-feed-healthcare</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/25/science/25VIRUS-GILEAD1/25VIRUS-GILEAD1-moth.jpg" width="151"/>
<media:credit>David Paul Morris/Bloomberg</media:credit>
</item>
<item>
<title>Live Coronavirus Updates and Coverage</title>
<link>
https://www.nytimes.com/2020/03/25/world/coronavirus-news-live.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/25/world/coronavirus-news-live.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/25/world/coronavirus-news-live.html" rel="standout"/>
<description>
Gov. Andrew Cuomo said there were early signs that New York’s restrictions on gatherings could be slowing the virus but that more needed to be done in New York City.
</description>
<pubDate>Thu, 26 Mar 2020 07:47:18 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Stimulus (Economic)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Cuomo, Andrew M</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Trump, Donald J</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Modi, Narendra</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Europe</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">New York City</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">India</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/03/world/coronavirus-map-promo/coronavirus-map-promo-moth-v192.png" width="151"/>
<media:credit>The New York Times</media:credit>
</item>
<item>
<title>
Medicare Is Updating Coverage to Help in the Coronavirus Crisis
</title>
<link>
https://www.nytimes.com/2020/03/24/business/coronavirus-medicare-elderly.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/24/business/coronavirus-medicare-elderly.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/24/business/coronavirus-medicare-elderly.html" rel="standout"/>
<description>
With its beneficiaries among the most at risk for Covid-19, the agency is relaxing some rules.
</description>
<dc:creator>Mark Miller</dc:creator>
<pubDate>Wed, 25 Mar 2020 15:33:44 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Medicare</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Elderly</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Drugs (Pharmaceuticals)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Health Insurance and Managed Care</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Long-Term Care Insurance</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Tests (Medical)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Social Security (US)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Retirement</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Centers for Medicare and Medicaid Services</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/24/business/24RETIRING-01/24RETIRING-01-moth-v2.jpg" width="151"/>
<media:credit>John Moore/Getty Images</media:credit>
<media:description>
Health care workers handling a coronavirus test at a drive-through station in Stamford, Conn.
</media:description>
</item>
<item>
<title>
Greta Thunberg Says It’s ‘Extremely Likely’ That She Had Coronavirus
</title>
<link>
https://www.nytimes.com/2020/03/24/climate/greta-thunberg-coronavirus-covid.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/24/climate/greta-thunberg-coronavirus-covid.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/24/climate/greta-thunberg-coronavirus-covid.html" rel="standout"/>
<description>
The Swedish climate activist said she was recovering and urged young people to stay at home, even if they don’t feel sick, to protect those who are more vulnerable.
</description>
<dc:creator>Somini Sengupta</dc:creator>
<pubDate>Wed, 25 Mar 2020 00:06:05 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Global Warming</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Environment</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Thunberg, Greta</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/24/climate/24CLI-GRETAVIRUS1/24CLI-GRETAVIRUS1-moth.jpg" width="151"/>
<media:credit>Virginia Mayo/Associated Press</media:credit>
<media:description>
Greta Thunberg at a meeting of the European Council in Brussels on March 5.
</media:description>
</item>
<item>
<title>Letter of Recommendation: Bog Bodies</title>
<link>
https://www.nytimes.com/2020/03/24/magazine/letter-of-recommendation-bog-bodies.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/24/magazine/letter-of-recommendation-bog-bodies.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/24/magazine/letter-of-recommendation-bog-bodies.html" rel="standout"/>
<description>
Mummified bodies from the bogs of Northern Europe reveal what the past can and cannot teach us.
</description>
<dc:creator>Robert Rubsam</dc:creator>
<pubDate>Tue, 24 Mar 2020 15:55:44 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Mummies and Mummification</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Museums</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Murders, Attempted Murders and Homicides</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Europe</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Dublin (Ireland)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">National Museum of Ireland</category>
</item>
<item>
<title>
Some Doctors Stockpile Trial Coronavirus Drugs for Themselves, States Say
</title>
<link>
https://www.nytimes.com/2020/03/24/business/doctors-buying-coronavirus-drugs.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/24/business/doctors-buying-coronavirus-drugs.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/24/business/doctors-buying-coronavirus-drugs.html" rel="standout"/>
<description>
The stockpiling has become so worrisome that pharmacy boards in many states have issued emergency restrictions on how the drugs can be dispensed.
</description>
<dc:creator>Ellen Gabler</dc:creator>
<pubDate>Tue, 24 Mar 2020 22:41:41 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Stockpiling</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Drugs (Pharmaceuticals)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Drugstores</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Doctors</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Ethics and Official Misconduct</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Regulation and Deregulation of Industry</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Idaho</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Kentucky</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Ohio</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Nevada</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">North Carolina</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Oklahoma</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Texas</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Chloroquine (Drug)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Hydroxychloroquine (Drug)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Azithromycin (Drug)</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/24/multimedia/24virus-prescribe-2/24virus-prescribe-2-moth-v2.jpg" width="151"/>
<media:credit>Ramin Rahimian for The New York Times</media:credit>
<media:description>
A handful of state pharmacy boards have issued emergency restrictions on how the drugs can be dispensed.
</media:description>
</item>
<item>
<title>
Coronavirus in China: Hubei Province Lockdown Eased After 2 Months
</title>
<link>
https://www.nytimes.com/2020/03/24/world/asia/china-coronavirus-lockdown-hubei.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/24/world/asia/china-coronavirus-lockdown-hubei.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/24/world/asia/china-coronavirus-lockdown-hubei.html" rel="standout"/>
<description>
The province will let people outside Wuhan leave for the first time since late January. Despite the official sign of confidence, many fear the virus is still spreading silently.
</description>
<dc:creator>Vivian Wang and Sui-Lee Wee</dc:creator>
<pubDate>Tue, 24 Mar 2020 14:42:44 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Epidemics</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">China</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Hubei Province (China)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Wuhan (China)</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/24/world/24china-virus01/24china-virus01-moth.jpg" width="151"/>
<media:credit>Agence France-Presse — Getty Images</media:credit>
<media:description>
Workers with containers of disinfectant preparing on Tuesday to spray the central railway station in Wuhan, the city in Hubei Province that emerged in January as the epicenter of the coronavirus outbreak.
</media:description>
</item>
<item>
<title>A Medical Class ‘Minted by the Pandemic’</title>
<link>
https://www.nytimes.com/2020/03/24/health/medical-school-coronavirus-students.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/24/health/medical-school-coronavirus-students.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/24/health/medical-school-coronavirus-students.html" rel="standout"/>
<description>
Across the nation, medical students are graduating directly into the path of an epic health crisis.
</description>
<dc:creator>Emma Goldberg</dc:creator>
<pubDate>Wed, 25 Mar 2020 15:32:20 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Medical Schools</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Doctors</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Shortages</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Hospitals</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Labor and Jobs</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Covid-19 Student Service Corps</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">your-feed-science</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">your-feed-health</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/24/science/24VIRUS-MEDSCHOOLS1/24VIRUS-MEDSCHOOLS1-moth-v2.jpg" width="151"/>
<media:credit>Stephen Speranza for The New York Times</media:credit>
<media:description>
David Edelman, a fifth-year medical student at Columbia University, helped establish the Covid-19 Student Service Corps to support healthcare providers. “There’s so much to be done,” he said.
</media:description>
</item>
<item>
<title>You’ve Got Mail. Will You Get the Coronavirus?</title>
<link>
https://www.nytimes.com/2020/03/24/health/coronavirus-mail-packages.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/24/health/coronavirus-mail-packages.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/24/health/coronavirus-mail-packages.html" rel="standout"/>
<description>
The practice of disinfecting mail dates back to the invention of quarantine. There’s little evidence it needs to be invoked today.
</description>
<dc:creator>Nicola Twilley</dc:creator>
<pubDate>Tue, 24 Mar 2020 14:40:50 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Postal Service and Post Offices</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Delivery Services</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">SARS (Severe Acute Respiratory Syndrome)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Hygiene and Cleanliness</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Preventive Medicine</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Plague</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Epidemics</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Banking and Financial Institutions</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Textiles</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Centers for Disease Control and Prevention</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Fedex Corporation</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Postal Service (US)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">United Parcel Service Inc</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">your-feed-science</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">your-feed-health</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/24/science/24VIRUS-MAIL1/24VIRUS-MAIL1-moth.jpg" width="151"/>
<media:credit>Jordan Gale for The New York Times</media:credit>
<media:description>A mail carrier in Manhattan on Monday.</media:description>
</item>
<item>
<title>How to See the World When You’re Stuck at Home</title>
<link>
https://www.nytimes.com/2020/03/24/travel/coronavirus-virtual-travel.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/24/travel/coronavirus-virtual-travel.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/24/travel/coronavirus-virtual-travel.html" rel="standout"/>
<description>
When you are quarantined or cancel your trip, you can still go on a journey. The secret? The author Reif Larsen says it’s Google Street View.
</description>
<dc:creator>Reif Larsen</dc:creator>
<pubDate>Tue, 24 Mar 2020 15:25:27 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Travel and Vacations</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Computers and the Internet</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="">Virtual Travel</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Google Street View</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/29/travel/29Virtual-travel/29Virtual-travel-moth.jpg" width="151"/>
<media:credit>Nathan Asplund</media:credit>
</item>
<item>
<title>
As Fleeing New Yorkers Are Told to Quarantine, Trump Says U.S. Should Reopen ‘by Easter’
</title>
<link>
https://www.nytimes.com/2020/03/24/world/coronavirus-news-live-updates.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/24/world/coronavirus-news-live-updates.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/24/world/coronavirus-news-live-updates.html" rel="standout"/>
<description>
Fleeing New Yorkers told to quarantine as Trump says the U.S. should reopen ‘by Easter.’
</description>
<pubDate>Wed, 25 Mar 2020 11:40:52 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">States (US)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Centers for Disease Control and Prevention</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Trump, Donald J</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Birx, Deborah L</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">China</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">New York City</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Great Britain</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">California</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/03/world/coronavirus-map-promo/coronavirus-map-promo-moth-v192.png" width="151"/>
<media:credit>The New York Times</media:credit>
</item>
<item>
<title>
Coronavirus Patients in Limbo as Gilead Suspends Emergency Drug Access
</title>
<link>
https://www.nytimes.com/2020/03/23/health/coronavirus-drugs-remdesivir.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/23/health/coronavirus-drugs-remdesivir.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/23/health/coronavirus-drugs-remdesivir.html" rel="standout"/>
<description>
The company says it will switch to a broader approach for its experimental drug, remdesivir. But it was overwhelmed by demand for a potential treatment promoted by President Trump.
</description>
<dc:creator>Katie Thomas</dc:creator>
<pubDate>Tue, 24 Mar 2020 14:51:16 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Drugs (Pharmaceuticals)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Remdesivir (Drug)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Clinical Trials</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Gilead Sciences Inc</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Trump, Donald J</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">United States Politics and Government</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">your-feed-healthcare</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/23/science/23VIRUS-DRUGS1/23VIRUS-DRUGS1-moth.jpg" width="151"/>
<media:credit>David Paul Morris/Bloomberg</media:credit>
<media:description>
Gilead Sciences headquarters in Foster City, Calif.
</media:description>
</item>
<item>
<title>
Medical Students, Sidelined for Now, Find New Ways to Fight Coronavirus
</title>
<link>
https://www.nytimes.com/2020/03/23/health/medical-students-coronavirus.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/23/health/medical-students-coronavirus.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/23/health/medical-students-coronavirus.html" rel="standout"/>
<description>
After medical schools ended contact with patients, disappointed students organized to collect masks, work at call centers and offer child care to health workers.
</description>
<dc:creator>Penina Krieger and Abby Goodnough</dc:creator>
<pubDate>Wed, 25 Mar 2020 00:30:44 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Medical Schools</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Doctors</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Protective Clothing and Gear</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Masks</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Ventilators (Medical)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Hospitals</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/23/science/23VIRUS-MEDICALSCHOOLS1/23VIRUS-MEDICALSCHOOLS1-moth-v2.jpg" width="151"/>
<media:credit>David Zalubowski/Associated Press</media:credit>
<media:description>
Dustin Lamb, right, a student at the University of Colorado Medical School, accepted medical supplies during a public drive in Denver on Sunday.
</media:description>
</item>
<item>
<title>
Coronavirus Makes Daily Life Confounding. Here Are Some Answers.
</title>
<link>
https://www.nytimes.com/2020/03/23/us/coronavirus-dilemmas-travel-social-distancing.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/23/us/coronavirus-dilemmas-travel-social-distancing.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/23/us/coronavirus-dilemmas-travel-social-distancing.html" rel="standout"/>
<description>
Welcome to Dilemmas, where we find solutions to your toughest quandaries.
</description>
<dc:creator>Jodi Kantor</dc:creator>
<pubDate>Wed, 25 Mar 2020 05:49:43 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Epidemics</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Ethics (Personal)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Travel and Vacations</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Shortages</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/23/us/politics/23dilemmas-l/23dilemmas-l-moth.jpg" width="151"/>
<media:credit>Mischa Richter</media:credit>
<media:description>
Lise King is a Select Board member in Provincetown, Mass., where plane after plane has been arriving in the off-season.
</media:description>
</item>
<item>
<title>
These Doctors Have Specialties. Fighting Coronavirus Wasn’t One of Them.
</title>
<link>
https://www.nytimes.com/2020/03/23/health/coronavirus-doctors-specialists.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/23/health/coronavirus-doctors-specialists.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/23/health/coronavirus-doctors-specialists.html" rel="standout"/>
<description>
The pandemic’s spread is creating new challenges for doctors who usually care primarily for patients with particular medical needs.
</description>
<dc:creator>Emma Goldberg</dc:creator>
<pubDate>Mon, 23 Mar 2020 18:37:51 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Doctors</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">United States</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Medicine and Health</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">your-feed-science</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/23/science/23VIRUS-SPECIALISTS1/23VIRUS-SPECIALISTS1-moth.jpg" width="151"/>
<media:credit>Johnathon Kelso for The New York Times</media:credit>
<media:description>
Dr. Scott Isaacs, an endocrinologist in Atlanta, said he had been barraged with calls from his diabetes patients asking about how to get tested and treated for the coronavirus.
</media:description>
</item>
<item>
<title>
Thalidomide Use Did Happen Here, These Americans Say
</title>
<link>
https://www.nytimes.com/2020/03/23/health/thalidomide-drug-pharmaceuticals-united-states.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/23/health/thalidomide-drug-pharmaceuticals-united-states.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/23/health/thalidomide-drug-pharmaceuticals-united-states.html" rel="standout"/>
<description>
They believe they were harmed in the thalidomide crisis of the 1950s and 1960s.
</description>
<dc:creator>Katie Thomas</dc:creator>
<pubDate>Mon, 23 Mar 2020 15:32:27 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Thalidomide (Drug)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Clinical Trials</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Drugs (Pharmaceuticals)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Grunenthal Group</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Sanofi SA</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Children and Childhood</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Richardson-Merrell</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">your-feed-science</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/24/science/16THALIDOMIDE-PROFILES1/00THALIDOMIDEPROFILES1-moth.jpg" width="151"/>
<media:credit>Audra Melton for The New York Times</media:credit>
</item>
<item>
<title>
The Story of Thalidomide in the U.S., Told Through Documents
</title>
<link>
https://www.nytimes.com/2020/03/23/health/thalidomide-fda-documents.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/23/health/thalidomide-fda-documents.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/23/health/thalidomide-fda-documents.html" rel="standout"/>
<description>
A trove of archival records shows how in the early 1960s the Food and Drug Administration investigated the use of a drug that caused severe birth defects.
</description>
<dc:creator>Katie Thomas</dc:creator>
<pubDate>Tue, 24 Mar 2020 19:57:33 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Thalidomide (Drug)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Birth Defects</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Advertising and Marketing</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Food and Drug Administration</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Drugs (Pharmaceuticals)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Doctors</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Clinical Trials</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Richardson-Merrell</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Smith, Kline & French</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">your-feed-science</category>
</item>
<item>
<title>
The Unseen Survivors of Thalidomide Want to Be Heard
</title>
<link>
https://www.nytimes.com/2020/03/23/health/thalidomide-survivors-usa.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/23/health/thalidomide-survivors-usa.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/23/health/thalidomide-survivors-usa.html" rel="standout"/>
<description>
The U.S. was supposed to have escaped the devastation of a drug that caused birth defects in babies overseas. This is the almost forgotten story of its toll in America.
</description>
<dc:creator>Katie Thomas</dc:creator>
<pubDate>Tue, 24 Mar 2020 20:01:18 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Thalidomide (Drug)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Drugs (Pharmaceuticals)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Clinical Trials</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Food and Drug Administration</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Grunenthal Group</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Kelsey, Frances Oldham</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">GlaxoSmithKline PLC</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Suits and Litigation (Civil)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Babies and Infants</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Morning Sickness</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Anxiety and Stress</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Birth Defects</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Pregnancy and Childbirth</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Hagens Berman Sobol Shapiro LLP</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">your-feed-science</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Sanofi SA</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/24/science/00TMIDE-babypic/merlin_130159811_6f23dc21-4c9c-4cdf-9830-06b231ded183-moth.jpg" width="151"/>
<media:credit>Jenn Ackerman for The New York Times</media:credit>
<media:description>
Carolyn Farmer Sampson holding a photo of herself from when she was just a few months old in her home in Eagan, Minn.
</media:description>
</item>
<item>
<title>
158 Million Americans Told to Stay Home, but Trump Pledges to Keep It Short
</title>
<link>
https://www.nytimes.com/2020/03/23/world/coronavirus-updates-usa-world.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/23/world/coronavirus-updates-usa-world.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/23/world/coronavirus-updates-usa-world.html" rel="standout"/>
<description>
The White House warned of an alarming spread in New York City, but the president said “our country wasn’t built to be shut down.”
</description>
<pubDate>Wed, 25 Mar 2020 16:30:37 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Olympic Games</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Federal Emergency Management Agency</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">New York City</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">China</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">United States</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Trump, Donald J</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/03/world/coronavirus-map-promo/coronavirus-map-promo-moth-v192.png" width="151"/>
<media:credit>The New York Times</media:credit>
</item>
<item>
<title>
Scientists Identify 69 Drugs to Test Against the Coronavirus
</title>
<link>
https://www.nytimes.com/2020/03/22/science/coronavirus-drugs-chloroquine.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/22/science/coronavirus-drugs-chloroquine.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/22/science/coronavirus-drugs-chloroquine.html" rel="standout"/>
<description>
Two dozen of the medicines are already under investigation. Also on the list: chloroquine, a drug used to treat malaria.
</description>
<dc:creator>Carl Zimmer</dc:creator>
<pubDate>Mon, 23 Mar 2020 03:16:04 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Drugs (Pharmaceuticals)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Proteins</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Antibiotics</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Pasteur Institute</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">World Health Organization</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Krogan, Nevan</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Mount Sinai Medical Center</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">your-feed-science</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/22/science/22virus-treatments1/22virus-treatments1-moth.jpg" width="151"/>
<media:credit>FeatureChina, via Associated Press</media:credit>
<media:description>
A worker checking the production of chloroquine phosphate in China last month. There has been “anecdotal evidence” that chloroquine, a drug used to treat malaria, might work against the coronavirus.
</media:description>
</item>
<item>
<title>
What to Do if You or a Loved One Might Have the Coronavirus
</title>
<link>
https://www.nytimes.com/2020/03/22/well/what-if-i-have-coronavirus.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/22/well/what-if-i-have-coronavirus.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/22/well/what-if-i-have-coronavirus.html" rel="standout"/>
<description>
A vast majority of those infected with the coronavirus will develop only mild to moderate symptoms. But many people remain frightened and wonder how and when to seek medical care.
</description>
<dc:creator>Tara Parker-Pope</dc:creator>
<pubDate>Mon, 23 Mar 2020 21:24:29 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Quarantines</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Fever</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Hospitals</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Bathrooms and Toilets</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Emergency Medical Treatment</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Hygiene and Cleanliness</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Centers for Disease Control and Prevention</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">World Health Organization</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/22/us/22virus-sickpatients-1/merlin_170707854_c3f99471-812b-40af-a46d-65d2ad8a7ea1-moth.jpg" width="151"/>
<media:credit>Johnny Milano for The New York Times</media:credit>
<media:description>
A healthcare provider giving a coronavirus test at a drive-through in Jericho, N.Y., on Wednesday.
</media:description>
</item>
<item>
<title>
Daniel S. Greenberg, Science Journalist and Iconoclast, Dies at 88
</title>
<link>
https://www.nytimes.com/2020/03/22/science/daniel-s-greenberg-dead.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/22/science/daniel-s-greenberg-dead.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/22/science/daniel-s-greenberg-dead.html" rel="standout"/>
<description>
He challenged peers who acted as “cheerleaders” for science, and influenced government science policy with a Washington-based newsletter.
</description>
<dc:creator>Cornelia Dean</dc:creator>
<pubDate>Thu, 26 Mar 2020 05:27:30 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Science and Technology</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">United States Politics and Government</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">News and News Media</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Deaths (Obituaries)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Breakthrough Institute</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Science (Journal)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Greenberg, Daniel S</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Science & Government Report</category>
</item>
<item>
<title>Warmer Weather May Slow, but Not Halt, Coronavirus</title>
<link>
https://www.nytimes.com/2020/03/22/health/warm-weather-coronavirus.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/22/health/warm-weather-coronavirus.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/22/health/warm-weather-coronavirus.html" rel="standout"/>
<description>
Nature may help diminish the pandemic if aggressive measures to control the spread of infections continue, experts say. That doesn’t mean the virus won’t return.
</description>
<dc:creator>Knvul Sheikh and Ernesto Londoño</dc:creator>
<pubDate>Mon, 23 Mar 2020 20:10:50 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Quarantines</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Temperature</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Research</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Massachusetts Institute of Technology</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">your-feed-healthcare</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/22/multimedia/22virus-weather/22virus-weather-moth.jpg" width="151"/>
<media:credit>Federico Rios for The New York Times</media:credit>
<media:description>
Empty streets of Bogotá during mandatory isolation on Saturday. 
</media:description>
</item>
<item>
<title>
As State Pleas Mount, Trump Outlines Some Federal Action; Senate Democrats Block Stimulus Package
</title>
<link>
https://www.nytimes.com/2020/03/22/world/coronavirus-updates-world-usa.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/22/world/coronavirus-updates-world-usa.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/22/world/coronavirus-updates-world-usa.html" rel="standout"/>
<description>
New York State has 15,000 cases, roughly 5 percent of the pandemic’s growing global total. Senator Rand Paul tested positive for the coronavirus.
</description>
<pubDate>Wed, 25 Mar 2020 11:27:59 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/22/us/22-live-briefing-schumer/22-live-briefing-schumer-moth.jpg" width="151"/>
<media:credit>Erin Scott for The New York Times</media:credit>
<media:description>
Senator Chuck Schumer speaking to reporters at the Capitol on Sunday.
</media:description>
</item>
<item>
<title>
The Hardest Questions Doctors May Face: Who Will Be Saved? Who Won’t?
</title>
<link>
https://www.nytimes.com/2020/03/21/us/coronavirus-medical-rationing.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/21/us/coronavirus-medical-rationing.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/21/us/coronavirus-medical-rationing.html" rel="standout"/>
<description>
As coronavirus infections explode in the U.S., hospitals could be forced to make harrowing choices if pushed to the brink. Planning is already underway.
</description>
<dc:creator>Sheri Fink</dc:creator>
<pubDate>Sun, 22 Mar 2020 15:39:44 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Hospitals</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Rationing and Allocation of Resources</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Ventilators (Medical)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Epidemics</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Quarantines</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Shortages</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">California</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">New York City</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">New York State</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Washington (State)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">United States</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Ethics and Official Misconduct</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Doctors</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/22/multimedia/22virus-choices1/20virus-choices-01-moth.jpg" width="151"/>
<media:credit>Grant Hindsley for The New York Times</media:credit>
<media:description>
Dr. Laura Evans outside the University of Washington Medical Center in Seattle, where she is helping lead the response to the coronavirus outbreak.
</media:description>
</item>
<item>
<title>
As Natural Disasters Strike, a New Fear: Relief Shelters May Spread Virus
</title>
<link>
https://www.nytimes.com/2020/03/21/climate/virus-fema-disaster-aid-shelter.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/21/climate/virus-fema-disaster-aid-shelter.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/21/climate/virus-fema-disaster-aid-shelter.html" rel="standout"/>
<description>
The Red Cross has issued new guidelines for its shelters, screening people for symptoms and keeping bed six feet apart. That strategy will soon be tested.
</description>
<dc:creator>Christopher Flavelle</dc:creator>
<pubDate>Sat, 21 Mar 2020 09:00:15 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Global Warming</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Environment</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Greenhouse Gas Emissions</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Disasters and Emergencies</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Evacuations and Evacuees</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Floods</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">American Red Cross</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Federal Emergency Management Agency</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Hawaii</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Utah</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/20/climate/20CLI-SHELTER1/20CLI-SHELTER1-moth.jpg" width="151"/>
<media:credit>
John Burgess/The Press Democrat, via Associated Press
</media:credit>
<media:description>
Wildfire evacuees in California in October. The Red Cross now specifies that cots must be six feet apart.
</media:description>
</item>
<item>
<title>
Pences Test Negative; States Warn That Supplies Are Dwindling
</title>
<link>
https://www.nytimes.com/2020/03/21/world/coronavirus-updates-usa-world.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/21/world/coronavirus-updates-usa-world.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/21/world/coronavirus-updates-usa-world.html" rel="standout"/>
<description>
Lawmakers negotiated a rescue package as recession fears loomed. One in four Americans is being asked to stay indoors.
</description>
<pubDate>Wed, 25 Mar 2020 11:28:40 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/21/us/politics/21dc-virus-trump3/21dc-virus-trump3-moth-v2.jpg" width="151"/>
<media:credit>Al Drago for The New York Times</media:credit>
<media:description>
President Donald J. Trump speaks during a coronavirus task force press briefing at the White House in Washington today.
</media:description>
</item>
<item>
<title>
How the Coronavirus Crisis May Hinder Efforts to Fight Wildfires
</title>
<link>
https://www.nytimes.com/2020/03/20/climate/coronavirus-firefighters-wildfires.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/20/climate/coronavirus-firefighters-wildfires.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/20/climate/coronavirus-firefighters-wildfires.html" rel="standout"/>
<description>
As many firefighters should be preparing for wildfire season, they are grappling with the fact that how they live and work could spread the coronavirus.
</description>
<dc:creator>Kendra Pierre-Louis</dc:creator>
<pubDate>Fri, 20 Mar 2020 23:15:04 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Wildfires</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Fires and Firefighters</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Forests and Forestry</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Bureau of Land Management</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/20/climate/20CLI-FIREFIGHTERS1/20CLI-FIREFIGHTERS1-moth.jpg" width="151"/>
<media:credit>
Jose Carlos Fajardo/San Jose Mercury News, via Associated Press
</media:credit>
<media:description>A grass fire near Knightsen, Calif., in 2019.</media:description>
</item>
<item>
<title>
Trump’s Embrace of Unproven Drugs to Treat Coronavirus Defies Science
</title>
<link>
https://www.nytimes.com/2020/03/20/health/coronavirus-chloroquine-trump.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/20/health/coronavirus-chloroquine-trump.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/20/health/coronavirus-chloroquine-trump.html" rel="standout"/>
<description>
Doctors and patients also worry that the president’s rosy outlook for the treatments will exacerbate shortages of old malaria drugs relied on by patients with lupus and other debilitating conditions.
</description>
<dc:creator>Katie Thomas and Denise Grady</dc:creator>
<pubDate>Sat, 21 Mar 2020 15:40:48 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Drugs (Pharmaceuticals)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Trump, Donald J</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">United States Politics and Government</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Fauci, Anthony S</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">
National Institute of Allergy and Infectious Diseases
</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Lupus Erythematosus</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Rheumatoid Arthritis</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Clinical Trials</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Shortages</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">your-feed-healthcare</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/20/science/20VIRUS-DRUGS2/20VIRUS-DRUGS2-moth.jpg" width="151"/>
<media:credit>Erin Schaff/The New York Times</media:credit>
<media:description>
President Donald Trump and Dr. Anthony Fauci, right, the task force’s infectious disease expert, at a press briefing at the White House on Friday. 
</media:description>
</item>
<item>
<title>Coronavirus Test: What My Experience Was Like</title>
<link>
https://www.nytimes.com/2020/03/20/health/coronavirus-tests.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/20/health/coronavirus-tests.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/20/health/coronavirus-tests.html" rel="standout"/>
<description>
Here are some of the experiences and bits of advice from those who have been able to get tested.
</description>
<dc:creator>Alexandra E. Petri</dc:creator>
<pubDate>Fri, 20 Mar 2020 21:59:14 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Tests (Medical)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Fever</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Quarantines</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Mobile Applications</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">United States</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/20/world/20virus-lives-testing/merlin_170785716_5eb36f4b-857d-418e-9881-42fd7364efca-moth.jpg" width="151"/>
<media:credit>Bryan Anselm for The New York Times</media:credit>
<media:description>
Members of the National Guard at a testing site at Bergen County Community College in Paramus, N.J., on Friday.
</media:description>
</item>
<item>
<title>
As Coronavirus Looms, Mask Shortage Gives Rise to Promising Approach
</title>
<link>
https://www.nytimes.com/2020/03/20/health/coronavirus-masks-reuse.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/20/health/coronavirus-masks-reuse.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/20/health/coronavirus-masks-reuse.html" rel="standout"/>
<description>
Surgical masks are supposed to be used just once. But doctors in Nebraska are attempting a novel experiment as gear shortages arise.
</description>
<dc:creator>Gina Kolata</dc:creator>
<pubDate>Sun, 22 Mar 2020 13:14:33 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Shortages</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Protective Clothing and Gear</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Masks</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Ultraviolet Light</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Epidemics</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Hospitals</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Medical Devices</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">SARS (Severe Acute Respiratory Syndrome)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Centers for Disease Control and Prevention</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Nebraska Medical Center (Omaha, Neb)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">University of Nebraska</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Nebraska</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/22/science/22VIRUS-MASKS1/20VIRUS-MASKS1-moth.jpg" width="151"/>
<media:credit>Calla Kessler/The New York Times</media:credit>
<media:description>
Ultraviolet light is being used to decontaminate medical supplies at the University of Nebraska Medical Center in Omaha. Staff began using the first decontaminated gear on Thursday.
</media:description>
</item>
<item>
<title>In Italy, Coronavirus Takes a Higher Toll on Men</title>
<link>
https://www.nytimes.com/2020/03/20/health/coronavirus-italy-men-risk.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/20/health/coronavirus-italy-men-risk.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/20/health/coronavirus-italy-men-risk.html" rel="standout"/>
<description>
Being male may be a risk factor for illness, just as being older is, experts say.
</description>
<dc:creator>Roni Caryn Rabin</dc:creator>
<pubDate>Fri, 20 Mar 2020 21:30:59 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">your-feed-science</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Women and Girls</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Deaths (Fatalities)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Men and Boys</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Epidemics</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Immune System</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">your-feed-health</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/20/science/20VIRUS-MEN1/20VIRUS-MEN1-moth-v2.jpg" width="151"/>
<media:credit>Andreas Solaro/Agence France-Presse — Getty Images</media:credit>
<media:description>
Medical workers ushered in a patient to the newly-built Columbus Covid 2 wing of the Agostino Gemelli University Hospital in Rome this week.
</media:description>
</item>
<item>
<title>A Different Way to Chart the Spread of Coronavirus</title>
<link>
https://www.nytimes.com/2020/03/20/health/coronavirus-data-logarithm-chart.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/20/health/coronavirus-data-logarithm-chart.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/20/health/coronavirus-data-logarithm-chart.html" rel="standout"/>
<description>
Those skyrocketing curves tell an alarming story. But logarithmic graphs can help reveal when the pandemic begins to slow.
</description>
<dc:creator>Kenneth Chang</dc:creator>
<pubDate>Fri, 20 Mar 2020 19:09:42 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Italy</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Mathematics</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Research</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">United States</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/20/science/virus-log-chart-1584728689795/virus-log-chart-1584728689795-moth.jpg" width="151"/>
</item>
<item>
<title>
What’s Happening to the Monarch Butterfly Population?
</title>
<link>
https://www.nytimes.com/2020/03/20/science/monarch-butterfly.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/20/science/monarch-butterfly.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/20/science/monarch-butterfly.html" rel="standout"/>
<description>
“Something’s going on in early spring,” a professor said, and researchers are trying to solve the mystery.
</description>
<dc:creator>Karen Weintraub</dc:creator>
<pubDate>Fri, 20 Mar 2020 14:05:00 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Butterflies and Moths</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Endangered and Extinct Species</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Research</category>
<category domain="">monarch butterfly</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Nature Communications (Journal)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">your-feed-science</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/02/21/science/00TB-BUTTERFLIES02/00TB-BUTTERFLIES02-moth.jpg" width="151"/>
<media:credit>George Rose/Getty Images</media:credit>
<media:description>
Thousands of monarch butterflies gather in the eucalyptus trees at the Pismo State Beach Monarch Butterfly Grove.
</media:description>
</item>
<item>
<title>
Coronavirus May Keep California’s Nursing Students From Graduating
</title>
<link>
https://www.nytimes.com/2020/03/20/health/coronavirus-nurses-healthcare.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/20/health/coronavirus-nurses-healthcare.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/20/health/coronavirus-nurses-healthcare.html" rel="standout"/>
<description>
As many as 14,000 students may be unable to complete their rotations, making them unavailable to help.
</description>
<dc:creator>Emma Goldberg</dc:creator>
<pubDate>Sun, 22 Mar 2020 19:31:18 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Nursing and Nurses</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Shortages</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Epidemics</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Hospitals</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">California</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">your-feed-health</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">your-feed-science</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/20/science/20VIRUS-NURSES1/20VIRUS-NURSES1-moth-v2.jpg" width="151"/>
<media:credit>Talia Herman for The New York Times</media:credit>
<media:description>
Sharon Goldfarb, a nurse educator at the College of Marin in Kentfield, Calif. “We’re looking at 14,000 nursing students not graduating in the time of most dire need I’ve seen in my years as a professional nurse,” she said.
</media:description>
</item>
<item>
<title>
‘None of Us Have a Fear of Corona’: The Faithful at an Outbreak’s Center
</title>
<link>
https://www.nytimes.com/2020/03/20/world/asia/coronavirus-malaysia-muslims-outbreak.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/20/world/asia/coronavirus-malaysia-muslims-outbreak.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/20/world/asia/coronavirus-malaysia-muslims-outbreak.html" rel="standout"/>
<description>
A gathering of 16,000 at a Malaysian mosque became the pandemic’s largest known vector in Southeast Asia, spreading the coronavirus to half a dozen countries.
</description>
<dc:creator>Hannah Beech</dc:creator>
<pubDate>Fri, 20 Mar 2020 17:31:09 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Religion and Belief</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Quarantines</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Muslims and Islam</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Mosques</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Rohingya (Ethnic Group)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Pew Research Center</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Tablighi Jamaat</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">
Shincheonji Church of Jesus the Temple of the Tabernacle of the Testimony
</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Brunei</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Cambodia</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Flores (Indonesia)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Indonesia</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Malaysia</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Myanmar</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Singapore</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">South Sulawesi (Indonesia)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Southeast Asia</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/20/world/20virus-mosque-1/20virus-mosque-1-moth-v2.jpg" width="151"/>
<media:credit>Jes Aznar for The New York Times</media:credit>
<media:description>
A mosque in the Philippines run by Tablighi Jamaat, an Islamic missionary movement. A Tablighi Jamaat gathering in Malaysia has been linked to hundreds of coronavirus infections.
</media:description>
</item>
<item>
<title>
Young Adults Come to Grips With Coronavirus Health Risks
</title>
<link>
https://www.nytimes.com/2020/03/20/health/coronavirus-millennials-young-adults.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/20/health/coronavirus-millennials-young-adults.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/20/health/coronavirus-millennials-young-adults.html" rel="standout"/>
<description>
It can be a serious disease for younger people, and many millennials have chronic physical and mental health conditions.
</description>
<dc:creator>Roni Caryn Rabin</dc:creator>
<pubDate>Fri, 20 Mar 2020 14:15:04 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Millennial Generation</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Generation X</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Mental Health and Disorders</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Medicine and Health</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Youth</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Quarantines</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">United States</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">your-feed-science</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/19/science/19VIRUS-MILLENNIALS-promo/19VIRUS-MILLENNIALS-promo-moth.jpg" width="151"/>
<media:credit>Brandon Thibodeaux for The New York Times</media:credit>
</item>
<item>
<title>
Can't Get Tested for Covid-19? Maybe You're in the Wrong Country
</title>
<link>
https://www.nytimes.com/2020/03/20/world/europe/coronavirus-testing-world-countries-cities-states.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/20/world/europe/coronavirus-testing-world-countries-cities-states.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/20/world/europe/coronavirus-testing-world-countries-cities-states.html" rel="standout"/>
<description>
Decisions and blunders made months ago have caused testing disparities worldwide. The science, it turns out, was the easy part.
</description>
<dc:creator>Matt Apuzzo and Selam Gebrekidan</dc:creator>
<pubDate>Fri, 20 Mar 2020 13:35:59 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Tests (Medical)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Politics and Government</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Epidemics</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Laboratories and Scientific Equipment</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Centers for Disease Control and Prevention</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Tedros Adhanom Ghebreyesus</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Australia</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">France</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Italy</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Singapore</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">South Korea</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/19/world/19virus-test001-copy/19virus-test001-copy-moth-v2.jpg" width="151"/>
<media:credit>Jim Huylebroek for The New York Times</media:credit>
<media:description>
The Afghan-Japan Communicable Disease Hospital in Kabul, Afghanistan. People returning from Iran had come in hopes of testing, but most were sent home and advised to self-isolate.
</media:description>
</item>
<item>
<title>
Smile? The Results From the 2020 World Happiness Report Are In
</title>
<link>
https://www.nytimes.com/2020/03/20/world/europe/world-happiness-report.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/20/world/europe/world-happiness-report.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/20/world/europe/world-happiness-report.html" rel="standout"/>
<description>
The Finns, known for downplaying their emotions, are the happiest people in the world. Do they have something to teach us about how to respond to the pandemic?
</description>
<dc:creator>Maria Cramer</dc:creator>
<pubDate>Fri, 20 Mar 2020 13:27:13 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Happiness</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">United Nations</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Polls and Public Opinion</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Finland</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Nordic Countries</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/17/world/00xp-happiness/00xp-happiness-moth.jpg" width="151"/>
<media:credit>Lehtikuva, via Reuters</media:credit>
<media:description>
Revelers wore garlands of flowers to celebrate the summer solstice in Helsinki, Finland, in 2018.
</media:description>
</item>
<item>
<title>
Senate Debates $1 Trillion Rescue Plan; States Tell People to Stay Indoors
</title>
<link>
https://www.nytimes.com/2020/03/20/world/coronavirus-news-usa-world.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/20/world/coronavirus-news-usa-world.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/20/world/coronavirus-news-usa-world.html" rel="standout"/>
<description>
New Jersey, Connecticut and Illinois were preparing to issue restrictions like California and New York, and the U.S. was set to close its borders with Mexico and Canada.
</description>
<pubDate>Wed, 25 Mar 2020 11:28:40 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">California</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Italy</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">China</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/03/world/coronavirus-map-promo/coronavirus-map-promo-moth-v192.png" width="151"/>
<media:credit>The New York Times</media:credit>
</item>
<item>
<title>
Coronavirus Delays Work on NASA’s Moon Rocket and Capsule
</title>
<link>
https://www.nytimes.com/2020/03/19/science/nasa-coronavirus-sls-rocket-moon.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/19/science/nasa-coronavirus-sls-rocket-moon.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/19/science/nasa-coronavirus-sls-rocket-moon.html" rel="standout"/>
<description>
Work will be suspended at two NASA centers, a setback that could end hopes for sending astronauts back to the moon in 2024.
</description>
<dc:creator>Kenneth Chang</dc:creator>
<pubDate>Sat, 21 Mar 2020 03:57:50 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">National Aeronautics and Space Administration</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Space and Astronomy</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Rocket Science and Propulsion</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Moon</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">United States Politics and Government</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Mars (Planet)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">ExoMars (Mars Rover)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Space Exploration Technologies Corp</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/19/us/politics/19nasa/merlin_166844463_3d98a402-9d6c-417a-b1bc-c4a8fd797bd4-moth.jpg" width="151"/>
<media:credit>Gerald Herbert/Associated Press</media:credit>
<media:description>
A component of NASA’s Space Launch System in January as it was being prepared for a move from the Michoud Assembly Facility in New Orleans to the Stennis Space Center in Mississippi.
</media:description>
</item>
<item>
<title>
With Minimal Evidence, Trump Asks F.D.A. to Study Malaria Drugs for Coronavirus
</title>
<link>
https://www.nytimes.com/2020/03/19/health/coronavirus-drugs-chloroquine.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/19/health/coronavirus-drugs-chloroquine.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/19/health/coronavirus-drugs-chloroquine.html" rel="standout"/>
<description>
The use of the existing drugs against the new virus is unproven, and some shortages have already been reported.
</description>
<dc:creator>Denise Grady and Katie Thomas</dc:creator>
<pubDate>Sat, 21 Mar 2020 00:24:02 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">United States Politics and Government</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Drugs (Pharmaceuticals)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Clinical Trials</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Food and Drug Administration</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Hahn, Stephen M (1960- )</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Trump, Donald J</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Gilead Sciences Inc</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Bayer AG</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">American Society of Health-System Pharmacists</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">your-feed-healthcare</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/19/science/19VIRUS-CHLOROQUINE1/19VIRUS-CHLOROQUINE1-moth.jpg" width="151"/>
<media:credit>Feature China/Barcroft Media, via Getty Images</media:credit>
<media:description>
Production of the anti-malarial drug chloroquine last month at a factory in Nantong City in China. 
</media:description>
</item>
<item>
<title>
Expect a Soggy U.S. Flood Season, but Less Severe Than Last Year’s
</title>
<link>
https://www.nytimes.com/2020/03/19/climate/us-flood-season-forescast.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/19/climate/us-flood-season-forescast.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/19/climate/us-flood-season-forescast.html" rel="standout"/>
<description>
The National Oceanic and Atmospheric Administration expects major to moderate flooding for 23 states, but not as bad as last year’s ruinous spring.
</description>
<dc:creator>John Schwartz</dc:creator>
<pubDate>Fri, 20 Mar 2020 19:14:59 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Floods</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Global Warming</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Environment</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">National Oceanic and Atmospheric Administration</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">National Weather Service</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Army Corps of Engineers</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/19/climate/19CLI-NOAAPREDICT1/19CLI-NOAAPREDICT1-moth.jpg" width="151"/>
<media:credit>Tim Gruber for The New York Times</media:credit>
<media:description>Flooding in Hamburg, Iowa, in March 2019.</media:description>
</item>
<item>
<title>
They Fled Coronavirus in Europe. Border Agents Asked if They’d Visited China or Iran.
</title>
<link>
https://www.nytimes.com/2020/03/19/health/coronavirus-travel-ban.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/19/health/coronavirus-travel-ban.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/19/health/coronavirus-travel-ban.html" rel="standout"/>
<description>
Americans returning from Italy and Spain say border control officials didn’t screen them or tell them to isolate themselves.
</description>
<dc:creator>Roni Caryn Rabin</dc:creator>
<pubDate>Thu, 19 Mar 2020 19:29:04 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Airport Security</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Airports</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Travel Warnings</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Tests (Medical)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Travel and Vacations</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Airlines and Airplanes</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Epidemics</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Quarantines</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Trump, Donald J</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Centers for Disease Control and Prevention</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Customs and Border Protection (US)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Barcelona (Spain)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Atlanta (Ga)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">China</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">England</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Europe</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Iran</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Verona (Italy)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Great Britain</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Hong Kong</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Japan</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Lombardy (Italy)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">London (England)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Long Island (NY)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">New York City</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Newark (NJ)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">South Korea</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">South Carolina</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Rome (Italy)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">your-feed-science</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/18/science/18VIRUS-TRAVEL1/18VIRUS-TRAVEL1-moth-v2.jpg" width="151"/>
<media:credit>Mourad Balti Touati/EPA, via Shutterstock</media:credit>
<media:description>
Milan Linate Airport on March 13. Some passengers arriving to the U.S. from Milan were only asked about travel in China, though the virus is spreading rapidly across Europe.
</media:description>
</item>
<item>
<title>Climate Voters Still Want More From Biden</title>
<link>
https://www.nytimes.com/2020/03/19/climate/climate-voters-biden.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/19/climate/climate-voters-biden.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/19/climate/climate-voters-biden.html" rel="standout"/>
<description>
Joseph R. Biden Jr. keeps winning, and winning voters who say they care about climate change. But some of the most ardent climate activists still are not with him.
</description>
<dc:creator>Lisa Friedman</dc:creator>
<pubDate>Fri, 20 Mar 2020 17:30:50 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Global Warming</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Environment</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Greenhouse Gas Emissions</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Presidential Election of 2020</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">United States Politics and Government</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Hydraulic Fracturing</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Biden, Joseph R Jr</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Sanders, Bernard</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/19/climate/19CLI-BIDEN1/19CLI-BIDEN1-moth-v2.jpg" width="151"/>
<media:credit>Ruth Fremson/The New York Times</media:credit>
<media:description>
Former Vice President Joseph R. Biden Jr. at a campaign event in New Hampshire in February.
</media:description>
</item>
</channel>
  `;

const parser = new DOMParser(); // initialize dom parser
const srcDOM = parser.parseFromString(strxml, "application/xml"); 

//Now we can call DOM methods like GetElementById, etc. on scrDOM.

//Converting DOM Tree to json
console.log(xml2json(srcDOM));
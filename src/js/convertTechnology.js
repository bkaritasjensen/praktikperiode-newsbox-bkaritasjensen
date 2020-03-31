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
<title>NYT > Technology</title>
<link>https://www.nytimes.com/section/technology</link>
<atom:link href="https://rss.nytimes.com/services/xml/rss/nyt/Technology.xml" rel="self" type="application/rss+xml"/>
<description/>
<language>en-us</language>
<copyright>Copyright 2020 The New York Times Company</copyright>
<lastBuildDate>Thu, 26 Mar 2020 08:46:38 +0000</lastBuildDate>
<pubDate>Thu, 26 Mar 2020 08:46:38 +0000</pubDate>
<image>
<title>NYT > Technology</title>
<url>
https://static01.nyt.com/images/misc/NYT_logo_rss_250x40.png
</url>
<link>https://www.nytimes.com/section/technology</link>
</image>
<item>
<title>The Dos and Don’ts of Online Video Meetings</title>
<link>
https://www.nytimes.com/2020/03/25/technology/personaltech/online-video-meetings-etiquette-virus.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/25/technology/personaltech/online-video-meetings-etiquette-virus.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/25/technology/personaltech/online-video-meetings-etiquette-virus.html" rel="standout"/>
<description>
From setting a clear agenda to testing your tech setup, here’s how to make video calls more tolerable for you and your colleagues.
</description>
<dc:creator>Brian X. Chen</dc:creator>
<pubDate>Wed, 25 Mar 2020 21:06:45 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Computers and the Internet</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Telecommuting</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Mobile Applications</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Cameras</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Videophones and Videoconferencing</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Zoom Video Communications</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/25/business/25Techfix-illo/25Techfix-illo-moth.jpg" width="151"/>
<media:credit>Glenn Harvey</media:credit>
</item>
<item>
<title>
‘A Week of Snow Days’? Ha! Families Deal With Cabin Fever
</title>
<link>
https://www.nytimes.com/2020/03/25/business/coronavirus-families-cabin-fever.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/25/business/coronavirus-families-cabin-fever.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/25/business/coronavirus-families-cabin-fever.html" rel="standout"/>
<description>
As people become hostages in their own homes, hired clowns and costume nights may not be enough to maintain sanity.
</description>
<dc:creator>Nellie Bowles</dc:creator>
<pubDate>Wed, 25 Mar 2020 09:00:33 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Children and Childhood</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Quarantines</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Parenting</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Families and Family Life</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Epidemics</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Telecommuting</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Youth</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/25/business/25cabinfever/25cabinfever-moth.jpg" width="151"/>
<media:credit>Sarah Mazzetti</media:credit>
</item>
<item>
<title>
Facebook Is ‘Just Trying to Keep the Lights On’ as Traffic Soars in Pandemic
</title>
<link>
https://www.nytimes.com/2020/03/24/technology/virus-facebook-usage-traffic.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/24/technology/virus-facebook-usage-traffic.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/24/technology/virus-facebook-usage-traffic.html" rel="standout"/>
<description>
The social network is straining to deal with skyrocketing usage as its 45,000 employees work from home for the first time.
</description>
<dc:creator>Mike Isaac and Sheera Frenkel</dc:creator>
<pubDate>Tue, 24 Mar 2020 21:59:12 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Facebook Inc</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Zuckerberg, Mark E</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Social Media</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Computers and the Internet</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">News and News Media</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Telecommuting</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Instant Messaging</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Mobile Applications</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Epidemics</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Quarantines</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Advertising and Marketing</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Telephones and Telecommunications</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/24/business/00virus-facebook1/00virus-facebook1-moth.jpg" width="151"/>
<media:credit>Jason Henry for The New York Times</media:credit>
<media:description>
Facebook’s 45,000 employees have been asked to work at home during the pandemic, emptying the offices.
</media:description>
</item>
<item>
<title>
Lawmakers Question Start-Ups on At-Home Kits for Coronavirus Testing
</title>
<link>
https://www.nytimes.com/2020/03/25/technology/coronavirus-home-test.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/25/technology/coronavirus-home-test.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/25/technology/coronavirus-home-test.html" rel="standout"/>
<description>
The makers of unauthorized kits designed for consumers to collect their own saliva or throat swabs faced scrutiny from Congress.
</description>
<dc:creator>Natasha Singer</dc:creator>
<pubDate>Wed, 25 Mar 2020 19:09:50 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Tests (Medical)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Quarantines</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Start-ups</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Carbon Health Medical Group Inc</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Everlywell Inc</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Food and Drug Administration</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Nurx Inc</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Katie Porter</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Raja Krishnamoorthi</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/26/business/25virus-testing/23virus-home-testing-kits-02-moth.png" width="151"/>
<media:description>
Everlywell said it would provide its kits to health care providers and hospitals.
</media:description>
</item>
<item>
<title>Nextdoor Pivots to Neighborliness</title>
<link>
https://www.nytimes.com/2020/03/25/style/nextdoor-neighbors-coronavirus.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/25/style/nextdoor-neighbors-coronavirus.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/25/style/nextdoor-neighbors-coronavirus.html" rel="standout"/>
<description>
Homebound city dwellers are turning to a neighborhood app to connect, organize and help each other without risking physical contact.
</description>
<dc:creator>John Herrman</dc:creator>
<pubDate>Wed, 25 Mar 2020 17:21:44 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Mobile Applications</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Nextdoor.com Inc</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/26/fashion/25VIRUS-NEIZGHBORS/25VIRUS-NEIZGHBORS-moth.jpg" width="151"/>
<media:credit>James Steinberg</media:credit>
</item>
<item>
<title>How to Look Your Best on a Webcam</title>
<link>
https://www.nytimes.com/2020/03/25/realestate/coronavirus-webcam-appearance.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/25/realestate/coronavirus-webcam-appearance.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/25/realestate/coronavirus-webcam-appearance.html" rel="standout"/>
<description>
Check your lighting and be deliberate about the background you’re showing the world.
</description>
<dc:creator>Julie Lasky</dc:creator>
<pubDate>Wed, 25 Mar 2020 14:59:13 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Videophones and Videoconferencing</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Real Estate and Housing (Residential)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Interior Design and Furnishings</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Telecommuting</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Social Media</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Zoom Video Communications</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">New York City</category>
</item>
<item>
<title>
Suspect Held in South Korean Crackdown on Sexually Explicit Videos
</title>
<link>
https://www.nytimes.com/2020/03/25/world/asia/south-korea-pornography-online.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/25/world/asia/south-korea-pornography-online.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/25/world/asia/south-korea-pornography-online.html" rel="standout"/>
<description>
Cho Joo-bin was accused of blackmailing dozens of young women, including at least 16 minors, into making sexually explicit video clips of themselves.
</description>
<dc:creator>Choe Sang-Hun</dc:creator>
<pubDate>Wed, 25 Mar 2020 12:47:24 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Computers and the Internet</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Women's Rights</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Voyeurism (Criminal)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Women and Girls</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Child Pornography</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Telegram LLC</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Moon Jae-in</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">South Korea</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/25/world/25skorea-videos-1/25skorea-videos-1-moth.jpg" width="151"/>
<media:credit>Pool photo by Kim Hong-Ji</media:credit>
<media:description>
Cho Joo-bin walking out of a police station as he was transferred to the prosecutors' office for further investigation in Seoul on Wednesday.
</media:description>
</item>
<item>
<title>
Drivers Say Uber and Lyft Are Blocking Unemployment Pay
</title>
<link>
https://www.nytimes.com/2020/03/24/business/economy/coronavirus-uber-lyft-drivers-unemployment.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/24/business/economy/coronavirus-uber-lyft-drivers-unemployment.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/24/business/economy/coronavirus-uber-lyft-drivers-unemployment.html" rel="standout"/>
<description>
States like New York and California have made gig workers eligible for jobless benefits and sick days. But the companies have resisted complying.
</description>
<dc:creator>Noam Scheiber</dc:creator>
<pubDate>Wed, 25 Mar 2020 00:54:20 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Uber Technologies Inc</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Lyft Inc</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Unemployment Insurance</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Car Services and Livery Cabs</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">
Freelancing, Self-Employment and Independent Contracting
</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Paid Time Off</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Employee Fringe Benefits</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Labor and Jobs</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Unemployment</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Law and Legislation</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">California</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">New York State</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/24/business/24virus-drivers2/24virus-drivers2-moth.jpg" width="151"/>
<media:credit>Jessica Pons for The New York Times</media:credit>
<media:description>
Jerome Gage, a Lyft driver in Los Angeles who has lost most of his business, faces difficulty collecting unemployment benefits.
</media:description>
</item>
<item>
<title>
As Businesses Close, WeWork Tries to Lure Workers Back
</title>
<link>
https://www.nytimes.com/2020/03/24/business/wework-coronavirus-softbank.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/24/business/wework-coronavirus-softbank.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/24/business/wework-coronavirus-softbank.html" rel="standout"/>
<description>
The shared office space company is offering its workers $100-a-day bonuses to go to its locations amid the coronavirus crisis.
</description>
<dc:creator>Peter Eavis</dc:creator>
<pubDate>Tue, 24 Mar 2020 18:40:13 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Co-Working</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Shutdowns (Institutional)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Credit and Debt</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Stocks and Bonds</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Real Estate (Commercial)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Benchmark Capital</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">SOFTBANK Corporation</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">WeWork Companies Inc</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Neumann, Adam</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Midtown Area (Manhattan, NY)</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/24/business/24wework2/24wework2-moth-v2.jpg" width="151"/>
<media:credit>Sangsuk Sylvia Kang for The New York Times</media:credit>
<media:description>
WeWork’s shareholders are arguing over the terms of a bailout of the office space company by SoftBank.
</media:description>
</item>
<item>
<title>
Start-Ups Jump the Gun on Home Kits for Coronavirus Testing
</title>
<link>
https://www.nytimes.com/2020/03/23/technology/coronavirus-home-testing-swab-kits.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/23/technology/coronavirus-home-testing-swab-kits.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/23/technology/coronavirus-home-testing-swab-kits.html" rel="standout"/>
<description>
After a federal warning, companies have stopped marketing kits that let consumers collect their own saliva or throat swabs and send them to labs.
</description>
<dc:creator>Natasha Singer</dc:creator>
<pubDate>Tue, 24 Mar 2020 13:36:07 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Tests (Medical)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Start-ups</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Epidemics</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Medicine and Health</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Centers for Disease Control and Prevention</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Gates, Bill and Melinda, Foundation</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Carbon Health Medical Group Inc</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Nurx Inc</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">GoForward Inc</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Everlywell Inc</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Regulation and Deregulation of Industry</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/23/business/23virus-home-testing-kits-04/23virus-home-testing-kits-04-moth.jpg" width="151"/>
<media:description>
On Friday, Nurx, an online health start-up, said it had run out of self-swabbing kits for the coronavirus. Nurx later suspended sales after the F.D.A. said it had not authorized such kits.
</media:description>
</item>
<item>
<title>
The Coronavirus Revives Facebook as a News Powerhouse
</title>
<link>
https://www.nytimes.com/2020/03/23/technology/coronavirus-facebook-news.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/23/technology/coronavirus-facebook-news.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/23/technology/coronavirus-facebook-news.html" rel="standout"/>
<description>
More than half of all news consumption on Facebook in America is about the virus, according to an internal report.
</description>
<dc:creator>Kevin Roose and Gabriel J.X. Dance</dc:creator>
<pubDate>Mon, 23 Mar 2020 22:19:19 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">News and News Media</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Social Media</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Computers and the Internet</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Rumors and Misinformation</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Facebook Inc</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">New York Times</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Washington Post</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">CNN</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/23/business/23fb-news/23fb-news-moth.jpg" width="151"/>
<media:credit>Jason Henry for The New York Times</media:credit>
<media:description>
Millions of Americans are rediscovering Facebook and using it to connect to their family and friends during a time of isolation.
</media:description>
</item>
<item>
<title>
Trump Administration Gives Apple More Tariff Relief
</title>
<link>
https://www.nytimes.com/2020/03/23/technology/apple-watch-tariffs.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/23/technology/apple-watch-tariffs.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/23/technology/apple-watch-tariffs.html" rel="standout"/>
<description>
Trade officials approved the company’s request to remove tariffs on the Apple Watch.
</description>
<dc:creator>Jack Nicas</dc:creator>
<pubDate>Mon, 23 Mar 2020 19:10:01 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">International Trade and World Market</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Watches and Clocks</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Customs (Tariff)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Wearable Computing</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Apple Inc</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Cook, Timothy D</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/23/business/23apple/23apple-moth.jpg" width="151"/>
<media:credit>Haruka Sakaguchi for The New York Times</media:credit>
<media:description>
The Apple Watch, which is assembled in China, will be exempt from President Trump’s trade-war tariffs.
</media:description>
</item>
<item>
<title>
There Is a Racial Divide in Speech-Recognition Systems, Researchers Say
</title>
<link>
https://www.nytimes.com/2020/03/23/technology/speech-recognition-bias-apple-amazon-google.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/23/technology/speech-recognition-bias-apple-amazon-google.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/23/technology/speech-recognition-bias-apple-amazon-google.html" rel="standout"/>
<description>
Technology from Amazon, Apple, Google, IBM and Microsoft misidentified 35 percent of words from people who were black. White people fared much better.
</description>
<dc:creator>Cade Metz</dc:creator>
<pubDate>Mon, 23 Mar 2020 19:29:44 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Voice Recognition Systems</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Artificial Intelligence</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Discrimination</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Black People</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Whites</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Computers and the Internet</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">English Language</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Apple Inc</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Amazon.com Inc</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Google Inc</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">International Business Machines Corporation</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Microsoft Corp</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Proceedings of the National Academy of Sciences</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/19/business/00speechbias1/00speechbias1-moth.jpg" width="151"/>
<media:credit>Grant Hindsley for The New York Times</media:credit>
<media:description>
Amazon’s Echo device is one of many similar gadgets on the market. Researchers say there is a racial divide in the usefulness of speech recognition systems.
</media:description>
</item>
<item>
<title>
Big Tech Could Emerge From Coronavirus Crisis Stronger Than Ever
</title>
<link>
https://www.nytimes.com/2020/03/23/technology/coronavirus-facebook-amazon-youtube.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/23/technology/coronavirus-facebook-amazon-youtube.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/23/technology/coronavirus-facebook-amazon-youtube.html" rel="standout"/>
<description>
Amazon is hiring aggressively to meet customer demand. Traffic has soared on Facebook and YouTube. And cloud computing has become essential to home workers.
</description>
<dc:creator>
Daisuke Wakabayashi, Jack Nicas, Steve Lohr and Mike Isaac
</dc:creator>
<pubDate>Tue, 24 Mar 2020 02:34:37 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Computers and the Internet</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Mobile Applications</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Cloud Computing</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">E-Commerce</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Social Media</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Video Recordings, Downloads and Streaming</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Quarantines</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Supermarkets and Grocery Stores</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Data Centers</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Alphabet Inc</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Amazon.com Inc</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Apple Inc</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Airbnb</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Facebook Inc</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Google Inc</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Netflix Inc</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">WhatsApp Inc</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Zoom Video Communications</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">YouTube.com</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/23/business/23bigtech/23bigtech-moth.jpg" width="151"/>
<media:credit>Matt Chase</media:credit>
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
<title>
As Coronavirus Surveillance Escalates, Personal Privacy Plummets
</title>
<link>
https://www.nytimes.com/2020/03/23/technology/coronavirus-surveillance-tracking-privacy.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/23/technology/coronavirus-surveillance-tracking-privacy.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/23/technology/coronavirus-surveillance-tracking-privacy.html" rel="standout"/>
<description>
Tracking entire populations to combat the pandemic now could open the doors to more invasive forms of government snooping later.
</description>
<dc:creator>Natasha Singer and Choe Sang-Hun</dc:creator>
<pubDate>Wed, 25 Mar 2020 01:20:05 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Surveillance of Citizens by Government</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Privacy</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Quarantines</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Social Media</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Computers and the Internet</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Epidemics</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Civil Rights and Liberties</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Medicine and Health</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Singapore</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">South Korea</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">United States</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">New York State</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Italy</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Israel</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">China</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/19/business/00virus-privacy4/00virus-privacy4-moth.jpg" width="151"/>
<media:credit>Adam Dean for The New York Times</media:credit>
<media:description>
In Singapore, the Ministry of Health has posted information online about each coronavirus patient, often in stunning detail.
</media:description>
</item>
<item>
<title>‘Zoombombing’: When Video Conferences Go Wrong</title>
<link>
https://www.nytimes.com/2020/03/20/style/zoombombing-zoom-trolling.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/20/style/zoombombing-zoom-trolling.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/20/style/zoombombing-zoom-trolling.html" rel="standout"/>
<description>
As its user base rapidly expands, the videoconference app Zoom is seeing a rise in trolling and graphic content.
</description>
<dc:creator>Taylor Lorenz</dc:creator>
<pubDate>Sun, 22 Mar 2020 16:16:07 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Zoom Video Communications</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Mobile Applications</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Social Media</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Computers and the Internet</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Privacy</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Pornography</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Videophones and Videoconferencing</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">your-feed-internet-culture</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/04/20/multimedia/20zoombombing-hp/20zoombombing-hp-moth.jpg" width="151"/>
<media:credit>Dado Ruvic/Reuters</media:credit>
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
<title>The Coder and the Dictator</title>
<link>
https://www.nytimes.com/2020/03/20/technology/venezuela-petro-cryptocurrency.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/20/technology/venezuela-petro-cryptocurrency.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/20/technology/venezuela-petro-cryptocurrency.html" rel="standout"/>
<description>
Gabriel Jiménez hated the Venezuelan strongman Nicolás Maduro. But he loved cryptocurrency. When he built the regime a digital coin, he nearly paid with his life.
</description>
<dc:creator>Nathaniel Popper and Ana Vanessa Herrero</dc:creator>
<pubDate>Fri, 20 Mar 2020 20:51:28 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Venezuela</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Maduro, Nicolas</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Virtual Currency</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Jimenez, Gabriel</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Politics and Government</category>
<category domain="">Petro (Currency)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Bitcoin (Currency)</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/22/business/00PETRO-01/merlin_162880458_585c3a95-d76c-400f-b410-ba1b66a8f139-moth.jpg" width="151"/>
<media:credit>Evan Jenkins for The New York Times</media:credit>
<media:description>Gabriel Jim&eacute;nez.</media:description>
</item>
<item>
<title>Former Uber Executive Pleads Guilty to Trade Theft</title>
<link>
https://www.nytimes.com/2020/03/19/technology/levandowski-uber-google-plea.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/19/technology/levandowski-uber-google-plea.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/19/technology/levandowski-uber-google-plea.html" rel="standout"/>
<description>
Anthony Levandowski was charged with stealing driverless-car plans when he left Google to form a company, which Uber then acquired.
</description>
<dc:creator>Kate Conger</dc:creator>
<pubDate>Fri, 20 Mar 2020 01:25:02 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Driverless and Semiautonomous Vehicles</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Intellectual Property</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Google Inc</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Uber Technologies Inc</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Levandowski, Anthony</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Waymo</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/19/business/19Levandowski-01/19Levandowski-01-moth.jpg" width="151"/>
<media:credit>Justin Sullivan/Getty Images</media:credit>
<media:description>
Anthony Levandowski in September. Mr. Levandowski, a former Google engineer whose company was bought by Uber, faces up to 10 years in prison.
</media:description>
</item>
<item>
<title>
Translating a Surveillance Tool into a Virus Tracker for Democracies
</title>
<link>
https://www.nytimes.com/2020/03/19/us/coronavirus-location-tracking.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/19/us/coronavirus-location-tracking.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/19/us/coronavirus-location-tracking.html" rel="standout"/>
<description>
Health officials in Britain are building an app that would alert the people who have come in contact with someone known to have the coronavirus. The project aims to adapt China’s tracking efforts for countries wary of government surveillance.
</description>
<dc:creator>Jennifer Valentino-DeVries</dc:creator>
<pubDate>Thu, 19 Mar 2020 20:37:51 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Mobile Applications</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Surveillance of Citizens by Government</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Privacy</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Data-Mining and Database Marketing</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Epidemics</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Computers and the Internet</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Smartphones</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Great Britain</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/19/multimedia/19virus-datatracking/19virus-datatracking-moth.jpg" width="151"/>
<media:credit>Justin Setterfield/Getty Images</media:credit>
<media:description>
The project relies on the voluntary participation of people who agree to have their location tracked.
</media:description>
</item>
<item>
<title>Big Rigs Begin to Trade Diesel for Electric Motors</title>
<link>
https://www.nytimes.com/2020/03/19/business/electric-semi-trucks-big-rigs.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/19/business/electric-semi-trucks-big-rigs.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/19/business/electric-semi-trucks-big-rigs.html" rel="standout"/>
<description>
Tractor-trailer fleets will take time to electrify, and start-ups and established truck makers are racing to get their models on the road.
</description>
<dc:creator>Susan Carpenter</dc:creator>
<pubDate>Thu, 19 Mar 2020 11:00:08 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Trucks and Trucking</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Fuel Emissions (Transportation)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Electric and Hybrid Vehicles</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Freightliner</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Tesla Motors Inc</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">United Parcel Service Inc</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Xos Trucks Inc</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Nikola Motor Co</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/20/business/00wheels2-print/00wheels2-print-moth-v2.jpg" width="151"/>
<media:credit>Alec Lesser for The New York Times</media:credit>
<media:description>
The battery-electric eCascadia big rig has been part of a pilot test at the ports in Southern California.
</media:description>
</item>
<item>
<title>True Tales of Quarantined Socializing</title>
<link>
https://www.nytimes.com/2020/03/19/style/coronavirus-quarantine-socializing.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/19/style/coronavirus-quarantine-socializing.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/19/style/coronavirus-quarantine-socializing.html" rel="standout"/>
<description>
Digital dance raves. Streaming soundbaths. Book readings by phone. Now we’ve gotta get creative.
</description>
<dc:creator>
Caity Weaver, Sanam Yar, Jenna Wortham and Molly Oswaks
</dc:creator>
<pubDate>Fri, 20 Mar 2020 05:22:54 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Quarantines</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Social Media</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Computers and the Internet</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">your-feed-fashion</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">your-feed-selfcare</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">your-feed-internet-culture</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/22/fashion/18virus-socializing-2/18virus-socializing-2-moth-v2.jpg" width="151"/>
<media:credit>Photo Illustration by The New York Times</media:credit>
</item>
</channel>
  `;

const parser = new DOMParser(); // initialize dom parser
const srcDOM = parser.parseFromString(strxml, "application/xml"); 

//Now we can call DOM methods like GetElementById, etc. on scrDOM.

//Converting DOM Tree to json
console.log(xml2json(srcDOM));
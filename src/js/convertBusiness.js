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
<title>NYT > Business</title>
<link>https://www.nytimes.com/section/business</link>
<atom:link href="https://rss.nytimes.com/services/xml/rss/nyt/Business.xml" rel="self" type="application/rss+xml"/>
<description/>
<language>en-us</language>
<copyright>Copyright 2020 The New York Times Company</copyright>
<lastBuildDate>Thu, 26 Mar 2020 08:49:40 +0000</lastBuildDate>
<pubDate>Thu, 26 Mar 2020 08:49:40 +0000</pubDate>
<image>
<title>NYT > Business</title>
<url>
https://static01.nyt.com/images/misc/NYT_logo_rss_250x40.png
</url>
<link>https://www.nytimes.com/section/business</link>
</image>
<item>
<title>
Europe’s Leaders Ditch Austerity and Fight Pandemic With Cash
</title>
<link>
https://www.nytimes.com/2020/03/26/business/europe-economy-coronavirus.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/26/business/europe-economy-coronavirus.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/26/business/europe-economy-coronavirus.html" rel="standout"/>
<description>
As Britain and the European Union respond to a public health emergency and economic crisis, they are abandoning dogmatic frugality and embracing Keynes.
</description>
<dc:creator>Peter S. Goodman</dc:creator>
<pubDate>Thu, 26 Mar 2020 07:58:06 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Politics and Government</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Nationalization of Industry</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Budgets and Budgeting</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Stimulus (Economic)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Credit and Debt</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Economics (Theory and Philosophy)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">European Central Bank</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">European Union</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Europe</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Great Britain</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/26/business/26virus-europetaboos-1/26virus-europetaboos-1-moth.jpg" width="151"/>
<media:credit>Andrew Testa for The New York Times</media:credit>
<media:description>
The Bank of England. Britain is not hesitating to open its wallet to attack the crisis.
</media:description>
</item>
<item>
<title>
White House Considers Postponing Tariffs to Help Businesses: Live Updates
</title>
<link>
https://www.nytimes.com/2020/03/26/business/stock-market-today-coronavirus.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/26/business/stock-market-today-coronavirus.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/26/business/stock-market-today-coronavirus.html" rel="standout"/>
<description>
Live updates on stock market and business news during the coronavirus outbreak.
</description>
<pubDate>Thu, 26 Mar 2020 08:04:47 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Stocks and Bonds</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Standard & Poor's 500-Stock Index</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">United States Economy</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Stimulus (Economic)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Economic Conditions and Trends</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">International Trade and World Market</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/26/world/26market-briefing-imports/26market-briefing-imports-moth.jpg" width="151"/>
<media:credit>Damir Sagolj/Reuters</media:credit>
<media:description>An iron and steel plant in Chongqing, China.</media:description>
</item>
<item>
<title>
A $2 Trillion Coronavirus Stimulus Will Help, but More May Be Needed
</title>
<link>
https://www.nytimes.com/2020/03/25/business/2-trillion-stimulus-coronavirus-bill.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/25/business/2-trillion-stimulus-coronavirus-bill.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/25/business/2-trillion-stimulus-coronavirus-bill.html" rel="standout"/>
<description>
The bill moving through Congress is more than twice as large as the stimulus package passed in 2009, but it will soothe a shutdown economy for only a few months.
</description>
<dc:creator>Jim Tankersley</dc:creator>
<pubDate>Thu, 26 Mar 2020 04:14:59 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">United States Economy</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Layoffs and Job Reductions</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Small Business</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Stimulus (Economic)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">United States Politics and Government</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Unemployment Insurance</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Unemployment</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Shutdowns (Institutional)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">American Recovery and Reinvestment Act (2009)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Wages and Salaries</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/25/world/25dc-virus-impact02/25dc-virus-impact02-moth-v2.jpg" width="151"/>
<media:credit>Bryan Derballa for The New York Times</media:credit>
<media:description>
A nearly empty Fifth Avenue in New York City on Tuesday afternoon.
</media:description>
</item>
<item>
<title>
Essential? Retailers Like Guitar Center and Michaels Think They Are
</title>
<link>
https://www.nytimes.com/2020/03/25/business/coronavirus-essential-retailers.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/25/business/coronavirus-essential-retailers.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/25/business/coronavirus-essential-retailers.html" rel="standout"/>
<description>
Some chains are loosely interpreting what it means to be a critically important business.
</description>
<dc:creator>Michael Corkery and Sapna Maheshwari</dc:creator>
<pubDate>Wed, 25 Mar 2020 22:50:17 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Shopping and Retail</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Guitar Center Inc</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Restoration Hardware Holdings Inc.</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/25/business/25virus-essentialretail-1/25virus-essentialretail-1-moth.jpg" width="151"/>
<media:credit>Gabby Jones for The New York Times</media:credit>
<media:description>
Sears has given workers letters saying they are conducting “essential business” and therefore exempt from “emergency closure orders.”
</media:description>
</item>
<item>
<title>A Sewing Army, Making Masks for America</title>
<link>
https://www.nytimes.com/2020/03/25/business/coronavirus-masks-sewers.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/25/business/coronavirus-masks-sewers.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/25/business/coronavirus-masks-sewers.html" rel="standout"/>
<description>
With overrun hospitals facing an acute shortage of masks, people are pulling out their sewing machines to fill the void.
</description>
<dc:creator>David Enrich, Rachel Abrams and Steven Kurutz</dc:creator>
<pubDate>Wed, 25 Mar 2020 19:50:37 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Masks</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Protective Clothing and Gear</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Sewing</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Textiles</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Social Media</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Shortages</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Volunteers and Community Service</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Handicrafts</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Centers for Disease Control and Prevention</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/25/business/25VIRUS-SEWING-01/25VIRUS-SEWING-01-moth.jpg" width="151"/>
<media:credit>Tim Gruber for The New York Times</media:credit>
<media:description>
Corinna Bakken, the Minnesota Opera’s costume director in Minneapolis, stitching masks out of gowns sent by a local hospital.
</media:description>
</item>
<item>
<title>
Nurses Share Coronavirus Stories Anonymously in an Online Document
</title>
<link>
https://www.nytimes.com/2020/03/25/business/media/coronavirus-nurses-stories-anonymous.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/25/business/media/coronavirus-nurses-stories-anonymous.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/25/business/media/coronavirus-nurses-stories-anonymous.html" rel="standout"/>
<description>
A health care worker in New Jersey created a digital venue for people in the field to chronicle poor working conditions that may put patients at risk. “It is disgusting,” one nurse wrote.
</description>
<dc:creator>Edmund Lee</dc:creator>
<pubDate>Wed, 25 Mar 2020 20:52:13 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Hospitals</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Nursing and Nurses</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Protective Clothing and Gear</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Masks</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Google Inc</category>
<category domain="">crowdsourced documents</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">United States</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/26/business/25VIRUS-NURSEDOC/25VIRUS-NURSEDOC-moth.jpg" width="151"/>
<media:credit>Krissy Breece</media:credit>
<media:description>
Sonja Schwartzbach started compiling the accounts after she determined that hospital conditions were &ldquo;far worse&rdquo; than most people realized.
</media:description>
</item>
<item>
<title>
Inside American Airlines’ Scramble as Virus Grounds Jets by Hundreds
</title>
<link>
https://www.nytimes.com/2020/03/25/business/coronavirus-american-airlines.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/25/business/coronavirus-american-airlines.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/25/business/coronavirus-american-airlines.html" rel="standout"/>
<description>
Nearly every part of the airline, the largest in the United States, has been transformed, and executives are fighting to keep it afloat.
</description>
<dc:creator>David Gelles</dc:creator>
<pubDate>Wed, 25 Mar 2020 09:00:29 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Airlines and Airplanes</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Airports</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">American Airlines</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Parker, Doug (1961- )</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/25/business/25virus-airlines-1/25virus-airlines-1-moth.jpg" width="151"/>
<media:credit>Nick Oxford/Reuters</media:credit>
<media:description>
American Airlines is canceling 40 percent of its flights each day.
</media:description>
</item>
<item>
<title>
In World’s Most Vulnerable Countries, Coronavirus Pandemic Rivals the 2008 Crisis
</title>
<link>
https://www.nytimes.com/2020/03/24/business/coronavirus-per-country-pandemic.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/24/business/coronavirus-per-country-pandemic.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/24/business/coronavirus-per-country-pandemic.html" rel="standout"/>
<description>
As capital flees emerging markets, those countries are absorbing the most potent economic shocks of the coronavirus outbreak.
</description>
<dc:creator>
Peter S. Goodman, Daniel Politi, Suhasini Raj, Lynsey Chutel and Abdi Latif Dahir
</dc:creator>
<pubDate>Wed, 25 Mar 2020 16:01:36 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Third World and Developing Countries</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Economic Conditions and Trends</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Politics and Government</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Recession and Depression</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Foreign Investments</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Currency</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">International Monetary Fund</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">International Trade and World Market</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Credit and Debt</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Labor and Jobs</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Unemployment</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Poverty</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Argentina</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">South Africa</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">India</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Turkey</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Philippines</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/25/business/25Virus-VulnerableEconomies-sub/24Virus-VulnerableEconomies-sub-moth.jpg" width="151"/>
<media:credit>Ulet Ifansasti for The New York Times</media:credit>
<media:description>
The Prambanan temple complex in Yogyakarta, Indonesia, is closed to the public.
</media:description>
</item>
<item>
<title>
North Macedonia Awaits Marijuana Laws to Become a 'Cannabis Superpower'
</title>
<link>
https://www.nytimes.com/2020/03/25/business/north-macedonia-marijuana.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/25/business/north-macedonia-marijuana.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/25/business/north-macedonia-marijuana.html" rel="standout"/>
<description>
Vying to become Europe’s “Cannabis Superpower,” marijuana entrepreneurs in the recently rebranded country are waiting for the government to act.
</description>
<dc:creator>David Segal</dc:creator>
<pubDate>Wed, 25 Mar 2020 09:00:30 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Marijuana</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Politics and Government</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Medical Marijuana</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Foreign Investments</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Macedonia</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Skopje (Macedonia)</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/25/business/25MACEDONIA-01/25MACEDONIA-01-moth.jpg" width="151"/>
<media:credit>Loulou d'Aki for The New York Times</media:credit>
<media:description>Pharmacon employees tending to “mother” plants.</media:description>
</item>
<item>
<title>
When Your Restaurant’s Star Dish Is Blamed for Spreading Coronavirus
</title>
<link>
https://www.nytimes.com/2020/03/25/world/asia/hong-kong-coronavirus-hot-pot.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/25/world/asia/hong-kong-coronavirus-hot-pot.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/25/world/asia/hong-kong-coronavirus-hot-pot.html" rel="standout"/>
<description>
As restaurants around the world close or retool to enforce social distancing, Hong Kong’s hot pot eateries offer a cautionary tale and some good advice.
</description>
<dc:creator>Elaine Yu</dc:creator>
<pubDate>Thu, 26 Mar 2020 07:45:13 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Restaurants</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Epidemics</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Hong Kong</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Food Contamination and Poisoning</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Suppa (restaurant, Hong Kong)</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/26/world/26virus-life-hotpot-1/26virus-life-hotpot-1-moth.jpg" width="151"/>
<media:credit>Lam Yik Fei for The New York Times</media:credit>
<media:description>
Bong Kwok and Jason Ho prepare a takeout order at their hot pot restaurant in Hong Kong.
</media:description>
</item>
<item>
<title>White House Weighs Tariff Delay</title>
<link>
https://www.nytimes.com/2020/03/25/business/economy/white-house-tariffs-coronavirus.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/25/business/economy/white-house-tariffs-coronavirus.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/25/business/economy/white-house-tariffs-coronavirus.html" rel="standout"/>
<description>
The Trump administration is considering postponing tariff payments on some imported goods for 90 days as part of its response to a faltering economy
</description>
<dc:creator>Ana Swanson</dc:creator>
<pubDate>Thu, 26 Mar 2020 02:18:29 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">International Trade and World Market</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">United States Politics and Government</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Customs (Tariff)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">United States Economy</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/25/us/politics/25tarrifs/merlin_168606300_589ff145-a8e1-40a8-a526-4df5b1a34e6c-moth.jpg" width="151"/>
<media:credit>Jim Wilson/The New York Times</media:credit>
<media:description>
The White House previously issued narrow exemptions to eliminate tariffs on surgical gowns, masks, gloves, hand sanitizer and other medical products in response to the coronavirus pandemic.
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
The Fed Asks for BlackRock’s Help in an Echo of 2008
</title>
<link>
https://www.nytimes.com/2020/03/25/business/blackrock-federal-reserve.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/25/business/blackrock-federal-reserve.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/25/business/blackrock-federal-reserve.html" rel="standout"/>
<description>
BlackRock will advise the Federal Reserve on the purchase of billions of dollars in bonds and securities. The terms of the agreement were not disclosed.
</description>
<dc:creator>Matthew Goldstein</dc:creator>
<pubDate>Wed, 25 Mar 2020 22:06:27 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Banking and Financial Institutions</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Stocks and Bonds</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Mortgage-Backed Securities</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">BlackRock Inc</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Federal Reserve System</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/25/business/25virus-blackrock1/25virus-blackrock1-moth.jpg" width="151"/>
<media:credit>Gabriella Angotti-Jones/Bloomberg</media:credit>
<media:description>
BlackRock, which manages nearly $7 trillion in assets, will assist the Federal Reserve’s efforts to stabilize the bond market.
</media:description>
</item>
<item>
<title>
Ventilators and Coronavirus: Amid Desperation, Calls Grow for Federal Intervention
</title>
<link>
https://www.nytimes.com/2020/03/25/health/ventilators-coronavirus.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/25/health/ventilators-coronavirus.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/25/health/ventilators-coronavirus.html" rel="standout"/>
<description>
President Trump wants the private sector to fill the urgent need for the lifesaving devices. Experts say that strategy may doom the thousands who will need them in the coming weeks.
</description>
<dc:creator>
Andrew Jacobs, Neal E. Boudette, Matt Richtel and Nicholas Kulish
</dc:creator>
<pubDate>Wed, 25 Mar 2020 18:39:02 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Medical Devices</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Ventilators (Medical)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Hospitals</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">United States Politics and Government</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Shortages</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/24/science/25VIRUS-VENTILATORS1/24VIRUS-VENTILATORS-CARS1-moth.jpg" width="151"/>
<media:credit>Angus Mordant/Bloomberg</media:credit>
<media:description>
A lone ventilator at the Jacob K. Javits Convention Center on Monday in New York, which will be converted into a 1,000-bed hospital.
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
<title>
Economic Crisis Prompts a Showdown, and a Shutdown, in Suriname
</title>
<link>
https://www.nytimes.com/2020/03/25/world/americas/suriname-economic-crisis.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/25/world/americas/suriname-economic-crisis.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/25/world/americas/suriname-economic-crisis.html" rel="standout"/>
<description>
The coronavirus pandemic is but one factor in a confrontation between the South American nation’s business sector and its authoritarian government.
</description>
<dc:creator>Harmen Boerboom and Anatoly Kurmanaev</dc:creator>
<pubDate>Wed, 25 Mar 2020 18:30:49 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Economic Conditions and Trends</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Currency</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Black Markets</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Bouterse, Desi</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Paramaribo (Suriname)</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/25/world/25Suriname/25Suriname-moth.jpg" width="151"/>
<media:credit>Adriana Loureiro Fernandez for The New York Times</media:credit>
<media:description>
The streets of Paramaribo, Suriname, as it confronted a deepening economic crisis.
</media:description>
</item>
<item>
<title>
Big-Name Hotels Go Empty and Smaller Owners Are Hurt
</title>
<link>
https://www.nytimes.com/2020/03/25/business/coronavirus-hotels-franchisees.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/25/business/coronavirus-hotels-franchisees.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/25/business/coronavirus-hotels-franchisees.html" rel="standout"/>
<description>
More than 90 percent of the hotels in the U.S. are franchised, and these owners say their business has been devastated by the coronavirus pandemic.
</description>
<dc:creator>Julie Creswell</dc:creator>
<pubDate>Wed, 25 Mar 2020 22:24:41 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Hotels and Travel Lodgings</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Franchises</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Marriott International Inc</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Travel and Vacations</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Mortgages</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Layoffs and Job Reductions</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Small Business</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">American Hotel and Lodging Assn</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">United States</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/24/business/24virus-hotels-2/24virus-hotels-2-moth.jpg" width="151"/>
<media:credit>Al Drago for The New York Times</media:credit>
<media:description>
Vinay Patel owns nine hotels in Northern Virginia. He has begun laying off employees.
</media:description>
</item>
<item>
<title>
Trump’s Coronavirus Briefings Are a Ratings Hit. Should Networks Cover Them?
</title>
<link>
https://www.nytimes.com/2020/03/25/business/media/trump-coronavirus-briefings-ratings.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/25/business/media/trump-coronavirus-briefings-ratings.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/25/business/media/trump-coronavirus-briefings-ratings.html" rel="standout"/>
<description>
The president’s viewership has rivaled the audiences for hit reality shows and prime-time football. But some worry about misinformation.
</description>
<dc:creator>Michael M. Grynbaum</dc:creator>
<pubDate>Wed, 25 Mar 2020 19:15:49 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">News and News Media</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Television</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Ratings (Audience Measurement)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Trump, Donald J</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Fox News Channel</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">NBC News</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Koppel, Ted</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/25/business/25virus-media-briefing/25virus-media-briefing-moth-v2.jpg" width="151"/>
<media:credit>Doug Mills/The New York Times</media:credit>
<media:description>
President Trump facing reporters at a White House briefing on Tuesday. The updates have attracted an average audience of 8.5 million on cable news.
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
<title>When to Restart the Economy?</title>
<link>
https://www.nytimes.com/2020/03/25/business/dealbook/trump-coronavirus-easter.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/25/business/dealbook/trump-coronavirus-easter.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/25/business/dealbook/trump-coronavirus-easter.html" rel="standout"/>
<description>
Wall Street executives have warned the Trump administration of another Great Depression if Americans don’t get back to work soon.
</description>
<pubDate>Wed, 25 Mar 2020 11:21:17 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">United States Economy</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Quarantines</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">American Airlines</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Trump, Donald J</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/25/business/25db-newsletter-easter/merlin_170931729_cd2dc952-1d4e-47bc-967c-caf0798aaa40-moth.jpg" width="151"/>
<media:credit>
Pool photo by Oliver Contreras/EPA, via Shutterstock
</media:credit>
<media:description>
President Trump yesterday with Dr. Anthony Fauci of the National Institute of Allergy and Infectious Diseases.
</media:description>
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
Coronavirus Decimates N.Y.C. Taxi Industry: ‘The Worst It’s Ever Been’
</title>
<link>
https://www.nytimes.com/2020/03/25/nyregion/coronavirus-nyc-taxi-drivers.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/25/nyregion/coronavirus-nyc-taxi-drivers.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/25/nyregion/coronavirus-nyc-taxi-drivers.html" rel="standout"/>
<description>
Drivers have contended with Uber and inflated medallion prices. Now the pandemic has caused rides to plummet by two-thirds or more.
</description>
<dc:creator>Winnie Hu and Nate Schweber</dc:creator>
<pubDate>Wed, 25 Mar 2020 13:13:38 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Taxicabs and Taxicab Drivers</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Car Services and Livery Cabs</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Wages and Salaries</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Airports</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Mobile Applications</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Kennedy International Airport (Queens, NY)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Metropolitan Taxicab Board of Trade</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">New York Taxi Workers Alliance</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Taxi and Limousine Commission</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Uber Technologies Inc</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Johnson, Corey</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">New York City</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/23/nyregion/00nyvirus-drivers1/00nyvirus-drivers1-moth.jpg" width="151"/>
<media:credit>Stephanie Keith for The New York Times</media:credit>
<media:description>
Many drivers have seen their income plunge as passengers have all but disappeared.
</media:description>
</item>
<item>
<title>Roosevelt Avenue Goes Dark</title>
<link>
https://www.nytimes.com/2020/03/25/nyregion/coronavirus-nyc-queens.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/25/nyregion/coronavirus-nyc-queens.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/25/nyregion/coronavirus-nyc-queens.html" rel="standout"/>
<description>
A bustling commercial corridor in Queens prepared to shut down as residents adjusted to their new reality.
</description>
<dc:creator>Todd Heisler</dc:creator>
<pubDate>Wed, 25 Mar 2020 13:25:01 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Jackson Heights (Queens, NY)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Roosevelt Avenue (Queens, NY)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Woodside (Queens, NY)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Restaurants</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/26/nyregion/26nyvirus-woodside1/00nyvirus-photo-woodside2-moth.jpg" width="151"/>
</item>
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
<title>Trump May Defer Tariff Payments to Help Businesses</title>
<link>
https://www.nytimes.com/2020/03/25/business/stock-market-corona.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/25/business/stock-market-corona.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/25/business/stock-market-corona.html" rel="standout"/>
<description>
Live updates on stock market and business news during the coronavirus outbreak.
</description>
<pubDate>Thu, 26 Mar 2020 04:33:55 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">United States Economy</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Stocks and Bonds</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Economic Conditions and Trends</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">International Trade and World Market</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/25/business/25markets-briefing-senate/25markets-briefing-senate-moth-v2.jpg" width="151"/>
<media:credit>Anna Moneymaker/The New York Times</media:credit>
<media:description>
Treasury Secretary Steven Mnuchin, center, with other officials on Capitol Hill.
</media:description>
</item>
<item>
<title>Shutdown Spotlights Economic Cost of Saving Lives</title>
<link>
https://www.nytimes.com/2020/03/24/business/economy/coronavirus-economy.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/24/business/economy/coronavirus-economy.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/24/business/economy/coronavirus-economy.html" rel="standout"/>
<description>
President Trump and others have asked if halting normal life and commerce to fight the coronavirus is worth the cost. Here’s how economists figure it.
</description>
<dc:creator>Eduardo Porter and Jim Tankersley</dc:creator>
<pubDate>Wed, 25 Mar 2020 17:09:08 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">United States Economy</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Shutdowns (Institutional)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Deaths (Fatalities)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Economics (Theory and Philosophy)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Quarantines</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">United States Politics and Government</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Prices (Fares, Fees and Rates)</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/24/business/24virus-tradeoff1/24virus-tradeoff1-moth.jpg" width="151"/>
<media:credit>Chona Kasinger for The New York Times</media:credit>
<media:description>
Downtown Seattle was virtually empty on a Friday in mid-March after the region became a U.S. beachhead for the new coronavirus.
</media:description>
</item>
<item>
<title>
The Oversight Playbook From 2008 Returns as Bailout Swells
</title>
<link>
https://www.nytimes.com/2020/03/24/us/politics/coronavirus-economic-package-oversight.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/24/us/politics/coronavirus-economic-package-oversight.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/24/us/politics/coronavirus-economic-package-oversight.html" rel="standout"/>
<description>
Lawmakers are eyeing the appointment of a new inspector general to keep tabs on Treasury’s $500 billion “slush fund.”
</description>
<dc:creator>Alan Rappeport and Jeanna Smialek</dc:creator>
<pubDate>Wed, 25 Mar 2020 01:00:12 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Treasury Department</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Federal Reserve System</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Banking and Financial Institutions</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Law and Legislation</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Stimulus (Economic)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Federal Aid (US)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">United States Politics and Government</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">United States Economy</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Emergency Economic Stabilization Act (2008)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Inspectors General</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Mnuchin, Steven T</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/24/business/24DC-Virus-Oversight-01/24DC-Virus-Oversight-01-moth.jpg" width="151"/>
<media:credit>Anna Moneymaker/The New York Times</media:credit>
<media:description>
Treasury Secretary Steven Mnuchin has become the face of the giant stimulus package being discussed in Congress, with Democrats insisting on some type of mechanism to prevent fraud and abuse.
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
With Kids Learning From Home, Children’s Publishers See a Spike
</title>
<link>
https://www.nytimes.com/2020/03/24/books/home-schooling-workbooks-sales-increase-virus.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/24/books/home-schooling-workbooks-sales-increase-virus.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/24/books/home-schooling-workbooks-sales-increase-virus.html" rel="standout"/>
<description>
As schools close during the coronavirus crisis, sales of reading and writing workbooks, flash cards and activity books have skyrocketed.
</description>
<dc:creator>Alexandra Alter</dc:creator>
<pubDate>Tue, 24 Mar 2020 21:53:37 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Books and Literature</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Book Trade and Publishing</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Home Schooling</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/24/books/24workbooksales1/24workbooksales1-moth.jpg" width="151"/>
<media:credit>Ian West/PA Images, via Getty Images</media:credit>
</item>
<item>
<title>
Stanley Sporkin, Bane of Corporate Corruption, Dies at 88
</title>
<link>
https://www.nytimes.com/2020/03/24/business/stanley-sporkin-dead.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/24/business/stanley-sporkin-dead.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/24/business/stanley-sporkin-dead.html" rel="standout"/>
<description>
As the S.E.C.’s enforcer, he targeted firms that made illegal campaign contributions in the U.S. and bribed officials to gain business in other countries.
</description>
<dc:creator>Sam Roberts</dc:creator>
<pubDate>Wed, 25 Mar 2020 01:47:24 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Sporkin, Stanley</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Deaths (Obituaries)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Securities and Exchange Commission</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Campaign Finance</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Legal Profession</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Bribery and Kickbacks</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Central Intelligence Agency</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Corruption (Institutional)</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/25/obituaries/00Sporkin1/00Sporkin1-moth.jpg" width="151"/>
<media:credit>Teresa Zabala/The New York Times</media:credit>
<media:description>
Stanley Sporkin in 1975. As the chief enforcement official at the Securities and Exchange Commission, he helped turn the agency into a scourge of miscreant corporations.
</media:description>
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
<title>The Stock Buyback Binge May Be Over. For Now.</title>
<link>
https://www.nytimes.com/2020/03/24/business/coronavirus-stock-buybacks.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/24/business/coronavirus-stock-buybacks.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/24/business/coronavirus-stock-buybacks.html" rel="standout"/>
<description>
Companies are hitting the pause button on share buybacks, which have suddenly become politically and financially unpalatable.
</description>
<dc:creator>Matt Phillips</dc:creator>
<pubDate>Wed, 25 Mar 2020 05:08:54 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">United States Economy</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Stock Buybacks</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">AT&T Inc</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">McDonald's Corporation</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Citigroup Inc</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Delta Air Lines Inc</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Boeing Company</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Bank of America Corporation</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">JPMorgan Chase & Company</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/24/business/24buybacks01/24buybacks01-moth.jpg" width="151"/>
<media:credit>Mark Abramson for The New York Times</media:credit>
<media:description>
Companies in the S&P 500 stock index spent more than $2 trillion buying back their own stocks over the last three years.
</media:description>
</item>
<item>
<title>
The ‘Blurred Lines’ Case Scared Songwriters. But Its Time May Be Up.
</title>
<link>
https://www.nytimes.com/2020/03/24/arts/music/blurred-lines-led-zeppelin-copyright.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/24/arts/music/blurred-lines-led-zeppelin-copyright.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/24/arts/music/blurred-lines-led-zeppelin-copyright.html" rel="standout"/>
<description>
Decisions in copyright cases involving Led Zeppelin and Katy Perry suggest the open season on lawsuits could be coming to a close.
</description>
<dc:creator>Ben Sisario</dc:creator>
<pubDate>Tue, 24 Mar 2020 16:53:08 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Copyrights and Copyright Violations</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Pop and Rock Music</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Rap and Hip-Hop</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Suits and Litigation (Civil)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Decisions and Verdicts</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Led Zeppelin</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Spirit (Music Group)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Perry, Katy</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Gaye, Marvin</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Sheeran, Ed</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Thicke, Robin</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/24/arts/24zepfallout1/24zepfallout1-moth-v2.jpg" width="151"/>
<media:credit>Helle Arensbak/EPA, via Shutterstock</media:credit>
<media:description>
The Led Zeppelin frontman Robert Plant last year. A court of appeals upheld a jury’s verdict that Led Zeppelin’s “Stairway to Heaven” didn’t copy Spirit’s “Taurus.” The case has big implications for music copyright lawsuits.
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
<title>To Fight the Coronavirus, Cut the Red Tape</title>
<link>
https://www.nytimes.com/2020/03/24/business/coronavirus-medical-supplies-regulations.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/24/business/coronavirus-medical-supplies-regulations.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/24/business/coronavirus-medical-supplies-regulations.html" rel="standout"/>
<description>
Two economists suggest suspending these 5 types of regulations because they are slowing the medical response to the pandemic. And they are asking for more ideas.
</description>
<dc:creator>Sendhil Mullainathan and Richard H. Thaler</dc:creator>
<pubDate>Tue, 24 Mar 2020 15:00:10 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Shortages</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Malpractice</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Inventions and Patents</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Ventilators (Medical)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Tests (Medical)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Quarantines</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Regulation and Deregulation of Industry</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Copyrights and Copyright Violations</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Medical Devices</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Nobel Prizes</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Drivers Licenses</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Doctors</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Computers and the Internet</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Smartphones</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Airlines and Airplanes</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Heart</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Health Insurance and Managed Care</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Suits and Litigation (Civil)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">States (US)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Financial Times</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Twitter</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">University of Chicago</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Italy</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Singapore</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">United States</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/24/business/24VIRUS-VIEWTHALER-01/24VIRUS-VIEWTHALER-01-moth.jpg" width="151"/>
<media:credit>John G Mabanglo/EPA, via Shutterstock</media:credit>
<media:description>A coronavirus testing center in Hayward, Calif.</media:description>
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
<title>The Evening News Is Back</title>
<link>
https://www.nytimes.com/2020/03/24/business/media/coronavirus-evening-news.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/24/business/media/coronavirus-evening-news.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/24/business/media/coronavirus-evening-news.html" rel="standout"/>
<description>
The network newscasts had lost relevance, thanks to cable and digital media. Now, the coronavirus has put tens of millions of viewers back in the 6:30 p.m. habit.
</description>
<dc:creator>John Koblin</dc:creator>
<pubDate>Wed, 25 Mar 2020 05:09:49 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Television</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">News and News Media</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Ratings (Audience Measurement)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_ttl">ABC World News Tonight (TV Program)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_ttl">CBS Evening News (TV Program)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_ttl">NBC Nightly News (TV Program)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">United States</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/24/business/24VIRUS-EVENINGNEWS/24VIRUS-EVENINGNEWS-moth.png" width="151"/>
<media:credit>NBC</media:credit>
<media:description>
“Nothing else matters right now,” the “NBC Nightly News” anchor, Lester Holt, said in an interview. “This is the story of our lifetimes.”
</media:description>
</item>
<item>
<title>
Coronavirus Spurs a Wave of Suspect Websites Looking to Cash In
</title>
<link>
https://www.nytimes.com/2020/03/24/business/coronavirus-ecommerce-sites.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/24/business/coronavirus-ecommerce-sites.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/24/business/coronavirus-ecommerce-sites.html" rel="standout"/>
<description>
Hundreds of e-commerce sites are popping up daily to sell virus-fighting products. Many are being shut down for making exaggerated claims or selling phantom products.
</description>
<dc:creator>Michael H. Keller and Taylor Lorenz</dc:creator>
<pubDate>Tue, 24 Mar 2020 14:23:33 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Shopify Inc</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Masks</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Tests (Medical)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Frauds and Swindling</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Protective Clothing and Gear</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Online Advertising</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">E-Commerce</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Epidemics</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Facebook Inc</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/24/multimedia/24virus-ecommerce-04/24virus-ecommerce-04-moth.png" width="151"/>
<media:description>
Shopify has registered nearly 500 new e-commerce sites over the past two months with names that include “corona” or “covid.”
</media:description>
</item>
<item>
<title>
Bohemian or Business: Identities Collide in Miami’s Coconut Grove
</title>
<link>
https://www.nytimes.com/2020/03/24/business/miami-coconut-grove-development.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/24/business/miami-coconut-grove-development.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/24/business/miami-coconut-grove-development.html" rel="standout"/>
<description>
The city’s development boom has finally caught up to a lush haven of shade trees and cafes. Some worry the neighborhood growth is too fast.
</description>
<dc:creator>Jane Margolies</dc:creator>
<pubDate>Tue, 24 Mar 2020 13:00:11 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Real Estate (Commercial)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Real Estate and Housing (Residential)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Area Planning and Renewal</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Building (Construction)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Shopping Centers and Malls</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Gentrification</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Miami (Fla)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Coconut Grove (Miami, Fla)</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/24/business/24GROVE-03/24GROVE-03-moth.jpg" width="151"/>
<media:credit>Angel Valentin for The New York Times</media:credit>
<media:description>
The twisting, 20-story residential towers of the Grove at Grand Bay.
</media:description>
</item>
<item>
<title>Recent Commercial Real Estate Transactions</title>
<link>
https://www.nytimes.com/2020/03/24/business/new-york-commercial-real-estate.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/24/business/new-york-commercial-real-estate.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/24/business/new-york-commercial-real-estate.html" rel="standout"/>
<description>
Recent commercial real estate transactions in New York.
</description>
<dc:creator>Jaclyn Peiser</dc:creator>
<pubDate>Tue, 24 Mar 2020 13:00:10 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Real Estate and Housing (Residential)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Real Estate (Commercial)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Bedford-Stuyvesant (Brooklyn, NY)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Mott Haven (Bronx, NY)</category>
</item>
<item>
<title>
Restarting the Economy Is About Lives Versus Livelihoods
</title>
<link>
https://www.nytimes.com/2020/03/24/business/dealbook/coronavirus-trump-economy.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/24/business/dealbook/coronavirus-trump-economy.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/24/business/dealbook/coronavirus-trump-economy.html" rel="standout"/>
<description>
President Trump signaled that he’s open to lifting restrictions soon on social distancing in an effort to restart the U.S. economy.
</description>
<pubDate>Tue, 24 Mar 2020 12:01:48 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">United States Economy</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Stimulus (Economic)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Shutdowns (Institutional)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Trump, Donald J</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Fauci, Anthony S</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/24/business/24db-newsletter-trump/merlin_170887911_75fba1a7-17ae-4c3f-9b82-2887ae586279-moth.jpg" width="151"/>
<media:credit>Alex Brandon/Associated Press</media:credit>
<media:description>
President Trump yesterday with Dr. Deborah Birx, right, the White House coronavirus response coordinator, and Attorney General Bill Barr.
</media:description>
</item>
<item>
<title>
Is Pausing Contributions to SEP I.R.A.s a Good Move?
</title>
<link>
https://www.nytimes.com/2020/03/24/business/sep-ira-pausing-contributions-coronavirus.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/24/business/sep-ira-pausing-contributions-coronavirus.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/24/business/sep-ira-pausing-contributions-coronavirus.html" rel="standout"/>
<description>
Self-employed workers use the vehicles to save for retirement. As the coronavirus concerns build, taking a break could be smart.
</description>
<dc:creator>Ann Carrns</dc:creator>
<pubDate>Tue, 24 Mar 2020 10:00:06 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Individual Retirement Accounts</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Federal Taxes (US)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Personal Finances</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Pensions and Retirement Plans</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">
Freelancing, Self-Employment and Independent Contracting
</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Internal Revenue Service</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/24/business/24service-sepira-illo/24service-sepira-illo-moth.jpg" width="151"/>
<media:credit>Till Lauer</media:credit>
</item>
<item>
<title>
One City’s Road to Recovery Offers Lessons, and Hope
</title>
<link>
https://www.nytimes.com/2020/03/24/business/economy/small-cities-economy.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/24/business/economy/small-cities-economy.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/24/business/economy/small-cities-economy.html" rel="standout"/>
<description>
Lawrence, Mass., once an industrial power, set out to reverse a long decline with the Federal Reserve’s help. Now it faces a new economic challenge.
</description>
<dc:creator>Eduardo Porter</dc:creator>
<pubDate>Thu, 26 Mar 2020 05:17:14 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Lawrence (Mass)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Labor and Jobs</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Small Business</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Area Planning and Renewal</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Federal Reserve Bank of Boston</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Economic Conditions and Trends</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Urban Areas</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Vocational Training</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/24/business/24lawrence01c/24lawrence01c-moth-v2.jpg" width="151"/>
<media:credit>Chang W. Lee/The New York Times</media:credit>
<media:description>
Lawrence, Mass., received a $700,000 grant over three years from the Federal Reserve Bank of Boston.
</media:description>
</item>
<item>
<title>
Marijuana and Coronavirus: Is it an 'Essential Business?' Some States Say Yes
</title>
<link>
https://www.nytimes.com/article/coronavirus-weed-marijuana.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/article/coronavirus-weed-marijuana.html
</guid>
<atom:link href="https://www.nytimes.com/article/coronavirus-weed-marijuana.html" rel="standout"/>
<description>
In most cases, marijuana businesses must, like restaurants, limit themselves to takeout or delivery. Black-market dealers are also busy, but feel little need to abide by official orders.
</description>
<dc:creator>Dan Levin</dc:creator>
<pubDate>Wed, 25 Mar 2020 18:21:53 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Marijuana</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Medical Marijuana</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Quarantines</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Stockpiling</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">California</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Massachusetts</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">States (US)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Shopping and Retail</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/24/us/24virus-pot/24virus-pot-moth.jpg" width="151"/>
<media:credit>Jeff Chiu/Associated Press</media:credit>
<media:description>
Cali Manzello, general manager of the Apothecarium, a cannabis dispensary in San Francisco, wears gloves as he handles marijuana samples in the store. 
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
<title>
Some Pregnant Women in New York City Will Have to Deliver Babies Alone
</title>
<link>
https://www.nytimes.com/2020/03/24/parenting/coronavirus-labor-birth.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/24/parenting/coronavirus-labor-birth.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/24/parenting/coronavirus-labor-birth.html" rel="standout"/>
<description>
“I have not stopped crying,” said an expectant mother who learned that her husband could not be with her when she gives birth.
</description>
<dc:creator>Christina Caron and Katie Van Syckle</dc:creator>
<pubDate>Tue, 24 Mar 2020 14:31:46 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Pregnancy and Childbirth</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Hospitals</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Midwives and Doulas</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Parenting</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">New York-Presbyterian Hospital</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Mount Sinai Medical Center</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Methodist Hospital</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">New York City</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/24/multimedia/24parenting-presbyterian/24parenting-presbyterian-moth.jpg" width="151"/>
<media:credit>John Minchillo/Associated Press</media:credit>
<media:description>
NewYork-Presbyterian has barred partners from labor and delivery rooms throughout its network.
</media:description>
</item>
<item>
<title>Live Stock Market Coronavirus Updates and Tracker</title>
<link>
https://www.nytimes.com/2020/03/24/business/coronavirus-stock-market-live-tracker.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/24/business/coronavirus-stock-market-live-tracker.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/24/business/coronavirus-stock-market-live-tracker.html" rel="standout"/>
<description>
Live updates on stock market and business news during the coronavirus outbreak.
</description>
<pubDate>Wed, 25 Mar 2020 04:39:15 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Stimulus (Economic)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">United States Economy</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Standard & Poor's 500-Stock Index</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/24/business/24markets-briefing-cargo1/24markets-briefing-cargo1-moth.jpg" width="151"/>
<media:credit>Tom Pennington/Getty Images</media:credit>
<media:description>
American Airlines on Friday carried out its first cargo-only trip in 36 years.
</media:description>
</item>
<item>
<title>
3 Newspapers Ask China to Reverse Decision to Expel American Journalists
</title>
<link>
https://www.nytimes.com/2020/03/24/business/media/china-journalists-newspapers.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/24/business/media/china-journalists-newspapers.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/24/business/media/china-journalists-newspapers.html" rel="standout"/>
<description>
The publishers of The New York Times, The Wall Street Journal and The Washington Post released a statement critical of China’s revocation of Americans’ credentials.
</description>
<dc:creator>Marc Tracy</dc:creator>
<pubDate>Tue, 24 Mar 2020 09:28:10 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">News and News Media</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">United States Politics and Government</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Freedom of the Press</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">New York Times</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Wall Street Journal</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Washington Post</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Sulzberger, A G</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">China</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Ryan, Frederick J Jr</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Lewis, William (1969- )</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/24/world/24china-media-1/24china-media-1-moth.jpg" width="151"/>
<media:credit>Gilles Sabrié for The New York Times</media:credit>
<media:description>
Steven Lee Myers, the New York Times Beijing bureau chief and one of the American journalists being expelled by the Chinese government, at the Beijing bureau on Tuesday.
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
Trump Considers Reopening Economy, Over Health Experts’ Objections
</title>
<link>
https://www.nytimes.com/2020/03/23/business/trump-coronavirus-economy.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/23/business/trump-coronavirus-economy.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/23/business/trump-coronavirus-economy.html" rel="standout"/>
<description>
The president is questioning whether stay-at-home orders have gone too far. But relaxing them could significantly increase the death toll from the coronavirus, health officials warn.
</description>
<dc:creator>
Jim Tankersley, Maggie Haberman and Roni Caryn Rabin
</dc:creator>
<pubDate>Tue, 24 Mar 2020 11:51:07 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">United States Economy</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Quarantines</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">United States Politics and Government</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Epidemics</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Trump, Donald J</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">United States</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Shutdowns (Institutional)</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/23/us/politics/23dc-virus-econ1/23dc-virus-econ1-moth.jpg" width="151"/>
<media:credit>Stephanie Keith for The New York Times</media:credit>
<media:description>
As large swaths of the economy shut down to contain the coronavirus, President Trump and others are beginning to question how long economic activity should remain frozen.
</media:description>
</item>
<item>
<title>Bankers Pledge Mortgage Help, but Want Billions</title>
<link>
https://www.nytimes.com/2020/03/23/business/coronavirus-mortgage-banks.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/23/business/coronavirus-mortgage-banks.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/23/business/coronavirus-mortgage-banks.html" rel="standout"/>
<description>
Millions of borrowers may be unable to make payments on home loans next week. The mortgage industry says it’s willing to help, but needs the government to back it up.
</description>
<dc:creator>Emily Flitter and Matthew Goldstein</dc:creator>
<pubDate>Mon, 23 Mar 2020 23:09:38 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Mortgages</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Real Estate and Housing (Residential)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Banking and Financial Institutions</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Mortgage-Backed Securities</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">United States Economy</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">American Bankers Assn</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Mortgage Bankers Assn of America</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Housing Policy Council</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Federal Aid (US)</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/23/business/23virus-mortgage1/23virus-mortgage1-moth.jpg" width="151"/>
<media:credit>Jason Henry for The New York Times</media:credit>
<media:description>
Mortgage groups said Monday that their plan to give borrowers a three-month break would require $36 billion to shore up the mortgage markets.
</media:description>
</item>
<item>
<title>
As Fox News Played Down the Coronavirus, Its Chief Protected Himself
</title>
<link>
https://www.nytimes.com/2020/03/23/business/media/fox-news-coronavirus-rupert-murdoch.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/23/business/media/fox-news-coronavirus-rupert-murdoch.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/23/business/media/fox-news-coronavirus-rupert-murdoch.html" rel="standout"/>
<description>
The cancellation of an 89th birthday party for Rupert Murdoch highlights a disconnect between his family’s behavior and statements made on air by some Fox commentators.
</description>
<dc:creator>Ben Smith</dc:creator>
<pubDate>Mon, 23 Mar 2020 23:59:11 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">News and News Media</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Fox News Channel</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Murdoch, Rupert</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Murdoch, Lachlan</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Hannity, Sean</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Fox Business Network</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Television</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Trump, Donald J</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/24/business/24FOXNEWSprint/merlin_146187039_f7c85666-a51c-4d29-ab24-96213d09d813-moth.jpg" width="151"/>
<media:credit>Drew Angerer/Getty Images</media:credit>
<media:description>
Rupert Murdoch, the chairman of Fox News, with his son Lachlan Murdoch in 2017.
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
Whatever It Takes: How the Fed Aims to Rescue the Economy
</title>
<link>
https://www.nytimes.com/2020/03/23/business/economy/federal-reserve-how-rescue.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/23/business/economy/federal-reserve-how-rescue.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/23/business/economy/federal-reserve-how-rescue.html" rel="standout"/>
<description>
The central bank is using tactics from the last financial crisis and deploying new ones to keep money flowing. Here are the basics.
</description>
<dc:creator>Ben Casselman</dc:creator>
<pubDate>Mon, 23 Mar 2020 22:09:00 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">United States Economy</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Interest Rates</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Quantitative Easing</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Stimulus (Economic)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Banking and Financial Institutions</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Shutdowns (Institutional)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Federal Reserve System</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Credit and Debt</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Recession and Depression</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Layoffs and Job Reductions</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Treasury Department</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/23/business/23virus-fedexplain1/23virus-fedexplain1-moth.jpg" width="151"/>
<media:credit>Yuri Gripas/Reuters</media:credit>
<media:description>
The Federal Reserve, under Jerome H. Powell, is moving to shore up the American economy during the coronavirus pandemic.
</media:description>
</item>
<item>
<title>
Local News Outlets Dealt a Crippling Blow by This Biggest of Stories
</title>
<link>
https://www.nytimes.com/2020/03/23/business/media/coronavirus-local-news.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/23/business/media/coronavirus-local-news.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/23/business/media/coronavirus-local-news.html" rel="standout"/>
<description>
Layoffs. Canceled print editions. Weekly papers and small dailies across the country face peril as the coronavirus cuts off ads and live events.
</description>
<dc:creator>Tiffany Hsu and Marc Tracy</dc:creator>
<pubDate>Tue, 24 Mar 2020 03:40:14 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Newspapers</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Layoffs and Job Reductions</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">News and News Media</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Online Advertising</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/23/business/00VIRUS-MEDIA-01/merlin_170848431_0024213b-e8b2-414a-be35-e67f5af535c1-moth.jpg" width="151"/>
<media:credit>Whitney Curtis for The New York Times</media:credit>
<media:description>
Copies of Riverfront Times, a local weekly, stacked inside a closed coffee shop in St. Louis.
</media:description>
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
Obamacare Turns 10. Here’s a Look at What Works and Doesn’t.
</title>
<link>
https://www.nytimes.com/2020/03/23/health/obamacare-aca-coverage-cost-history.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/23/health/obamacare-aca-coverage-cost-history.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/23/health/obamacare-aca-coverage-cost-history.html" rel="standout"/>
<description>
With the coronavirus, a new Supreme Court case and a blistering election debate, the Affordable Care Act is facing challenges as never before. We looked at how it’s held up to its promise.
</description>
<dc:creator>
Abby Goodnough, Reed Abelson, Margot Sanger-Katz and Sarah Kliff
</dc:creator>
<pubDate>Mon, 23 Mar 2020 18:03:56 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Health Insurance and Managed Care</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Law and Legislation</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Patient Protection and Affordable Care Act (2010)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">United States Politics and Government</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Medicaid</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Obama, Barack</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">your-feed-healthcare</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Trump, Donald J</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Democratic Party</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Kaiser Family Foundation</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Republican Party</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Harvard School of Public Health</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/23/science/23ACA-DECADE1/23ACA-DECADE1-moth.jpg" width="151"/>
<media:credit>Doug Mills/The New York Times</media:credit>
<media:description>
President Obama signing the Affordable Care Act into law at the White House on March 23, 2010.
</media:description>
</item>
</channel>
`;

const parser = new DOMParser(); // initialize dom parser
const srcDOM = parser.parseFromString(strxml, "application/xml"); 

//Now we can call DOM methods like GetElementById, etc. on scrDOM.

//Converting DOM Tree to json
console.log(xml2json(srcDOM));


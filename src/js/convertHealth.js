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
<title>NYT > Health</title>
<link>https://www.nytimes.com/section/health</link>
<atom:link href="https://rss.nytimes.com/services/xml/rss/nyt/Health.xml" rel="self" type="application/rss+xml"/>
<description/>
<language>en-us</language>
<copyright>Copyright 2020 The New York Times Company</copyright>
<lastBuildDate>Thu, 26 Mar 2020 08:48:01 +0000</lastBuildDate>
<pubDate>Thu, 26 Mar 2020 08:48:01 +0000</pubDate>
<image>
<title>NYT > Health</title>
<url>
https://static01.nyt.com/images/misc/NYT_logo_rss_250x40.png
</url>
<link>https://www.nytimes.com/section/health</link>
</image>
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
Coronavirus Can Be Stopped Only by Harsh Steps, Experts Say
</title>
<link>
https://www.nytimes.com/2020/03/22/health/coronavirus-restrictions-us.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/22/health/coronavirus-restrictions-us.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/22/health/coronavirus-restrictions-us.html" rel="standout"/>
<description>
Scientists who have fought pandemics describe difficult measures needed to defend the United States against a fast-moving pathogen.
</description>
<dc:creator>Donald G. McNeil Jr.</dc:creator>
<pubDate>Wed, 25 Mar 2020 14:48:55 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Shutdowns (Institutional)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Quarantines</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Tests (Medical)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Ventilators (Medical)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Epidemics</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Medical Devices</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Stockpiling</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Propaganda</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Hospitals</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Protective Clothing and Gear</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Masks</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Vaccination and Immunization</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Oxygen</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Hygiene and Cleanliness</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Volunteers and Community Service</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Drugs (Pharmaceuticals)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Nursing and Nurses</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Pneumonia</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Deaths (Fatalities)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">California</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">China</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Italy</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">New York City</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">United States</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/04/22/us/22xp-virus-whatnowhp/22xp-virus-whatnowhp-moth-v2.jpg" width="151"/>
<media:credit>Stephanie Keith for The New York Times</media:credit>
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
<title>How to Sleep With Coronavirus Anxiety</title>
<link>
https://www.nytimes.com/2020/03/25/style/self-care/sleep-tips-benefits-coronavirus.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/25/style/self-care/sleep-tips-benefits-coronavirus.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/25/style/self-care/sleep-tips-benefits-coronavirus.html" rel="standout"/>
<description>
Sleep has never been more important. Here are our most concrete recommendations for getting some.
</description>
<dc:creator>Adam Popescu</dc:creator>
<pubDate>Wed, 25 Mar 2020 23:24:04 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">your-feed-selfcare</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Sleep</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Beds and Bedding</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Anxiety and Stress</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Meditation</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2019/10/20/fashion/20Sleep-1/20Sleep-1-moth.jpg" width="151"/>
<media:credit>David Brandon Geeting for The New York Times</media:credit>
</item>
<item>
<title>
How to Get Health Insurance if Worried About Coronavirus or Unemployment
</title>
<link>
https://www.nytimes.com/2020/03/25/upshot/coronavirus-health-insurance-faq.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/25/upshot/coronavirus-health-insurance-faq.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/25/upshot/coronavirus-health-insurance-faq.html" rel="standout"/>
<description>
There are more options for getting coverage than in past economic crises.
</description>
<dc:creator>Margot Sanger-Katz and Reed Abelson</dc:creator>
<pubDate>Wed, 25 Mar 2020 22:22:25 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Health Insurance and Managed Care</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Unemployment</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Patient Protection and Affordable Care Act (2010)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Medicaid</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/25/upshot/up-virus-insure-image/up-virus-insure-image-moth.png" width="151"/>
<media:credit>The New York Times</media:credit>
</item>
<item>
<title>
A Homeless Family Navigates a Life Warped by the Coronavirus
</title>
<link>
https://www.nytimes.com/2020/03/25/nyregion/homeless-family-coronavirus.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/25/nyregion/homeless-family-coronavirus.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/25/nyregion/homeless-family-coronavirus.html" rel="standout"/>
<description>
April Goode and four of her children moved into a hotel room in New Jersey in February. She had no job and no car. Then the pandemic hit.
</description>
<dc:creator>Mihir Zaveri</dc:creator>
<pubDate>Wed, 25 Mar 2020 21:13:39 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Quarantines</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Layoffs and Job Reductions</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Ledgewood (NJ)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Homeless Persons</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Labor and Jobs</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Home Schooling</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/25/us/00xp-virus-homeless1/00xp-virus-homeless1-moth.jpg" width="151"/>
<media:credit>Erica Lee for The New York Times</media:credit>
<media:description>
April Goode, 39, in the hotel room where she has been living with her son, Ethan, 9, and three other children last month. The coronavirus outbreak has since brought added challenges.
</media:description>
</item>
<item>
<title>Becoming a Man, Virtually</title>
<link>
https://www.nytimes.com/2020/03/25/well/family/coronavirus-virtual-bar-mitzvah.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/25/well/family/coronavirus-virtual-bar-mitzvah.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/25/well/family/coronavirus-virtual-bar-mitzvah.html" rel="standout"/>
<description>
We couldn’t have guests, but the bar mitzvah ceremony would go on.
</description>
<dc:creator>Deb Levy</dc:creator>
<pubDate>Wed, 25 Mar 2020 20:36:18 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Synagogues</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Quarantines</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Jews and Judaism</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Shutdowns (Institutional)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Families and Family Life</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Parenting</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Teenagers and Adolescence</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/25/well/25virus-barmitzvah1/25virus-barmitzvah1-moth.jpg" width="151"/>
<media:credit>Isabella Conenna</media:credit>
<media:description>
Zane Levy’s bar mitzvah was live-streamed on Saturday because of the coronavirus restrictions on gathering.
</media:description>
</item>
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
<title>How ‘Muscle Memory’ May Help Keep Us Fit</title>
<link>
https://www.nytimes.com/2020/03/25/well/move/coronavirus-exercise-muscles-fitness.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/25/well/move/coronavirus-exercise-muscles-fitness.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/25/well/move/coronavirus-exercise-muscles-fitness.html" rel="standout"/>
<description>
Muscles may “remember” in ways that will allow us to regain fitness once gyms reopen and we start working out again.
</description>
<dc:creator>Gretchen Reynolds</dc:creator>
<pubDate>Wed, 25 Mar 2020 09:00:13 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Exercise</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Muscles</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Weight Lifting</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/24/well/physed-muscle-photo/physed-muscle-photo-moth.jpg" width="151"/>
<media:credit>iStock</media:credit>
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
Spring Breaker Who Said, 'If I Get Corona, I Get Corona,' Apologizes
</title>
<link>
https://www.nytimes.com/2020/03/24/us/coronavirus-brady-sluder-spring-break.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/24/us/coronavirus-brady-sluder-spring-break.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/24/us/coronavirus-brady-sluder-spring-break.html" rel="standout"/>
<description>
A beachgoer whose defiance of social distancing guidelines drew widespread attention said that he had not been “aware of the severity of my actions and comments.”
</description>
<dc:creator>Aimee Ortiz</dc:creator>
<pubDate>Wed, 25 Mar 2020 00:05:03 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Quarantines</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Sluder, Brady</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Travel and Vacations</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Social Media</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Florida</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Miami (Fla)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Apologies</category>
<category domain="">spring break</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/24/multimedia/24xp-virus-springbreaker/24xp-virus-springbreaker-moth.jpg" width="151"/>
<media:credit>Saul Martinez for The New York Times</media:credit>
<media:description>
College students at a bar in Fort Lauderdale, Fla., on March 11.
</media:description>
</item>
<item>
<title>
What I Learned When My Husband Got Sick With Coronavirus
</title>
<link>
https://www.nytimes.com/2020/03/24/magazine/coronavirus-family.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/24/magazine/coronavirus-family.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/24/magazine/coronavirus-family.html" rel="standout"/>
<description>
Our world became one of isolation, round-the-clock care, panic and uncertainty — even as society carried on around us with all too few changes.
</description>
<dc:creator>Jessica Lustig</dc:creator>
<pubDate>Tue, 24 Mar 2020 22:56:00 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Emergency Medical Treatment</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Tests (Medical)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Protective Clothing and Gear</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/24/magazine/24mag-corona/24mag-corona-moth.jpg" width="151"/>
<media:credit>Photo illustration by Delcan & Co.</media:credit>
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
Brightening Up Coronavirus Quarantine With Christmas Spirit
</title>
<link>
https://www.nytimes.com/2020/03/24/well/family/coronavirus-quarantine-christmas-lights.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/24/well/family/coronavirus-quarantine-christmas-lights.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/24/well/family/coronavirus-quarantine-christmas-lights.html" rel="standout"/>
<description>
Families are decking the halls to bring light in a dark time.
</description>
<dc:creator>Blane Bachelor</dc:creator>
<pubDate>Tue, 24 Mar 2020 18:18:50 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Christmas</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Lighting</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Social Media</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Shutdowns (Institutional)</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/24/well/24virus-xmas2/24virus-xmas2-moth.jpg" width="151"/>
<media:credit>Matt Carino Design</media:credit>
<media:description>
Matt Carino, a lighting design student, put up this display at his home in Montclair, N.J. “I wanted to send a simple, strong and positive message to the community,” he said.
</media:description>
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
<title>
Rome’s Homeless Don’t Have the Luxury of Staying Home
</title>
<link>
https://www.nytimes.com/2020/03/24/world/europe/italy-coronavirus-homeless.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/24/world/europe/italy-coronavirus-homeless.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/24/world/europe/italy-coronavirus-homeless.html" rel="standout"/>
<description>
How do you wash your hands without a sink? Stock up on food without money? Or shelter in place when you live on the streets? Charities in the Italian capital are struggling to respond.
</description>
<dc:creator>Elisabetta Povoledo</dc:creator>
<pubDate>Tue, 24 Mar 2020 15:54:12 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Italy</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Homeless Persons</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Quarantines</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Hygiene and Cleanliness</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Soup Kitchens</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Volunteers and Community Service</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">St Egidio</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Rome (Italy)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Deaths (Fatalities)</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/24/world/24virus-life-italy01/24virus-life-italy01-moth.jpg" width="151"/>
<media:credit>Alessandro Penso for The New York Times</media:credit>
<media:description>
Piazza dei Crociferi in Rome on Saturday. There are about 8,000 homeless people in the Italian capital.
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
<title>
Who Should Be Saved First? Experts Offer Ethical Guidance
</title>
<link>
https://www.nytimes.com/2020/03/24/upshot/coronavirus-rationing-decisions-ethicists.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/24/upshot/coronavirus-rationing-decisions-ethicists.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/24/upshot/coronavirus-rationing-decisions-ethicists.html" rel="standout"/>
<description>
Well before rationing caused by coronavirus, protocols were established about “who lives and who dies.”
</description>
<dc:creator>Austin Frakt</dc:creator>
<pubDate>Tue, 24 Mar 2020 17:08:16 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Rationing and Allocation of Resources</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Shortages</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Ethics and Official Misconduct</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Ventilators (Medical)</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/25/upshot/25up-healthrationing/24up-healthrationing-moth-v2.jpg" width="151"/>
<media:credit>Neil Hall/EPA, via Shutterstock</media:credit>
<media:description>
Ventilators under assembly at a medical supply company in Britain. The lack of such equipment has already created wrenching decisions for health care workers in Italy.
</media:description>
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
<title>Cooking Through a Crisis With Grandma, Virtually</title>
<link>
https://www.nytimes.com/2020/03/24/well/family/coronavirus-cooking-grandmother-facetime.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/24/well/family/coronavirus-cooking-grandmother-facetime.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/24/well/family/coronavirus-cooking-grandmother-facetime.html" rel="standout"/>
<description>
At a moment when the present is terrifying and the future is uncertain, we’re returning to the recipes of the past.
</description>
<dc:creator>Ali Jaffe</dc:creator>
<pubDate>Tue, 24 Mar 2020 09:00:13 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Cooking and Cookbooks</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Grandparents</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Families and Family Life</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/19/well/00well-jaffe/00well-jaffe-moth-v2.jpg" width="151"/>
<media:credit>via Ali Jaffe</media:credit>
<media:description>
Ali Jaffe cooks in her Brooklyn kitchen with guidance from her grandmother, Roslyn Jaffe, using FaceTime.
</media:description>
</item>
<item>
<title>
Getting Through, Making Memories and Being the Grown-Ups
</title>
<link>
https://www.nytimes.com/2020/03/24/well/family/coronavirus-children-parents-memories.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/24/well/family/coronavirus-children-parents-memories.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/24/well/family/coronavirus-children-parents-memories.html" rel="standout"/>
<description>
You can’t change the world, but you can help shape the way your children experience this and remember it. And you will. You’re the person they need.
</description>
<dc:creator>Perri Klass, M.D.</dc:creator>
<pubDate>Tue, 24 Mar 2020 09:00:06 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Children and Childhood</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Quarantines</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Shutdowns (Institutional)</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/23/well/23well-klass-memories/23well-klass-memories-moth.jpg" width="151"/>
<media:credit>Getty Images</media:credit>
</item>
<item>
<title>
What Does Our Body Temperature Say About Our Health?
</title>
<link>
https://www.nytimes.com/2020/03/24/magazine/fever-body-temperature-coronavirus.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/24/magazine/fever-body-temperature-coronavirus.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/24/magazine/fever-body-temperature-coronavirus.html" rel="standout"/>
<description>
Humans seem to have cooled over the past 150 years. What does that mean for us now?
</description>
<dc:creator>Kim Tingley</dc:creator>
<pubDate>Tue, 24 Mar 2020 15:14:52 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Medicine and Health</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Temperature</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Longevity</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Fever</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Centers for Disease Control and Prevention</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Mount Sinai Medical Center</category>
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
<title>Grieving the Losses of Coronavirus</title>
<link>
https://www.nytimes.com/2020/03/23/well/family/coronavirus-grief-loss.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/23/well/family/coronavirus-grief-loss.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/23/well/family/coronavirus-grief-loss.html" rel="standout"/>
<description>
In addition to the tragic losses of life and health and jobs we are grieving the losses of weddings, sports and the ability to buy eggs or get a haircut.
</description>
<dc:creator>Lori Gottlieb</dc:creator>
<pubDate>Wed, 25 Mar 2020 23:32:52 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Grief (Emotion)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Anxiety and Stress</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Quarantines</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Funerals and Memorials</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Mental Health and Disorders</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Death and Dying</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/26/world/26virus-grief-print/26virus-grief-print-moth-v2.jpg" width="151"/>
<media:credit>Leonardo Santamaria</media:credit>
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
Singalongs From Windowsills Lift Spirits During Coronavirus Crisis
</title>
<link>
https://www.nytimes.com/2020/03/23/us/coronavirus-window-singalong.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/23/us/coronavirus-window-singalong.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/23/us/coronavirus-window-singalong.html" rel="standout"/>
<description>
Following an example set by Europeans who sang from balconies, some homebound Americans are communally belting out tunes from their windows.
</description>
<dc:creator>Christopher Mele and Neil Vigdor</dc:creator>
<pubDate>Mon, 23 Mar 2020 19:15:13 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Music</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Balconies and Terraces</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Chicago (Ill)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Windows</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Quarantines</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/23/world/23xp-singers/23xp-singers-moth.jpg" width="151"/>
<media:credit>Susana Vera/Reuters</media:credit>
<media:description>
A man claps as Beatriz Berodia, a Spanish blues singer, performs from her balcony in Madrid. Some Americans who are homebound because of the coronavirus are also taking up communal singing.
</media:description>
</item>
<item>
<title>
Eleven States Now Letting Uninsured Sign Up for Obamacare
</title>
<link>
https://www.nytimes.com/2020/03/23/upshot/coronavirus-obamacare-marketplaces-reopen.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/23/upshot/coronavirus-obamacare-marketplaces-reopen.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/23/upshot/coronavirus-obamacare-marketplaces-reopen.html" rel="standout"/>
<description>
More coronavirus care will be covered in many states. Federal officials are considering similar action for the state markets they run.
</description>
<dc:creator>Margot Sanger-Katz and Reed Abelson</dc:creator>
<pubDate>Wed, 25 Mar 2020 20:27:30 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Health Insurance and Managed Care</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Patient Protection and Affordable Care Act (2010)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Unemployment</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/24/upshot/24up-virusenrollment/24up-virusenrollment-moth.png" width="151"/>
<media:credit>The New York Times</media:credit>
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
Supplements for Coronavirus Probably Won’t Help, and May Harm
</title>
<link>
https://www.nytimes.com/2020/03/23/well/live/coronavirus-supplements-herbs-vitamins-colds-flu.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/23/well/live/coronavirus-supplements-herbs-vitamins-colds-flu.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/23/well/live/coronavirus-supplements-herbs-vitamins-colds-flu.html" rel="standout"/>
<description>
Worried Americans are scrambling to buy wellness products they think will protect against coronavirus. Some may do harm.
</description>
<dc:creator>Anahad O’Connor</dc:creator>
<pubDate>Mon, 23 Mar 2020 16:26:50 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Vitamins</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Quarantines</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Dietary Supplements and Herbal Remedies</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Colds</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Anxiety and Stress</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Diet and Nutrition</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Influenza</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Vitamin D</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Zinc</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Sleep</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Drugstores</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Herbs</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Health Foods</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Melatonin (Hormone)</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/23/well/well-supplements/well-supplements-moth-v2.jpg" width="151"/>
<media:credit>Chester Higgins Jr./The New York Times</media:credit>
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
<title>The Medical ID Bracelet That Doesn’t Look Like One</title>
<link>
https://www.nytimes.com/2020/03/23/style/medical-id-health-coronavirus.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/23/style/medical-id-health-coronavirus.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/23/style/medical-id-health-coronavirus.html" rel="standout"/>
<description>
An ID can be crucial in a medical crisis, and it doesn’t have to be something you want to hide.
</description>
<dc:creator>Jaclyn Peiser</dc:creator>
<pubDate>Mon, 23 Mar 2020 12:37:16 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Emergency Medical Treatment</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Autoimmune Diseases</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/23/fashion/23VIRUS-MEDICALID/23VIRUS-MEDICALID-moth.jpg" width="151"/>
<media:description>
A medical ID bracelet from the line Return to Sender.
</media:description>
</item>
<item>
<title>
Coronavirus and Social Distancing: Take Steps to Counter the Loneliness
</title>
<link>
https://www.nytimes.com/2020/03/23/well/family/coronavirus-loneliness-isolation-social-distancing-elderly.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/23/well/family/coronavirus-loneliness-isolation-social-distancing-elderly.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/23/well/family/coronavirus-loneliness-isolation-social-distancing-elderly.html" rel="standout"/>
<description>
Attempts to avoid coronavirus can increase the risk of physical and emotional harm from limited social contact.
</description>
<dc:creator>Jane E. Brody</dc:creator>
<pubDate>Mon, 23 Mar 2020 09:00:10 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Quarantines</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Murthy, Vivek H</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Elderly</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Anxiety and Stress</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/24/science/24BRODYISOLATION/24BRODYISOLATION-moth.jpg" width="151"/>
<media:credit>Gracia Lam</media:credit>
</item>
<item>
<title>Heartburn Drugs Tied to Bone Fractures in Children</title>
<link>
https://www.nytimes.com/2020/03/23/well/live/heartburn-drugs-children-bone-fractures-ppi-proton-pump-inhibitor.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/23/well/live/heartburn-drugs-children-bone-fractures-ppi-proton-pump-inhibitor.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/23/well/live/heartburn-drugs-children-bone-fractures-ppi-proton-pump-inhibitor.html" rel="standout"/>
<description>
Proton pump inhibitors are sometimes needed in children with reflux, but parents should be aware they may increase the risk of fractures.
</description>
<dc:creator>Nicholas Bakalar</dc:creator>
<pubDate>Mon, 23 Mar 2020 09:00:03 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Bones</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Bone Fractures</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Children and Childhood</category>
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
With Live Sports Gone, Announcer Offers Play by Play of the Everyday
</title>
<link>
https://www.nytimes.com/2020/03/22/world/europe/coronavirus-nick-heath-rugby.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/22/world/europe/coronavirus-nick-heath-rugby.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/22/world/europe/coronavirus-nick-heath-rugby.html" rel="standout"/>
<description>
Nick Heath narrates his videos of people doing mundane things, like crossing the street, with the verve and dramatic flair of competitive sports.
</description>
<dc:creator>Johnny Diaz</dc:creator>
<pubDate>Sun, 22 Mar 2020 22:40:46 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Heath, Nick</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Social Media</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Twitter</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">London (England)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Rugby</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/22/us/22xp-virus-commentator/22xp-virus-commentator-moth.jpg" width="151"/>
<media:description>
Nick Heath, a rugby announcer, has been chronicling his London neighborhood with videos that have become popular on social media.
</media:description>
</item>
<item>
<title>
Lost Sense of Smell May Be Peculiar Clue to Coronavirus Infection
</title>
<link>
https://www.nytimes.com/2020/03/22/health/coronavirus-symptoms-smell-taste.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/22/health/coronavirus-symptoms-smell-taste.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/22/health/coronavirus-symptoms-smell-taste.html" rel="standout"/>
<description>
Doctor groups are recommending testing and isolation for people who lose their ability to smell and taste, even if they have no other symptoms.
</description>
<dc:creator>Roni Caryn Rabin</dc:creator>
<pubDate>Wed, 25 Mar 2020 07:33:44 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Smell (Olfaction)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Tests (Medical)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Quarantines</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">American Academy of Otolaryngology</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">ENT UK</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">your-feed-science</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/22/science/22virus-smell1/22virus-smell1-moth.jpg" width="151"/>
<media:credit>Ognen Teofilovski/Reuters</media:credit>
<media:description>
A girl removed her mask to smell the flowers on a blooming tree in Skopje, North Macedonia, on Friday. Evidence is growing that lost sense of smell and taste are peculiar telltale signs of Covid-19, the disease caused by the coronavirus.
</media:description>
</item>
<item>
<title>
Some Tips on How to Stay Sane in a World That Isn’t
</title>
<link>
https://www.nytimes.com/2020/03/22/us/coronavirus-mental-health-anxiety-tips.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/22/us/coronavirus-mental-health-anxiety-tips.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/22/us/coronavirus-mental-health-anxiety-tips.html" rel="standout"/>
<description>
The coronavirus outbreak has magnified all kinds of fears. Try living in the moment. Take stock of what’s working. Turn off the television.
</description>
<dc:creator>Katherine Rosman</dc:creator>
<pubDate>Sun, 22 Mar 2020 17:55:59 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Anxiety and Stress</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Psychology and Psychologists</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Therapy and Rehabilitation</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Talkspace (Groop Internet Platform Inc)</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/20/us/00ANXIETY-TIPS/00ANXIETY-TIPS-moth.jpg" width="151"/>
<media:credit>Carlos Barria/Reuters</media:credit>
<media:description>
The pedestrian area of South Beach, Fla., was nearly empty on Friday after local authorities restricted non-essential activities and rolled out a midnight curfew in Miami Beach.
</media:description>
</item>
<item>
<title>Plácido Domingo Says He Has the Coronavirus</title>
<link>
https://www.nytimes.com/2020/03/22/arts/music/coronavirus-placido-domingo.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/22/arts/music/coronavirus-placido-domingo.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/22/arts/music/coronavirus-placido-domingo.html" rel="standout"/>
<description>
“I beg everyone to be extremely careful,” the opera singer said in a Facebook post on Sunday after developing a fever and cough and testing positive for the virus.
</description>
<dc:creator>Johnny Diaz</dc:creator>
<pubDate>Sun, 22 Mar 2020 17:07:49 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Italy</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Opera</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Tests (Medical)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Sexual Harassment</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Domingo, Placido</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2019/08/20/world/22xp-virus-domingo-image/merlin_147243696_00c3b6d4-b205-4e5e-80df-65d0ef43b564-moth.jpg" width="151"/>
<media:credit>Karsten Moran for The New York Times</media:credit>
<media:description>
Plácido Domingo in 2018 at the 50th anniversary of his debut at the Metropolitan Opera in New York. The opera singer, 79, disclosed on Sunday that he tested positive for the coronavirus.
</media:description>
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
<title>Target Apologizes for Selling N95 Masks in Seattle</title>
<link>
https://www.nytimes.com/2020/03/22/business/coronavirus-n95-masks-target.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/22/business/coronavirus-n95-masks-target.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/22/business/coronavirus-n95-masks-target.html" rel="standout"/>
<description>
The company said the masks were offered for sale “in error” at some stores in Washington State, which has been a hot spot for the coronavirus pandemic.
</description>
<dc:creator>Johnny Diaz</dc:creator>
<pubDate>Sun, 22 Mar 2020 18:53:03 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Masks</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Shortages</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Stockpiling</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Target Corporation</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Inslee, Jay</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_geo">Seattle (Wash)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Protective Clothing and Gear</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Shopping and Retail</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/22/multimedia/22xp-virus-facemasks/22xp-virus-facemasks-moth.jpg" width="151"/>
<media:credit>Ann Dornfeld/KUOW</media:credit>
<media:description>
Gov. Jay Inslee of Washington said his office had taken action after hearing reports of N95 masks being sold at Target stores in Seattle.
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
Christian Siriano and Dov Charney Are Making Masks and Medical Supplies Now
</title>
<link>
https://www.nytimes.com/2020/03/21/style/coronavirus-masks-dov-charney-christian-siriano.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/21/style/coronavirus-masks-dov-charney-christian-siriano.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/21/style/coronavirus-masks-dov-charney-christian-siriano.html" rel="standout"/>
<description>
Fashion designers and manufacturers are rebooting their operations to help with shortages of masks and gowns in the coronavirus pandemic.
</description>
<dc:creator>Vanessa Friedman and Jessica Testa</dc:creator>
<pubDate>Sun, 22 Mar 2020 15:45:29 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Masks</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Protective Clothing and Gear</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Fashion and Apparel</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Factories and Manufacturing</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Shortages</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Textiles</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Inditex Group</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">LVMH Moet Hennessy Louis Vuitton SA</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">L'Oreal SA</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Pyer Moss Apparel Group LLC</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Charney, Dov</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Jean-Raymond, Kerby</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Siriano, Christian</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">your-feed-healthcare</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Los Angeles Apparel Inc</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Karla Colletto Swimwear Inc</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">your-feed-fashion</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/21/fashion/21-MANUFACTURING-MASKS/21-MANUFACTURING-MASKS-moth.jpg" width="151"/>
<media:credit>Elizabeth Bick for The New York Times</media:credit>
<media:description>
Both tourists and New Yorkers on March 14, at the World Trade Center in New York City.
</media:description>
</item>
<item>
<title>The Hottest Parties in Town Are Now Online</title>
<link>
https://www.nytimes.com/2020/03/21/arts/d-nice-instagram.html
</link>
<guid isPermaLink="true">
https://www.nytimes.com/2020/03/21/arts/d-nice-instagram.html
</guid>
<atom:link href="https://www.nytimes.com/2020/03/21/arts/d-nice-instagram.html" rel="standout"/>
<description>
As many are quarantining or socially distancing themselves to curb the spread of the coronavirus, the party has moved to social media.
</description>
<dc:creator>Sandra E. Garcia</dc:creator>
<pubDate>Sun, 22 Mar 2020 14:03:14 +0000</pubDate>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Coronavirus (2019-nCoV)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Social Media</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Parties (Social)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_per">Jones, Derrick (D-Nice)</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Music</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Rap and Hip-Hop</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Disc Jockeys</category>
<category domain="http://www.nytimes.com/namespaces/keywords/nyt_org">Instagram Inc</category>
<category domain="http://www.nytimes.com/namespaces/keywords/des">Quarantines</category>
<media:content height="151" medium="image" url="https://static01.nyt.com/images/2020/03/21/us/21xp-virus-digitalparties-image/21xp-virus-digitalparties-image-moth.jpg" width="151"/>
<media:credit>Slaven Vlasic/Getty Images for Hbo</media:credit>
<media:description>
D.J. D-Nice at the Guggenheim Museum in New York in 2019. He hosted a nine-hour set on his Instagram Live on Friday night that was “attended” by many celebrities. 
</media:description>
</item>
</channel>
`;

const parser = new DOMParser(); // initialize dom parser
const srcDOM = parser.parseFromString(strxml, "application/xml"); 

//Now we can call DOM methods like GetElementById, etc. on scrDOM.

//Converting DOM Tree to json
console.log(xml2json(srcDOM));
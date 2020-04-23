import React from 'react';
import {Radar} from 'react-chartjs-2';
import { CSSTransitionGroup } from 'react-transition-group';
import Result from './Result.js';

function ResultsList(props) {
  const youResults = props.quizResult;
  var averageOptions = [1, 1, 3, 2, 3];
  var results = {
    "Textual Data": {
      "name": "Textual Data",
      "you": youResults["Textual Data"],
      "average": averageOptions[0],
      "description": ["Many of us are constantly generating textual content in the form of emails, text messages, and social media posts, though the value of that content is typically seen as less than that of other types of data. Rather than possessing objective and more easily exploitable value, large amounts of textual content can be analyzed to gather similar insights. Messages mentioning people, places, and things point to connections or interests in those things that can be used by parties like advertising firms to paint a more accurate picture of who you actually are.", 
                      "Personalized ads are often seen as more helpful than the invasion of privacy is harmful, but analysis of textual content can also be used to pick up on your address or even aspects of your personal schedule."],
      "links": [{name: "Documents Confirm How the NSA's Surveillance Procedures Threaten Americans' Privacy", url: "https://www.aclu.org/fact-sheet/documents-confirm-how-nsas-surveillance-procedures-threaten-americans-privacy"},
                {name: "Tech Tip: How to securely send email and texts", url: "https://www.usatoday.com/story/tech/columnist/2019/11/21/how-to-securely-send-email-texts/4257814002/"},
      ],
    },
    "Image & Voice": {
      "name": "Image & Voice",
      "you": youResults["Image & Voice"],
      "average": averageOptions[1],
      "description": ["Voice and image recordings are collected through a wide range of methods, many of which are voluntary. Posts on social media make up for the majority of this type of data, and the dangers of publicly posting this type of content are fairly well known. Photos and videos can be used and re-posted without permission, or even analyzed to find out other information about you like your location. Voice assistants like Siri, Alexa, and Google Assistant are always listening for their activating keywords, even if that audio isn’t being listened to by another human being.", 
                      "Traffic and security cameras are generally accepted forms of involuntary voice and image data collection as they serve a necessary and understandable function, while others are seen as serious invasions of privacy. More prominent examples of this include unsecured webcams that can be hacked and even the National Security Agency’s surveillance of private citizens through phone calls."],
      "links": [{name: "Inside Amazon’s plan for Alexa to run your entire life", url: "https://www.technologyreview.com/2019/11/05/65069/amazon-alexa-will-run-your-life-data-privacy/"},
                {name: "Why San Francisco’s ban on face recognition is only the start of a long fight", url: "https://www.technologyreview.com/2019/05/16/135339/facial-recognition-ban-san-francisco-surveillance-privacy-private-corporate-interests/"},
                {name: "Documents Confirm How the NSA's Surveillance Procedures Threaten Americans' Privacy", url: "https://www.aclu.org/fact-sheet/documents-confirm-how-nsas-surveillance-procedures-threaten-americans-privacy"},
                {name: "How To Make Your Amazon Echo and Google Home as Private as Possible", url: "https://www.wired.com/story/alexa-google-assistant-echo-smart-speaker-privacy-controls/"},
      ],
    },
    "Location": {
      "name": "Location",
      "you": youResults["Location"],
      "average": averageOptions[2],
      "description": ["Location data is primarily gathered through a person’s smartphone or other internet-enabled device. Services like delivery and rideshare apps, for example, obviously require their users’ locations in order to function. Search engines like Google might also ask for your location in order to personalize results to better suit your needs. These kinds of examples are voluntary, and primarily serve to increase convenience to the end user, so they are often accepted as worthwhile trade-offs for the benefits they provide.", "Some examples of location data collection may be less obvious and less voluntary. Point of Sales data is data that is generated whenever an in-store purchase is made, and includes not only payment method and items purchased but also the location of the purchase. Facial recognition technology used in smart city devices can also track your location while in public."],
      "links": [{name: "Your Apps Know Where You Were Last Night, and They're Not Keeping It Secret", url: "https://www.nytimes.com/interactive/2018/12/10/business/location-data-privacy-apps.html"},
                {name: "How Google Uses Location Information", url: "https://policies.google.com/technologies/location-data"},
                {name: "The NY Times Location Tracking Privacy Tips", url: "https://www.nytimes.com/interactive/2019/12/19/opinion/location-tracking-privacy-tips.html"},
      ],
    },
    "Relational Data": {
      "name": "Relational Data",
      "you": youResults["Relational Data"],
      "average": averageOptions[3],
      "description": ["Relational data consists of a person’s connections to other people and things. Social media networks like Facebook largely account for the collection of this data, with a user’s Friends List and Likes providing significant usable data. Perhaps the most important use of relational data collected in this way is the ability of advertisers to create personalized ads for products and services you’re more likely to actually want.",
                      "When this type of data collection is voluntary and provides a useful and convenient, most people consider it a valid trade-off rather than an invasion of privacy. One large-scale example of involuntary relational data collection is the Facebook–Cambridge Analytica scandal, which opened up a larger conversation about the ethics of social media networks and data privacy."],
      "links": [{name: "I Downloaded the Information That Facebook Has on Me. Yikes.", url: "https://www.nytimes.com/2018/04/11/technology/personaltech/i-downloaded-the-information-that-facebook-has-on-me-yikes.html"},
                {name: "Facebook data privacy scandal: A cheat sheet", url: "https://www.techrepublic.com/article/facebook-data-privacy-scandal-a-cheat-sheet/"},
                {name: "The Great Hack: A Netflix documentary on the Cambridge Analytica scandal", url: "https://www.thegreathack.com/"},
      ],
    },
    "Personal Metadata": {
      "name": "Personal Metadata",
      "you": youResults["Personal Metadata"],
      "average": averageOptions[4],
      "description": ["Personal metadata consists of more raw information surrounding a person’s identity including their name, date of birth, bank account number and other financial information, social security number, etc. Many pieces of information can fall under this type of data, some of which are considered more private than others. The breadth of this data also means that it ends up in many different places as it is given to more and more apps and services, making it difficult to track exactly where it’s ended up and who has access to what.",
                      "While your name and birthday might be freely given to a social media platform for the obvious benefits it would give you, one should never make their social security number public. Because personal metadata essentially defines a person’s identity it should be no surprise that this information can be used in identity theft."],
      "links": [{name: "have i been pwned?: Check your data breach status online", url: "https://haveibeenpwned.com/"},
                {name: "info.graphic's interactive narrative on password patterns", url: "https://info.graphics/stories/heatscore-password-patterns/"},
      ],
    },
  };

  var radar = {
    data: {
      labels: Object.keys(results),
      datasets: [
        {
          label: "Average response",
          backgroundColor: "rgba(0, 0, 0, 0.125)",
          borderColor: "rgba(0, 0, 0, 0.125)",
          data: Object.keys(results).map(function(key, i) {
                 return Math.ceil(results[key].average);
               })
        },
        {
          label: "Your responses",
          backgroundColor: "rgba(0, 0, 255, 0.5)",
          borderColor: "rgba(0, 0, 255, 0.625)",
          data: Object.keys(results).map(function(key, i) {
            return Math.ceil(results[key].you);
          })
        },
      ],
    },
    options: {
      scale: {
        ticks: {
          maxTicksLimit: 6,
          display: false
        }
      }
    },
  };

  return (
    <CSSTransitionGroup
      className="container result"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <h1>Results</h1>
      <h3>Your data privacy priorities:</h3>
      <Radar data={radar.data} options={radar.options} />
      <p>Thank you for taking the time to complete this activity and to consider the impact of data privacy on your life and those of others! If you didn't know it already, each of the scenarios you saw are <b>real-world</b> data privacy situations that you or someone you know may have dealt with in the past. With <b>87%</b> of teens stating they "often" or "always" use social media, these types of situations are now the new normal. Gen Z has largely been an unheard voice when it comes to this subject, but by staying informed you might have a chance to change that.</p>
      <p>We’ve analyzed your responses to determine which types of data seem to be more important or higher priorities for you. The above chart shows those results and how they compare to the average response. The higher your score in each category, the higher you value that type of data privacy. Continue reading below for more information on each type of data and for more resources related to data privacy.</p>
      {
        Object.keys(results).map(function(key, i) {
          return ( <Result vals={results[key]} key={i} /> )
        })
      }

      <div className="resourcesList">
        <h1>Want to learn more?</h1>
        <div className="result">
          <h2>Here's some additional resources on data privacy</h2>
          <ul className="links">
            <li><a href="https://cdn.ttc.io/s/tacticaltech.org/a-data-day.pdf">A "Data-Day": An Visual Infographic of Data Collected in a Day</a></li>
            <li><a href="https://myshadow.org/tracking-data-traces">Who's Collecting Our Data? How? and Why?: a specific guide to what is being collected and why</a></li>
            <li><a href="https://www.nytimes.com/interactive/2019/opinion/internet-privacy-project.html">The NY Times Privacy Project: a project that explores the relationship between tech and society</a></li>
          </ul>
        </div>
        <div className="result">
          <h2>Take control of your privacy with these tools</h2>
          <ul className="links">
            <li><a href="https://datadetoxkit.org/en/home">Data Detox Kit: Steps to controlling your digital privacy</a></li>
            <li><a href="https://identity.utexas.edu/everyone/how-to-manage-your-social-media-privacy-settings">How to manage your social media privacy settings</a></li>
            <li><a href="https://1password.com/">1Password: a secure password manager</a></li>
            <li><a href="https://www.eff.org/https-everywhere/">HTTPS Everywhere: a browser extension that secures your online presence</a></li>
          </ul>
        </div>
      </div>

    </CSSTransitionGroup>
  );
}

export default ResultsList;

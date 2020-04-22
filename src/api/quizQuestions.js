var imageAndVoice = [
    {
        type: "Image & Voice",
        content: "Amazon reveals that employees are able to listen in on random users' Echo voice recordings, without notifying users",
        captionTitle: "Amazon Alexa",
        caption: ["Amazon's Alexa is a voice assistant that allows you to look up information with voice commands, play and control music, and send messages along with many other uses. Alexa is available on both smart phones and smart home devices such as the Amazon Echo.", "Amazon is always listening, but with over 100 million Alexa-enabled smart home devices sold, it's impossible for Amazon employees to be listening to all the audio recorded, and very unlikely that they are listening to one specific device's recorded audio at any given time."]
    },
    {
        type: "Image & Voice",
        content: "You phone uses keywords heard through it's microphone to show you targeted ads",
        captionTitle: "Listening In",
        caption: ["Chances are that your smart phone is recording audio without your informed consent. Computer Science research published by Northeastern University academics shows that many of the top apps on the Google Play store are able to record not only audio, but also the phone's screen.", "This image and audio content is collected by the companies who own these apps, but also sent to third-parties like targeted advertising firms, meaning that a chain of different parties ends up with access to your data."]
    },
    {
        type: "Image & Voice",
        content: "TikTok use your content for its ads without any of your formal consent",
        captionTitle: "TikTok",
        caption: ["TikTok is a mobile-first social media and video-sharing app that became the #1 most downloaded app in 2018 and 2019. The platform's Terms of Service states that content published on the platform may be used as advertising material for the app itself.", "The app also became the subject of serious national security concerns in 2019. It was alleged  images, video, and even location data could be collected from devices in the United States and then turned over to the Chinese government in accordance with the Chinese Internet Security Law."]
    },
    {
        type: "Image & Voice",
        content: "After deleting a photo from Facebook, it is still shown in Google image search results of your name ",
        captionTitle: "Deleted Content",
        caption: ["Facebook's Help Center states that some content is removed from their servers and backup systems when deleted, but that other types of content remain until your account is permanently deleted.", "PersonalData.IO claims that \"log data\" which can include when you log in, click into a group, or post a comment, as well as information or messages from you but stored on other people's Facebook accounts, is kept even after your account is permanently deleted."]
    },
];

var personalMetadata = [
    {
        type: "Personal Metadata",
        content: "A site you logged into with your Facebook account is able to access your personal information, as well that of your friends",
        captionTitle: "Facebook",
        caption: ["Since launching in 2004, Facebook has become the world's most popular social media platform with over 2.5 billion monthly active users. Many sites and services will allow you to log in via your Facebook account.", "In 2016, Cambridge Analytica used a personality quiz app, to obtained information from users accounts and those of their friends. They gathered information on 87 million Facebook users and used it to aid their pro-Brexit Leave EU campaign and Donald Trump's presidential campaign."]
    },
    {
        type: "Personal Metadata",
        content: "Facebook targets advertisements to you using the information you entered into Facebook such as your name and birthday",
        captionTitle: "Targeted Ads",
        caption: ["Personal information is given to advertising companies, and in exchange you see ads that are more likely to fit your own interests. These companies purchase your personal data from many different sources, and use algorithms to create a profile of who they think you are.", "By targeting people based on interests, demographic, and even congressional district it's been shown that groups like Cambridge Analytica have used targeted political advertisements to in an effort to impact elections."]
    },
    {
        type: "Personal Metadata",
        content: "The network you use is found to be vulnerable to a malicious third-party that was able to access your internet history",
        captionTitle: "Network Security",
        caption: ["Public networks like those found in restaurants or airports are open to everyone, and can be abused to gain information on you or even infect your device with malware.", "One way of protecting yourself and your devices is through the use of a Virtual Private Network (VPN). VPN applications create a private network you can connect to in order to mask your online activity. These networks reroute your activity through secure servers in other parts of the world, hiding your internet history as well as your location."]
    },
    {
        type: "Personal Metadata",
        content: "Twitter adds your birthdate to your Twitter profile bio by default without asking for permission",
        captionTitle: "Twitter",
        caption: ["Launched in 2006, Twitter now has 330 million monthly active users. Like all social media platforms, it requires new users to input their data of birth to ensure that they are an appropriate age to be using the service and see some of the content posted there.", "Your birthdate falls under the category of Personal Metadata, which means that it's information that describes you and your identity rather than just being information about you. This piece of info might not seem like a big deal, but where do you draw the line?"]
    },
];

var locationData = [
    {
        type: "Location",
        content: "Snapchat's Snap Map feature shows your location to unknown viewers",
        captionTitle: "Snapchat",
        caption: ["Snapchat is a mobile-first social media platform with 46 million monthly active users. One of the primary features of the app is that private photos, videos, and messages disappear after being seen", "Snap Map is a feature that allows you to see the locations of other users on a map. Users were automatically opted-in when the feature launched and had to manually opt-out to avoid sharing their locations. This included many inactive users who may not have been using the app but were still permitting access to their device's location."]
    },
    {
        type: "Location",
        content: "Twitter's location feature adds your location to your tweets without you realizing it",
        captionTitle: "Post Data",
        caption: ["When the geotagging feature which lets users voluntarily tag their location on Tweets was first launched in 2009, Twitter's servers stored users' exact GPS coordinates, even if only the city they were in was displayed. This location data is still stored and publicly available to developers for all geotagged Tweets made from 2009 to 2015.", "Researchers have been able to use this data to pinpoint a user's home, school, work, and frequently visited locations with a 90% accuracy."]
    },
    {
        type: "Location",
        content: "Your Ring home security camera's footage is able to be accessed by the hackers, who can find out your home's location",
        captionTitle: "Ring",
        caption: ["Ring video doorbells is a home security and smart home company best known for their video doorbell devices. Ring doorbells alert homeowners when someone is at their door, whether they've rung the doorbell or not, and to see live and recorded video feeds from their front door at any time.", "If these feeds are visible to other people then it's possible for them to learn information from what they can see, such as street signs and address numbers, cars and license plates, and people coming and going."]
    },
    {
        type: "Location",
        content: "Certain websites use you computer's location to target ads related to where you live",
        captionTitle: "Ads and Location",
        caption: ["Advertisers buy data about you so that they can create a more accurate profile on who you are and show you ads you're more likely to click on. Your location, such as the city you live in, is important for advertising things like local restaurants.", "They can also get location information from the ads themselves. \"Bidstream data\" refers to data collected when you see ads. This data can include the URL where you're seeing the ad, the type of device you're using, your IP address, location, and even audience demographic data."]
    },
];

var relationalData = [
    {
        type: "Relational Data",
        content: "Instagram advertises certain pages to you that are similar to other pages you already follow",
        captionTitle: "Instagram",
        caption: ["Instagram is a mobile-first social media platform created and owned by Facebook, with over 1 billion monthly active users. The platform stores information about you and your activity to better understand your interests and recommend other pages you might like.", "Think about how this this form of advertisement compares to seeing targeted ads elsewhere. Is it better or worse, more convenient or less? Do you think about it differently because they aren't trying to sell you something?"]
    },
    {
        type: "Relational Data",
        content: "Your direct messages with a brand's page are stored indefinitely on the company's servers",
        captionTitle: "Untitled",
        caption: ["Not finished yet..."]
    },
    {
        type: "Relational Data",
        content: "Your phone call to a customer service line is recorded and shared with other employees as part of training",
        captionTitle: "Untitled",
        caption: ["Not finished yet..."]
    },
    {
        type: "Relational Data",
        content: "A scammer messages you through a social media platform, pretending to be a close family member",
        captionTitle: "Untitled",
        caption: ["Not finished yet..."]
    },
];

var textualData = [
    {
        type: "Textual Data",
        content: "Your emails and text messages are accessed by the National Security Agency in an effort to detect threats to national security",
        captionTitle: "Government and Data",
        caption: ["Not finished yet..."]
    },
    {
        type: "Textual Data",
        content: "Your tweets are able to be found by your employer even though you do not use your last name on your account",
        captionTitle: "Untitled",
        caption: ["Not finished yet..."]
    },
    {
        type: "Textual Data",
        content: "You are unable to delete your old Facebook posts because you have lost your password and email address",
        captionTitle: "Login Credentials",
        caption: ["Not finished yet..."]
    },
    {
        type: "Textual Data",
        content: "Facebook is able to hand over a detailed record of all your posts to the government upon request, even if your account is deactivated",
        captionTitle: "Government and Data",
        caption: ["Not finished yet..."]
    },
];

imageAndVoice.sort(() => Math.random() - 0.5);
personalMetadata.sort(() => Math.random() - 0.5);
textualData.sort(() => Math.random() - 0.5);
locationData.sort(() => Math.random() - 0.5);
relationalData.sort(() => Math.random() - 0.5);

var quizQuestions = [
    {
        question: "Would you rather...",
        answers: [imageAndVoice[0], personalMetadata[0]]
    },
    {
        question: "Would you rather...",
        answers: [textualData[0], locationData[0]]
    },
    {
        question: "Would you rather...",
        answers: [relationalData[0], imageAndVoice[1]]
    },
    {
        question: "Would you rather...",
        answers: [personalMetadata[1], textualData[1]]
    },
    {
        question: "Would you rather...",
        answers: [locationData[1], relationalData[1]]
    },
    {
        question: "Would you rather...",
        answers: [imageAndVoice[2], textualData[2]]
    },
    {
        question: "Would you rather...",
        answers: [personalMetadata[2], locationData[2]]
    },
    {
        question: "Would you rather...",
        answers: [relationalData[2], textualData[3]]
    },
    {
        question: "Would you rather...",
        answers: [imageAndVoice[3], locationData[3]]
    },
    {
        question: "Would you rather...",
        answers: [personalMetadata[3], relationalData[3]]
    },  
];

export default quizQuestions;

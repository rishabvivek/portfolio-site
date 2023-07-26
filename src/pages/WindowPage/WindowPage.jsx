import React, { useState, useEffect } from 'react';
import '/src/App.css';
import { motion, AnimatePresence } from 'framer-motion';


function WindowPage() {
  // Replace this projects array with your own project data

  const projects = [
    { title: 'HYOU', header: '"An ML powered site that provides a color based visual based on the emotions evoked by a song"', image: "/hyou.gif" , url: "https://github.com/rishabvivek/hyou",  image2: '', github : 'githubimg',
    description: 'HYOU is a website that takes any song name as an input and will return, at most, 2 emotions that are evoked by the song. I came up with this project when observing the Nanoleaf lights that I own react to the music I played.' +
    ' For those who do not know, Nanoleaf are "smart lights" or IOT devices that can be arranged on a wall in various ways and display any color pattern that you can choose from the app.' +
    ' The app also provides an option to allow the lights to react to music. As an avid listener to music I tried this feature and saw that the lights only reacted to the rhythm of the song, but did not change colors based on the type of song I played.' +
    ' As a fun project I created this, with an attempt to create an ML engine that could classify songs based on the emotion they evoked, and furthermore display a color visual based on these emotions.' +
    ' As you can see on the GIF on the right you can see how the site works.'
    +' The front-end was completely created using the ReactJS powered by the Vite build tool.'
  + ' The back-end is coded using Python and the site is powered by an ML engine that I built. In short, the ML model is a multi-label classifier, aiming to assign songs labels based on 5 emotions: ' +
'happiness, sadness, love, calmness, energeticness. I had to create a custom training and test set for this project, which meant labeling over 700 songs based on the general view of the emotion evoked by the song.' +
' I understand that using a custom dataset can result in bias, but to the best of my ability, I guided my labeling of these songs based on the emotion playlist I found them in Spotify.' +
' Moreover, I utilized the Spotify API to retrieve all the songs, append them to a CSV and use this CSV as my training and test set after labeling all the songs. After training, testing and tinkering with the model I compromised with an 87% accuracy.' +
' Classifying emotions is difficult and a very subjective task, therefore I was quite happy with these results. To finish the project I connected the back-end ML model with the front-end, where I used the emotions returned by the back-end to create a simple color based visual.' +
' This project was very fun to do because I was able to create a cool product for something that I care deeply for - music. I do not think this project is fully finished.' +
' I believe I can continue building off what I have created so far. My goal is t refine the ML model and integrate this with IOT devices such as Nanoleaf such that when I play music using these smart lights, the colors will adapt based on the emotions of the song.'},
    { title: 'MOCK MERCH SITE', header: '"A mock e-commerce site utilizing Stripe API"', image: '/riot-mock-site.gif', url:'https://github.com/rishabvivek/riot_merch_mock_website',  image2: '', github : 'githubimg',
    
    description: 'I created this mock e-commerce site to enhance my understanding of web development. More importantly I learnt many ways to efficiently web-develop such as creating dynamic pages for the products. '+
    'Since I was developing an e-commerce site, I wanted to learn how sites integrate 3rd party payment systems. Utilizing the popular Stripe API, I learnt about how to customize the use of an API for the needs of my e-commerce site. ' +
    'This included learning how to customize shipping choices, and currencies. Lastly, one big takeaway from this project was learning how to pass and share information through multiple pages. This was a concept I did not understand very well, and completing this e-commerce site has definitely improved my understanding in this area.' 
    },
    { title: 'MATCHUPS.GG' , header: '"A data analytics website that provides champion matchup information for League of Legends"', image: '/matchups.gif', url: 'https://github.com/ThiChing/matchups-gg',  image2: '', github : 'githubimg',
    
    description: 'This project was created by friends and I because we wanted to perform unique data analytics on this game that we all played. I will begin by saying that a lot of the information you see on the GIF on the right is missing because our server is not running anymore.' +
  ' Furthermore, I will also say that not all the code has been completed for each champion page, but the code that you will see in the repo is the base code which successfully represents what we set out to achieve.' +
  ' Focusing on the actual material contained in this project, I coded the full front-end using Angular and assisted in developing the backend which we coded in Python.' +
  ' I chose to utilize Angular because i had just started working with this language at my internship and was looking to use this project as a means of reinforcing and learning concepts.' +
  ' For the backend we utilized Python to perform web-scraping. We did not want to just scrape existing analytics websites and re-relay the data to this website, but instead we wanted to look at professional opinions of the matchups for champions.' +
  ' We did this by scraping sites such as Reddit and Mobafire, two platforms where we can retrieve insights and data from professionals. This is where the TIPS info would shine, where we can provide users with an all in one sight to find the best matchups, but also tips from professionls with how they can approach them.' +
  ' We ran our codebase using AWS Lambda such that we can perform API requests to our backend. Since we use AWS Lambda, we also utilized DynamoDB as our database, which store information for specific champion matchup. Our backend code simply updates the database for the champion information on a weekly basis.' +
  ' Overall we really enjoyed developing this project. We loved the idea that we can create projects for the things we love doing.'  },
    { title: 'BRICK BREAKER' , header: '"Recreating a classic game using computer vision methods"', image: '/brick_breaker.gif', url: 'https://github.com/rishabvivek/brick_breaker_computer_vision',  image2: '', github : 'githubimg',
    description: 'While watching the promotional video for the Apple Vision Pro, I became extremely interested at how the computer is processing data from hand movements to perform scrolling and selection.' +
  ' I was surprised because hands are a very nuanced appendage. This is purely because we are able to reshape our hands into several different ways. Furthermore, identifying any body part is a complex problem because the computer does not know how to differentiate a "hand" from any other object in its view. Unless we train it. ' +
' Interested by all of the complexities that this problem brings I wanted to dip my toes in the water and try to create a basic game which can utilize hand controls. I chose brick breaker because I remember playing this game as a kid using my fathers BlackBerry.' +
' I underestimated the difficulty of implementing the hand controlled aspect of this game using a live camera feed. I had to learn several methods of preprocessing to be able to identify only hands in the video. I later realized that if I used TensorFlow instead of PyTorch, there are several libraries that I could have used to train the code to identify hands, however I was limited by my M1 Mac.' +
' Regardless of this I still was able to create a relatively good hand tracking system using preprocessing techniques used for computer vision. I then streamed this hand position information to my Brick Breaker game which I built using PyGame. The GIF on the right shows the result of my code. As you can see the controls I made were quite sensitive to hand movement and maybe something I can work on to improve the game.  An idea for a variation of this project might be to develop an unsupervised ML model that can learn to beat this game by itself!' 
+ '' },
    { title: 'RECEIPT OCR APP', header: '"Scan the bill and choose how to split it, all in an iPhone App!"', image: '', url: 'https://github.com/KKeySimon/ReceiptOCR',  image2: '/receiptocr.png', github : 'githubimg',
    description: 'The goal of this app was to allow users a quick an easy way to request money from people when you pay for a meal or groceries. Obviously, the most sensible solution to achieve this goal is to develop an iPhone app, which was designed using React Native.' +
  'The app allows access to use the camera after which the user scans a receipt. In the backend, the code utilizes the Textract library to perform OCR on the receipt and return the respective data. This data is then relayed to the user using the UI where the user can then select how many people to split the cost between, and how to split the cost (the user can choose evenly, or assign items to respective users).' +
' After this has been complete the user will be able to send an automated message to the people they need to settle with. This was my first time building an app using React Native - I have built smaller applications using XCode and Swift - and found it to be a great way to build an app considering my expertise with the language. The image on the right shows what it looks like, I could not provide a GIF because I need to run the app on the iPhone to show its full functionality. These photos are from the XCode iPhone 14 Pro Simulator using hard coded data, but you can test the receipt OCR is working through the GitHub Repo' },

    { title: 'DISCORD BOTS', header: '"Creating different bots for a popular and developer friendly messaging and voice chat application"', image: '', url: 'https://github.com/rishabvivek/newsbot',  image2: '/newsbot.png',github : 'githubimg',
    description: 'Discord is one of my most used apps. I find it great for interacting with my friends, while also interacting with a variety of online communities where I can find people with similar interests to mine.' +
  'I also intensely use Discord to join and interact with clubs and classes within my university. Since I interact with this application on a daily basis, I became interested in learning how the Discord bots were made.' +
' For those who are unfamiliar with Discord bots, they are essentially programs that a user can add to their channel to perform specific tasks. For example, one may use a bot that automates a message and welcomes new users, while others may use it as a moderator to automatically discipline unwanted behavior in the chat.' +
' The use cases of bots are endless. Seeing that most of the bots are actually created by independent developers in the Discord community I thought it would be a fun project to try and create bots that I would use in my Discord servers.' +
' Although the GitHub repo link only shows one of the bots I have created I actually have 2 in my profile. The one provided in the link is a NewsBot. The NewsBot works by automatically making API calls every morning at 8 AM, retrieving the general headline news from Google News.' +
' The bot the relays this information as text and providing the links to the articles should the user want to read more. On top of this, the bot provides users with reaction options. The reaction options are different news categories such that if the user wants more focused news, say the top sports headlines, then they can react using the appropriate reaction choice under the message.' 
+ ' The second bot I created utilizes the Riot API to allow users to retrieve information about summoners. The bot requires users to type a command along with the summoner name after which the bot retrieves specific data about the summoner including rank, win rate and champions played. Making these bots provide insight as to how the Discord community is built and also makes for a fun, creative coding project!'  },
    { title: 'SIGN LANGUAGE TRANSLATOR (in progress)', header: '"Using computer vision to live translate sign language into English"', image: '', url: 'https://github.com/rishabvivek/sign-langauge-translator',  image2: '/sign-language.png',github : 'githubimg',
     description: 'I came up with the project idea after completing the Brick Breaker game (if you have not read this yet I suggest reading it as it gives insight to my interests in computer vision) I decided to expand my knowledge in computer vision by completing a more complex project.' +
    ' As the title says, this project is still in progress, but I found it important to list it because I have made significant progress with regards to its development. So far, I have completed a base version of the ML model that will be essential for the computer to read the hand signs.' +
  ' The ML model was trained and tested using a public Kaggle dataset that had large amounts of image data for the letters in sign language. I chose to use a CNN as my model for this dataset since CNNs are known to be very good for image classification problems.' +
  ' After running the first model I achieved an 87% validation on the test set. I realized that there was significant overfitting in my model, because each of my 10 epochs were returning high validation accuracy, but this was not represented on the test set.' +
' To reduce the overfitting, I performed data transformations on the dataset. After doing this I able to reach close to a 0.94 validation accuracy. The next steps are to use this model to distinguish letters based on hand signs shown on the camera feed. '  },
    { title: 'STELLAR NOTETAKING (in progress)', header: '"A new AI powered notetaking app centered around students"', image: '/stellar.gif', url: 'https://github.com/rishabvivek/stellar_notetaking', image2: '/stellar_img.png',github : 'githubimg',
    description: 'This project is my current passion project, which is quite ambitious, and is therefore still in progress. The goal of Stellar is to create a new notetaking app with a focus on improving and optimizing student lives' +
    ' I decided to create this app because I realized that I have not found a useful productivity app that contains features I find essential as a student. I found that popular productivity and notetaking apps, such as Obsidian and Notion, provide general tools for the public to organize and optimize their schedule, but not all these tools are useful or necessary for students.' +
  ' Furthermore, these apps also do not provide specific tools that can improve a students performance at work. My goal with Stellar is to bridge these gaps that current notetaking apps have.' +
' Apart from the regular features of a notetaking app - creating files, typing notes - Stellar will have student focused features. One of these features is adapative to do lists. The first thing a user will be asked to do everyday is to set their tasks for their day.' +
' Adaptive to do lists will learn the patterns of the user, and in following weeks will automatically suggest tasks for the user to complete based on the day of the week. Furthermore, adaptive do lists will optimize a users day, suggesting to increase or decrease a the number of tasks based on how quickly a user is completing their daily tasks.' +
 ' Apart from adaptive daily tasks, the main feature of this app has to do with helping students study effectively with their notes. Although I found taking notes to be effective for my understanding of material, I found it hard to re-read several lines of notes as a means of preparing for quizzes and exams.' +
' I know many people create flash cards as an alternative to test their understanding of material, but the process of creating flash cards is also a time intensive one.' +
'To address these issues, I decided that the main feature of the app will allow students to select their notes that are relevant to their upcoming test and then press a button which will use the OpenAI API to automatically generate flashcard quiz questions based on the notes provided by the user.' +
' This feature, is essentially the AI Quiz assistant for the user. Obviously, I intend to incorporate other general features that many of the gold standard notetaking apps use, but these 2 features are what will separate my app from the others. The GIF and images of the right show what has been completed. There is still a lot to be done for this app, and because of the complexity that these features require - and the fact I am building this myself - there is still a lot to be done. But I am very excited to see what this app can be!' },

 
  ];

  const [hoveredProject, setHoveredProject] = useState(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [selectedProject, setSelectedProject] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredProject(index);
  };

  const handleMouseLeave = () => {
    setHoveredProject(null);
  };

  const handleProjectClick = (index) => {
    setSelectedProject(index);
  };

  const resizeToFit = (element) => {
    const container = element.parentNode;
    let fontSize = 8;

    element.style.whiteSpace = 'normal';

    while (element.scrollHeight > container.offsetHeight && fontSize > 1) {
      fontSize--;
      element.style.fontSize = `${fontSize}px`;
    }
  };

  useEffect(() => {
    let animationFrameId;

    const updateCursorPos = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', updateCursorPos);

    return () => {
      document.removeEventListener('mousemove', updateCursorPos);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  
  return (
    <div id="window-page" className="h-screen bg-zinc-900 flex flex-col justify-center items-center overflow-hidden">
      <motion.div
        initial={{ translateY: 0 }}
        animate={{ translateY: [-10, 0, -10] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="bg-white rounded-md p-4 mb-32 mt-{-4}"
      >
        <h2 className="text-center text-md font-bold">USE THE SCANNER AND FIND THE PROJECTS!</h2>
      </motion.div>
      <div className="grid grid-cols-4 gap-20 relative">
        {projects.map((project, index) => (
          <div
            key={index}
            onClick={() => handleProjectClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            className={`relative rounded-lg p-4 w-40 h-32 ${
              hoveredProject === index ? 'bg-white' : 'bg-zinc-900'
            }`}
            style={{ overflow: 'hidden', cursor: 'pointer' }}
          >
            <h2
              ref={(el) => el && resizeToFit(el)}
              className={`text-center text-md font-bold flex flex-col justify-center h-full ${
                hoveredProject === index ? 'hovered-text' : 'opacity-0'
              }`}
            >
              {project.title}
            </h2>
          </div>
        ))}
        <div
          className="xray-circle"
          style={{
            transform: `translate(${cursorPos.x - 400}px, ${cursorPos.y - 450}px)`,
          }}
        ></div>
      </div>
      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 z-50 w-screen h-screen bg-white overflow-y-auto"
          >
           <div className="flex flex-col items-center w-full bg-zinc-800 rounded-b-md">
            <h2 className="text-4xl font-bold mb-4 text-white mt-4">{projects[selectedProject].title}</h2>
            <h3 className='text-xl  mb-4 italic text-white'> {projects[selectedProject].header}</h3>
            <a href = {projects[selectedProject].url} target = "_blank" rel="noopener noreferrer" className='mb-4'>  <img src = '/github.png' alt = "github" className='w-7 h-7'/> </a>
          </div>
  
          <div className = "flex flex-row items-start">
            <div className='flex flex-col mt-8 ml-8 mr-8 bg-zinc-800 h-full rounded-md p-4 '>
              <h3 className='text-xl font-bold mb-4 underline text-white text-center'> The Story</h3>
              <p className="text-left text-sm flex-grow maxw-sm text-white">{projects[selectedProject].description}</p>
            </div>
          
            <div className='flex flex-col'>

                {projects[selectedProject].image !== "" ? (
                  <div className="w-96 h-64 mt-32 mr-8 overflow-hidden">
                    <img
                      src={projects[selectedProject].image}
                      alt="GIF"
                      className="w-full h-full object-contain"
                    />
                  </div>
                ) : null}

                {projects[selectedProject].image2 !== "" ? (
                  <div className="w-96 h-full mt-8 mr-8 overflow-hidden">
                    <img
                      src={projects[selectedProject].image2}
                      alt="GIF"
                      className="w-fit h-fit object-contain"
                    />
                  </div>
                ) : null}
            </div>
          

          </div>
            <button
              className="absolute top-4 right-8 text-lg font-bold"
              onClick={() => setSelectedProject(null)}
            >
              <img src = '/close.png' className='w-7 h-7' alt='close'/>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default WindowPage;

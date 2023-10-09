# A Level Biology: Biological Molecules Test

![A Level Biology: Biological Molecules Test](assets/images/responsive.webp)

This interavtive A Level Biology Biological Molecules test is aimed at Year 12 and 13 students who want to test their knowledge on the topic of Biological Molecules. The test will consist of 20 questions and will test the users knowledge across Carbohydrates, Lipids and Water. The user will be faced with a questions in a random order and 4 possible options to selext from. Once selected the user will get instant feedback if they are correct or incorrect. If incorrect the correct answer will be displayed. FOr each question the user will get a maximum of 15 seconds to respond and this will be displayed as a number counting down and a timer bar that will decrease as the time progresses. At the end of the test the user will be able to see how many answers they got correct, what their perfentage is and a conversion of thet percentage into a grade based on typical A Level grade boundaries.

# Contents

- [A Level Biology: Biological Molecules Test](#a-level-biology-biological-molecules-test)
- [Contents](#contents)
- [Features](#features)
  - [Existing Features:](#existing-features)
    - [Header and Footer](#header-and-footer)
    - [Interactive Start Button](#interactive-start-button)
    - [Question number in the Test Area](#question-number-in-the-test-area)
    - [Timer bar and number](#timer-bar-and-number)
    - [Seclecting correct answer](#seclecting-correct-answer)
    - [Incorrect answer selection](#incorrect-answer-selection)
    - [Results Area](#results-area)
    - [Random Question Order Generation](#random-question-order-generation)
    - [Random Answer Order Generation](#random-answer-order-generation)
  - [Features Left To Implement and Future Development](#features-left-to-implement-and-future-development)
    - [Below are features that I would like to integrate into the project:](#below-are-features-that-i-would-like-to-integrate-into-the-project)
  - [Wireframes](#wireframes)
  - [Framework, Languages and Programs Used](#framework-languages-and-programs-used)
- [Testing](#testing)
  - [Validator testing:](#validator-testing)
  - [Unfixed Bugs](#unfixed-bugs)
  - [Lighthouse results](#lighthouse-results)
  - [Responsiveness](#responsiveness)
  - [Features Tested](#features-tested)
- [Deployment](#deployment)
- [Credits](#credits)

# Features

## Existing Features:

### Header and Footer
*   Header element detailing the quiz title and a interactive footer that will direct users to my social media sites.

![Header](assets/images/header.webp)
![Footer](assets/images/footer.webp)

### Interactive Start Button
*   The users will be greated on the home page with a interactive start button that has a hover effect and opens up the rules window when clicked.

![Start](assets/images/start.webp)  
![Hover](assets/images/hover.webp)
![Rules](assets/images/rules.webp)

### Question number in the Test Area
*   The users will see the question number they are on and how many euestions there are in the header of their test.
![question](assets/images/question.webp)

### Timer bar and number
*   The user will see how many seconds left there are to answer the current question. This will also be displayed in a timer bar.
![timerbar](assets/images/timerandbar.webp)

### Seclecting correct answer
*   Selecting the correct answer will stop the timer and timer bar, display the answer as green and display a button to move to the next question
![correct](assets/images/correct.webp)

### Incorrect answer selection
*   Selecting an incorrect answer will stop the timer and the timer bar, display the incorrect answer selected as red and the correct answer green.
![incorrect](assets/images/incorrect.webp)

### Results Area
*   The results area will show the total number of questions correfct, calculate the percentage and use the percentage to generate a grede for the user based on OCR Alevel Biology Grade boundries.
![results](assets/images/resultsarea.webp)

### Random Question Order Generation
*   The 20 questions in the quiz appear in a random order every time the test is attempted to ensure the user does not just learn the sequence of answers.
![questions](assets/images/queschange.webp) 
![questions](assets/images/queschange2.webp)

### Random Answer Order Generation
*   The answers will appear in a random order for each question every time the test is appenpted. This ensures the user does not just learn the sequence of answers.
![answers](assets/images/anschange.webp)
![answers](assets/images/anschange2.webp)

## Features Left To Implement and Future Development
### Below are features that I would like to integrate into the project:
*   Greater selection of questions and / or the use of an API to generate the questions.
*   Submit test result section. This will be very useful as a teacher if the students are able to submit their answers dirtectly to me and those answers could be tabilated.
*   Multiple topics for the suudents to choose from throughout the whole A level Biology specification.
*   Level of difficulty questions that the student can select which will inturn dictate the damand of the questions being asked.
*   Responsive test design which selects the next question based on the success of the student in the provious few questions.

## Wireframes

*	Main page:
[Design](assets/images/home.webp) 
*	Instructions:
[Design](assets/images/instructions.webp) 
*	Test Area:
[Design](assets/images/questions.webp) 
*	Results Area:
[Design](assets/images/results.webp) 


## Framework, Languages and Programs Used

1. [Bootstrap 4.1](https://getbootstrap.com/docs/4.1/getting-started/introduction/)
   *Bootstrap was used to help make the website more responsive and aid with the styling of the website.
  
2. [Google Fonts](https://fonts.google.com/)
   *Google Fonts was used to import different font styles to be used in styling of the website.
  
3. [Git](https://git-scm.com/)
   *Git was used to store the projects code after being pushed from Git.

4. [GitHub](https://github.com/)
   *GitHub is used to store the projects code after being pushed from Git.

5. [Adobe Xd](https://helpx.adobe.com/support/xd.html)
   *Xd was used to create the wire frames for the project.

6. [Javascript](https://www.javascript.com/)
   *Javascript was used to creat the interactive elements on the website and Quiz.

# Testing

*   The website and interactive quiz has been tested through the following methods below. These tests have taken place on the hosted server during development and on the deployed site on GitHub Pages. After deploying the website to GitHub pages the website was further tested by friends, family and students at my school to check its UX and functionality on both desktop computers and the variety of mobile devices.

## Validator testing:

* [HTML:](https://validator.w3.org/)
    *   No errors were found when testing with the W3C HTML Validator. 
![HTMLResult](assets/images/htmlval.webp)

*   [CSS:](https://validator.w3.org/)
    *   No errors were found when testing with the W3C CSS Validator. 
![CSSResults](assets/images/cssval.png)

*   [Javascript:](https://jshint.com/)
    *   No effors were found when testing with the JSHunt Validator. [JSValidator]
        * The following meterics were returned:
        * There are 16 functions in this file.
        * Function with the largest signature take 2 arguments, while the median is 0.
        * Largest function has 26 statements in it, while the median is 3.
        * The most complex function has a cyclomatic complexity value of 8 while the median is 1.

## Unfixed Bugs
*   On desktop devices: Tabbing out of the test once started loses the window focus. This causes the timerbar to stop counting down. The numbers work correctly. This will be corrected in the future by ensuring when the test has started, the window is always the focus even if tabbed out.

## Lighthouse results

*   I have used the developer tools in google chrome to test each page in my website for performance, accessibility, best practise and SEO. Below is an example of the homepage.

* Mobile
![Science Test Mobile](assets/images/lhmobile.webp)
* Desktop
![Science QUiz Desktop](assets/images/lhdesk.webp)

## Responsiveness
*   In order to fully test the responsiveness of the web application I performed further tests on different devices and browsers. These were:
    * Browsers:
      * Google Chrome
      * Safari
      * MS Edge
      * FireFox

    * Devices:
      * Iphone 14pro
      * Iphone 12 Mini
      * Ipad Pro 12.9inc
      * Mac Laptop
      * Windows desktop PC
      * Windows Laptop

## Features Tested

| Feature      | Expected Outcome | Testing Performed    | Result | Pass or Fail |
|   :---       |      :----:      |        :----:        | :----: |    :----:    
| Start Button  | When clicked <br> test instructions <br> appear. | Clicked Start | Instructions shown   | Pass        |
| Quit Quiz Button  | When clicked <br> the Test ends <br> takes user to start. <br> | Clicked Quit | Navigate to start   | Pass        |
| Start Test Button | When clicked <br> Test window shown <br> the test begins <br> | Clicked Start | Test begins  | Pass        |
| Question Number | When test begins <br> question number displayed <br> counts up as you progress questions.| Moved through questions | Number counts up | Pass        |
| Timer Bar | When test begins <br> timer bar decreases. <br>  | Timer bar decreases | Pass        |
| Timer     | When test begind <br> timer decreases from 15 <br> down to 0. | Timer decreases  | Pass    |
| No answer selected | If no answer is <br> selected when timer <br> ends, correct answer <br> shown and no score acquired. | Did not select and answer | No point awarded and <br> correct answer shown | Pass    |
| Next Button | When test begins the <br> next button will only display when <br> an answer is selected <br> and when clicked takes <br> user to next questions. | Clicked answer | Next button appears and takes <br> user to next questions | Pass   |
| Results Window | After completing the Test <br> the results window will show. | Completed all questions | Results window shown | Pass    |
| Results Data | Results window shows total score <br> Percentage achieved and <br> what grade achieved. | Completed questions to get different scores | Correct score, percentage and <br> grade shown | Pass    |
|Restart Button | Click button to restart Test | Clicked restart | Test restarts | Pass  |
Social Media | Click social media icons takes <br> user to social media site. | Clicked social media icons. | Navigated to social media. | Pass  |


# Deployment

*   The website has been deployed to GitHub pages. This was acomplished by following the detailed steps below:
*   selecting settings in the github repositivry.
![selectsettings](assets/images/selectsettings.webp)

*  Navigate to the Pages tab on the left hand side of the screen.
![pagestab](assets/images/pagestab.webp)

*  Select deploy from branch in the source section and sesure the main branch is selected in the branch.
![deploy](assets/images/deploy.webp)

*   Finally click the save button and the page will be deployed to GitHub Pages.
![save](assets/images/save.webp)

*   Once the website has been updated to the server, you will see your live URL link.
![live](assets/images/live.webp)

# Credits


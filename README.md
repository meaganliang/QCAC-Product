# Product Page Starter Repo

Description:
- This project is a React-based single-page application showcasing the SS ShredFlex, an innovative mountain sport device that morphs between snowboard and skis. The application highlights its key features, displays user reviews, and allows users to submit their own feedback.
- File and Component Breakdown:
    - App.jsx: The root component managing the app’s main navigation tabs: Home, Features, and Reviews. It uses React state to conditionally render components based on the selected tab, enabling users to switch views without page reloads.
    - Hero.jsx: Displays the main hero banner with a mountain image background, the product title, and a brief tagline. Also includes a responsive image gallery and an introductory description of the SS ShredFlex.
    - Features.jsx: Lists the core features of the SS ShredFlex in a visually appealing pill-style layout.
    - Reviews.jsx: A static display of user reviews presented as cards with star ratings. Used on the Home tab to showcase testimonials.
    - Reviews2.jsx: Similar to Reviews.jsx however using the board background in the Reviews tab.
    - ReviewForm.jsx: Provides a form for users to submit their own reviews including name, comment, and star rating. Submitted reviews are saved to localStorage to persist across sessions and are merged with predefined sample reviews. The form validates input and clears after submission.
- Component Interaction:
    - The App component acts as the controller, rendering different components based on the active tab.
    - Hero, Features, Reviews, and ReviewForm are combined on the Home tab to introduce the product, highlight its features, and encourage user feedback.
    - The Features tab isolates the Features component.
    - The Reviews tab uses Reviews2 (with background image) and ReviewForm to create a dedicated reviews spot.

Prerequisites:
- For learning JavaScript, React, and CSS:
    - https://create-react-app.dev/docs/adding-images-fonts-and-files/
    - https://medium.com/@shuklawhyaman/basic-implementation-of-a-reviews-and-ratings-feature-in-react-js-b1c9c6cae092 
    - https://www.w3schools.com/js

Installation Steps:
1) Forked starter repository in my github account
2) Ran "npm install" to install the dependencies
3) Ran "npm run dev" to run the development server

Technologies Used:
VS Code Editor

Challenges:
- My initial challenge was refreshing my JavaScript knowledge, which I accomplished by revisiting resources like W3Schools.
- I approached this project in a "learn as you go" manner, focusing on one requirement of the project at a time. 
- I decided to create landmarks for myself to simplify the project and give myself a clear plan of how I wanted to approach it:
    - Fulfill all the prerequisites on one page
    - Ensure it was mobile responsive
    - Learn how to create separate tabs that were also mobile responsive
    - Focus on making it look visually appealing after ensuring all of the functional requirements were achieved.
- Making the site mobile responsive was challenging because many of the layouts relied on fixed pixel values and inline styles, which don’t naturally adapt to smaller screens. Ensuring images, text, and components scaled cleanly across different device sizes required restructuring some elements, introducing flexible widths, and adjusting styling logic so the design remained readable and visually balanced on phones without breaking the desktop layout. This is where the use of generative AI helped explain how to modify my code to help me understand how to make it mobile responsive. 
- Generative AI was also useful in debugging code when I would attempt to implement a feature and ran into a bug. Additionally, the images of the product were created by generative AI.

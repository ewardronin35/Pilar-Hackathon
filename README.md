# Pilar-eLearn

Pilar-eLearn is an interactive, gamified e-learning web application designed to help students continue their quests and earn rewards as they progress through various subjects such as English, Filipino, Math, and Science. The application provides dynamic subject cards, lesson modals, and an interactive chatbot that assists users through content exploration.

## Project Structure

- **db.sqlite**  
  Contains the SQLite database for storing persistent data.

- **index.html**  
  The entry point of the application. This file includes:
  - A header with the logo, user stats, and profile section.
  - A quest board displaying subject cards where each card shows the current quest with progress, rewards, and a "Continue Quest" button.
  - A modal system for lessons that dynamically loads subject-specific content.
  - A chatbot module to help users with suggestions and FAQs.
  
  View the code in [index.html](c:\xampp\htdocs\Pilar Hackathon\index.html).

- **components/**  
  (Not detailed in the provided excerpt but may contain additional UI components used by the application.)

- **images/**  
  Contains assets, such as `pilarLogo.ico`, used in the header and favicon.

- **Subjects/**  
  Contains HTML files for each subject:
  - [english.html](c:\xampp\htdocs\Pilar Hackathon\Subjects\english.html)
  - [filipino.html](c:\xampp\htdocs\Pilar Hackathon\Subjects\filipino.html)
  - [math.html](c:\xampp\htdocs\Pilar Hackathon\Subjects\math.html)
  - [science.html](c:\xampp\htdocs\Pilar Hackathon\Subjects\science.html)

## Key Features

- **Dynamic Quest Board:**  
  Subject cards update based on the user's selected grade level using subject data defined in the script. The function [`getSubjectDataForGrade`](c:\xampp\htdocs\Pilar Hackathon\index.html#L1757) retrieves the appropriate data set for a given grade.

- **Interactive Lesson Modal:**  
  Clicking on a quest card’s “Continue Quest” button triggers a modal that displays lesson content, generated dynamically per subject.

- **User Profile and Accessibility Options:**  
  A welcome modal allows users to create their profile (name, email, grade level, avatar) and choose accessibility options (e.g., dyslexia-friendly, high contrast).

- **Real-Time Updates:**  
  The app updates user stats (XP, coins) and activity feeds on the dashboard as lessons are completed.

- **Chatbot Assistance:**  
  An integrated chatbot provides suggestions and answers user queries to support the learning journey.

## How to Use

1. **Open the Project:**  
   Open `index.html` in your browser. The app is designed as a single-page application.

2. **Configure Your Profile:**  
   Use the welcome modal to set up your name, email, grade level, and choose an avatar. Optionally, select accessibility options to enhance your learning experience.

3. **Interact with Subjects:**  
   The quest board displays cards for each subject. Click “Continue Quest” on any card to open the lesson modal, where you can read the lesson content, track progress, and participate in interactive activities.

4. **Engage with Chatbot:**  
   Click the chatbot toggle button in the bottom right to receive suggestions or ask questions about the learning content.

## Customization

- **Subject Data:**  
  The subject-related data (quests, progress, and descriptions) is defined within `index.html` under the `subjectData` object. Modify or extend this data to add new lessons or update existing content.

- **Design & Styles:**  
  The layout and design are defined using custom CSS in `index.html`. The responsive design ensures that the application works smoothly on various devices.

## License

This project is provided as-is without any warranty. Customize it to fit your educational needs.

---

Happy Learning!
// --------------------dieser Bereich befindet sich noch in Arbeit--------------------
// bisher implementiert:
//  dynamisches Laden von Beiträgen aus einer Dummy-Datenbank,
//  Folgen-Knopf wird nur für nicht gefolgte Kurse angezeigt, nach Klick wird der Kurs der myFollowsList hinzugefügt (keine persistente Speicherung, da keine echte Datenbank) und danach deaktiviert
//  Antwortmöglichkeiten auswählen mit visuellem Feedback,
//  Auswerten-Knopf blendet die Erklärung und Antwort-Feedback ein,
//  nach Auswertung werden Antwortmöglichkeiten deaktiviert

const posts = [
  {
    postID: "post-1",
    postDate: new Date("2025-11-11T23:20:00Z"),
    author: "Max Mustermann",
    subject: "B.Sc. Informatik",
    course: "Requirements Engineering",
    questionType: "Multiple-Choice",
    question: "Du möchtest den Systemüberblick für deinen Projektmanager dokumentieren. Für welches UML-Diagramm entscheidest du dich?", 
    answers: ["Objektdiagramm", "Use-Case-Diagramm", "Klassendiagramm", "Sequenzdiagramm"], 
    correctAnswer: ["answer2"],
    explanation: "Das Use-Case-Diagramm ermöglicht eine detaillierte Darstellung des Systems",
    privatePost: false,
    likes: 12,
    comments: [
      {
        username: "Helene Fischer", 
        userPicture: "red",
        postDate: new Date("2025-11-11T23:24:12Z"), 
        content: "Sehr interessanter Beitrag. Bitte mehr davon."
      }, 
      {
        username: "Felix Blume", 
        userPicture: "blue",
        postDate: new Date("2025-11-12T11:14:55Z"), 
        content: "Ich war mir sicher, dass Antwort 4 die richtige sei. Man lernt wohl nie aus."
      } 
    ]
  },
  {
    postID: "post-2",
    postDate: new Date("2025-10-29T14:42:00Z"),
    author: "Max Mustermann",
    subject: "B.Sc. Informatik",
    course: "IU Design",
    questionType: "Multiple-Choice",
    question: "Welche Antwort ist die richtige?", 
    answers: ["Antwort 1", "Antwort 2", "Antwort 3"], 
    correctAnswer: ["answer2"],
    explanation: "Das Use-Case-Diagramm ermöglicht eine detaillierte Darstellung des Systems",
    privatePost: false,
    likes: 14,
    comments: [
      {
        username: "Helene Fischer", 
        userPicture: "red",
        postDate: "12.10.25", 
        content: "Sehr interessanter Beitrag. Bitte mehr davon."
      }, 
      {
        username: "Felix Blume", 
        userPicture: "blue",
        postDate: "12.10.25", 
        content: "Ich war mir sicher, dass Antwort 4 die richtige sei. Man lernt wohl nie aus."
      }, 
    ]
  }
  
];


const myFollowList = ['Requirements Engineering', 'Wissenschaftliches Arbeiten'];

const myFavorites = [{post: 1}, {post: 2}];

const myQuestions = [{}]



// get the time difference between postDate and current time
function timeSince(date) {
  const seconds = Math.floor((new Date() - date) / 1000);

  const intervals = [
    { label: "Jahr", seconds: 31536000 },
    { label: "Monat", seconds: 2592000 },
    { label: "Tag", seconds: 86400 },
    { label: "Stunde", seconds: 3600 },
    { label: "Minute", seconds: 60 },
    { label: "Sekunde", seconds: 1 }
  ];

  for (const interval of intervals) {
    const count = Math.floor(seconds / interval.seconds);
    
    if (count >= 1) {
      switch(interval.label) {
        case "Jahr":
        return `vor ${count} ${interval.label}${count > 1 ? "en" : ""}`;
        case "Monat":
        return `vor ${count} ${interval.label}${count > 1 ? "en" : ""}`;
        case "Tag":
        return `vor ${count} ${interval.label}${count > 1 ? "en" : ""}`;
        default:
          return `vor ${count} ${interval.label}${count > 1 ? "n" : ""}`;
      }
    }
  }
    return "gerade eben";
}
    
// --------------------load posts feed--------------------

const postsFeed = document.getElementById('posts-feed');

document.addEventListener('DOMContentLoaded', () => {
  let answerID = 1;
  let postAnswersFormID = 1;

  posts.forEach((post) => {
    let answerName = 1;

    // options array
    let answerContent = [];
    // push answer options into answerContent array
    post.answers.forEach((answer) => {
      let answerOption = `
      <label for="answer-option-${answerID}" class="answer-option checkmark-label">
        <input type="checkbox" name="answer${answerName}" id="answer-option-${answerID}" class="answer-option-input">
        <span class="custom-checkmark" title="Wählen Sie die richtige Antwort aus"></span>
        <p class="answer-option-content checkmark-label-content">${answer}</p>
      </label>                      
      `;
      answerID++;
      answerName++;

      answerContent.push(answerOption)
    });
    // join answer options into a single string for rendering
    let answerOptionsContent = answerContent.join("");

    // check if the user follows post.course
    let courseFollowed = myFollowList.includes(post.course);
    // follow button is rendered when course is not followed
    function renderFollowButton(followStatus) {
      let followButton = "";
      
      if(followStatus) {                      
        followButton = `
        <span>&#128900;</span>
        <div class="button-ghost" onclick="followCourse(event)">Folgen</div>                      
        `;
      }
      return followButton                    
    }

    let postContent = `
      <article id="${post.postID}" class="post">
              <div class="post-info">
                <div class="post-specifications">
                  <div class="course-name link" data-course-name="${post.course}" title="Zum Kurs wechseln">k/${post.course}</div>
                  <span>&#128900;</span>
                  <div class="post-date">${timeSince(post.postDate)}</div>
                  ${renderFollowButton(!courseFollowed)}
                </div>
                <div class="post-menu button-icon"><i class="material-icons">more_horiz</i></div>
              </div>
              <div class="post-card">
                <header class="post-card-header">
                  <h2 class="post-heading">${post.question}</h2>
                </header>
                <div class="post-card-content">
                  <form id="post-answers-form${postAnswersFormID}" class="post-answers">
                    <div class="post-card-question-type">${post.questionType}:</div>
                    <div class="answer-options-container">
                      ${answerOptionsContent}
                    </div>
                  </form>
                  <button form="post-answers-form${postAnswersFormID}" type="submit" class="submit-answer-button button-primary">Auswerten</button>
                </div>
                <div class="divider"></div>
                <div class="post-card-footer">
                  <div class="flex-container align-center gap-0">
                    <button class="user-feedback-button" title="Gefällt mir">
                      <div class="button-icon"><i class="material-icons">favorite_border</i></div>
                      <span class="user-feedback-counter">${post.likes}</span>
                    </button>                  
                    <button class="user-feedback-button" title="Kommentare anzeigen">
                      <div class="button-icon"><i class="material-icons">chat_bubble_outline</i></div>
                      <span class="user-feedback-counter">${post.comments.length}</span>
                    </button>                  
                  </div>                                  
                  <div class="flex-container align-center gap-0">
                    <button class="user-feedback-button button-icon" title="Beitrag teilen"><i class="material-icons" style="transform: scale(-100%, 100%);">reply</i></button>
                    <button class="user-feedback-button button-icon" title="Beitrag speichern"><i class="material-icons">bookmark_border</i></button>
                  </div>
                </div>
              </div>
            </article>
            <div class="divider"></div>
    `;

    postAnswersFormID++;

    postsFeed.insertAdjacentHTML("beforeend", postContent);

  })
})

// follow button adds a course to myFollowList
function followCourse(e) {
  // get course name
  let courseName = e.currentTarget.parentElement.firstElementChild.attributes[1].textContent;
  // check whether course is followed (safety measure, because follow buttons should only be rendered when course is not followed)
  let followed = myFollowList.includes(courseName);
  // add course to myFollowList and deactivate follow button
  if(!followed) {
    myFollowList.push(courseName);
    e.target.innerText = "Gefolgt";
    e.target.classList.add('button--inactive');
  }

}

postsFeed.addEventListener('click', (e) => {
  if (e.target.matches('.answer-option-input')) {
    e.target.parentElement.classList.toggle('answer-option-selected');
  }

  // console.log(e.target)
  // if(e.target) {

  // }

})

postsFeed.addEventListener('submit', (e) => {
  e.preventDefault();
  const postCardContent = e.target.parentElement;
  const submitButton = e.target.nextElementSibling;
  const postQuestion = e.target.parentElement.parentElement.firstElementChild.firstElementChild.innerText;

  const formData = new FormData(e.target);
  const entries = Object.fromEntries(formData.entries());
  // const userEmail = entries.userEmail;
  // const userPassword = entries.userPassword;
  console.log(entries)

  const answerOptions = Array.from(e.target.children[1].children);
  answerOptions.forEach((answer) => {
    answer.classList.add('answer-option-disabled');
  })
  // console.log(e.target.children[1].children)

  const correlatingPost = posts.find((post) => {
    return post.question === postQuestion;
  })

  let result = `
  <div class="solution-container">
    <div class="answer-feedback">
      <div class="answer-feedback-result correct-answer">Auswertung noch nicht implemntiert</div>                
      <button class="show-solution-button button-ghost"><i class="material-icons">keyboard_arrow_down</i>Erklärung anzeigen</button>
    </div>
    <div class="solution-content hidde">${correlatingPost.explanation}</div>
  </div>
  `;

  postCardContent.insertAdjacentHTML("beforeend", result);
  submitButton.classList.add('hidden');
})

// function evaluateResult(event) {
//   const postQuestion = event.currentTarget.parentElement.parentElement.firstElementChild.firstElementChild.innerText;

//   let correlatingPost = posts.find((post) => {
//     return post.question === postQuestion;
//   })

//   let result = `
//   <div class="solution-container">
//     <div class="answer-feedback">
//       <div class="answer-feedback-result correct-answer">Ihre Antwort ist richtig!</div>                
//       <button class="show-solution-button button-ghost"><i class="material-icons">keyboard_arrow_down</i>Erklärung anzeigen</button>
//     </div>
//     <div class="solution-content hidde">${correlatingPost.explanation}</div>
//   </div>
//   `;

//   event.currentTarget.parentElement.insertAdjacentHTML("beforeend", result);

//   event.currentTarget.classList.add('hidden');
// }


// ========================================create a new post========================================
const addQuestionMain = document.getElementById('add-question');
const possibleAnswersContainer = document.getElementsByClassName('possible-answers-container');
const posts = JSON.parse(sessionStorage.getItem('posts'));
const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));

// add additional answer option for multiple-choice question type
function addAnswerOption() {
	// get the current number of answer options
	const currentNumberOfOptions = possibleAnswersContainer[0].children.length;
	
	// check before adding answer option, max number of options is 4
	if(currentNumberOfOptions < 4) {
		const answerOptionNum = currentNumberOfOptions + 1;
		
		let answerOption = 
		`
		<div class="possible-answer">
			<label for="answer${answerOptionNum}" class="checkmark-container" title="Wählen Sie die richtige Antwort aus">
				<input type="checkbox" name="answer${answerOptionNum}" id="answer${answerOptionNum}" class="possible-answer-checkbox">
				<span class="custom-checkmark" title="Wählen Sie die richtige Antwort aus"></span>
			</label>
			<textarea name="contentAnswer${answerOptionNum}" id="answer${answerOptionNum}-input" class="possible-answer-input auto-grow-element" rows="1" placeholder="Antwort ${answerOptionNum}" maxlength="200" required></textarea>
		</div>
		`;

		possibleAnswersContainer[0].insertAdjacentHTML("beforeend", answerOption);
		
		}
}

// when user confirms go to previous page or to homepage
// when user rejects close modal
function confirmCancellation(event) {
  const isTargetModal = event.target.matches('.modal');
  const isTargetRejectButton = event.target.matches('.reject-button');
	const isTargetConfirmButton = event.target.matches('.confirm-button');
  
	// check if click target is modal or reject button then close the alert
  isTargetModal || isTargetRejectButton ? event.currentTarget.remove() : null;
	// check if history exists then go back 1 page else go to home page
	if (isTargetConfirmButton && history.length > 1) {
		history.go(-1);
	} else if(isTargetConfirmButton) {
		location.assign('home.html');
	}
}

// render a modal with a request for confirmation
function cancelPostCreation() {
	const body = document.body;
	const alert = 
	`
	<div class="modal" onclick="confirmCancellation(event)">
		<div class="alert">
			<p class="alert-message">Sind Sie sicher, dass Sie die Erstellung jetzt abbrechen wollen?</p>
			<div class="flex-container gap-2">
				<button type="button" class="reject-button button-tertiary">Nicht abbrechen</button>
				<button type="button" class="confirm-button button-primary">Ja, abbrechen</button>
			</div>
		</div>
	</div>
	`;

	body.insertAdjacentHTML('afterbegin', alert);

}


// listen for question type change and render content accordingly
addQuestionMain.addEventListener('input', (event) => {
	
	if(event.target.value.includes('Multiple-Choice')) {
		const selectionFormField = event.target.parentElement;
		const statementInput = selectionFormField.nextElementSibling;
		const statementValue = statementInput.nextElementSibling;

		statementInput.remove();
		statementValue.remove();

		const formFields = 
		`
		<div class="form-field">
			<label for="question" class="form-field-label">Fragestellung</label>
			<textarea name="question" id="question" class="question-input input-field auto-grow-element" rows="3" placeholder="Formulieren Sie eine Frage" maxlength="400" minlength="3" required></textarea>          
		</div>          
		<div class="form-field">
			<label for="answer1-input" class="form-field-label">Antwortmöglichkeiten</label>
			<div class="flex-container flex-column gap-2 w-fill">
				<div class="possible-answers-container flex-container flex-column gap-2">              
					<div class="possible-answer">
						<label for="answer1" class="checkmark-container" title="Wählen Sie die richtige Antwort aus">
							<input type="checkbox" name="answer1" id="answer1" class="possible-answer-checkbox">
							<span class="custom-checkmark" title="Wählen Sie die richtige Antwort aus"></span>
						</label>
						<textarea name="contentAnswer1" id="answer1-input" class="possible-answer-input auto-grow-element" rows="1" placeholder="Antwort 1" maxlength="200" required></textarea>
					</div>              
					<div class="possible-answer">
						<label for="answer2" class="checkmark-container" title="Wählen Sie die richtige Antwort aus">
							<input type="checkbox" name="answer2" id="answer2" class="possible-answer-checkbox">
							<span class="custom-checkmark" title="Wählen Sie die richtige Antwort aus"></span>
						</label>
						<textarea name="contentAnswer2" id="answer2-input" class="possible-answer-input auto-grow-element" rows="1" placeholder="Antwort 2" maxlength="200" required></textarea>
					</div>              
				</div>
				<p class="input-field-description">Wählen Sie die richtige Antwort bzw. die richtigen Antworten aus</p>
				<button type="button" class="button-ghost button-combo m-top" onclick="addAnswerOption()">
					<i class="material-icons">add</i>
					Antwort hinzufügen
				</button>
			</div>
		</div>
		`;

		selectionFormField.insertAdjacentHTML('afterend', formFields);

	}


	if(event.target.value.includes('Wahr-oder-Falsch')) {
		const selectionFormField = event.target.parentElement;
		const questionInput = selectionFormField.nextElementSibling;
		const possibleAnswersContainer = questionInput.nextElementSibling;


		questionInput.remove();
		possibleAnswersContainer.remove();

		const formFields = 
		`
		<div class="form-field">
			<label for="question" class="form-field-label">Aussage</label>
			<textarea name="question" id="question" class="question-input input-field auto-grow-element" rows="3" placeholder="Formulieren Sie eine Aussage" maxlength="400" minlength="3" required></textarea>          
		</div>
		<div class="form-field">
			<label for="answer1-input" class="form-field-label">Wahrheitswert der Aussage</label>
			<div class="flex-container flex-column gap-2 w-fill">
				<div class="possible-answers-container flex-container flex-column gap-2">              
					<label class="answer-option checkmark-label">
						<input type="radio" name="trueOrFalse" value="trueStatement" class="answer-option-input">
						<span class="custom-checkmark" title="Wählen Sie die richtige Antwort aus"></span>
						<p class="answer-option-content checkmark-label-content">Wahr</p>
					</label>                      
						<label class="answer-option checkmark-label">
						<input type="radio" name="trueOrFalse" value="falseStatement" class="answer-option-input">
						<span class="custom-checkmark" title="Wählen Sie die richtige Antwort aus"></span>
						<p class="answer-option-content checkmark-label-content">Falsch</p>
					</label>
				</div>
				<p class="input-field-description">Wählen Sie aus, ob die Aussage wahr oder falsch ist</p>              
			</div>
		</div>
		`;

		selectionFormField.insertAdjacentHTML('afterend', formFields);

	}
})

// collect user input data and save as a new post
addQuestionMain.addEventListener('submit', (event) => {
	// stop the default submit event, data is not send to a server
  event.preventDefault();
  // collect user input
  const formData = new FormData(event.target);
  const entries = Object.fromEntries(formData.entries());

	if(entries.questionType === "Multiple-Choice") {
		const answersInputFieldDescription = event.target.children[4].lastElementChild.children[1];
	
		// check if user marked at least one correct answer
		const correctAnswerMarked = Object.keys(entries).some((key) => key.includes('answer'));
		
		// if marked then proceed else show error message
		if (correctAnswerMarked) {
			// check if privatePost was selected
			const postStatus = Object.keys(entries).includes('privatePost');
			const submittedAnswers = [];
			// get answer contents and push to submittedAnswers[]
			Object.entries(entries).filter((element) => element[0].includes('content')).forEach((answerContent) => submittedAnswers.push(answerContent[1]));
			// get correct answers options selected by the user
			const correctAnswer = Object.keys(entries).filter((key) => key.includes('answer'));
		
			const newPost = {
				postID: `post-${posts.length + 1}`,
				postDate: new Date(),
				author: currentUser.username,
				degree: entries.degree,
				course: entries.course,
				questionType: entries.questionType,
				question: entries.question, 
				answers: submittedAnswers, 
				correctAnswer: correctAnswer,
				explanation: entries.explanation,
				privatePost: postStatus,
				likes: 0,
				comments: []
			};
				
			posts.push(newPost);
			currentUser.posts.push(newPost.postID);

			sessionStorage.setItem('posts', JSON.stringify(posts));
			sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
			sessionStorage.setItem('postAdded', "true");
			

			history.length > 1 ? history.go(-1) : location.assign('home.html');
				
		} else {
			answersInputFieldDescription.classList.add('input-field-error-message');
		}

	}

	if(entries.questionType === "Wahr-oder-Falsch") {
		const answersInputFieldDescription = event.target.children[4].lastElementChild.children[1];

		const correctAnswerMarked = Object.keys(entries).includes('trueOrFalse');

		if(correctAnswerMarked) {
			// check if privatePost was selected
			const postStatus = Object.keys(entries).includes('privatePost');
	
			const newPost = {
				postID: `post-${posts.length + 1}`,
				postDate: new Date(),
				author: currentUser.username,
				degree: entries.degree,
				course: entries.course,
				questionType: entries.questionType,
				question: entries.question,  
				correctAnswer: [entries.trueOrFalse],
				explanation: entries.explanation,
				privatePost: postStatus,
				likes: 0,
				comments: []
			}
	
			posts.push(newPost);
			currentUser.posts.push(newPost.postID);

			sessionStorage.setItem('posts', JSON.stringify(posts));
			sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
			sessionStorage.setItem('postAdded', "true");
			history.length > 1 ? history.go(-1) : location.assign('home.html');
			
		} else {
			answersInputFieldDescription.classList.add('input-field-error-message');
		}
	}
})

// change color of selected answer options
addQuestionMain.addEventListener('change', (e) => {
	// change selected option's color to represent active selection, for multiple-choice question type
	if(e.target.matches('.possible-answer-checkbox')) {
		e.target.parentElement.parentElement.classList.toggle('possible-answer-checked');
	}
	
	// change selected option's color to represent active selection, for true or false question type
	if(e.target.matches('.answer-option-input')) {
		// get previous selection
		const optionsArray = Array.from(e.target.parentElement.parentElement.children);
		// toggle active selection class on the previous selection
		optionsArray.forEach((option) => {
			option.matches('.correct-answer-option') ? option.classList.toggle('correct-answer-option'): null;
		})
		// add active selection class to the current selection
		e.target.parentElement.classList.toggle('correct-answer-option');
	}

})

// change input element's height based on inner contents
addQuestionMain.addEventListener('input', (e) => {
	if(e.target.matches('.auto-grow-element')) {
		const autoGrowElement = e.target;
		// get element's border-width
		let inputBorder = autoGrowElement.offsetHeight - autoGrowElement.clientHeight;
		// set element's height to auto when input shrinks
		autoGrowElement.style.height = "auto";
		// set element's height when input grows
		autoGrowElement.style.height = autoGrowElement.scrollHeight + inputBorder + "px";
	}
})
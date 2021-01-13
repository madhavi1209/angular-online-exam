export class TakeTest{
    userId:number;
	subjectId:number;
	level:number;
}

export class SubjectC{
	subject_id:number;
	subjecName:string;
	noOfQuestions:number;
	level:number;
	duration:number;
}

export class Question{
	questionId:number;
	questionName:string;
	option1:string;
	option2:string;
	option3:string;
	option4:string;
	correctAnswer:string;
	marks:number;
	level:number;
}
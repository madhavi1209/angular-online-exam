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

export class CreateReport{
	userId:number;
	testId:number;
	marks:number;
	totalMarks:number;
}
export class Report{
	reportId:number;
	testScore:number;
	totalScore:number;
	clearedLevel:number;
}

export class ShowReport{
	name:string;
	email:string;
	city:string;
	state:string;
	qualification:string;
	dateAndTimeOfTest:string;
	level:number;
	subjecName:string;
	testScore:number;
	totalScore:number;
}
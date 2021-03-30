export class QuestionModel {
    questionId: number;
    questionText: string;
    options: OptionModel[];
    answer: string;
    explanation: string;
    selectedOption: string;
}


export class OptionModel {
    optionValue: string;
    optionText: string;
}

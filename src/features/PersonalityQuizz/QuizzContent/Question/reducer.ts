export enum QuestionActionKind {
  NEXT = 'NEXT',
  PREVIOUS = 'PREVIOUS',
  SELECT = 'SELECT',
}

type QuestionsAction = {
  type: QuestionActionKind;
  payload: QuestionState;
}

export type ScoreHistoryKey = 0 | 1 | 2 | 3 | 4;

type QuestionState = {
  step: number;
  selectedAnswerIdx: number;
  currentScore: number;
  scoreHistory: {
    [key in ScoreHistoryKey]: number;
  }
}

export const questionReducer = (state: QuestionState, action: QuestionsAction): QuestionState => {
  const { type, payload } = action;
  
  switch (type) {
    case QuestionActionKind.SELECT:
      return {
        ...state,
        selectedAnswerIdx: payload.selectedAnswerIdx,
      };
    case QuestionActionKind.NEXT:
      return {
        ...state,
        step: state.step + 1,
        selectedAnswerIdx: -1,
        currentScore: payload.currentScore,
        scoreHistory: {
          ...payload.scoreHistory,
        },
      };
    case QuestionActionKind.PREVIOUS:
        return {
          ...state,
          step: state.step - 1,
          selectedAnswerIdx: - 1,
          currentScore: payload.currentScore,
          scoreHistory: {
            ...payload.scoreHistory,
          },
        };
    default:
      return state;
  }
}

export const inInitialState = {
  step: 0,
  selectedAnswerIdx: -1,
  currentScore: 0,
  scoreHistory: {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
  }
};

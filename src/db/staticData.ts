import { Personality, PersonalityType, PersonalityQuestions, PersonalityTypes } from "../types/types";

const stronglyIntrovert = 'People who are strongly introverted may prefer spending time alone or in small groups, and may find socializing to be draining. They tend to be introspective and thoughtful, and may enjoy deep conversations over small talk. They may also be very independent and self-sufficient, preferring to rely on themselves rather than others. They may need plenty of alone time to recharge their batteries, and may be sensitive to external stimulation such as noise or bright lights';
const moderatelyIntrovert = 'People who are moderately introverted enjoy spending time alone, but may also enjoy socializing in small groups. They tend to be thoughtful and reflective, and may prefer a few close friends over a large social circle. They may be reserved or quiet in new situations, but may become more outgoing as they get to know people. They may also be creative and introspective, enjoying hobbies such as reading, writing, or art';
const moderatelyExtrovert = 'People who are moderately extraverted enjoy socializing and meeting new people, but may also value alone time. They tend to be outgoing and friendly, and may have a large social circle. They may be comfortable in a variety of social situations, from small gatherings to large parties. They may also be assertive and confident, and may enjoy taking on leadership roles or being in charge of a project';
const stronglyExtrovert = 'They tend to be outgoing, enthusiastic, and confident, and may have a large social circle. They may enjoy a variety of activities and experiences, and may be comfortable in a range of social situations. They may also be very expressive and enjoy being in the spotlight. They may be energized by external stimulation such as music, noise, or bright lights, and may enjoy taking risks and trying new things';

export const personalityTypesData: PersonalityTypes = {
  1: {
    description: stronglyIntrovert,
    type: PersonalityType.Introvert
  },
  2: {
    description: moderatelyIntrovert,
    type: PersonalityType.ModeratelyIntrovert,
  },
  3: {
    description: moderatelyExtrovert,
    type: PersonalityType.ModeratelyExtrovert,
  },
  4: {
    description: stronglyExtrovert,
    type: PersonalityType.Extrovert,
  },
};

export const personalityQuestionsData: PersonalityQuestions = {
  questions: [
    {
      question: "How do you typically feel in large social gatherings?",
      answers: [
        { answer: "Excited and energized", score: 4 },
        { answer: "Comfortable but prefer small groups", score: 3 },
        { answer: "Uncomfortable and overwhelmed", score: 2 },
        { answer: "Anxious and prefer to avoid them", score: 1 },
      ],
    },
    {
      question: "How do you recharge after a long day at work/school?",
      answers: [
        { answer: "Going out with friends or attending social events", score: 4 },
        { answer: "Spending time alone or with a close friend/partner", score: 3 },
        { answer: "Engaging in a hobby or activity", score: 2 },
        { answer: "Watching TV or scrolling through social media", score: 1 },
      ],
    },
    {
      question: "How do you handle conflict or difficult conversations?",
      answers: [
        { answer: "Address the issue head-on and speak my mind", score: 4 },
        { answer: "Approach the situation calmly and find a solution", score: 3 },
        { answer: "Avoid confrontation and hope the issue goes away", score: 2 },
        { answer: "Retreat and need time to process before addressing the issue", score: 1 },
      ],
    },
    {
      question: "What type of communication style do you prefer?",
      answers: [
        { answer: "Talking on the phone or in person", score: 4 },
        { answer: "Texting or messaging", score: 3 },
        { answer: "Email or written communication", score: 2 },
        { answer: "Nonverbal communication such as body language or gestures", score: 1 },
      ],
    },
    {
      question: "How do you approach new situations or experiences?",
      answers: [
        { answer: "Jump in headfirst and try everything", score: 4 },
        { answer: "Dip my toes in slowly and test the waters", score: 3 },
        { answer: "Research and plan before diving in", score: 2 },
        { answer: "Avoid new situations and prefer to stick to what I know", score: 1 },
      ],
    },
  ],
};

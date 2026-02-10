export interface Course {
  id: number;
  title: string;
  duration: string;
  level: string;
  description: string;
  image: string;
  highlights: string[];
  learningOutcomes: string[];
  curriculum: string[];
  studentFeedback: StudentReview[];
  achievements: Achievement[];
}

export interface StudentReview {
  id: number;
  studentName: string;
  studentImage: string;
  date: string;
  rating: number;
  feedback: string;
  designation: string;
}

export interface Achievement {
  id: number;
  title: string;
  description: string;
  icon: string;
}

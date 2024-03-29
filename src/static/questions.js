const questions = [
  {
    Question: "An algebraic expression containing three terms is called a",
    "Option 1": "monomial",
    "Option 2": "binomial",
    "Option 3": "trinomial",
    "Option 4": "all of these",
    "Correct Option": 3,
    "Marks allocated": 1,
    "Difficulty Level": "Easy",
  },
  {
    Question:
      "Number of terms in the expression 3.x^2.y - 2.y^2.z - z^2.x + 5 is",
    "Option 1": 2,
    "Option 2": 3,
    "Option 3": 4,
    "Option 4": 5,
    "Correct Option": 3,
    "Marks allocated": 1,
    "Difficulty Level": "Easy",
  },
  {
    Question: "The terms of expression are: $$4.x^2 - 3.x.y$$ ",
    "Option 1": "4.x^2 and -3.x.y",
    "Option 2": "4.x^2 and 3.x.y",
    "Option 3": "4.x^2 and -x.y",
    "Option 4": "x^2 and x.y",
    "Correct Option": 1,
    "Marks allocated": 1,
    "Difficulty Level": "Easy",
  },
  {
    Question: "Factors of -5.x^2.y^2.z are",
    "Option 1": "-5.x.y.z",
    "Option 2": "-5.x^2.y.z",
    "Option 3": "-5.x.x.y.y.z",
    "Option 4": "-5.x.y.z^2",
    "Correct Option": 3,
    "Marks allocated": 1,
    "Difficulty Level": "Medium",
  },
  {
    Question: "Coefficient of x in -9.x.y^2.z is",
    "Option 1": "9.y.z",
    "Option 2": "-9.y.z",
    "Option 3": "9.y^2.z",
    "Option 4": "-9.y^2.z",
    "Correct Option": 4,
    "Marks allocated": 1,
    "Difficulty Level": "Medium",
  },
  {
    Question: "The subtraction of 5 times of y from x is",
    "Option 1": "5x - y",
    "Option 2": "y - 5x",
    "Option 3": "x - 5y",
    "Option 4": "5y - x",
    "Correct Option": 3,
    "Marks allocated": 1,
    "Difficulty Level": "Easy",
  },
  {
    Question:
      "The side length of the top of a square table is x. The expression for perimeter is:",
    "Option 1": "4 + x",
    "Option 2": "2x",
    "Option 3": "4x",
    "Option 4": "8x",
    "Correct Option": 3,
    "Marks allocated": 1,
    "Difficulty Level": "Medium",
  },
  {
    Question:
      "The expression for the number of diagonals that we can make from one vertex of a n sided polygon is:",
    "Option 1": "2n + 1",
    "Option 2": "n - 2",
    "Option 3": "5n + 2",
    "Option 4": "n - 3",
    "Correct Option": 4,
    "Marks allocated": 1,
    "Difficulty Level": "Hard",
  },
  {
    Question: "123.x^2.y - 138.x^2.y is a like term of",
    "Option 1": "10.x.y",
    "Option 2": "-15.x.y",
    "Option 3": "-15.x.y^2",
    "Option 4": "10.x^2.y",
    "Correct Option": 4,
    "Marks allocated": 1,
    "Difficulty Level": "Hard",
  },
  {
    Question: "The value of 3.x^2 - 5.x + 3 when x = 1 is",
    "Option 1": 1,
    "Option 2": 0,
    "Option 3": -1,
    "Option 4": 11,
    "Correct Option": 1,
    "Marks allocated": 1,
    "Difficulty Level": "Easy",
  },
  {
    Question: "(2^20 ÷ 2^15) × 2^3 =",
    "Option 1": "2^15",
    "Option 2": "2^8",
    "Option 3": "2^5",
    "Option 4": "None of these",
    "Correct Option": 2,
    "Marks allocated": 1,
    "Difficulty Level": "Hard",
  },
  {
    Question: "(5/6)^0 =",
    "Option 1": 1,
    "Option 2": "6/5",
    "Option 3": 0,
    "Option 4": "None of these",
    "Correct Option": 1,
    "Marks allocated": 1,
    "Difficulty Level": "Easy",
  },
  {
    Question: "(2^2)^n = (2^3)^4, then n =",
    "Option 1": 4,
    "Option 2": 3,
    "Option 3": 12,
    "Option 4": 6,
    "Correct Option": 4,
    "Marks allocated": 1,
    "Difficulty Level": "Medium",
  },
  {
    Question: "(-7/5)^-1 =",
    "Option 1": "5/7",
    "Option 2": "-5/7",
    "Option 3": "7/5",
    "Option 4": "None of these",
    "Correct Option": 2,
    "Marks allocated": 1,
    "Difficulty Level": "Medium",
  },
  {
    Question: "81^5 ÷ (3^2)^5 =",
    "Option 1": "3^10",
    "Option 2": "3^2",
    "Option 3": "3^5",
    "Option 4": "None of these",
    "Correct Option": 1,
    "Marks allocated": 1,
    "Difficulty Level": "Medium",
  },
  {
    Question: "(8^2 × 8^4) - 2^18 =",
    "Option 1": "2^2",
    "Option 2": "2^4",
    "Option 3": 0,
    "Option 4": "None of these",
    "Correct Option": 3,
    "Marks allocated": 1,
    "Difficulty Level": "Hard",
  },
  {
    Question: "(3^7) ÷ (81 × 3^3) =",
    "Option 1": 3,
    "Option 2": "3^2",
    "Option 3": "3^0",
    "Option 4": "None of these",
    "Correct Option": 3,
    "Marks allocated": 1,
    "Difficulty Level": "Hard",
  },
  {
    Question: "(1/4)^-3 - (1/3)^-3 =",
    "Option 1": 37,
    "Option 2": "1/37",
    "Option 3": -37,
    "Option 4": "-1/37",
    "Correct Option": 1,
    "Marks allocated": 1,
    "Difficulty Level": "Medium",
  },
  {
    Question: "(10 × 5^(n+1)+ 25 × 5^n) ÷ (3 × 5^(n+2)+ 10 × 5^(n+1))",
    "Option 1": "3/5",
    "Option 2": 1,
    "Option 3": 0,
    "Option 4": 5,
    "Correct Option": 1,
    "Marks allocated": 1,
    "Difficulty Level": "Hard",
  },
  {
    Question: "(-1)^50 × (-1)^51 × (1)^100 × (-1)^101 =",
    "Option 1": -1,
    "Option 2": 1,
    "Option 3": 0,
    "Option 4": 2,
    "Correct Option": 2,
    "Marks allocated": 1,
    "Difficulty Level": "Easy",
  },
  {
    Question:
      "Find the mode for the data set, which shows the heights( in inches ) of 10 students in a class: 60, 65, 63, 62, 65, 70, 62, 68, 60, 65",
    "Option 1": 62,
    "Option 2": 65,
    "Option 3": 70,
    "Option 4": 60,
    "Correct Option": 2,
    "Marks allocated": 1,
    "Difficulty Level": "Hard",
  },
];

const quizQuestions = {
  easy: [
    {
      question: "An algebraic expression containing three terms is called a",
      option_1: "monomial",
      option_2: "binomial",
      option_3: "trinomial",
      option_4: "all of these",
      correct: "trinomial",
      marks: 1,
      difficulty: "easy",
    },
    {
      question:
        "Number of terms in the expression is $$3.x^2.y - 2.y^2.z - z^2.x + 5$$",
      option_1: "2",
      option_2: "3",
      option_3: "4",
      option_4: "5",
      correct: "3",
      marks: 1,
      difficulty: "easy",
    },
    {
      question: "The terms of expression are: $$4.x^2 - 3.x.y$$ ",
      option_1: "$$4.x^2 and -3.x.y$$",
      option_2: "$$4.x^2 and 3.x.y$$",
      option_3: "$$4.x^2 and -x.y$$",
      option_4: "$$x^2 and x.y$$",
      correct: "$$4.x^2 and -3.x.y$$",
      marks: 1,
      difficulty: "easy",
    },
    {
      question: "The subtraction of 5 times of y from x is",
      option_1: "$$5x - y$$",
      option_2: "$$y - 5x$$",
      option_3: "$$x - 5y$$",
      option_4: "$$5y - x$$",
      correct: "$$x - 5y$$",
      marks: 1,
      difficulty: "easy",
    },
    {
      question: "The value of $$3.x^2 - 5.x + 3$$ when x = 1 is",
      option_1: "1",
      option_2: "0",
      option_3: "-1",
      option_4: "11",
      correct: "1",
      marks: 1,
      difficulty: "easy",
    },
    {
      question: "$$(5/6)^0 =$$",
      option_1: "1",
      option_2: "6/5",
      option_3: "0",
      option_4: "None of these",
      correct: "1",
      marks: 1,
      difficulty: "easy",
    },
    {
      question: "$$(-1)^50 × (-1)^51 × (1)^100 × (-1)^101 =$$",
      option_1: "-1",
      option_2: "1",
      option_3: "0",
      option_4: "2",
      correct: "1",
      marks: 1,
      difficulty: "easy",
    },
    // {
    //   question:
    //     "Find the mode for the data set, which shows the heights( in inches ) of 10 students in a class: 60, 65, 63, 62, 65, 70, 62, 68, 60, 65",
    //   option_1: "62",
    //   option_2: "65",
    //   option_3: "70",
    //   option_4: "60",
    //   correct: "65",
    //   marks: 1,
    //   difficulty: "easy",
    // },
  ],
  medium: [
    {
      question: "Factors of $$-5.x^2.y^2.z$$ are",
      option_1: "$$-5.x.y.z$$",
      option_2: "$$-5.x^2.y.z$$",
      option_3: "$$-5.x.x.y.y.z$$",
      option_4: "$$-5.x.y.z^2$$",
      correct: "$$-5.x.x.y.y.z$$",
      marks: 1,
      difficulty: "medium",
    },
    {
      question: "Coefficient of x in $$-9.x.y^2.z$$ is",
      option_1: "$$9.y.z$$",
      option_2: "$$-9.y.z$$",
      option_3: "$$9.y^2.z$$",
      option_4: "$$-9.y^2.z$$",
      correct: "$$-9.y^2.z$$",
      marks: 1,
      difficulty: "medium",
    },
    {
      question:
        "The side length of the top of a square table is x. The expression for perimeter is:",
      option_1: "4 + x",
      option_2: "2x",
      option_3: "4x",
      option_4: "8x",
      correct: "4x",
      marks: 1,
      difficulty: "medium",
    },
    {
      question: "$$(2^2)^n = (2^3)^4$$ , then n =",
      option_1: "4",
      option_2: "3",
      option_3: "12",
      option_4: "6",
      correct: "6",
      marks: 1,
      difficulty: "medium",
    },
    {
      question: "$$(-7/5)^-1 =$$",
      option_1: "5/7",
      option_2: "-5/7",
      option_3: "7/5",
      option_4: "None of these",
      correct: "-5/7",
      marks: 1,
      difficulty: "medium",
    },
    {
      question: "$$81^5 ÷ (3^2)^5 =$$",
      option_1: "$$3^10$$",
      option_2: "$$3^2$$",
      option_3: "$$3^5$$",
      option_4: "None of these",
      correct: "$$3^10$$",
      marks: 1,
      difficulty: "medium",
    },
    {
      question: "$$(1/4)^-3 - (1/3)^-3 =$$",
      option_1: "37",
      option_2: "1/37",
      option_3: "-37",
      option_4: "-1/37",
      correct: "37",
      marks: 1,
      difficulty: "medium",
    },
  ],
  hard: [
    {
      question:
        "The expression for the number of diagonals that we can make from one vertex of a n sided polygon is:",
      option_1: "2n + 1",
      option_2: "n - 2",
      option_3: "5n + 2",
      option_4: "n - 3",
      correct: "n - 3",
      marks: 1,
      difficulty: "hard",
    },
    {
      question: "$$123.x^2.y - 138.x^2.y$$ is a like term of",
      option_1: "$$10.x.y$$",
      option_2: "$$-15.x.y$$",
      option_3: "$$-15.x.y^2$$",
      option_4: "$$10.x^2.y$$",
      correct: "$$10.x^2.y$$",
      marks: 1,
      difficulty: "hard",
    },
    {
      question: "$$(2^20 ÷ 2^15) × 2^3 =$$",
      option_1: "$$2^15$$",
      option_2: "$$2^8$$",
      option_3: "$$2^5$$",
      option_4: "None of these",
      correct: "$$2^8$$",
      marks: 1,
      difficulty: "hard",
    },
    {
      question: "$$(8^2 × 8^4) - 2^18 =$$",
      option_1: "$$2^2$$",
      option_2: "$$2^4$$",
      option_3: "0",
      option_4: "None of these",
      correct: "0",
      marks: 1,
      difficulty: "hard",
    },
    {
      question: "$$(3^7) ÷ (81 × 3^3) =$$",
      option_1: "3",
      option_2: "$$3^2$$",
      option_3: "$$3^0$$",
      option_4: "None of these",
      correct: "$$3^0$$",
      marks: 1,
      difficulty: "hard",
    },
    {
      question: "$$(10 × 5^(n+1)+ 25 × 5^n) ÷ (3 × 5^(n+2)+ 10 × 5^(n+1))$$",
      option_1: "3/5",
      option_2: "1",
      option_3: "0",
      option_4: "5",
      correct: "3/5",
      marks: 1,
      difficulty: "hard",
    },
    {
      question:
        "Find the mode for the data set, which shows the heights( in inches ) of 10 students in a class: 60, 65, 63, 62, 65, 70, 62, 68, 60, 65",
      option_1: "62",
      option_2: "65",
      option_3: "70",
      option_4: "60",
      correct: "65",
      marks: 1,
      difficulty: "hard",
    },
  ],
};

export default quizQuestions;

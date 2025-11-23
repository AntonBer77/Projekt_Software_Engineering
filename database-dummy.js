
// dummy posts database
let posts = [
  {
    postID: "post-1",
    postDate: new Date ("2025-11-11T23:20:00Z"),
    author: "Max Mustermann",
    degree: "B.Sc. Informatik",
    course: "Requirements Engineering",
    questionType: "Multiple-Choice",
    question: "Du möchtest den Systemüberblick für deinen Projektmanager dokumentieren. Für welches UML-Diagramm entscheidest du dich?", 
    answers: ["Objektdiagramm", "Use-Case-Diagramm", "Klassendiagramm", "Sequenzdiagramm"], 
    correctAnswer: ["answer2"],
    explanation: "Das Use-Case-Diagramm ermöglicht eine detaillierte Darstellung des Systems.",
    privatePost: false,
    likes: 12,
    comments: [
      {
        username: "Andrea Berg", 
        userPicture: randomizeBackground(),
        postDate: new Date("2025-11-11T23:24:12Z"), 
        content: "Sehr interessanter Beitrag. Bitte mehr davon."
      },
      {
        username: "Felix Blume", 
        userPicture: randomizeBackground(),
        postDate: new Date("2025-11-12T11:14:55Z"), 
        content: "Ich war mir sicher, dass Antwort 4 die richtige sei. Man lernt wohl nie aus."
      } 
    ]
  },
  {
    postID: "post-2",
    postDate: new Date("2025-09-04T11:22:09Z"),
    author: "Chef",
    degree: "B.Sc. Informatik",
    course: "Gestaltung und Ergonomie von User Interfaces",
    questionType: "Multiple-Choice",
    question: "Als Webdesigner hast du den Auftrag erhalten, eine Onlinepräsenz für das Rathaus deines Ortes zu entwerfen. Welcher der folgenden Punkte sind bei der Gestaltung rechtlich bindend?",  
    answers: ["Responsive Design", "Flat Design", "Barrierefreiheit", "Natural Mapping"],
    correctAnswer: ["answer3"],
    explanation: "Responsives Design, Flat Design und Natural Mapping sind wichtige Konzepte, allerdings ist nur die Barrierefreiheit rechtlich binded.",
    privatePost: false,
    likes: 2,
    comments: [
      {
        username: "Seppl", 
        userPicture: randomizeBackground(),
        postDate: new Date("2025-09-04T12:13:28Z"), 
        content: "Das muss ich wohl nochmal wiederholen."
      },
      {
        username: "Brummbär", 
        userPicture: randomizeBackground(),
        postDate: new Date("2025-09-04T12:14:55Z"), 
        content: "Ist doch klar, dass es die Barrierefreiheit ist."
      } 
    ]
  },
  {
    postID: "post-3",
    postDate: new Date("2025-08-04T07:04:41Z"),
    author: "Mufasa",
    degree: "B.Sc. Architektur",
    course: "Konstruktivsysteme und Tragwerkplanung",
    questionType: "Multiple-Choice",
    question: "Welchen Belastungen kann ein tragendes Bauteil abgesehen der Eigenlast noch ausgesetzt sein?",  
    answers: ["Nutzlast", "Winddruck", "Erddruck", "Zuglast"],
    correctAnswer: ["answer1", "answer2", "answer3"],
    explanation: "Nutzlast, Winddruck und Erddruck sind richtig. Die Zuglast ist das maximale Gewicht, das ein Fahrzeug ziehen darf, um ein sicheres Gespann zu gewährleisten",
    privatePost: false,
    likes: 1,
    comments: [
      {
        username: "Scar", 
        userPicture: randomizeBackground(),
        postDate: new Date("2025-08-07T06:55:13Z"), 
        content: "Das ist doch einfach. Wie wäre es mal mit herausfordernden Aufgaben!?."
      },
      {
        username: "Simba", 
        userPicture: randomizeBackground(),
        postDate: new Date("2025-11-12T11:14:55Z"), 
        content: "Tolle Fragenstellung Mufasa! Bist mein Vorbild! Und hör nicht drauf, was dieser Scar sagt."
      } 
    ]
  },
  {
    postID: "post-4",
    postDate: new Date("2025-11-01T10:08:12Z"),
    author: "Manfred",
    degree: "B.Sc. Architektur",
    course: "Baustoffkunde",
    questionType: "Wahr-oder-Falsch",
    question: "Holz ist ein anorganischer Baustoff.",  
    correctAnswer: ["falseStatement"],
    explanation: "Falsch, da Holz ein organischer Stoff ist. Anorganische Stoffe sind z.B. Natursteine und Aluminium.",
    privatePost: false,
    likes: 120,
    comments: [
      {
        username: "Sid", 
        userPicture: randomizeBackground(),
        postDate: new Date("2025-11-01T10:09:01Z"), 
        content: "Manni! Mal wieder eine Frage von dir. Danke, die hat mir noch gefehlt!"
      },
      {
        username: "Diego", 
        userPicture: randomizeBackground(),
        postDate: new Date("2025-11-02T05:48:39Z"), 
        content: "Echt einfach!"
      }, 
      {
        username: "CrashundEddie", 
        userPicture: randomizeBackground(),
        postDate: new Date("2025-11-03T08:37:05Z"), 
        content: "Ich und mein Holz!"
      },
      {
        username: "Manfred", 
        userPicture: randomizeBackground(),
        postDate: new Date("2025-11-03T09:05:05Z"), 
        content: "@CrashundEddie sehr qualifizierter Kommentar. Wenigstens hilft's dem Algorithmus."
      }  
    ]
  },
  {
    postID: "post-5",
    postDate: new Date("2025-09-15T16:04:18Z"),
    author: "Elsa",
    degree: "B.A. Marketing",
    course: "Sales und Distribution",
    questionType: "Multiple-Choice",
    question: "Ein Handelsvertreter beschreibt einen...",  
    answers: ["direkten Vertriebsweg", "indirekten Vertriebsweg"],
    correctAnswer: ["answer2"],
    explanation: "Der Handelsvertreter ist nicht der Hersteller, sondern er vertreibt lediglich die Ware. Daher ist der Vertriebsweg indirekt.",
    privatePost: false,
    likes: 6,
    comments: [
      {
        username: "Olaf", 
        userPicture: randomizeBackground(),
        postDate: new Date("2025-09-15T20:56:28Z"), 
        content: "Hatte ich direkt richtig! Wieder einen Schritt näher zum Handelsvertreter für Eis näher!"
      },
      {
        username: "Anna", 
        userPicture: randomizeBackground(),
        postDate: new Date("2025-09-16T08:12:23Z"), 
        content: "Super @Olaf freut mich für dich!"
      } 
    ]
  },
  {
    postID: "post-6",
    postDate: new Date("2025-08-04T07:04:41Z"),
    author: "Elsa",
    degree: "B.A. Marekting",
    course: "Preispolitik",
    questionType: "Wahr-oder-Falsch",
    question: "Loyale Käufer kaufen zu möglichst geringen Preisen, sofern die Ware ihren Anforderungen entspricht.",  
    correctAnswer: ["falseStatement"],
    explanation: "Falsch, da die Eigenschaft preisorientierten Käufern zugewieden wird.",
    privatePost: false,
    likes: 18,
    comments: [
      {
        username: "Anna", 
        userPicture: randomizeBackground(),
        postDate: new Date("2025-08-07T13:05:05Z"), 
        content: "Danke, deine Fragen helfen mir echt beim Lernen!"
      }
    ]
  },
  {
    postID: "post-7",
    postDate: new Date("2025-08-04T07:04:41Z"),
    author: "Elsa",
    degree: "B.Sc. Architektur",
    course: "Baustoffkunde",
    questionType: "Multiple-Choice",
    question: "Welche der folgenden Stoffe ist nicht Bestandteil von Holz?",  
    answers: ["Zellulose", "Lignin", "Hemicellulose", "Calciumsilikat"],
    correctAnswer: ["answer1", "answer2", "answer3"],
    explanation: "Calciumsilikat ist falsch. Das ist ein Bestandteil von Zement.",
    privatePost: false,
    likes: 3,
    //* Hierzu soll es keine Kommentare geben
    comments: [
    ]
  },
  {
  postID: "post-8",
  postDate: new Date("2025-06-18T09:22:14Z"),
  author: "Jonas",
  degree: "M.Sc. Wirtschaftsinformatik",
  course: "IT-Management",
  questionType: "Multiple-Choice",
  question: "Welcher Begriff gehört nicht zur agilen Softwareentwicklung?",
  answers: ["Scrum", "Kanban", "Wasserfallmodell", "Product Owner"],
  correctAnswer: ["answer3"],
  explanation: "Das Wasserfallmodell gehört nicht zur agilen Softwareentwicklung.",
  privatePost: false,
  likes: 0,
  comments: [
    {
      username: "Lara",
      userPicture: randomizeBackground(),
      postDate: new Date("2025-06-19T15:47:09Z"),
      content: "Das war eine schöne Erinnerungsfrage – danke!"
    }
  ]
},
{
  postID: "post-9",
  postDate: new Date("2025-05-12T08:44:19Z"),
  author: "Clara",
  degree: "M.Sc. Wirtschaftsinformatik",
  course: "IT-Management",
  questionType: "Wahr-oder-Falsch",
  question: "ERP-Systeme dienen der Planung und Steuerung betrieblicher Ressourcen.",
  correctAnswer: ["falseStatement"],
  explanation: "ERP-Systeme integrieren verschiedene Unternehmensbereiche und unterstützen dadurch die Planung und Steuerung zentraler Ressourcen.",
  privatePost: false,
  likes: 12,
  comments: [
    {
      username: "Felix",
      userPicture: randomizeBackground(),
      postDate: new Date("2025-05-12T10:01:03Z"),
      content: "War mir nicht sicher – dachte, ERP wäre eher für Buchhaltung und Finanzen."
    },
    {
      username: "Nina",
      userPicture: randomizeBackground(),
      postDate: new Date("2025-05-12T10:26:55Z"),
      content: "Finanzen sind auch ein Teil davon, aber ERP deckt deutlich mehr Bereiche ab."
    },
    {
      username: "Tobias",
      userPicture: randomizeBackground(),
      postDate: new Date("2025-05-12T11:14:42Z"),
      content: "Genau, z. B. auch Personal, Logistik oder Produktion."
    },
    {
      username: "Sarah",
      userPicture: randomizeBackground(),
      postDate: new Date("2025-05-12T12:03:17Z"),
      content: "Dann stimmt die Aussage ja eigentlich komplett, oder?"
    },
    {
      username: "Clara",
      userPicture: randomizeBackground(),
      postDate: new Date("2025-05-12T12:47:31Z"),
      content: "Ja, genau! ERP-Systeme bündeln Daten aus vielen Bereichen, um Ressourcen besser planen und steuern zu können – deshalb ist die Aussage wahr."
    }
  ]
},
{
  postID: "post-10",
  postDate: new Date("2025-04-20T09:35:12Z"),
  author: "Leonie",
  degree: "M.Sc. Wirtschaftsinformatik",
  course: "Data Analytics",
  questionType: "Multiple-Choice",
  question: "Was versteht man unter „Data Warehouse“?",
  answers: [
    "Ein Echtzeit-Transaktionssystem",
    "Eine zentrale Datenbank für analytische Auswertungen",
    "Eine Software zur grafischen Darstellung von Daten",
    "Ein Speichersystem für Backups"
  ],
  correctAnswer: ["answer2"],
  explanation: "Ein Data Warehouse ist eine zentrale Datenbank, die große Datenmengen aus verschiedenen Quellen für analytische Auswertungen sammelt und strukturiert.",
  privatePost: false,
  likes: 27,
  comments: [
    {
      username: "Jonas",
      userPicture: randomizeBackground(),
      postDate: new Date("2025-04-20T10:12:45Z"),
      content: "Interessante Frage, danke!"
    },
    {
      username: "Mia",
      userPicture: randomizeBackground(),
      postDate: new Date("2025-04-20T10:45:32Z"),
      content: "Gut zu wissen, dass das Data Warehouse zentral für Analysen ist."
    }
  ]
},
{
  postID: "post-11",
  postDate: new Date("2025-03-18T14:20:00Z"),
  author: "Tim",
  degree: "M.Sc. Wirtschaftsinformatik",
  course: "Grundlagen der Wirtschaftsinformatik",
  questionType: "Multiple-Choice",
  question: "Welche Aussage beschreibt das Ziel der Wirtschaftsinformatik am besten?",
  answers: [
    "Entwicklung von Betriebssystemen für Supercomputer",
    "Optimierung der Kommunikation zwischen Mensch und Maschine",
    "Integration von Informations- und Kommunikationssystemen in betriebliche Prozesse",
    "Theoretische Erforschung von Hardwarearchitekturen"
  ],
  correctAnswer: ["answer3"],
  explanation: "Das Ziel der Wirtschaftsinformatik ist die Integration von Informations- und Kommunikationssystemen in betriebliche Prozesse, um diese effizienter zu gestalten.",
  privatePost: false,
  likes: 9,
  comments: [
    {
      username: "Laura",
      userPicture: randomizeBackground(),
      postDate: new Date("2025-03-18T15:05:30Z"),
      content: "Interessant, Integration ist also zentral für die Wirtschaftsinformatik."
    }
  ]
},
{
  postID: "post-12",
  postDate: new Date("2025-02-10T11:15:00Z"),
  author: "Sophie",
  degree: "M.Sc. Wirtschaftsinformatik",
  course: "Grundlagen der Wirtschaftsinformatik",
  questionType: "Wahr-oder-Falsch",
  question: "Wirtschaftsinformatik beschäftigt sich ausschließlich mit der Programmierung von Software.",
  correctAnswer: ["falseStatement"],
  explanation: "Wirtschaftsinformatik umfasst nicht nur Programmierung, sondern auch die Analyse, Gestaltung und Optimierung von Informations- und Kommunikationssystemen in Unternehmen.",
  privatePost: false,
  likes: 7,
  comments: [
    {
      username: "Max",
      userPicture: randomizeBackground(),
      postDate: new Date("2025-02-10T12:02:10Z"),
      content: "Ah, gut zu wissen – dachte zuerst, es sei nur Programmierung."
    },
    {
      username: "Sophie",
      userPicture: randomizeBackground(),
      postDate: new Date("2025-02-10T12:45:50Z"),
      content: "Genau, es geht um alle Aspekte von IT-Systemen im Unternehmenskontext."
    }
  ]
},
{
  postID: "post-13",
  postDate: new Date("2025-01-25T09:40:00Z"),
  author: "Philipp",
  degree: "M.Sc. Wirtschaftsinformatik",
  course: "Data Analytics",
  questionType: "Multiple-Choice",
  question: "Was versteht man unter „Data Warehouse“?",
  answers: [
    "Ein Echtzeit-Transaktionssystem",
    "Eine zentrale Datenbank für analytische Auswertungen",
    "Eine Software zur grafischen Darstellung von Daten",
    "Ein Speichersystem für Backups"
  ],
  correctAnswer: ["answer2"],
  explanation: "Ein Data Warehouse ist eine zentrale Datenbank, die große Datenmengen aus verschiedenen Quellen für analytische Auswertungen sammelt und strukturiert.",
  privatePost: false,
  likes: 15,
  comments: [
    {
      username: "Lena",
      userPicture: randomizeBackground(),
      postDate: new Date("2025-01-25T10:15:20Z"),
      content: "Ah, jetzt verstehe ich den Unterschied zu Echtzeit-Systemen."
    },
    {
      username: "Philipp",
      userPicture: randomizeBackground(),
      postDate: new Date("2025-01-25T10:45:50Z"),
      content: "Richtig, ein Data Warehouse dient ausschließlich analytischen Zwecken."
    }
  ]
},
{
  postID: "post-14",
  postDate: new Date("2025-01-10T08:50:00Z"),
  author: "Amelie",
  degree: "M.Sc. Wirtschaftsinformatik",
  course: "Data Analytics",
  questionType: "Wahr-oder-Falsch",
  question: "Künstliche Intelligenz in der Wirtschaftsinformatik wird ausschließlich für Marketingzwecke eingesetzt.",
  correctAnswer: ["falseStatement"],
  explanation: "KI wird in der Wirtschaftsinformatik für viele Bereiche eingesetzt, z. B. Prozessoptimierung, Datenanalyse, Kundenservice und nicht nur für Marketing.",
  privatePost: false,
  likes: 9,
  comments: [
    {
      username: "Leon",
      userPicture: randomizeBackground(),
      postDate: new Date("2025-01-10T09:30:25Z"),
      content: "Ah, ich dachte erst, es sei nur Marketing, danke für die Klarstellung!"
    },
    {
      username: "Amelie",
      userPicture: randomizeBackground(),
      postDate: new Date("2025-01-10T10:05:40Z"),
      content: "Genau, KI wird in vielen Bereichen angewendet, nicht nur Marketing."
    }
  ]
},
{
  postID: "post-15",
  postDate: new Date("2025-01-05T11:10:00Z"),
  author: "Fabian",
  degree: "M.Sc. Wirtschaftsinformatik",
  course: "Grundlagen der Wirtschaftsinformatik",
  questionType: "Multiple-Choice",
  question: "Welche Aussage beschreibt das Ziel der Wirtschaftsinformatik am besten?",
  answers: [
    "Entwicklung von Betriebssystemen für Supercomputer",
    "Optimierung der Kommunikation zwischen Mensch und Maschine",
    "Integration von Informations- und Kommunikationssystemen in betriebliche Prozesse",
    "Theoretische Erforschung von Hardwarearchitekturen"
  ],
  correctAnswer: ["answer3"],
  explanation: "Das Ziel der Wirtschaftsinformatik ist die Integration von Informations- und Kommunikationssystemen in betriebliche Prozesse, um diese effizienter zu gestalten.",
  privatePost: false,
  likes: 11,
  comments: [
    {
      username: "Clara",
      userPicture: randomizeBackground(),
      postDate: new Date("2025-01-05T11:45:12Z"),
      content: "Interessant, die Integration in Prozesse ist also der zentrale Punkt."
    },
    {
      username: "Fabian",
      userPicture: randomizeBackground(),
      postDate: new Date("2025-01-05T12:10:34Z"),
      content: "Genau, es geht nicht nur um Technik, sondern um die Verbindung zu den Unternehmensprozessen."
    }
  ]
},
{
  postID: "post-16",
  postDate: new Date("2025-02-15T10:20:00Z"),
  author: "Emilia",
  degree: "M.Sc. Wirtschaftsinformatik",
  course: "Grundlagen der Wirtschaftsinformatik",
  questionType: "Wahr-oder-Falsch",
  question: "Wirtschaftsinformatik beschäftigt sich ausschließlich mit der Programmierung von Software.",
  correctAnswer: ["falseStatement"],
  explanation: "Wirtschaftsinformatik umfasst nicht nur Programmierung, sondern auch Analyse, Gestaltung und Optimierung von Informations- und Kommunikationssystemen in Unternehmen.",
  privatePost: false,
  likes: 8,
  comments: [
    {
      username: "Lukas",
      userPicture: randomizeBackground(),
      postDate: new Date("2025-02-15T11:05:22Z"),
      content: "Ah, also geht es um viel mehr als nur Programmieren."
    },
    {
      username: "Emilia",
      userPicture: randomizeBackground(),
      postDate: new Date("2025-02-15T11:40:10Z"),
      content: "Genau, es geht auch um Analyse und Optimierung von IT-Systemen in Unternehmen."
    }
  ]
},
{
  postID: "post-17",
  postDate: new Date("2025-03-05T09:50:00Z"),
  author: "Marie",
  degree: "M.A. Soziale Arbeit",
  course: "Theorien und Methoden der Sozialen Arbeit",
  questionType: "Multiple-Choice",
  question: "Welcher Ansatz steht im Mittelpunkt der systemischen Sozialarbeit?",
  answers: [
    "Individuelle Defizitorientierung",
    "Fokus auf familiäre und soziale Systeme",
    "Biologische Einflussfaktoren",
    "Finanzielle Leistungsberechnung"
  ],
  correctAnswer: ["answer2"],
  explanation: "Die systemische Sozialarbeit legt den Fokus auf das Zusammenspiel familiärer und sozialer Systeme, nicht auf einzelne Defizite oder biologische Faktoren.",
  privatePost: false,
  likes: 13,
  comments: [
    {
      username: "Anna",
      userPicture: randomizeBackground(),
      postDate: new Date("2025-03-05T10:25:14Z"),
      content: "Gut zu wissen, dass der systemische Ansatz das Ganze betrachtet!"
    },
    {
      username: "Marie",
      userPicture: randomizeBackground(),
      postDate: new Date("2025-03-05T10:55:47Z"),
      content: "Richtig, der Fokus liegt auf familiären und sozialen Systemen."
    }
  ]
},
{
  postID: "post-18",
  postDate: new Date("2025-04-02T08:30:00Z"),
  author: "Jonas",
  degree: "M.A. Soziale Arbeit",
  course: "Theorien und Methoden der Sozialen Arbeit",
  questionType: "Wahr-oder-Falsch",
  question: "Soziale Gerechtigkeit ist ein zentrales Leitprinzip der Sozialarbeit.",
  correctAnswer: ["trueStatement"],
  explanation: "Soziale Gerechtigkeit bildet eine Grundlage der Sozialarbeit und dient der Förderung von Chancengleichheit und fairer Behandlung in der Gesellschaft.",
  privatePost: false,
  likes: 10,
  comments: [
    {
      username: "Lara",
      userPicture: randomizeBackground(),
      postDate: new Date("2025-04-02T09:05:12Z"),
      content: "Das leuchtet ein, soziale Gerechtigkeit ist wirklich zentral."
    },
    {
      username: "Felix",
      userPicture: randomizeBackground(),
      postDate: new Date("2025-04-02T09:35:45Z"),
      content: "Interessant, hätte nicht gedacht, dass es so ein Leitprinzip ist."
    },
    {
      username: "Jonas",
      userPicture: randomizeBackground(),
      postDate: new Date("2025-04-02T10:00:30Z"),
      content: "Ja, genau – es ist die Grundlage vieler sozialer Maßnahmen und Interventionen."
    }
  ]
},
{
  postID: "post-19",
  postDate: new Date("2025-05-08T10:15:00Z"),
  author: "Sophie",
  degree: "M.A. Soziale Arbeit",
  course: "Sozialpolitik und rechtliche Grundlagen",
  questionType: "Multiple-Choice",
  question: "Welches Gesetz bildet in Deutschland die Grundlage für Kinder- und Jugendhilfe?",
  answers: [
    "BGB",
    "SGB VIII",
    "StGB",
    "GG"
  ],
  correctAnswer: ["answer2"],
  explanation: "Das SGB VIII regelt die Leistungen und Maßnahmen der Kinder- und Jugendhilfe in Deutschland.",
  privatePost: false,
  likes: 14,
  comments: [
    {
      username: "Anna",
      userPicture: randomizeBackground(),
      postDate: new Date("2025-05-08T10:50:12Z"),
      content: "Ah, also SGB VIII ist das zentrale Gesetz – danke für die Klarstellung!"
    },
    {
      username: "Sophie",
      userPicture: randomizeBackground(),
      postDate: new Date("2025-05-08T11:20:35Z"),
      content: "Richtig, alle Kinder- und Jugendhilfe-Maßnahmen beziehen sich auf das SGB VIII."
    }
  ]
},
{
  postID: "post-20",
  postDate: new Date("2025-06-12T09:40:00Z"),
  author: "Leon",
  degree: "M.A. Soziale Arbeit",
  course: "Sozialpolitik und rechtliche Grundlagen",
  questionType: "Wahr-oder-Falsch",
  question: "Case Management beschreibt den individuellen Beratungsprozess im Einzelkontakt.",
  correctAnswer: ["trueStatement"],
  explanation: "Case Management fokussiert auf den individuellen Beratungsprozess und die gezielte Unterstützung von Klienten im Einzelkontakt.",
  privatePost: false,
  likes: 12,
  comments: [
    {
      username: "Mia",
      userPicture: randomizeBackground(),
      postDate: new Date("2025-06-12T10:15:23Z"),
      content: "Gut zu wissen, dass es so individuell abläuft."
    },
    {
      username: "Felix",
      userPicture: randomizeBackground(),
      postDate: new Date("2025-06-12T10:40:12Z"),
      content: "Ah, also immer persönlich auf den Klienten zugeschnitten."
    },
    {
      username: "Lara",
      userPicture: randomizeBackground(),
      postDate: new Date("2025-06-12T11:05:45Z"),
      content: "Interessant, dass es nicht gruppenbezogen ist."
    },
    {
      username: "Leon",
      userPicture: randomizeBackground(),
      postDate: new Date("2025-06-12T11:30:10Z"),
      content: "Genau, der Fokus liegt auf der individuellen Unterstützung jedes einzelnen Klienten."
    }
  ]
},
{
  postID: "post-21",
  postDate: new Date("2025-07-05T14:20:00Z"),
  author: "Helena",
  degree: "M.A. Soziale Arbeit",
  course: "Profession und Organisation Sozialer Arbeit",
  questionType: "Multiple-Choice",
  question: "Was versteht man unter Empowerment in der Sozialarbeit?",
  answers: [
    "Kontrolle über Klienten durch Fachkräfte",
    "Stärkung der Selbstbestimmung und Ressourcen der Klienten",
    "Strenge Regelorientierung",
    "Institutionelle Abhängigkeit"
  ],
  correctAnswer: ["answer2"],
  explanation: "Beim Empowerment geht es darum, Menschen zu befähigen, ihre eigenen Ressourcen zu nutzen und Selbstbestimmung zu fördern.",
  privatePost: false,
  likes: 9,
  comments: [
    {
      username: "Tobias",
      userPicture: randomizeBackground(),
      postDate: new Date("2025-07-05T15:02:10Z"),
      content: "Empowerment ist echt ein Kernprinzip der Sozialarbeit!"
    },
    {
      username: "Lena",
      userPicture: randomizeBackground(),
      postDate: new Date("2025-07-05T15:40:50Z"),
      content: "Gut erklärt, das hilft mir beim Lernen."
    },
    {
      username: "Helena",
      userPicture: randomizeBackground(),
      postDate: new Date("2025-07-05T16:05:30Z"),
      content: "Freut mich, wenn es euch hilft! Empowerment ist wirklich zentral."
    }
  ]
},
{
  postID: "post-22",
  postDate: new Date("2025-08-18T09:25:00Z"),
  author: "Marcel",
  degree: "M.A. Soziale Arbeit",
  course: "Profession und Organisation Sozialer Arbeit",
  questionType: "Wahr-oder-Falsch",
  question: "Supervision dient der Leistungsbewertung von Klienten.",
  correctAnswer: ["falseStatement"],
  explanation: "Supervision dient der Reflexion und Unterstützung von Fachkräften, nicht der Bewertung von Klienten.",
  privatePost: false,
  likes: 13,
  comments: [
    {
      username: "Clara",
      userPicture: randomizeBackground(),
      postDate: new Date("2025-08-18T10:00:10Z"),
      content: "Gut zu wissen! Ich dachte früher immer, es hätte mit Klientenbewertungen zu tun."
    },
    {
      username: "Jonas",
      userPicture: randomizeBackground(),
      postDate: new Date("2025-08-18T10:25:40Z"),
      content: "Ja, Supervision ist echt eher für Fachkräfte als für Klienten."
    },
    {
      username: "Marie",
      userPicture: randomizeBackground(),
      postDate: new Date("2025-08-18T10:55:12Z"),
      content: "Spannend, da wird viel missverstanden."
    },
    {
      username: "Timo",
      userPicture: randomizeBackground(),
      postDate: new Date("2025-08-18T11:22:55Z"),
      content: "Danke für die Erklärung, Marcel!"
    },
    {
      username: "Marcel",
      userPicture: randomizeBackground(),
      postDate: new Date("2025-08-18T11:50:00Z"),
      content: "Gerne! Supervision unterstützt uns als Fachkräfte bei Reflexion und Qualitätssicherung."
    }
  ]
},
{
  postID: "post-23",
  postDate: new Date("2025-09-03T13:10:00Z"),
  author: "Nina",
  degree: "M.A. Soziale Arbeit",
  course: "Profession und Organisation Sozialer Arbeit",
  questionType: "Multiple-Choice",
  question: "Welche Aufgabe gehört zu den Kernfunktionen einer professionellen Sozialarbeit?",
  answers: [
    "Reine Verwaltungsarbeit",
    "Hilfe zur Selbsthilfe",
    "Juristische Vertretung der Klienten",
    "Finanzielle Leistungsberechnung"
  ],
  correctAnswer: ["answer2"],
  explanation: "Hilfe zur Selbsthilfe ist ein zentrales professionelles Prinzip der Sozialarbeit.",
  privatePost: false,
  likes: 11,
  comments: [
    {
      username: "Sven",
      userPicture: randomizeBackground(),
      postDate: new Date("2025-09-03T14:00:12Z"),
      content: "Genau, Selbsthilfe fördern ist super wichtig."
    },
    {
      username: "Laura",
      userPicture: randomizeBackground(),
      postDate: new Date("2025-09-03T14:25:45Z"),
      content: "Danke Nina! Gut zusammengefasst."
    }
  ]
},
{
  postID: "post-24",
  postDate: new Date("2025-04-22T10:50:00Z"),
  author: "Carina",
  degree: "M.A. Soziale Arbeit",
  course: "Theorien und Methoden der Sozialen Arbeit",
  questionType: "Wahr-oder-Falsch",
  question: "Die Lebensweltorientierung betont die Perspektive der Klientinnen und Klienten im Alltag.",
  correctAnswer: ["trueStatement"],
  explanation: "Lebensweltorientierung berücksichtigt die alltäglichen Lebensbedingungen der Menschen.",
  privatePost: false,
  likes: 7,
  comments: [
    {
      username: "Joel",
      userPicture: randomizeBackground(),
      postDate: new Date("2025-04-22T11:20:33Z"),
      content: "Das macht die Arbeit auch so praxisnah."
    }
  ]
},
{
  postID: "post-25",
  postDate: new Date("2025-06-28T12:00:00Z"),
  author: "Frida",
  degree: "M.A. Soziale Arbeit",
  course: "Sozialpolitik und rechtliche Grundlagen",
  questionType: "Multiple-Choice",
  question: "Was ist das Hauptziel der Sozialpolitik?",
  answers: [
    "Sicherstellung sozialer Gerechtigkeit",
    "Reduzierung staatlicher Ausgaben",
    "Förderung wirtschaftlicher Monopole",
    "Ausschließliche Unterstützung von Großfamilien"
  ],
  correctAnswer: ["answer1"],
  explanation: "Sozialpolitik zielt auf soziale Sicherheit und Gerechtigkeit ab.",
  privatePost: false,
  likes: 15,
  comments: [
    {
      username: "Nora",
      userPicture: randomizeBackground(),
      postDate: new Date("2025-06-28T12:40:20Z"),
      content: "Super Frage, hilft bei der Klausurvorbereitung!"
    },
    {
      username: "Carla",
      userPicture: randomizeBackground(),
      postDate: new Date("2025-06-28T13:05:44Z"),
      content: "Danke für die Erklärung!"
    },
    {
      username: "Frida",
      userPicture: randomizeBackground(),
      postDate: new Date("2025-06-28T13:20:00Z"),
      content: "Gerne! Sozialpolitik ist ein großes Feld."
    }
  ]
},
{
  postID: "post-26",
  postDate: new Date("2025-03-10T09:10:00Z"),
  author: "Ben",
  degree: "M.Sc. Wirtschaftsinformatik",
  course: "Data Analytics",
  questionType: "Wahr-oder-Falsch",
  question: "Big Data umfasst ausschließlich strukturierte Daten.",
  correctAnswer: ["falseStatement"],
  explanation: "Big Data beinhaltet strukturierte, unstrukturierte und semi-strukturierte Daten.",
  privatePost: false,
  likes: 6,
  comments: [
    {
      username: "Tara",
      userPicture: randomizeBackground(),
      postDate: new Date("2025-03-10T09:40:12Z"),
      content: "Stimmt, unstrukturierte Daten machen ja sogar den Großteil aus!"
    }
  ]
},
{
  postID: "post-27",
  postDate: new Date("2025-01-25T08:50:00Z"),
  author: "Oliver",
  degree: "M.Sc. Wirtschaftsinformatik",
  course: "Grundlagen der Wirtschaftsinformatik",
  questionType: "Multiple-Choice",
  question: "Welche Komponente gehört zu einem Informationssystem?",
  answers: [
    "Hardware",
    "Ökologische Ressourcen",
    "Biologische Systeme",
    "Zufallsgeneratoren"
  ],
  correctAnswer: ["answer1"],
  explanation: "Informationssysteme bestehen u.a. aus Hardware, Software, Daten, Prozessen und Menschen.",
  privatePost: false,
  likes: 9,
  comments: [
    {
      username: "Sina",
      userPicture: randomizeBackground(),
      postDate: new Date("2025-01-25T09:20:00Z"),
      content: "Endlich mal eine leichte Frage 😄"
    },
    {
      username: "Lukas",
      userPicture: randomizeBackground(),
      postDate: new Date("2025-01-25T09:45:31Z"),
      content: "Absolut richtig!"
    }
  ]
},
{
  postID: "post-28",
  postDate: new Date("2025-10-04T13:30:00Z"),
  author: "David",
  degree: "M.Sc. Wirtschaftsinformatik",
  course: "IT-Management",
  questionType: "Wahr-oder-Falsch",
  question: "IT-Strategien sollen die Geschäftsstrategie eines Unternehmens unterstützen.",
  correctAnswer: ["trueStatement"],
  explanation: "IT-Strategien orientieren sich an den Unternehmenszielen und unterstützen Geschäftsfunktionen.",
  privatePost: false,
  likes: 17,
  comments: [
    {
      username: "Tim",
      userPicture: randomizeBackground(),
      postDate: new Date("2025-10-04T14:05:11Z"),
      content: "Ja, ohne IT-Strategie läuft im Business fast gar nichts mehr."
    },
    {
      username: "Sarah",
      userPicture: randomizeBackground(),
      postDate: new Date("2025-10-04T14:25:44Z"),
      content: "Das musste ich letztens auch fürs Projekt lernen!"
    },
    {
      username: "David",
      userPicture: randomizeBackground(),
      postDate: new Date("2025-10-04T14:50:00Z"),
      content: "Freut mich, dass es hilft!"
    }
  ]
},
{
  postID: "post-29",
  postDate: new Date("2025-03-30T11:35:00Z"),
  author: "Verena",
  degree: "M.A. Soziale Arbeit",
  course: "Theorien und Methoden der Sozialen Arbeit",
  questionType: "Multiple-Choice",
  question: "Welcher Begriff beschreibt eine klassische Methode der Sozialen Arbeit?",
  answers: [
    "Konfliktmoderation",
    "Meteorologische Diagnose",
    "Buchhaltungsanalyse",
    "Biomedizinische Intervention"
  ],
  correctAnswer: ["answer1"],
  explanation: "Konfliktmoderation ist eine typische Methode zur Unterstützung sozialer Gruppen oder Einzelpersonen.",
  privatePost: false,
  likes: 12,
  comments: [
    {
      username: "Pauline",
      userPicture: randomizeBackground(),
      postDate: new Date("2025-03-30T12:10:22Z"),
      content: "Konfliktmoderation hatten wir erst letzte Woche!"
    },
    {
      username: "Verena",
      userPicture: randomizeBackground(),
      postDate: new Date("2025-03-30T12:30:00Z"),
      content: "Perfekt, dann passt die Frage ja gut rein 😊"
    }
  ]
}
];

// get currentUser from session storage
let currentUser = JSON.parse(sessionStorage.getItem('currentUser'));


// check if session storage has no posts then setup posts in the storage
if(sessionStorage.getItem('posts') === null) {
  sessionStorage.setItem("posts", JSON.stringify(posts));

// if session storage has posts then update posts to include any changes on the posts item
} else {
  posts = JSON.parse(sessionStorage.getItem('posts'));  
}

// if session storage has postAdded item then show success message
if(sessionStorage.getItem('postAdded')) {
  // inform the user about action success
  alertUser('Beitrag erfolgreich erstellt!');
  // after alert remove item from storage
  sessionStorage.removeItem('postAdded');
}


// ========================================state tracking variables========================================

// track currently rendered post feed
let currentlyRenderedPosts;

// track scrolling behavior
let scrollingEnabled = true;



// ========================================utility functions========================================

// save current scrolling position and when user attemps to scroll go to saved position
function disableScroll() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollLeft = window.pageYOffset || document.documentElement.scrollTop;
  
  window.onscroll = () => window.scrollTo(scrollLeft, scrollTop);
};

// revert scroll position capture
function enableScroll() {
  window.onscroll = function () { };

}


// assign a randomized background color to user pictures
function randomizeBackground() {
  const backgroundColors = ['crimson', 'darkcyan', 'darkolivegreen', 'darkmagenta', 'darkslateblue', 'darkslategrey', 'green', 'midnightblue'];
  
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
  
  return backgroundColors[getRndInteger(0, 7)];
}


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
    // check which label to display
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


// display a custom message after an event
function alertUser(message) {
  const feedbackMessage = 
  `
  <div class="action-feedback">${message}</div>
  `;
  
  document.body.insertAdjacentHTML('afterbegin', feedbackMessage);
  
  setTimeout(() => {
    document.body.firstElementChild.remove();
  }, 3000);
}



// ========================================post feed rendering and post interactions========================================

const postsFeed = document.getElementById('posts-feed');
const tabs = document.getElementById('tabs');
const tabsContent = document.getElementsByClassName('tabs-content');


// follow button adds a course to currentUser.followList[]
function followCourse(e) {
  // get course name
  let courseName = e.target.attributes['data-post-course'].value;

  // check if currentUser.followList[] includes this course
  let followed = currentUser.followList.includes(courseName);

  // add course to currentUser.followList[] and deactivate follow button
  if(!followed) {
    currentUser.followList.push(courseName);
    sessionStorage.setItem('currentUser', JSON.stringify(currentUser));

    e.target.innerText = "Gefolgt";
    e.target.classList.add('button--inactive');
  }
}

// render follow button when course is not in currentUser.followList[]
function renderFollowButton(post) {
  // check if the currentUser follows post.course
  let courseFollowed = currentUser.followList.includes(post.course);

  let followButton = "";
  
  if(!courseFollowed) {                      
    followButton = `
    <span>&#128900;</span>
    <div class="button-ghost" data-post-course="${post.course}" onclick="followCourse(event)">Folgen</div>                      
    `;
  }
  return followButton                    
}

// render post feed from provided posts dataset array
function renderPostFeed(postsDataset) {
  let answerID = 1;
  let postAnswersFormID = 1;
  

  postsDataset.forEach((post) => {
    const postID = post.postID;
    let answerName = 1;
    let postDate = new Date(post.postDate);
    const isPostLiked = currentUser.likedPosts.includes(postID);
    const isPostSaved = currentUser.favoritePosts.includes(postID);

    function renderPostCardContent(questionType) {
      // options array
      let answerContent = [];
      // if question type is Multiple-Choice then render this content
      if(questionType === "Multiple-Choice") {
        // push answer options into answerContent[]
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
      // if question type is Wahr-oder-Falsch then render this content
      }
      if(questionType === "Wahr-oder-Falsch") {
        let answerOptions = `
        <label for="answer-option-${answerID}" class="answer-option checkmark-label">
          <input type="radio" name="trueOrFalse" value="trueStatement" id="answer-option-${answerID}" class="answer-option-input">
          <span class="custom-checkmark" title="Wählen Sie die richtige Antwort aus"></span>
          <p class="answer-option-content checkmark-label-content">Wahr</p>
        </label>                      
          <label for="answer-option-${answerID + 1}" class="answer-option checkmark-label">
          <input type="radio" name="trueOrFalse" value="falseStatement" id="answer-option-${answerID + 1}" class="answer-option-input">
          <span class="custom-checkmark" title="Wählen Sie die richtige Antwort aus"></span>
          <p class="answer-option-content checkmark-label-content">Falsch</p>
        </label>                      
        `;
        
        answerID = answerID + 2;
  
        // push answer options into answerContent[]
        answerContent.push(answerOptions)
        
      }
      // join answer options into a single string for rendering
      let answerOptionsContent = answerContent.join("");
  
      return answerOptionsContent;
    }
  
    let postContent = `
      <article id="${post.postID}" class="post">
        <div class="post-info">
          <div class="post-specifications">
            <div class="course-name link" data-course-name="${post.course}" title="Zum Kurs wechseln">k/${post.course}</div>
            <span>&#128900;</span>
            <div class="post-date">${timeSince(postDate)}</div>
            ${renderFollowButton(post)}
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
                ${renderPostCardContent(post.questionType)}
              </div>
            </form>
            <button form="post-answers-form${postAnswersFormID}" type="submit" data-post-id="${post.postID}" class="submit-answer-button button-primary button--inactive">Auswerten</button>
          </div>
          <div class="divider"></div>
          <div class="post-card-footer">
            <div class="flex-container align-center gap-0">
              <button class="like-button user-feedback-button" title="Gefällt mir">
                <div class="button-icon animation-container" data-post-id="${post.postID}" onclick="likePost(event)">
                  <i class="material-icons ${isPostLiked ? "hidden" : ""}">favorite_border</i>
                  <div class="animation-item ${!isPostLiked ? "hidden" : ""}">
                    <i class="material-icons like-color">favorite</i>
                  </div>
                </div>
                <span class="user-feedback-counter">${post.likes}</span>
              </button>                  
              <button class="comment-button user-feedback-button" title="Kommentare anzeigen">
                <div class="button-icon" data-post-id="${postID}" onclick="openCommentSection(event)"><i class="material-icons">chat_bubble_outline</i></div>
                <span class="user-feedback-counter">${post.comments.length}</span>
              </button>
            </div>
            <div class="flex-container align-center gap-0">
              <button class="share-post-button user-feedback-button button-icon" title="Beitrag teilen">
                <i class="material-icons" style="transform: scale(-100%, 100%);">reply</i>
              </button>
              <button class="save-post-button user-feedback-button" title="Beitrag speichern">
                <div class="button-icon animation-container" data-post-id="${post.postID}" onclick="savePost(event)">
                  <i class="material-icons ${isPostSaved ? "hidden" : ""}">bookmark_border</i>
                  <div class="animation-item ${!isPostSaved ? "hidden" : ""}">
                    <i class="material-icons">bookmark</i>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </article>
      <div class="divider"></div>
    `;
  
    postAnswersFormID++;
  
    postsFeed.insertAdjacentHTML("beforeend", postContent);
  
  })

}

// add or subtract from corresponding post.likes
function toggleLike(list, id) {
  const index = list.indexOf(id);

  if (index === -1) {
    list.push(id);       // add post to user's likedPosts
  } else {
    list.splice(index, 1); // remove post from user's likedPosts
  }

  return list;
}

// on like button click trigger this function
function likePost(event) {
  const likeButton = event.currentTarget;
  const likeAnimationItem = likeButton.children[1];
  const counter = event.currentTarget.nextElementSibling;
  
  const postID = likeButton.attributes['data-post-id'].value;
  const correspondingPost = posts.find((post) => post.postID === postID);
  const postLikedByCurrentUser = currentUser.likedPosts.includes(postID);
  
  // check if the post has already been liked
  if(!postLikedByCurrentUser) {
    // display animation when button was clicked
    likeButton.firstElementChild.classList.toggle('hidden');
    likeAnimationItem.classList.toggle('hidden');
    likeAnimationItem.firstElementChild.classList.add('icon-animation');

    // add +1 to like counter
    counter.innerText++;
    correspondingPost.likes++;
    sessionStorage.setItem('posts', JSON.stringify(posts));

    currentUser.likedPosts = toggleLike(currentUser.likedPosts, postID);
    sessionStorage.setItem('currentUser', JSON.stringify(currentUser));

  } 
  // if already liked then remove like attribute and subtract -1 from counter
  else {
    // display animation when button was clicked
    likeButton.firstElementChild.classList.toggle('hidden');
    likeAnimationItem.classList.toggle('hidden');
    likeAnimationItem.firstElementChild.classList.remove('icon-animation');

    counter.innerText--;
    correspondingPost.likes--;
    sessionStorage.setItem('posts', JSON.stringify(posts));

    currentUser.likedPosts = toggleLike(currentUser.likedPosts, postID);
    sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
  }
    
}

// set comment section height based on inner contents
function setCommentSectionHeight() {
  if(postsFeed.firstElementChild.children[1].children[1].matches('.comment-section')) {
    const postSectionHeight = postsFeed.firstElementChild.children[1].firstElementChild.clientHeight;
    const commentSection = postsFeed.firstElementChild.children[1].children[1];
    const postHeaderHeight = postsFeed.firstElementChild.children[1].firstElementChild.lastElementChild.firstElementChild.clientHeight;
    const postCardContent = postsFeed.firstElementChild.children[1].firstElementChild.lastElementChild.children[1];
    
    // similar to CSS settings (100% - 2rem)
    const modalContentMaxHeight = window.innerHeight - 32;

    postCardContent.style.maxHeight = `${(modalContentMaxHeight - postSectionHeight) + postSectionHeight - 110 - postHeaderHeight}px`;

    commentSection.style.height = `${postSectionHeight}px`;
  }
  
}

// when user clicks on comment icon open comment section
function openCommentSection(event) {
  const postID = event.currentTarget.attributes["data-post-id"].value;
  const correspondingPost = posts.find((post) => {
    return post.postID === postID;
  })
  const postDate = new Date(correspondingPost.postDate);
  const isPostLiked = currentUser.likedPosts.includes(postID);
  const isPostSaved = currentUser.favoritePosts.includes(postID);

  const answerOptions = event.currentTarget.parentElement.parentElement.parentElement.previousElementSibling.previousElementSibling.firstElementChild.lastElementChild.children;
  const answerOptionsArray = Array.from(answerOptions);
  
  function renderPostCardContent(questionType) {
    let answerName = 1;
    // options array
    let answerContent = [];
    // if question type is Multiple-Choice then render this content
    if(questionType === "Multiple-Choice") {
      // push answer options into answerContent[]
      correspondingPost.answers.forEach((answer, index) => {
        const correspondingAnswerID = answerOptionsArray[index].attributes['for'].value;          

        let answerOption = `
        <label for="${correspondingAnswerID}" class="answer-option checkmark-label">
          <input type="checkbox" name="answer${answerName}" id="${correspondingAnswerID}" class="answer-option-input">
          <span class="custom-checkmark" title="Wählen Sie die richtige Antwort aus"></span>
          <p class="answer-option-content checkmark-label-content">${answer}</p>
        </label>                      
        `;

        answerName++;
  
        answerContent.push(answerOption)
      });
    }

    // if question type is Wahr-oder-Falsch then render this content
    if(questionType === "Wahr-oder-Falsch") {
      const trueStatementID = answerOptionsArray[0].attributes['for'].value;
      const falseStatementID = answerOptionsArray[1].attributes['for'].value;
      let answerOptions = `
      <label for="${trueStatementID}" class="answer-option checkmark-label">
        <input type="radio" name="trueOrFalse" value="trueStatement" id="${trueStatementID}" class="answer-option-input">
        <span class="custom-checkmark" title="Wählen Sie die richtige Antwort aus"></span>
        <p class="answer-option-content checkmark-label-content">Wahr</p>
      </label>                      
        <label for="${falseStatementID}" class="answer-option checkmark-label">
        <input type="radio" name="trueOrFalse" value="falseStatement" id="${falseStatementID}" class="answer-option-input">
        <span class="custom-checkmark" title="Wählen Sie die richtige Antwort aus"></span>
        <p class="answer-option-content checkmark-label-content">Falsch</p>
      </label>                      
      `;
      
      answerContent.push(answerOptions)
      
    }

    // join answer options into a single string for rendering
    let answerOptionsContent = answerContent.join("");

    return answerOptionsContent;
  }
 
  function renderComments() {
    const commentsArray = [];

    correspondingPost.comments.forEach((comment) => {
      const postDate = new Date(comment.postDate);
      let userComment = 
      `
      <div class="user-comment">
        <div class="user-profile-picture" style="background-color: ${randomizeBackground()};">${comment.username.charAt(0)}</div>
        <div class="user-comment-info">
          <div class="flex-container align-center gap-0">
            <h4 class="comment-username">${comment.username}</h4>
            <span>&#128900;</span>
            <span class="comment-post-date">${timeSince(postDate)}</span>
          </div>
          <button class="comment-menu button-icon"><i class="material-icons">more_vert</i></button>
        </div>
        <p class="user-comment-content">${comment.content}</p>
      </div>
      `;

      commentsArray.push(userComment);
    })

    const commentsContent = commentsArray.join('');
  
    if(commentsContent.length > 0) {
      return commentsContent;
    }
    else {
      let emptyCommentSection = 
      `
      <p class="empty-comment-section-content">Noch keine Kommentare</p>
      `;

      return emptyCommentSection;
    }

  }

  let postContent = 
  `
  <div class="modal" onclick="closeCommentSection(event)">
    <button class="close-button button-icon"><i class="material-icons">close</i></button>
    <div class="modal-content">
        <div class="post-section">
          <div class="post-info">
            <div class="post-specifications">
              <div class="course-name link" title="Zum Kurs wechseln">k/${correspondingPost.course}</div>
              <span>&#128900;</span>
              <div class="post-date">${timeSince(postDate)}</div>
              ${renderFollowButton(correspondingPost)}
            </div>
            <div class="post-menu button-icon">
              <i class="material-icons">more_horiz</i>
            </div>
          </div>
          <div class="post-card">
            <header class="post-card-header">
              <h2 class="post-heading">${correspondingPost.question}</h2>
            </header>
            <div class="post-card-content">
              <form id="post-answers-form" class="post-answers">
                <div class="post-card-question-type">${correspondingPost.questionType}</div>
                <div class="answer-options-container">
                  ${renderPostCardContent(correspondingPost.questionType)}
                </div>
              </form>
              <button form="post-answers-form" type="submit" data-post-id="${correspondingPost.postID}" class="submit-answer-button button-primary button--inactive">Auswerten</button>                        
            </div>                      
            <div class="post-card-footer">
              <div class="flex-container align-center gap-0">
                <button class="like-button user-feedback-button" title="Gefällt mir">
                  <div class="button-icon animation-container" data-post-id="${correspondingPost.postID}" onclick="likePost(event)">
                    <i class="material-icons ${isPostLiked ? "hidden" : ""}">favorite_border</i>
                    <div class="animation-item ${!isPostLiked ? "hidden" : ""}">
                      <i class="material-icons like-color">favorite</i>
                    </div>
                  </div>
                  <span class="user-feedback-counter">${correspondingPost.likes}</span>
                </button>                  
                <label for="comment-input" class="comment-button user-feedback-button" title="Kommentar schreiben">
                  <div class="button-icon"><i class="material-icons">chat_bubble_outline</i></div>              
                </label>
              </div>
              <div class="flex-container align-center gap-0">
                <button class="share-post-button user-feedback-button button-icon" title="Beitrag teilen">
                  <i class="material-icons" style="transform: scale(-100%, 100%);">reply</i>
                </button>
                <button class="save-post-button user-feedback-button" title="Beitrag speichern">
                  <div class="button-icon animation-container" data-post-id="${correspondingPost.postID}" onclick="savePost(event)">
                    <i class="material-icons ${isPostSaved ? "hidden" : ""}">bookmark_border</i>
                    <div class="animation-item ${!isPostSaved ? "hidden" : ""}">
                      <i class="material-icons">bookmark</i>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>                    
        </div>
        <div class="comment-section">
          <div class="comment-section-header">
            <h3 class="comment-section-heading">Kommentare<span class="comments-counter">${correspondingPost.comments.length}</span>
            </h3>
            <button type="button" class="button-icon"><i class="material-icons" style="font-size: 28px;">sort</i></button>
          </div>
            <div class="comment-section-content">                    
              ${renderComments()}                          
            </div>
            <div class="comment-section-footer">                    
              <form action="" id="user-comment-form" class="user-comment-form">
                <textarea name="commentInput" id="comment-input" class="comment-input auto-grow-element" placeholder="Kommentar hinzufügen" rows="1" required></textarea>
                <button type="submit" class="submit-user-comment button-secondary" data-post-id="${correspondingPost.postID}">Posten</button>
              </form>
            </div>
        </div>
    </div>
  </div>
  `;

  postsFeed.insertAdjacentHTML("afterbegin", postContent);
  
  setCommentSectionHeight();

  // check if scrolling is enabled and switch between on and off
  scrollingEnabled ? disableScroll() : enableScroll();
  // set scrolling state to true or false
  scrollingEnabled = !scrollingEnabled;
}

// add or delete post from currentUser.favoriteList[]
function toggleFavorite(list, id) {
  const index = list.indexOf(id);

  if (index === -1) {
    list.push(id);       // add post to user's favoritePosts
  } else {
    list.splice(index, 1); // remove post from user's favoritePosts
  }

  return list;
}

// ask user for confirmation before closing a page
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

// render modal with confirmation request
function closePage() {
  const body = document.body;
  const alert = 
  `
  <div class="modal" onclick="confirmCancellation(event)">
    <div class="alert">
      <p class="alert-message">Sind Sie sicher, dass Sie die Änderungen verwerfen wollen?</p>
      <div class="flex-container gap-2">
        <button type="button" class="reject-button button-tertiary">Nicht abbrechen</button>
        <button type="button" class="confirm-button button-primary">Ja, abbrechen</button>
      </div>
    </div>
  </div>
  `;

  body.insertAdjacentHTML('afterbegin', alert);

}

// close opened comment section
function closeCommentSection(event) {
  const isTargetModal = event.target.matches('.modal');
  const isTargetCloseButton = event.target.matches('.close-button');
  
  isTargetModal || isTargetCloseButton ? event.currentTarget.remove() : null;
  
  if(isTargetModal || isTargetCloseButton) {
    // enable scrolling
    enableScroll();
    // set scrolling state to true
    scrollingEnabled = true;
  }
}

// save posts to currentUser's favoritePosts[]
function savePost(event) {
  const saveButton = event.currentTarget;
  const animationItem = saveButton.children[1];


  const postID = saveButton.attributes['data-post-id'].value;
  const postSavedByCurrentUser = currentUser.favoritePosts.includes(postID);
  const isUserPost = currentUser.posts.includes(postID);
  
  // check if currentUser.favoritePosts includes this post
  if(!postSavedByCurrentUser && !isUserPost) {
    // display animation when button was clicked
    saveButton.firstElementChild.classList.toggle('hidden');
    animationItem.classList.toggle('hidden');
    animationItem.firstElementChild.classList.add('icon-animation');

    // add post to currentUser.favoritePosts[]
    currentUser.favoritePosts = toggleFavorite(currentUser.favoritePosts, postID);
    sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
    
  } 
  // if saved remove from the list
  else if(postSavedByCurrentUser) {
    // display animation when button was clicked
    saveButton.firstElementChild.classList.toggle('hidden');
    animationItem.classList.toggle('hidden');
    animationItem.firstElementChild.classList.remove('icon-animation');
  
    // add post to currentUser.favoritePosts[]
    currentUser.favoritePosts = toggleFavorite(currentUser.favoritePosts, postID);
    sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
    
  } else {
    alertUser('Sie können Ihren eigenen Beitrag nicht speichern');
  }
  
}

// show explanation for corresponding post
function showExplanation(event) {
  const showSolutionButton = event.currentTarget;
  const solutionContent = showSolutionButton.parentElement.nextElementSibling;
  // check if solution content includes the class "hidden"
  let isSolutionContentHidden = solutionContent.classList.contains('hidden');
  // if content is hidden then rotate arrow icon up else down
  isSolutionContentHidden ? showSolutionButton.firstElementChild.style.rotate = "180deg" : showSolutionButton.firstElementChild.style.rotate = "0deg";
  // show or hide the solution content
  solutionContent.classList.toggle('hidden');
  // console.log(solutionContent.innerText)
  showSolutionButton.scrollIntoView({behavior: "smooth", block: "center"});
  setCommentSectionHeight();
}

// evaluate user's answer submission
function evaluateUserAnswers(correspondingPost, questionType, entries, answerOptions) {
  let userAnswers;
  let correctAnswerOptions;
  let allCorrectAnswersSelected;
  let isUserSelectionCorrect;
  let isCorrectAnswer;

  // for multiple choice do this
  if(questionType === "Multiple-Choice") {
    userAnswers = Object.keys(entries);
    
    // filter[] for all correct answers
    correctAnswerOptions = answerOptions.filter((answerOption) => {
      let optionName = answerOption.firstElementChild.name;
      let isCorrectAnswerOption = correspondingPost.correctAnswer.includes(optionName);
      if(isCorrectAnswerOption) {
        return answerOption
      }
    });
    
    // check if all correct answers are selected
    allCorrectAnswersSelected = correctAnswerOptions.every((answer) => {
      return answer.matches('.answer-option-selected');
    });
    
    // check if any of the selected answers are false
    isUserSelectionCorrect = userAnswers.every((userAnswer) => {
      return correspondingPost.correctAnswer.includes(userAnswer);
    })
    
    // check if all conditions for the correct answer feedback are met
    isCorrectAnswer = allCorrectAnswersSelected && isUserSelectionCorrect ? true : false;
  }
  // for true or false do this
  if(questionType === "Wahr-oder-Falsch") {
    userAnswers = Object.values(entries);
    // check if user selection is correct
    isCorrectAnswer = userAnswers.every((userAnswer) => {
      return correspondingPost.correctAnswer.includes(userAnswer);
    })
  }
  
  // set the feedback message
  const answerFeedback = () => {
    if(isCorrectAnswer) {
      return "Ihre Antwort ist richtig"
    }

    if(isUserSelectionCorrect && !allCorrectAnswersSelected) {
      return "Ihre Antwort ist nur teilweise richtig"
    }

    if(!isCorrectAnswer) {
      return "Ihre Antwort ist leider falsch"
    }

  }
  // set the feedback message color
  const answerFeedbackColor = () => {
    if(isCorrectAnswer) {
      return "correct-answer"
    }

    if(isUserSelectionCorrect && !allCorrectAnswersSelected) {
      return "partially-correct-answer"
    }

    if(!isCorrectAnswer) {
      return "wrong-answer"
    }
  }

  // find the submitted answer-option and change style
  answerOptions.forEach((answer) => {
    // get the selection
    let selectedOption = answer.matches('.answer-option-selected');
    // if answer-option is selected check whether the answer is correct or wrong
    if(selectedOption && questionType === "Multiple-Choice") {
      let selectionName = answer.firstElementChild.name;
      // evaluate user answer
      let isCorrectSelection = correspondingPost.correctAnswer.includes(selectionName);
      // show correct answer in green, wrong answer in red
      isCorrectSelection ? answer.classList.add('correct-answer-option') : answer.classList.add('wrong-answer-option');
    }
    // if answer-option is selected check whether the answer is correct or wrong
    if(selectedOption && questionType === "Wahr-oder-Falsch") {
      let selectionValue = answer.firstElementChild.value;
      // evaluate user answer
      let isCorrectSelection = correspondingPost.correctAnswer.includes(selectionValue);
      // show correct answer in green, wrong answer in red
      isCorrectSelection ? answer.classList.add('correct-answer-option') : answer.classList.add('wrong-answer-option');
    }
    // disable answer selection after submit
    answer.classList.add('answer-option-disabled');
  })

  return {
    message: answerFeedback,
    color: answerFeedbackColor
  };
}


// listen for tab click event to switch between tab contents
tabs.addEventListener('click', (event) => {
  // if not current tab is clicked do this
  if(event.target.matches('.tabs-item') && !event.target.classList.contains('current-tab')) {
    const tabItems = Array.from(event.target.parentElement.children);
    const currentTab = tabItems.find((tabItem) => {
      return tabItem.matches('.current-tab');
    })
    const indexCurrentTab = tabItems.indexOf(currentTab);
    const indexNewTab = tabItems.indexOf(event.target);

    // switch between current tab items
    currentTab.classList.toggle('current-tab');
    event.target.classList.toggle('current-tab');
    // switch between current tab content
    tabsContent[indexCurrentTab].classList.toggle('current-tab-content');
    tabsContent[indexNewTab].classList.toggle('current-tab-content');

  }
})

// when DOM content is loaded render post feed content
document.addEventListener('DOMContentLoaded', () => {
  
  // render post feed for the home page
  if (document.location.pathname.includes('home')) {
    
    const homePostFeed = posts.filter((post) => {
      return currentUser.followList.find((courseName) => courseName === post.course) 
      || currentUser.posts.find((userPosts) => userPosts === post.postID) 
      ? post : null;
    })
    // sort homePostFeed by date in descending order -> newest first
    currentlyRenderedPosts = homePostFeed.sort((a, b) => { 
      return new Date(b.postDate) - new Date(a.postDate);
    });
    

    const emptyPostFeed = homePostFeed.length === 0;
    if(emptyPostFeed) {
      const message = 
      `
      <div class="empty-post-feed">
        <h1 class="empty-post-feed-heading">Willkommen bei IUnity!</h1>
        <p class="empty-post-feed-message">Ihr Feed ist noch leer. Entdecken Sie Kurse, die Sie interessieren. So bleiben Sie auf dem Laufenden, tauschen sich mit Kommilitonen aus und lernen gemeinsam weiter.</p>
        <button type="button"><a href="explore.html" class="button-primary">Kurse finden</a></button>
      </div>
      `;

      postsFeed.insertAdjacentHTML('afterbegin', message);
    } else {
      renderPostFeed(currentlyRenderedPosts);
    }

  }

  // render post feed for the explore page
  if (document.location.pathname.includes('explore')) {
    const explorePostFeed = posts;
    
    // sort explorePostFeed by date in descending order -> newest first
    currentlyRenderedPosts = explorePostFeed.sort((a, b) => { 
      return new Date(b.postDate) - new Date(a.postDate);
    });

    renderPostFeed(currentlyRenderedPosts);
  }

  // render post feed for "my questions" page
  if (document.location.pathname.includes('my-questions')) {
    const myQuestionsPostFeed = posts.filter((post) => {
      return currentUser.posts.find((postID) => postID === post.postID) ? post : null;
    })
    currentlyRenderedPosts = myQuestionsPostFeed.sort((a, b) => { 
      return new Date(b.postDate) - new Date(a.postDate);
    });

    renderPostFeed(currentlyRenderedPosts);    
  }

  // render post feed for "my favorites" page
  if (document.location.pathname.includes('my-favorites')) {
    const favoritesPostFeed = posts.filter((post) => {
      return currentUser.favoritePosts.find((postID) => postID === post.postID) ? post : null;
    })
    currentlyRenderedPosts = favoritesPostFeed.sort((a, b) => { 
      return new Date(b.postDate) - new Date(a.postDate);
    });

    renderPostFeed(currentlyRenderedPosts);   
  }


})

// listen for post interactions
postsFeed.addEventListener('click', (e) => {
  // check if click target is a checkbox input element
  if(e.target.matches('.answer-option-input') && e.target.type === "checkbox") {
    const answerOptions = Array.from(e.target.parentElement.parentElement.children);
    const submitButton = e.target.parentElement.parentElement.parentElement.nextElementSibling;
    
    // toggle active selection class
    e.target.parentElement.classList.toggle('answer-option-selected');
    
    // check if any selection was made
    let selectionMade = answerOptions.some((answerOption) => {
      return answerOption.matches('.answer-option-selected');
    })
    
    // if any selection was made then activate the submit button else deactive submit button
    selectionMade ? submitButton.classList.remove('button--inactive') : submitButton.classList.add('button--inactive')
    
  }
  // check if click target is a radio input element
  if(e.target.matches('.answer-option-input') && e.target.type === "radio") {
    const answerOptions = Array.from(e.target.parentElement.parentElement.children);
    const submitButton = e.target.parentElement.parentElement.parentElement.nextElementSibling;
    
    // check if target already selected
    if (e.target.parentElement.matches('.answer-option-selected')) {
      return
    }
    // if not selected do this
    else {
      // toggle selection class on the other option
      answerOptions.forEach((option) => {
        option.matches('.answer-option-selected') ? option.classList.toggle('answer-option-selected') : null;
      })
      // toggle selection class for current selection target
      e.target.parentElement.classList.toggle('answer-option-selected');
    }
    
    // check if any selection was made
    let selectionMade = answerOptions.some((answerOption) => {
      return answerOption.matches('.answer-option-selected');
    })
    
    // if any selection was made then activate the submit button else deactive submit button
    selectionMade ? submitButton.classList.remove('button--inactive') : submitButton.classList.add('button--inactive')    
  }

})

// listen for input and change input element's height based on content
postsFeed.addEventListener('input', (e) => {
  // get input border height
  let inputBorder = e.target.offsetHeight - e.target.clientHeight;

  // set element's height to auto when input shrinks
  e.target.style.height = "auto";

  // set element's height when input grows
  e.target.style.height = e.target.scrollHeight + inputBorder + "px";
})

// listen for submit events
postsFeed.addEventListener('submit', (e) => {
  // stop the default submit event, data is not send to a server
  e.preventDefault();

  // collect user input
  const formData = new FormData(e.target);
  const entries = Object.fromEntries(formData.entries());

  
  // when user submits his answer selection trigger this function
  if(e.submitter.matches('.submit-answer-button')) {    
    const postCardContent = e.target.parentElement;
    const submitButton = e.target.nextElementSibling;
    // hide the submit button
    submitButton.classList.add('hidden');
    
    // const postID = e.target.parentElement.parentElement.parentElement.id;
    const postID = e.submitter.attributes['data-post-id'].value;
    const answerOptions = Array.from(e.target.children[1].children);
    
    // find the post that was submitted for evaluation
    const correspondingPost = posts.find((post) => {
      
      return post.postID === postID;
    })
    
  
    // evaluate user input and return feedback message and color
    const userFeedback = evaluateUserAnswers(correspondingPost, correspondingPost.questionType, entries, answerOptions);
    
    // set answer feedback content
    let result = `
    <div class="solution-container">
      <div class="answer-feedback">
        <div class="answer-feedback-result ${userFeedback.color()}">${userFeedback.message()}</div>                
        <button class="show-solution-button button-ghost" onclick="showExplanation(event)">Erklärung anzeigen<i class="material-icons">keyboard_arrow_down</i></button>
      </div>
      <div class="solution-content hidden">${correspondingPost.explanation}</div>
    </div>
    `;
    // render answer feedback container
    postCardContent.insertAdjacentHTML("beforeend", result);
  }

  // if user submits a new comment execute this
  if(e.submitter.matches('.submit-user-comment')) {
    const userCommentContent = entries.commentInput;
    const submitButton = e.target.lastElementChild;
    const submittedPostID = submitButton.attributes['data-post-id'].value;
    const correspondingPost = posts.find((post) => {
      return post.postID === submittedPostID;
    })
    const commentSectionContent = e.target.parentElement.previousElementSibling;

    // reset form inputs after submit
    e.target.reset();
    const inputField = e.target.firstElementChild;
    inputField.style.height = "36px";
    
    // create a new user comment{object} 
    let newUserComment = 
    {
        username: currentUser.username, 
        userPicture: currentUser.userPicture,
        postDate: new Date(),
        content: `${userCommentContent}`
      } ;
    
    // add the new comment to the corresponding post  
    correspondingPost.comments.push(newUserComment);
    sessionStorage.setItem('posts', JSON.stringify(posts));
    
    // create a new user-comment component
    let userCommentOutput = 
      `
      <div class="user-comment">
        <div class="user-profile-picture" style="background-color: ${newUserComment.userPicture};">${newUserComment.username.charAt(0)}</div>
        <div class="user-comment-info">
          <div class="flex-container align-center gap-0">
            <h4 class="comment-username">${newUserComment.username}</h4>
            <span>&#128900;</span>
            <span class="comment-post-date">${timeSince(newUserComment.postDate)}</span>
          </div>
          <button class="comment-menu button-icon"><i class="material-icons">more_vert</i></button>
        </div>
        <p class="user-comment-content">${newUserComment.content}</p>
      </div>
      `;
    
    // check if corresponding post has no comments yet then remove the message if true
    if(commentSectionContent.firstElementChild.matches('.empty-comment-section-content')) {
      commentSectionContent.firstElementChild.remove();
    }
    // render the new comment
    commentSectionContent.insertAdjacentHTML('beforeend', userCommentOutput);
    
  }
  
})

// listen for click events
document.body.addEventListener('click', (event) => {
  // if user clicks on the sort button run this code
  if(event.target.matches('.sort-button')) {
    const popover = event.target.nextElementSibling;
    const popoverContent = event.target.parentElement.lastElementChild;

    // toggle focused class for the sort button
    event.target.classList.toggle('sort-button-focused');
    // change z-index of the sort button
    event.target.classList.toggle('z-index-200');
    // hide or show popover & popover-content
    popover.classList.toggle('hidden');
    popoverContent.classList.toggle('hidden');

    // check if scrolling is enabled and switch between on and off
    scrollingEnabled ? disableScroll() : enableScroll();
    // set scrolling state to true or false
    scrollingEnabled = !scrollingEnabled;
  }
  
  if(event.target.matches('.popover')) {
    const popoverContent = event.target.nextElementSibling;
    
    // change z-index of the sort button
    event.target.previousElementSibling.classList.toggle('z-index-200');
    // remove focused class
    event.target.previousElementSibling.classList.toggle('sort-button-focused');
    // hide popover & popover-content
    event.target.classList.toggle('hidden');
    popoverContent.classList.toggle('hidden');

    // enable scrolling
    enableScroll();
    // set scrolling state to true
    scrollingEnabled = true;
  }
})

// listen for submit event and sort post feed based on user selection
document.body.addEventListener('submit', (event) => {
  if (event.target.matches('.sort-feed-form')) {
    // stop default submit event
    event.preventDefault();

    const popover = event.target.parentElement.previousElementSibling;
    const popoverContent = event.target.parentElement;
    const sortButton = event.target.parentElement.previousElementSibling.previousElementSibling;

    // collect user input
    const formData = new FormData(event.target);
    const entries = Object.fromEntries(formData.entries());
    const sortBy = entries.sortBy;
    const sortOrder = entries.sortOrder;

    // check if user selected descending or ascending order
    const descendingOrder = sortOrder === "descending" ? true : false;
    
    // create a new array from posts with new sort order
    let sortedFeed;

    // sort posts based on user selection
    switch (sortBy) {
      case "date":
        // check order type and sort by order type
        descendingOrder ? 
        sortedFeed = currentlyRenderedPosts.toSorted((a, b) => {
          return new Date(b.postDate) - new Date(a.postDate);
        }) 
        : sortedFeed = currentlyRenderedPosts.toSorted((a, b) => {
          return new Date(a.postDate) - new Date(b.postDate);
        });
        
        break;
        case "likes":
          
          descendingOrder ? 
          sortedFeed = currentlyRenderedPosts.toSorted((a, b) => {
            return b.likes - a.likes;
          }) 
          : sortedFeed = currentlyRenderedPosts.toSorted((a, b) => {
            return a.likes - b.likes;
          });
          
          break;
          case "comments":
            
            descendingOrder ? 
            sortedFeed = currentlyRenderedPosts.toSorted((a, b) => {
              return b.comments.length - a.comments.length;
            }) 
            : sortedFeed = currentlyRenderedPosts.toSorted((a, b) => {
              return a.comments.length - b.comments.length;
            });

        break;
    }
    
    // delete previous post feed    
    postsFeed.innerHTML = "";
    // render new post feed
    renderPostFeed(sortedFeed);

    // enable scrolling
    enableScroll();

    // set scrolling state to true
    scrollingEnabled = true;

    // change z-index of the sort button to initial
    sortButton.classList.toggle('z-index-200');
    // remove focused classed
    sortButton.classList.toggle('sort-button-focused');
    // hide popover & popover-content
    popover.classList.toggle('hidden');
    popoverContent.classList.toggle('hidden');
  }
})

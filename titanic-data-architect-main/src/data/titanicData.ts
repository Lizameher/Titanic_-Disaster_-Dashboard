
// Partial sample of the Titanic dataset for visualization purposes
export interface TitanicPassenger {
  id: number;
  survived: boolean;
  pclass: number;
  name: string;
  sex: string;
  age: number | null;
  sibSp: number;
  parch: number;
  ticket: string;
  fare: number;
  cabin: string | null;
  embarked: string | null;
}

export const titanicData: TitanicPassenger[] = [
  {
    id: 1,
    survived: false,
    pclass: 3,
    name: "Braund, Mr. Owen Harris",
    sex: "male",
    age: 22,
    sibSp: 1,
    parch: 0,
    ticket: "A/5 21171",
    fare: 7.25,
    cabin: null,
    embarked: "S"
  },
  {
    id: 2,
    survived: true,
    pclass: 1,
    name: "Cumings, Mrs. John Bradley (Florence Briggs Thayer)",
    sex: "female",
    age: 38,
    sibSp: 1,
    parch: 0,
    ticket: "PC 17599",
    fare: 71.2833,
    cabin: "C85",
    embarked: "C"
  },
  {
    id: 3,
    survived: true,
    pclass: 3,
    name: "Heikkinen, Miss. Laina",
    sex: "female",
    age: 26,
    sibSp: 0,
    parch: 0,
    ticket: "STON/O2. 3101282",
    fare: 7.925,
    cabin: null,
    embarked: "S"
  },
  {
    id: 4,
    survived: true,
    pclass: 1,
    name: "Futrelle, Mrs. Jacques Heath (Lily May Peel)",
    sex: "female",
    age: 35,
    sibSp: 1,
    parch: 0,
    ticket: "113803",
    fare: 53.1,
    cabin: "C123",
    embarked: "S"
  },
  {
    id: 5,
    survived: false,
    pclass: 3,
    name: "Allen, Mr. William Henry",
    sex: "male",
    age: 35,
    sibSp: 0,
    parch: 0,
    ticket: "373450",
    fare: 8.05,
    cabin: null,
    embarked: "S"
  },
  {
    id: 6,
    survived: false,
    pclass: 3,
    name: "Moran, Mr. James",
    sex: "male",
    age: null,
    sibSp: 0,
    parch: 0,
    ticket: "330877",
    fare: 8.4583,
    cabin: null,
    embarked: "Q"
  },
  {
    id: 7,
    survived: false,
    pclass: 1,
    name: "McCarthy, Mr. Timothy J",
    sex: "male",
    age: 54,
    sibSp: 0,
    parch: 0,
    ticket: "17463",
    fare: 51.8625,
    cabin: "E46",
    embarked: "S"
  },
  {
    id: 8,
    survived: false,
    pclass: 3,
    name: "Palsson, Master. Gosta Leonard",
    sex: "male",
    age: 2,
    sibSp: 3,
    parch: 1,
    ticket: "349909",
    fare: 21.075,
    cabin: null,
    embarked: "S"
  },
  {
    id: 9,
    survived: true,
    pclass: 3,
    name: "Johnson, Mrs. Oscar W (Elisabeth Vilhelmina Berg)",
    sex: "female",
    age: 27,
    sibSp: 0,
    parch: 2,
    ticket: "347742",
    fare: 11.1333,
    cabin: null,
    embarked: "S"
  },
  {
    id: 10,
    survived: true,
    pclass: 2,
    name: "Nasser, Mrs. Nicholas (Adele Achem)",
    sex: "female",
    age: 14,
    sibSp: 1,
    parch: 0,
    ticket: "237736",
    fare: 30.0708,
    cabin: null,
    embarked: "C"
  },
  {
    id: 11,
    survived: true,
    pclass: 3,
    name: "Sandstrom, Miss. Marguerite Rut",
    sex: "female",
    age: 4,
    sibSp: 1,
    parch: 1,
    ticket: "PP 9549",
    fare: 16.7,
    cabin: "G6",
    embarked: "S"
  },
  {
    id: 12,
    survived: true,
    pclass: 1,
    name: "Bonnell, Miss. Elizabeth",
    sex: "female",
    age: 58,
    sibSp: 0,
    parch: 0,
    ticket: "113783",
    fare: 26.55,
    cabin: "C103",
    embarked: "S"
  },
  {
    id: 13,
    survived: false,
    pclass: 3,
    name: "Saundercock, Mr. William Henry",
    sex: "male",
    age: 20,
    sibSp: 0,
    parch: 0,
    ticket: "A/5. 2151",
    fare: 8.05,
    cabin: null,
    embarked: "S"
  },
  {
    id: 14,
    survived: false,
    pclass: 3,
    name: "Andersson, Mr. Anders Johan",
    sex: "male",
    age: 39,
    sibSp: 1,
    parch: 5,
    ticket: "347082",
    fare: 31.275,
    cabin: null,
    embarked: "S"
  },
  {
    id: 15,
    survived: false,
    pclass: 3,
    name: "Vestrom, Miss. Hulda Amanda Adolfina",
    sex: "female",
    age: 14,
    sibSp: 0,
    parch: 0,
    ticket: "350406",
    fare: 7.8542,
    cabin: null,
    embarked: "S"
  },
  {
    id: 16,
    survived: true,
    pclass: 2,
    name: "Hewlett, Mrs. (Mary D Kingcome)",
    sex: "female",
    age: 55,
    sibSp: 0,
    parch: 0,
    ticket: "248706",
    fare: 16,
    cabin: null,
    embarked: "S"
  },
  {
    id: 17,
    survived: false,
    pclass: 3,
    name: "Rice, Master. Eugene",
    sex: "male",
    age: 2,
    sibSp: 4,
    parch: 1,
    ticket: "382652",
    fare: 29.125,
    cabin: null,
    embarked: "Q"
  },
  {
    id: 18,
    survived: true,
    pclass: 2,
    name: "Williams, Mr. Charles Eugene",
    sex: "male",
    age: null,
    sibSp: 0,
    parch: 0,
    ticket: "244373",
    fare: 13,
    cabin: null,
    embarked: "S"
  },
  {
    id: 19,
    survived: false,
    pclass: 3,
    name: "Vander Planke, Mrs. Julius (Emelia Maria Vandemoortele)",
    sex: "female",
    age: 31,
    sibSp: 1,
    parch: 0,
    ticket: "345763",
    fare: 18,
    cabin: null,
    embarked: "S"
  },
  {
    id: 20,
    survived: true,
    pclass: 3,
    name: "Masselmani, Mrs. Fatima",
    sex: "female",
    age: null,
    sibSp: 0,
    parch: 0,
    ticket: "2649",
    fare: 7.225,
    cabin: null,
    embarked: "C"
  },
  // More data would be here in a real implementation
];

// Calculate statistics from the dataset
export const calculateStatistics = () => {
  const totalPassengers = titanicData.length;
  const survivors = titanicData.filter(p => p.survived).length;
  const survivalRate = (survivors / totalPassengers * 100).toFixed(1);
  
  const males = titanicData.filter(p => p.sex === "male").length;
  const females = titanicData.filter(p => p.sex === "female").length;
  
  const maleSurvivors = titanicData.filter(p => p.sex === "male" && p.survived).length;
  const femaleSurvivors = titanicData.filter(p => p.sex === "female" && p.survived).length;
  
  const maleSurvivalRate = (maleSurvivors / males * 100).toFixed(1);
  const femaleSurvivalRate = (femaleSurvivors / females * 100).toFixed(1);
  
  const class1 = titanicData.filter(p => p.pclass === 1).length;
  const class2 = titanicData.filter(p => p.pclass === 2).length;
  const class3 = titanicData.filter(p => p.pclass === 3).length;
  
  const class1Survivors = titanicData.filter(p => p.pclass === 1 && p.survived).length;
  const class2Survivors = titanicData.filter(p => p.pclass === 2 && p.survived).length;
  const class3Survivors = titanicData.filter(p => p.pclass === 3 && p.survived).length;
  
  const class1SurvivalRate = (class1Survivors / class1 * 100).toFixed(1);
  const class2SurvivalRate = (class2Survivors / class2 * 100).toFixed(1);
  const class3SurvivalRate = (class3Survivors / class3 * 100).toFixed(1);
  
  return {
    totalPassengers,
    survivors,
    survivalRate,
    males,
    females,
    maleSurvivors,
    femaleSurvivors,
    maleSurvivalRate,
    femaleSurvivalRate,
    class1,
    class2,
    class3,
    class1Survivors,
    class2Survivors,
    class3Survivors,
    class1SurvivalRate,
    class2SurvivalRate,
    class3SurvivalRate
  };
};

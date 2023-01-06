export type LoginType = {
  email: string;
  languageID: string;
};

export type CodeType = {
  email: string;
  code: string;
  languageID: string;
}

export type FormValues = {
  email: string;
};

export type FormMultipleValues = {
  firstNum: string;
  secondNum: string;
  thirdNum: string;
  fourthNum: string;
  fifthNum: string;
  sixthNum: string;
};

export type InitialState = {
  loading: boolean;
  email: string;
  status: string;
  token: string | null;
  refreshToken: string | null;
  error: string;
};


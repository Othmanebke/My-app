export type FieldErrors = {
  name?: string;
  email?: string;
  password?: string;
};

export type AuthActionState = {
  errors?: FieldErrors;
  message?: string;
};

export type SessionPayload = {
  email: string;
  name?: string;
};

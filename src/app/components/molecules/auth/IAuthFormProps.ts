import { TAuthMode } from "@components/organisms/AuthForm/AuthForm";

export interface IAuthFormProps {
  toggleAuthMode: (mode: TAuthMode) => void;
}

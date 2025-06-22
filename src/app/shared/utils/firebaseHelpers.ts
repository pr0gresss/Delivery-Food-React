import { IUser } from "@interfaces";
import { User } from "firebase/auth";

export const mapFirebaseUserToUser = (user: User): IUser => ({
  email: user.email,
  displayName: user.displayName,
  photoURL: user.photoURL,
  id: user.uid,
});

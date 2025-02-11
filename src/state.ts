import { atom, selector } from "recoil";
import { getUserInfo } from "zmp-sdk";
import { getPhoneNumber } from "zmp-sdk";

export const userState = selector({
  key: "user",
  get: () =>
    getUserInfo({
      avatarType: "normal",
    }),
});
export const phoneNumberState = selector({
  key: 'phoneNumberState',
  get: () =>
    getPhoneNumber({
    }),
});

export const displayNameState = atom({
  key: "displayName",
  default: "",
});

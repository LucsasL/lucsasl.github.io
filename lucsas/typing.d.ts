import { type StaticImageData, type Ref } from "next/image";
import { type Dispatch, type SetStateAction, type RefObject } from "react";

// General Types
interface ImportedImage {
  value: StaticImageData | string;
}

interface RefNodes {
  ref: Ref | HTMLElement | undefined;
}

// Header Types
export interface StateShape {
  headerBg: string;
  setHeaderBg: Dispatch<SetStateAction<string>>;
  darkTheme: boolean;
  setDarkTheme: Dispatch<SetStateAction<boolean>>;
  headerCont: RefObject<ReactNode | HTMLDivElement>;
  headerColor: string;
  headerBorder: string;
  headerBlur: string;
}


// Skills Types
export interface TechShape {
  type: string;
  activeTech: boolean;
  activeTechPort: ;
  techStackPort;
  dispatch;
  dispatchPort;
  infoIntersect;
  skillSectBox;
  changeVisibility;
  menuDiv;
  menuAppear;
  setMenuAppear;
  techFeature;
  featureOpacity;
  setFeatureOpacity: SetStateAction<string>;
}
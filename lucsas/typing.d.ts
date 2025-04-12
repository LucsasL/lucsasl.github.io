import { type StaticImageData, type Ref } from "next/image";
import { type Dispatch, type SetStateAction, type RefObject } from "react";

// General Types
interface ImportedImage {
  value: StaticImageData | string;
  src: string;
  height: number;
  width: number;
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
  activeTechPort: never;
  techStackPort: never;
  dispatch: never;
  dispatchPort: never;
  infoIntersect: never;
  skillSectBox: never;
  changeVisibility: never;
  menuDiv: never;
  menuAppear: never;
  setMenuAppear: never;
  techFeature: never;
  featureOpacity: never;
  setFeatureOpacity: SetStateAction<string>;
}

interface Link {
  protocol: string;
  domain: string;
  subDomain: string;
}

export interface ProjShape {
  projLink: Link;
  projTitle: string;
  projSubtitle: string;
  projDesc: string;
  projImgDesc: ImportedImage;
  techStack: string[];
  techStackImg: ImportedImage[];
  projImg: ImportedImage;
}

// Music Button Type
interface MusicButtonShape {
  width: number;
  height: number;
  scale: GSAPCallback;
  strokeStyle: string;
  lineWidth: number;
  lineCap: string;
  lineJoin: string;
  clearRect: GSAPCallback;
  beginPath: GSAPCallback;
  lineTo: GSAPCallback;
  stroke: GSAPCallback;
}
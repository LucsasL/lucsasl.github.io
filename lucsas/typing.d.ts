import { type StaticImageData, type Ref } from "next/image";
import {
  type Dispatch,
  type SetStateAction,
  type RefObject,
  ActionDispatch,
  type ReactNode,
} from "react";

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
  menuShown: boolean;
  setMenuShown: Dispatch<SetStateAction<boolean>>;
}

// Tech Shape
export interface TechActiveProps {
  type: string;
  activeTech?: activeTech;
  dispatch: ActionDispatch;
  infoIntersect: boolean;
  menuDiv: RefObject<HTMLDivElement | null>;
  menuAppear;
  setMenuAppear: (appear: boolean) => void;
  changeVisibility: (
    pos: string | number,
    state: boolean,
    time?: number | undefined
  ) => { opacity: number; transition: string; transform?: string | undefined };
  setFeatureOpacity: (feature: number[]) => void;
  basicSettings: {
    bg: string;
    color: string;
    font: string;
  };
  header: {
    headerSize?: string;
    headerSizeMob?: string;
    headerPadding: string;
    headerMargin: string;
    headerBoxShadow: string;
  };

  text: {
    textWidth?: string;
    textWidthMob?: string;
    textMargin?: string;
    textSize: string;
    textLine: string;
  };

  links: {
    aDecoration: string;
    aWidth?: string;
    aWidthMob?: string;
    aDisplay: string;
    aBg: string;
    aColor: string;
    aPadding: string;
    aBorderRadius: string;
  };

  content: {
    title: string;
    text: string;
    textLink: string;
    link: string;
    dateTime: {
      display: string;
      width: string;
      padding: string;
      textAlign: string;
    };
  };
}

type TechAction =
  | { type: "change_tech_HTML"; payload: TechActiveProps }
  | { type: "change_tech_CSS"; payload: TechActiveProps }
  | { type: "change_tech_JavaScript"; payload: TechActiveProps }
  | { type: "change_tech_TypeScript"; payload: TechActiveProps }
  | { type: "change_tech_React"; payload: TechActiveProps }
  | { type: "change_tech_Next"; payload: TechActiveProps }
  | { type: "change_tech_SASS"; payload: TechActiveProps }
  | { type: "change_tech_GSAP"; payload: TechActiveProps }
  | { type: "change_tech_Jest"; payload: TechActiveProps }
  | { type: "change_tech_Redux"; payload: TechActiveProps }
  | { type: "change_tech_Python"; payload: TechActiveProps }
  | { type: "change_tech_Git"; payload: TechActiveProps };

// Seasons Change
interface StationsShape {
  Spring: string;
  Summer: string;
  Fall: string;
  Winter: string;
}

export interface TechShape {
  activeTech: TechActiveProps;
  dispatch: ActionDispatch<SetStateAction<TechActiveProps>>;
  infoIntersect: boolean;
  skillSectBox: RefObject<HTMLElement | null>;
  changeVisibility: (i: string, j: boolean, k: number) => laptopAnimationShape;
  menuDiv: Element | ReactNode;
  menuAppear: boolean;
  setMenuAppear: (isIntersecting: boolean) => void;
  techFeature: string[];
  featureOpacity: number[];
  setFeatureOpacity: (opacityArray: number[]) => void;
}

export interface TechShapePort {
  type: string;
  activeTechPort: TechActiveProps;
  techStackPort: never;
  dispatchPort: ActionDispatch<SetStateAction<TechActiveProps>>;
  infoIntersect: boolean;
  skillSectBox: RefObject<HTMLElement | null>;
  changeVisibility: (i: string, j: boolean, k: number) => laptopAnimationShape;
  menuDiv: Element | ReactNode;
  menuAppear: boolean;
  setMenuAppear: (isIntersecting: boolean) => void;
  techFeature: string[];
  featureOpacity: number[];
  setFeatureOpacity: (opacityArray: number[]) => void;
}

// Laptop Intersection Animation
export interface laptopAnimationShape {
  opacity: number;
  transition: string;
  transform?: string;
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
export interface MusicButtonShape extends HTMLCanvasElement {
  mButtContext?: string;
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

export interface MusicButtonPlaceholder {
  width: number;
  height: number;
  midY: number;
  points: number;
  stretch: number;
  sinHeight: number;
  speed: number;
  strokeColor: string;
  strokeWidth: number;
  power: boolean;
}

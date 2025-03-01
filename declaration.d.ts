declare module "*.png";
declare module "*.svg";
declare module "*.jpeg";
declare module "*.jpg";

declare namespace astroHTML.JSX {
  interface ImgHTMLAttributes extends HTMLAttributes {
    fetchpriority?: "auto" | "low" | "high" | null | undefined;
  }
}

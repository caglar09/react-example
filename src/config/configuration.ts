// import dotenv from "dotenv";
import type { ConfigurationTypes, BASE_URL_TYPE, PagePropTypes } from "./type";

const { REACT_APP_BASE_URL, REACT_APP_PAGE_INDEX, REACT_APP_PAGE_COUNT } =
  process.env;

const BASE_URL: BASE_URL_TYPE = REACT_APP_BASE_URL as string;
const PageProps: PagePropTypes = {
  _start: Number(REACT_APP_PAGE_INDEX),
  limit: Number(REACT_APP_PAGE_COUNT),
};

const ENV: ConfigurationTypes = {};

export { BASE_URL, ENV, PageProps };

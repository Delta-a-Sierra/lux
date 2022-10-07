import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "./tailwind.config-duplicate";

const fullConfig = resolveConfig(tailwindConfig);
const colors = fullConfig.theme.colors;
export default colors;

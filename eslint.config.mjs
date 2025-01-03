import { dirname } from "path";
import { fileURLToPath } from "url";

// __filename and __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
   extends: "next/core-web-vitals",
};

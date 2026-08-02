import fs from "fs";
import path from "path";

const dirs = [
  "public/images/projects",
];

dirs.forEach((dir) => {
  fs.mkdirSync(dir, { recursive: true });
});

// Create a dummy resume.pdf
if (!fs.existsSync("public/resume.pdf")) {
  fs.writeFileSync("public/resume.pdf", "%PDF-1.4 Resume Placeholder");
}

// Create dummy favicon.ico
if (!fs.existsSync("public/favicon.ico")) {
  fs.writeFileSync("public/favicon.ico", "FAVICON");
}

// Create dummy og-image.jpg
if (!fs.existsSync("public/og-image.jpg")) {
  fs.writeFileSync("public/og-image.jpg", "OG IMAGE");
}

console.log("Placeholder structure created successfully.");

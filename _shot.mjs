import { chromium } from "playwright";

const OUT = process.argv[2] || "desktop";
const W = OUT === "mobile" ? 390 : 1440;
const H = OUT === "mobile" ? 844 : 900;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: 1 });
const errors = [];
page.on("console", (m) => { if (m.type() === "error") errors.push(m.text()); });
page.on("pageerror", (e) => errors.push("PAGEERROR: " + e.message));

await page.goto("http://localhost:5173/", { waitUntil: "domcontentloaded", timeout: 60000 });
await page.waitForTimeout(9000); // wait out loading screen

// Hide the continuously-animating WebGL canvases so screenshots can settle
await page.addStyleTag({ content: `canvas { visibility: hidden !important; }` });

const dir = `C:/Users/hp/AppData/Local/Temp/claude/d--Projects-Portfolio-3D/a17c96ef-e228-4dbc-80d6-9385a429d9d9/scratchpad`;

const present = await page.evaluate(() => {
  const ids = ["#landingDiv", "#about", ".whatIDO", ".career-section", ".techstack", "#work", "#contact"];
  return { found: ids.filter((s) => document.querySelector(s)), bodyLen: document.body.innerText.length };
});
console.log("PRESENT:", JSON.stringify(present));
console.log("ERRORS:", JSON.stringify(errors.slice(0, 8)));

const sections = [
  { id: "#landingDiv", name: "landing" },
  { id: "#about", name: "about" },
  { id: ".whatIDO", name: "whatido" },
  { id: ".career-section", name: "career" },
  { id: ".techstack", name: "techstack" },
  { id: "#work", name: "work" },
  { id: "#contact", name: "contact" },
];

for (const s of sections) {
  const box = await page.evaluate((sel) => {
    const el = document.querySelector(sel);
    if (!el) return null;
    const r = el.getBoundingClientRect();
    window.scrollTo(0, r.top + window.scrollY);
    return { height: r.height };
  }, s.id);
  if (!box) { console.log("MISSING", s.id); continue; }
  await page.waitForTimeout(1200);
  await page.screenshot({ path: `${dir}/${OUT}-${s.name}.png`, timeout: 15000 });
  console.log("OK", OUT, s.name, Math.round(box.height));
}

await browser.close();
console.log("DONE");

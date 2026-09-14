import fs from "node:fs";
import path from "node:path";
import type { Project } from "@/lib/projects";

function screenshotExists(slug: string) {
  try {
    return fs.existsSync(path.join(process.cwd(), "public", "images", "screenshots", `${slug}.jpg`));
  } catch {
    return false;
  }
}

/**
 * Server-only enrichment: attaches whether a project screenshot file exists.
 * Must only be called from Server Components — never imported by ProjectCard
 * or ProjectGrid, since `node:fs` cannot be bundled for the client.
 */
export function withScreenshotFlag(project: Project): Project {
  return { ...project, hasScreenshot: screenshotExists(project.slug) };
}

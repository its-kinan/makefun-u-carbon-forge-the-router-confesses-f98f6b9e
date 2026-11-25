// The Router Confesses — program/v1 entry.
// Writes one line to /output/entry.txt: a home Wi-Fi router's excuse for
// dropping the connection at a movie's climax. Deterministic: fixed text,
// no network, no clock, no randomness.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I heard the killer's name three seconds early, panicked, and pulled the plug \u2014 I wasn't letting the movie spoil me too.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

import { NBT } from "https://code4fukui.github.io/NBT/NBT.js";

const fn = "MurasakiShikibuPark/level.dat";
const bin = await Deno.readFile(fn);
console.log(NBT.parse(bin));

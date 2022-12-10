import { NBT } from "./NBT.js";

const fn = "MurasakiShikibuPark/level.dat";
const bin = await Deno.readFile(fn);
console.log(NBT.parse(bin));

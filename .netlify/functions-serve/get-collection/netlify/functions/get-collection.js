var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// netlify/functions/get-collection.js
var get_collection_exports = {};
__export(get_collection_exports, {
  handler: () => handler
});
module.exports = __toCommonJS(get_collection_exports);
var handler = async (event, context) => {
  try {
    const params = event.queryStringParameters;
    const apiKey = process.env.VITE_API_KEY;
    const response = await fetch(`https://www.rijksmuseum.nl/api/en/collection?key=${apiKey}&ps=${params.ps}`);
    const result = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(result)
    };
  } catch (error) {
    console.error("Erreur:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed fetching data" })
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
//# sourceMappingURL=get-collection.js.map

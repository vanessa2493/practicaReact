import { usersApi } from "../api";

const mapToArray = (object: any) => {
  const array = [];

  for (const elem in object) {
    array.push({
      ...object[elem],
      idDB: elem,
    });
  }

  return array;
};

// Slugify Function //

function string_to_slug(str: string) {
  str = str.replace(/^\s+|\s+$/g, ""); // trim
  str = str.toLowerCase();

  // remove accents, swap ñ for n, etc
  var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
  var to = "aaaaeeeeiiiioooouuuunc------";
  for (var i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
  }

  str = str
    .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
    .replace(/\s+/g, "-") // collapse whitespace and replace by -
    .replace(/-+/g, "-"); // collapse dashes

  return str;
}

const generateUserToken = async (id: string) => {
  const newToken = Math.random().toString(36).substr(2);
  const response = await usersApi.patch(id, {
    sessionToken: newToken,
  });
  return response ? newToken : null;
};

export { mapToArray, string_to_slug, generateUserToken };

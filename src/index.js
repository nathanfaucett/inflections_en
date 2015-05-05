var inflector = require("inflections")("en");


inflector.clear();

inflector.plural(/$/, "s");
inflector.plural(/([sxz]|[cs]h)$/i, "$1es");
inflector.plural(/([^aeiouy]o)$/i, "$1es");
inflector.plural(/([^aeiouy])y$/i, "$1ies");

inflector.singular(/s$/i, "");
inflector.singular(/(ss)$/i, "$1");
inflector.singular(/([sxz]|[cs]h)es$/, "$1");
inflector.singular(/([^aeiouy]o)es$/, "$1");
inflector.singular(/([^aeiouy])ies$/i, "$1y");

inflector.irregular("child", "children");
inflector.irregular("person", "people");
inflector.irregular("self", "selves");
inflector.irregular("man", "men");
inflector.irregular("woman", "women");

inflector.uncountable("equipment", "information", "rice", "money", "species", "series", "fish", "sheep", "jeans", "police");

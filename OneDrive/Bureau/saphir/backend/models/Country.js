const db = require('../app').db;

const Country = `
CREATE TABLE \`country\` (
  \`country_id\` int(50) NOT NULL,
  \`name\` varchar(100) NOT NULL,
  \`iso_abbreviation\` varchar(20) NOT NULL,
  \`country_code\` varchar(20) NOT NULL,
  \`polygon_id\` int(50) NOT NULL,
  PRIMARY KEY (\`country_id\`),
  KEY \`polygon_id\` (\`polygon_id\`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
`;

module.exports = Country;
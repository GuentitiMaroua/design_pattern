const db = require('../app').db;

const Agency = `
CREATE TABLE \`agency\` (
  \`agency_id\` int(50) NOT NULL,
  \`name\` varchar(255) NOT NULL,
  \`commercial_name\` varchar(255) NOT NULL,
  \`division_id\` int(50) NOT NULL,
  \`address_id\` int(50) NOT NULL,
  \`coordinates_id\` int(50) NOT NULL,
  PRIMARY KEY (\`agency_id\`),
  KEY \`division_id\` (\`division_id\`),
  KEY \`address_id\` (\`address_id\`),
  KEY \`coordinates_id\` (\`coordinates_id\`),
  CONSTRAINT \`address_id\` FOREIGN KEY (\`address_id\`) REFERENCES \`address\` (\`address_id\`),
  CONSTRAINT \`coordinates_id\` FOREIGN KEY (\`coordinates_id\`) REFERENCES \`coordinates\` (\`coordinates_id\`),
  CONSTRAINT \`division_id\` FOREIGN KEY (\`division_id\`) REFERENCES \`division\` (\`division_id\`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
`;

module.exports = Agency;
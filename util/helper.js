const validate = require('jsonschema').validate;

function getValidationErrors(json, schema) {
    const result = validate(json, require(schema));
    return result.errors;
}

module.exports = getValidationErrors;

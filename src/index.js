const express= require('express');
const app = express();

const validateObjectProperties = (object, properties) =>  {
  const missingProperties = [];
  properties.forEach(property => {
    if (!object[property]) {
      missingProperties.push(property);
    }
  });
  return missingProperties;
};

app.post('/object', (req, res) => {  
  const missingProperties = validateObjectProperties(req.body, ['organizationId', 'objectId', 'name']);
  if (missingProperties.length > 0) {
    res.status(404)
      .send(`Missing properties: ${missingProperties.join(', ')}`);
    return;
  }

  console.log(`
    OrganizationId: ${req.body.organizationId}\n
    ObjectId: ${req.body.objectId}\n
    Name: ${req.body.name}\n`
  );
  res.status(200);
});

exports.app = app;
exports.validateObjectProperties = validateObjectProperties;
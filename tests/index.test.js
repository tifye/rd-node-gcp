const { validateObjectProperties } = require('../index');

describe('Property validation function', () => {
  it('should return an empty array of missing properties', () => {
    const object = {
      organizationId: '123',
      objectId: '456',
      name: 'test'
    };
    const properties = ['organizationId', 'objectId', 'name'];
    const missingProperties = validateObjectProperties(object, properties);
    expect(missingProperties).toEqual([]);
  });

  it('should return organizationId and name as missing properties', () => {
    const object = {
      objectId: 'IE43',
    };
    const properties = ['organizationId', 'objectId', 'name'];
    const missingProperties = validateObjectProperties(object, properties);
    expect(missingProperties).toEqual(['organizationId', 'name']);
  });
});
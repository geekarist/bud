describe('bud', function() {
    it('should load all operations from csv as json object', function() {
        var operations = bud.load('givenOperations.csv');
        expect(operations).toEqual(JSON.parse('expectedOperations.json'));
    });
});
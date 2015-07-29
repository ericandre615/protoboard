describe('protoboard', function() {
    it('should exist', function() {
        expect(protoboard).toBeDefined();
    });
    it('should be an Object', function() {
        expect(typeof protoboard === 'object').toEqual(true);
    }); 
    describe('create', function() {
        it('should be defined', function() {
            expect(protoboard.create).toBeDefined();
        });
        it('should be an own property of protoboard', function() {
            expect(protoboard.hasOwnProperty('create')).toEqual(true);
        });
        it('should have a list of valid component type', function() {
            expect(protoboard.types).toBeDefined();
        });
    });
});

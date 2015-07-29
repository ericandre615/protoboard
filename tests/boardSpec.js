describe('board', function() {
    it('should be defined', function() {
        expect(board).toBeDefined();
    });
    it('should be a a prototype', function() {
        expect(board.prototype).toBeDefined();
    });
    it('should have a create method', function() {
        expect(board.create).toBeDefined();
    });
    describe('board.create', function() {
        it('should be an own property of board', function() {
            expect(board.hasOwnProperty('create')).toEqual(true);
        });
    });
});
